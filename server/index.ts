import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ANTHROPIC_BASE = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";

async function callAnthropic(body: Record<string, unknown>, stream: boolean): Promise<Response> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const usesWebSearch =
    Array.isArray(body.tools) &&
    body.tools.some(
      (t: unknown) => (t as { type?: string }).type === "web_search_20250305"
    );

  const headers: Record<string, string> = {
    "x-api-key": apiKey,
    "anthropic-version": ANTHROPIC_VERSION,
    "content-type": "application/json",
  };
  if (usesWebSearch) headers["anthropic-beta"] = "web-search-2025-03-05";

  return fetch(ANTHROPIC_BASE, {
    method: "POST",
    headers,
    body: JSON.stringify(stream ? { ...body, stream: true } : body),
  });
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "2mb" }));
  const server = createServer(app);

  // ── /api/ai/messages — non-streaming proxy ──────────────────────────────
  app.post("/api/ai/messages", async (req, res) => {
    if (!process.env.ANTHROPIC_API_KEY) {
      res.status(500).json({ error: "ANTHROPIC_API_KEY not configured on server" });
      return;
    }
    try {
      const upstream = await callAnthropic(req.body as Record<string, unknown>, false);
      const data = (await upstream.json()) as Record<string, unknown>;
      if (!upstream.ok) {
        const msg =
          typeof data.error === "object" && data.error !== null
            ? (data.error as { message?: string }).message
            : undefined;
        res.status(upstream.status).json({ error: msg ?? "Anthropic API error", detail: data });
        return;
      }
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err instanceof Error ? err.message : "Unknown error" });
    }
  });

  // ── /api/ai/stream — SSE streaming proxy ────────────────────────────────
  app.post("/api/ai/stream", async (req, res) => {
    if (!process.env.ANTHROPIC_API_KEY) {
      res.status(500).json({ error: "ANTHROPIC_API_KEY not configured on server" });
      return;
    }
    try {
      const upstream = await callAnthropic(req.body as Record<string, unknown>, true);
      if (!upstream.ok) {
        const data = (await upstream.json()) as { error?: { message?: string } };
        res.status(upstream.status).json({ error: data.error?.message ?? "Anthropic API error" });
        return;
      }
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders();

      const reader = upstream.body!.getReader();
      const decoder = new TextDecoder();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(decoder.decode(value, { stream: true }));
        }
      } finally {
        res.end();
      }
    } catch (err) {
      if (!res.headersSent) {
        res.status(500).json({ error: err instanceof Error ? err.message : "Unknown error" });
      }
    }
  });

  // ── Static files (production) ────────────────────────────────────────────
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
