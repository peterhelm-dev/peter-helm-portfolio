import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Github } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

export default function CloverCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Clover AI Case Study</h1>
          <div className="w-24 flex justify-end"><ThemeToggle /></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16 max-w-4xl">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-xl md:text-2xl mb-6">Clover AI</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A live, daily-use nutrition tracker built with Claude Code. Users log a meal by photo or voice, and the AI model itself decides which function to call to extract nutrition data, cross-reference it against FDA standards, and write results to a database powering live tables, weekly reports, and stats. This is true agentic tool-calling, not a scripted pipeline.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="pixel-badge-light">AI Agents</span>
            <span className="pixel-badge-light">Tool Calling</span>
            <span className="pixel-badge-light">Data Integration</span>
            <span className="pixel-badge-light">Real-time Analytics</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="https://clover-ai.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
              <Play size={16} />
              View Live App
            </a>
            <a href="https://github.com/peterhelm-dev/clover-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground font-semibold hover:gap-3 transition-all hover:text-foreground">
              <Github size={16} />
              View on GitHub
            </a>
          </div>
        </section>

        {/* Hero screenshot */}
        <section className="mb-16">
          <div className="pixel-frame">
            <img
              src="/images/clover/clover-meal-logged.jpg"
              alt="Clover AI logging a meal and returning nutrition data, allergens, and a contextual insight"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">What Makes This Agentic, Not Scripted</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Nutrition analysis is Zod-validated server-side before it ever touches the database, model output is treated as untrusted input</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>A hand-rolled provider-abstraction layer (an Anthropic wrapper presenting an OpenAI-shaped interface) let me swap LLM providers without touching call sites, a real migration I actually did</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Single-call multi-intent classification (log food, answer a question, or both) instead of a separate classify-then-handle step, cutting latency and cost roughly in half</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Context engineering with explicit epistemics: it states data-coverage gaps directly ("logged 3 of 7 days, sleep and stress not tracked") instead of guessing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Output-space constraints for safety: weekly reports and mood cards select from a fixed template library rather than free-form generation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Multimodal input (photo and voice) with honest null-handling for missing data rather than fabricated values</span>
            </li>
          </ul>
        </section>

        {/* Screenshots */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Screenshots</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="pixel-frame">
              <img
                src="/images/clover/clover-landing.jpg"
                alt="Clover Wellness landing page"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="pixel-frame">
              <img
                src="/images/clover/clover-input-multimodal.jpg"
                alt="Clover AI multimodal input bar with camera and voice logging options"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Video Demo</h2>
          <p className="text-muted-foreground mb-6">
            Live mobile walkthrough: describing a meal by voice and getting back logged nutrition data in real time.
          </p>
          <div className="max-w-sm mx-auto pixel-frame bg-black">
            <video
              src="/videos/clover-ai-demo.mp4"
              poster="/images/clover/clover-demo-poster.jpg"
              controls
              preload="metadata"
              playsInline
              className="w-full h-auto"
            >
              Your browser does not support embedded video.
            </video>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Want to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              I help businesses design systems, automations, and AI-powered tools that work together. Whether you need an agentic workflow, a reporting system, or both, let's talk.
            </p>
            <Link href="/contact" asChild>
              <Button className="pixel-border">Get in Touch</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
