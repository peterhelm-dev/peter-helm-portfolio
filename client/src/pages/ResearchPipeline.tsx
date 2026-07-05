import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Loader2,
  RefreshCw,
  ExternalLink,
  Terminal,
  Globe,
  Database,
  Sparkles,
  Play,
  Trash2,
} from "lucide-react";
import { Link } from "wouter";

// ─── Constants ────────────────────────────────────────────────────────────────

const MODEL = "claude-sonnet-5";

const EXAMPLE_QUERIES = [
  "Latest breakthroughs in AI reasoning and o3-style models",
  "Best practices for CRM lifecycle automation in B2B SaaS",
  "How do webhook integrations compare to polling-based APIs?",
];

// ─── Types ────────────────────────────────────────────────────────────────────

type StepStatus = "idle" | "active" | "done" | "error";

interface StepState {
  status: StepStatus;
  startTime?: number;
  endTime?: number;
  raw?: string;
  error?: string;
}

interface Citation {
  url: string;
  title: string;
}

interface Fact {
  fact: string;
  source: string;
}

interface ExtractedData {
  facts?: Fact[];
  confidence?: "high" | "medium" | "low";
}

interface HistoryMsg {
  role: "user" | "assistant";
  content: string;
}

interface ConvEntry {
  query: string;
  answer: string;
  ts: Date;
}

// Loose Anthropic response types (we only care about content blocks)
interface ContentBlock {
  type: string;
  text?: string;
  citations?: Array<{
    url?: string;
    title?: string;
  }>;
}

interface AnthropicResponse {
  content: ContentBlock[];
  stop_reason?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function extractText(content: ContentBlock[]): string {
  return content
    .filter((b) => b.type === "text" && b.text)
    .map((b) => b.text!)
    .join("");
}

function extractCitations(content: ContentBlock[]): Citation[] {
  const seen = new Set<string>();
  const out: Citation[] = [];
  for (const block of content) {
    if (!Array.isArray(block.citations)) continue;
    for (const c of block.citations) {
      if (c.url && !seen.has(c.url)) {
        seen.add(c.url);
        out.push({ url: c.url, title: c.title || c.url });
      }
    }
  }
  return out;
}

function parseExtracted(text: string): ExtractedData {
  let clean = text.trim();
  const fence = clean.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) clean = fence[1].trim();
  const s = clean.indexOf("{");
  const e = clean.lastIndexOf("}");
  if (s !== -1 && e !== -1) clean = clean.slice(s, e + 1);
  try {
    return JSON.parse(clean) as ExtractedData;
  } catch {
    return { facts: [], confidence: "low" };
  }
}

function formatMs(ms: number): string {
  return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(1)}s`;
}

// ─── API helpers ──────────────────────────────────────────────────────────────

async function callAI(body: Record<string, unknown>): Promise<AnthropicResponse> {
  const res = await fetch("/api/ai/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as AnthropicResponse & { error?: string };
  if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);
  return data;
}

async function streamAI(
  body: Record<string, unknown>,
  onChunk: (text: string) => void
): Promise<void> {
  const res = await fetch("/api/ai/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = (await res.json()) as { error?: string };
    throw new Error(err.error ?? `HTTP ${res.status}`);
  }
  if (!res.body) throw new Error("No response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split("\n");
    buf = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const chunk = line.slice(6).trim();
      if (!chunk || chunk === "[DONE]") continue;
      try {
        const evt = JSON.parse(chunk) as {
          type?: string;
          delta?: { type?: string; text?: string };
        };
        if (
          evt.type === "content_block_delta" &&
          evt.delta?.type === "text_delta" &&
          evt.delta.text
        ) {
          onChunk(evt.delta.text);
        }
      } catch {
        /* non-JSON SSE line — skip */
      }
    }
  }
}

// ─── StepCard sub-component ───────────────────────────────────────────────────

interface StepCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  step: StepState;
  isExpanded: boolean;
  onToggleExpand: () => void;
  result?: React.ReactNode;
  onRetry?: () => void;
}

function StepCard({
  number,
  label,
  icon,
  step,
  isExpanded,
  onToggleExpand,
  result,
  onRetry,
}: StepCardProps) {
  const now = Date.now();
  const elapsed =
    step.status === "idle"
      ? null
      : step.status === "active"
      ? now - (step.startTime ?? now)
      : (step.endTime ?? now) - (step.startTime ?? now);

  const borderColor =
    step.status === "active"
      ? "border-[var(--ip-amber)]"
      : step.status === "done"
      ? "border-[var(--ip-teal)]"
      : step.status === "error"
      ? "border-[var(--ip-rust)]"
      : "border-[var(--ip-border)]";

  const statusLabel: Record<StepStatus, string> = {
    idle: "IDLE",
    active: "RUNNING",
    done: "DONE",
    error: "ERROR",
  };

  const statusColor =
    step.status === "active"
      ? "text-[var(--ip-amber)]"
      : step.status === "done"
      ? "text-[var(--ip-teal)]"
      : step.status === "error"
      ? "text-[var(--ip-rust)]"
      : "text-[var(--ip-muted)]";

  const dotColor =
    step.status === "active"
      ? "bg-[var(--ip-amber)] animate-pulse"
      : step.status === "done"
      ? "bg-[var(--ip-teal)]"
      : step.status === "error"
      ? "bg-[var(--ip-rust)]"
      : "bg-[var(--ip-muted)]";

  return (
    <div
      className={`border rounded-lg p-4 transition-colors duration-200 ${borderColor}`}
      style={{ background: "var(--ip-panel)" }}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 mb-2">
        <span
          className="text-sm shrink-0"
          style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-muted)" }}
        >
          {number}
        </span>
        <span style={{ color: "var(--ip-muted)" }}>{icon}</span>
        <span
          className="text-sm font-semibold flex-1"
          style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-text-bright)" }}
        >
          {label}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          {step.status === "active" && (
            <Loader2 size={13} className="animate-spin text-[var(--ip-amber)]" />
          )}
          <div className={`w-2 h-2 rounded-full ${dotColor}`} />
          <span
            className={`text-xs font-bold ${statusColor}`}
            style={{ fontFamily: "var(--ip-mono)" }}
          >
            {statusLabel[step.status]}
          </span>
        </div>
      </div>

      {/* Timer */}
      {elapsed !== null && (
        <p
          className="text-xs mb-2"
          style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-muted)" }}
        >
          ⏱ {formatMs(elapsed)}
        </p>
      )}

      {/* Result preview */}
      {result && step.status === "done" && <div className="mb-3">{result}</div>}

      {/* Error */}
      {step.status === "error" && step.error && (
        <div
          className="mt-2 mb-3 p-3 rounded border text-sm"
          style={{
            background: "var(--ip-rust-dim)",
            borderColor: "rgba(196,87,58,0.3)",
            color: "var(--ip-rust)",
          }}
        >
          <p className="mb-2">{step.error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-amber)" }}
            >
              <RefreshCw size={11} /> Retry pipeline
            </button>
          )}
        </div>
      )}

      {/* Raw response toggle */}
      {step.raw && (
        <button
          onClick={onToggleExpand}
          className="flex items-center gap-1 text-xs hover:opacity-80 transition-opacity mt-1"
          style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-muted)" }}
        >
          {isExpanded ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
          Raw response
        </button>
      )}
      {isExpanded && step.raw && (
        <pre
          className="mt-2 p-3 rounded text-xs overflow-x-auto max-h-60 overflow-y-auto"
          style={{
            background: "var(--ip-bg)",
            color: "var(--ip-muted)",
            fontFamily: "var(--ip-mono)",
          }}
        >
          {step.raw}
        </pre>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ResearchPipeline() {
  const [query, setQuery] = useState("");
  const [forceError, setForceError] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // Tick drives live elapsed-time re-renders while pipeline is active
  const [, setTick] = useState(0);
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setTick((n) => n + 1), 150);
    return () => clearInterval(id);
  }, [isRunning]);

  // Step states
  const [planStep, setPlanStep] = useState<StepState>({ status: "idle" });
  const [retrieveStep, setRetrieveStep] = useState<StepState>({ status: "idle" });
  const [extractStep, setExtractStep] = useState<StepState>({ status: "idle" });
  const [synthesizeStep, setSynthesizeStep] = useState<StepState>({ status: "idle" });

  // Results
  const [planText, setPlanText] = useState("");
  const [retrieveText, setRetrieveText] = useState("");
  const [citations, setCitations] = useState<Citation[]>([]);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [confidence, setConfidence] = useState<"high" | "medium" | "low" | "">("");
  const [synthesisText, setSynthesisText] = useState("");
  const [conversation, setConversation] = useState<ConvEntry[]>([]);
  const [history, setHistory] = useState<HistoryMsg[]>([]);

  // Accumulate streaming text in a ref to avoid stale closures
  const synthesisRef = useRef("");

  // Prevent double-runs without putting isRunning in useCallback deps
  const isRunningRef = useRef(false);

  const toggleExpanded = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const runPipeline = useCallback(async () => {
    if (!query.trim() || isRunningRef.current) return;

    const q = query.trim();
    isRunningRef.current = true;
    setIsRunning(true);

    // Reset
    const idle: StepState = { status: "idle" };
    setPlanStep(idle);
    setRetrieveStep(idle);
    setExtractStep(idle);
    setSynthesizeStep(idle);
    setPlanText("");
    setRetrieveText("");
    setCitations([]);
    setFacts([]);
    setConfidence("");
    setSynthesisText("");
    synthesisRef.current = "";

    try {
      // ── 01 PLAN ────────────────────────────────────────────────────────────
      const t1 = Date.now();
      setPlanStep({ status: "active", startTime: t1 });
      let planContent = "";
      try {
        const res = await callAI({
          model: MODEL,
          max_tokens: 256,
          messages: [
            {
              role: "user",
              content: `Write exactly one sentence describing a targeted research plan for: "${q}"`,
            },
          ],
        });
        planContent = extractText(res.content);
        setPlanText(planContent);
        setPlanStep({
          status: "done",
          startTime: t1,
          endTime: Date.now(),
          raw: JSON.stringify(res, null, 2),
        });
      } catch (e) {
        setPlanStep({ status: "error", startTime: t1, endTime: Date.now(), error: String(e) });
        return;
      }

      // ── 02 RETRIEVE ────────────────────────────────────────────────────────
      const t2 = Date.now();
      setRetrieveStep({ status: "active", startTime: t2 });
      let retrieveContent = "";
      let retrieveCitations: Citation[] = [];
      try {
        if (forceError)
          throw new Error(
            "Forced retrieval failure — uncheck 'Force failure' and retry"
          );
        const res = await callAI({
          model: MODEL,
          max_tokens: 4096,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [
            {
              role: "user",
              content: `Search the web and summarize the most important current information about: "${q}"`,
            },
          ],
        });
        retrieveContent = extractText(res.content);
        retrieveCitations = extractCitations(res.content);
        setRetrieveText(retrieveContent);
        setCitations(retrieveCitations);
        setRetrieveStep({
          status: "done",
          startTime: t2,
          endTime: Date.now(),
          raw: JSON.stringify(res, null, 2),
        });
      } catch (e) {
        setRetrieveStep({
          status: "error",
          startTime: t2,
          endTime: Date.now(),
          error: String(e),
        });
        return;
      }

      // ── 03 EXTRACT ─────────────────────────────────────────────────────────
      const t3 = Date.now();
      setExtractStep({ status: "active", startTime: t3 });
      let extractedFacts: Fact[] = [];
      let extractedConfidence: "high" | "medium" | "low" = "medium";
      try {
        const res = await callAI({
          model: MODEL,
          max_tokens: 2048,
          system:
            "You extract structured data from research text. Respond with ONLY valid JSON — no markdown fences, no explanation, no preamble.",
          messages: [
            {
              role: "user",
              content: `Extract key facts from this research:\n\n${retrieveContent}\n\nReturn exactly this structure:\n{"facts":[{"fact":"...","source":"..."}],"confidence":"high"|"medium"|"low"}`,
            },
          ],
        });
        const rawText = extractText(res.content);
        const parsed = parseExtracted(rawText);
        extractedFacts = parsed.facts ?? [];
        extractedConfidence =
          (parsed.confidence as "high" | "medium" | "low") ?? "medium";
        setFacts(extractedFacts);
        setConfidence(extractedConfidence);
        setExtractStep({
          status: "done",
          startTime: t3,
          endTime: Date.now(),
          raw: JSON.stringify(res, null, 2),
        });
      } catch (e) {
        setExtractStep({
          status: "error",
          startTime: t3,
          endTime: Date.now(),
          error: String(e),
        });
        // Step 3 failure is non-fatal — continue to synthesize
      }

      // ── 04 SYNTHESIZE (SSE stream) ─────────────────────────────────────────
      const t4 = Date.now();
      setSynthesizeStep({ status: "active", startTime: t4 });
      synthesisRef.current = "";
      setSynthesisText("");
      try {
        const factsContext =
          extractedFacts.length > 0
            ? `Based on these verified facts:\n${extractedFacts
                .map((f) => `• ${f.fact} (${f.source})`)
                .join("\n")}\n\n`
            : `Based on this research:\n${retrieveContent.slice(0, 2000)}\n\n`;

        const messages: HistoryMsg[] = [
          ...history,
          {
            role: "user",
            content: `${factsContext}Provide a 3–4 sentence grounded answer to: "${q}"`,
          },
        ];

        await streamAI({ model: MODEL, max_tokens: 512, messages }, (chunk) => {
          synthesisRef.current += chunk;
          setSynthesisText(synthesisRef.current);
        });

        const finalAnswer = synthesisRef.current;
        setSynthesizeStep({ status: "done", startTime: t4, endTime: Date.now() });

        // Persist in multi-turn history
        setHistory((prev) => [
          ...prev,
          { role: "user", content: q },
          { role: "assistant", content: finalAnswer },
        ]);
        setConversation((prev) => [
          { query: q, answer: finalAnswer, ts: new Date() },
          ...prev,
        ]);
      } catch (e) {
        setSynthesizeStep({
          status: "error",
          startTime: t4,
          endTime: Date.now(),
          error: String(e),
        });
      }
    } finally {
      isRunningRef.current = false;
      setIsRunning(false);
    }
  }, [query, forceError, history]);

  const anyError = [planStep, retrieveStep, extractStep, synthesizeStep].some(
    (s) => s.status === "error"
  );

  const confidenceStyle = {
    high: "var(--ip-teal)",
    medium: "var(--ip-amber)",
    low: "var(--ip-rust)",
    "": "var(--ip-muted)",
  }[confidence];

  return (
    <div
      className="research-pipeline min-h-screen"
      style={{ background: "var(--ip-bg)", color: "var(--ip-text)" }}
    >
      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(24,29,36,0.92)",
          borderColor: "var(--ip-border)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between py-3 max-w-6xl">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: "var(--ip-amber)" }}
          >
            <ArrowLeft size={16} />
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "var(--ip-mono)" }}
            >
              Portfolio
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Terminal size={15} style={{ color: "var(--ip-amber)" }} />
            <span
              className="font-semibold text-sm"
              style={{
                fontFamily: "var(--ip-mono)",
                color: "var(--ip-text-bright)",
              }}
            >
              Research Pipeline
            </span>
          </div>
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--ip-mono)",
              color: isRunning
                ? "var(--ip-amber)"
                : anyError
                ? "var(--ip-rust)"
                : "var(--ip-muted)",
            }}
          >
            {isRunning ? "● RUNNING" : anyError ? "● ERROR" : "● READY"}
          </span>
        </div>
      </nav>

      {/* ── Page header ─────────────────────────────────────────────────────── */}
      <div
        className="border-b py-8 px-6"
        style={{ borderColor: "var(--ip-border)" }}
      >
        <div className="container mx-auto max-w-6xl">
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "var(--ip-mono)",
              color: "var(--ip-text-bright)",
            }}
          >
            AI Research Pipeline
          </h1>
          <p className="text-sm mb-5" style={{ color: "var(--ip-muted)" }}>
            Four real Anthropic API calls — planning, live web retrieval (tool
            use), structured JSON extraction, and streaming synthesis with
            multi-turn memory.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Agentic Orchestration",
              "Tool Calling",
              "Structured Output",
              "Streaming SSE",
              "Multi-turn Memory",
              "Error Handling",
            ].map((cap) => (
              <span
                key={cap}
                className="px-2 py-0.5 text-xs rounded border"
                style={{
                  fontFamily: "var(--ip-mono)",
                  borderColor: "var(--ip-border-strong)",
                  color: "var(--ip-muted)",
                }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Query bar ───────────────────────────────────────────────────────── */}
      <div
        className="border-b py-6 px-6"
        style={{ borderColor: "var(--ip-border)" }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 mb-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && runPipeline()
              }
              placeholder="Enter a research question…"
              disabled={isRunning}
              className="flex-1 px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors disabled:opacity-50"
              style={{
                background: "var(--ip-panel)",
                borderColor: "var(--ip-border-strong)",
                color: "var(--ip-text)",
                fontFamily: "var(--ip-mono)",
              }}
            />
            <button
              onClick={runPipeline}
              disabled={isRunning || !query.trim()}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-opacity disabled:opacity-40 hover:opacity-85"
              style={{
                background: "var(--ip-amber)",
                color: "#12161B",
                fontFamily: "var(--ip-mono)",
              }}
            >
              {isRunning ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <Play size={15} />
              )}
              {isRunning ? "Running…" : "Run"}
            </button>
          </div>

          {/* Example chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            {EXAMPLE_QUERIES.map((q) => (
              <button
                key={q}
                onClick={() => setQuery(q)}
                disabled={isRunning}
                className="px-3 py-1 text-xs rounded border hover:opacity-75 transition-opacity disabled:opacity-40"
                style={{
                  background: "var(--ip-panel)",
                  borderColor: "var(--ip-border)",
                  color: "var(--ip-muted)",
                  fontFamily: "var(--ip-mono)",
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Force-failure demo toggle */}
          <label
            className="flex items-center gap-2 text-xs cursor-pointer w-fit"
            style={{ fontFamily: "var(--ip-mono)" }}
          >
            <input
              type="checkbox"
              checked={forceError}
              onChange={(e) => setForceError(e.target.checked)}
              className="w-3.5 h-3.5 accent-[var(--ip-rust)]"
            />
            <span
              style={{
                color: forceError ? "var(--ip-rust)" : "var(--ip-muted)",
              }}
            >
              Force retrieval failure (demos error UI + retry)
            </span>
          </label>
        </div>
      </div>

      {/* ── Main layout ─────────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-6xl px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Left — Agent Trace ──────────────────────────────── */}
          <div className="space-y-3">
            <p
              className="text-xs font-bold tracking-widest mb-4"
              style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-muted)" }}
            >
              AGENT TRACE
            </p>

            {/* 01 Plan */}
            <StepCard
              number="01"
              label="PLAN"
              icon={<Terminal size={13} />}
              step={planStep}
              isExpanded={expanded.has("plan")}
              onToggleExpand={() => toggleExpanded("plan")}
              result={
                planText ? (
                  <p
                    className="text-sm italic"
                    style={{ color: "var(--ip-text)" }}
                  >
                    "{planText}"
                  </p>
                ) : undefined
              }
            />

            {/* 02 Retrieve */}
            <StepCard
              number="02"
              label="RETRIEVE  ·  web_search tool"
              icon={<Globe size={13} />}
              step={retrieveStep}
              isExpanded={expanded.has("retrieve")}
              onToggleExpand={() => toggleExpanded("retrieve")}
              onRetry={retrieveStep.status === "error" ? runPipeline : undefined}
              result={
                retrieveText ? (
                  <div className="space-y-2">
                    <p
                      className="text-sm"
                      style={{ color: "var(--ip-text)" }}
                    >
                      {retrieveText.length > 220
                        ? retrieveText.slice(0, 220) + "…"
                        : retrieveText}
                    </p>
                    {citations.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {citations.slice(0, 4).map((c, i) => (
                          <a
                            key={i}
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-0.5 text-xs rounded border hover:opacity-75 transition-opacity"
                            style={{
                              borderColor: "var(--ip-border)",
                              color: "var(--ip-blue)",
                              fontFamily: "var(--ip-mono)",
                            }}
                          >
                            <ExternalLink size={9} />
                            {c.title.slice(0, 32)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : undefined
              }
            />

            {/* 03 Extract */}
            <StepCard
              number="03"
              label="EXTRACT  ·  structured JSON"
              icon={<Database size={13} />}
              step={extractStep}
              isExpanded={expanded.has("extract")}
              onToggleExpand={() => toggleExpanded("extract")}
              result={
                confidence ? (
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--ip-mono)" }}
                  >
                    <span style={{ color: "var(--ip-muted)" }}>
                      confidence:{" "}
                    </span>
                    <span style={{ color: confidenceStyle }}>
                      {confidence.toUpperCase()}
                    </span>
                    <span style={{ color: "var(--ip-muted)" }}>
                      {" "}
                      · {facts.length} facts extracted
                    </span>
                  </p>
                ) : undefined
              }
            />

            {/* 04 Synthesize */}
            <StepCard
              number="04"
              label="SYNTHESIZE  ·  SSE stream"
              icon={<Sparkles size={13} />}
              step={synthesizeStep}
              isExpanded={false}
              onToggleExpand={() => {}}
            />

            {/* Streaming answer */}
            {(synthesisText || synthesizeStep.status === "active") && (
              <div
                className="rounded-lg border p-5 transition-colors duration-300"
                style={{
                  background: "var(--ip-panel)",
                  borderColor:
                    synthesizeStep.status === "active"
                      ? "var(--ip-amber)"
                      : "var(--ip-teal)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles
                    size={13}
                    style={{
                      color:
                        synthesizeStep.status === "active"
                          ? "var(--ip-amber)"
                          : "var(--ip-teal)",
                    }}
                  />
                  <span
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "var(--ip-mono)",
                      color:
                        synthesizeStep.status === "active"
                          ? "var(--ip-amber)"
                          : "var(--ip-teal)",
                    }}
                  >
                    {synthesizeStep.status === "active"
                      ? "STREAMING…"
                      : "ANSWER"}
                  </span>
                </div>
                <p className="leading-relaxed text-sm" style={{ color: "var(--ip-text)" }}>
                  {synthesisText}
                  {synthesizeStep.status === "active" && (
                    <span
                      className="inline-block w-0.5 h-4 ml-0.5 align-text-bottom animate-pulse"
                      style={{ background: "var(--ip-amber)" }}
                    />
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Right sidebar ───────────────────────────────────── */}
          <div className="space-y-6">
            {/* Fact cards */}
            <div>
              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ fontFamily: "var(--ip-mono)", color: "var(--ip-muted)" }}
              >
                EXTRACTED FACTS
                {confidence && (
                  <span className="ml-2" style={{ color: confidenceStyle }}>
                    ({confidence})
                  </span>
                )}
              </p>
              {facts.length === 0 ? (
                <div
                  className="rounded-lg border p-4 text-center"
                  style={{
                    background: "var(--ip-panel)",
                    borderColor: "var(--ip-border)",
                  }}
                >
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--ip-mono)",
                      color: "var(--ip-muted)",
                    }}
                  >
                    {extractStep.status === "idle"
                      ? "—"
                      : extractStep.status === "active"
                      ? "Extracting…"
                      : "No facts extracted"}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {facts.map((f, i) => (
                    <div
                      key={i}
                      className="rounded-lg border p-3"
                      style={{
                        background: "var(--ip-panel)",
                        borderColor: "var(--ip-border)",
                      }}
                    >
                      <p
                        className="text-xs mb-1 leading-relaxed"
                        style={{ color: "var(--ip-text)" }}
                      >
                        {f.fact}
                      </p>
                      <p
                        className="text-xs"
                        style={{
                          color: "var(--ip-blue)",
                          fontFamily: "var(--ip-mono)",
                        }}
                      >
                        ↳ {f.source}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Conversation history */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p
                  className="text-xs font-bold tracking-widest"
                  style={{
                    fontFamily: "var(--ip-mono)",
                    color: "var(--ip-muted)",
                  }}
                >
                  MEMORY
                  <span
                    className="ml-2"
                    style={{ color: "var(--ip-border-strong)" }}
                  >
                    ({conversation.length})
                  </span>
                </p>
                {conversation.length > 0 && (
                  <button
                    onClick={() => {
                      setHistory([]);
                      setConversation([]);
                    }}
                    className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--ip-mono)",
                      color: "var(--ip-rust)",
                    }}
                  >
                    <Trash2 size={10} /> Clear
                  </button>
                )}
              </div>
              {conversation.length === 0 ? (
                <div
                  className="rounded-lg border p-4 text-center"
                  style={{
                    background: "var(--ip-panel)",
                    borderColor: "var(--ip-border)",
                  }}
                >
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--ip-mono)",
                      color: "var(--ip-muted)",
                    }}
                  >
                    — no history yet —
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {conversation.map((entry, i) => (
                    <div
                      key={i}
                      className="rounded-lg border p-3"
                      style={{
                        background: "var(--ip-panel)",
                        borderColor: "var(--ip-border)",
                      }}
                    >
                      <p
                        className="text-xs font-semibold mb-1"
                        style={{
                          fontFamily: "var(--ip-mono)",
                          color: "var(--ip-amber)",
                        }}
                      >
                        {entry.query}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--ip-muted)" }}
                      >
                        {entry.answer.length > 130
                          ? entry.answer.slice(0, 130) + "…"
                          : entry.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-6 mt-8 text-center text-xs"
        style={{
          borderColor: "var(--ip-border)",
          fontFamily: "var(--ip-mono)",
          color: "var(--ip-muted)",
        }}
      >
        Real Anthropic API calls · Model: {MODEL} · No mocks
      </footer>
    </div>
  );
}
