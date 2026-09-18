import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

export default function TerraIQCaseStudy() {
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
          <h1 className="text-lg font-semibold">TerraIQ Case Study</h1>
          <div className="w-24 flex justify-end"><ThemeToggle /></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16 max-w-4xl">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-xl md:text-2xl mb-6">TerraIQ</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A commercial real estate portfolio and deal-intelligence terminal. React 18 and Vite on the frontend, Supabase (Postgres, auth, realtime, edge functions) on the backend with multi-tenant row-level security and a four-role permission matrix. Claude is called directly through Supabase Edge Functions to analyze deals and give portfolio advice, using live macroeconomic data from the Federal Reserve Bank of St. Louis's FRED API and Mapbox for the portfolio map. Stripe handles subscription billing, and there's an automated Postgres test suite behind it.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="pixel-badge-light">Full-Stack</span>
            <span className="pixel-badge-light">API Integration</span>
            <span className="pixel-badge-light">Multi-tenant</span>
            <span className="pixel-badge-light">Stripe</span>
            <span className="pixel-badge-light">Data Analysis</span>
            <span className="pixel-badge-light">Design Systems</span>
          </div>
          <a href="https://terraiq-olive.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
            <Play size={16} />
            View Live App
          </a>
        </section>

        {/* Intro to the design walkthrough */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Reading the Design, Not Just the Feature List</h2>
          <p className="text-muted-foreground leading-relaxed">
            The screens below are the public marketing site (the authenticated terminal itself, with the live portfolio map and deal chat, sits behind sign-in). Even at this layer, the design decisions are deliberate, not default template choices. Here's what each screen is actually doing and why, in plain design-principle terms.
          </p>
        </section>

        {/* Screenshot 1: Hero */}
        <section className="mb-16">
          <div className="pixel-frame mb-6">
            <img
              src="/images/terraiq/terraiq-hero.jpg"
              alt="TerraIQ landing page hero: headline, subhead, and two calls to action"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-3">1. The Hero: Visual Hierarchy and Restraint</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            One headline, one sentence of supporting copy, two buttons. The headline is set large and dark against a pale background so it's the only thing competing for attention. The two CTAs are deliberately unequal: "Start trial" is a solid filled button (the default, intended action), "View demo" is an outline button (the lower-commitment alternative). That weight difference is the whole point — it's a visual answer to "what should I do first," so the user never has to guess.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The nav above it stays down to two links plus sign-in. TerraIQ's actual product (the terminal) is data-dense by nature, so the marketing page compensates by being almost empty. That's an intentional contrast, not an oversight.
          </p>
        </section>

        {/* Screenshot 2: Feature grid */}
        <section className="mb-16">
          <div className="pixel-frame mb-6">
            <img
              src="/images/terraiq/terraiq-features.jpg"
              alt="TerraIQ feature grid: six cards, each with a heading and one sentence of description"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-3">2. The Feature Grid: Consistency and Chunking</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Six capabilities, one repeated card pattern: a short heading, then exactly one sentence of plain-English description. No card breaks the pattern, so a reader can scan the grid in an F-pattern and know within seconds whether any given card is relevant to them, without reading all six top to bottom.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The harder design decision is what's left out. TerraIQ's actual feature set (edge functions, RLS policies, IRR modeling) is technical. None of that language appears here. Each card describes an outcome ("track every asset, lease, and loan maturity") instead of the mechanism behind it, because the buyer is a CRE investor, not a developer evaluating the stack.
          </p>
        </section>

        {/* Screenshot 3: Pricing */}
        <section className="mb-16">
          <div className="pixel-frame mb-6">
            <img
              src="/images/terraiq/terraiq-pricing.jpg"
              alt="TerraIQ pricing tiers: Analyst, Pro (highlighted), and Institutional"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-3">3. Pricing: Anchoring and Guided Choice</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Three tiers, but they aren't presented as equals. The middle "Pro" plan is elevated with a border and sits slightly taller than its neighbors, and it's the only card with a solid-filled "Start trial" button, the other two are outlined. That's a standard pricing-psychology pattern (anchor the middle option as the recommended one) applied on purpose, not left to default styling.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each tier's feature list also grows by addition, not by repeating the same bullets with different numbers. That makes the comparison legible at a glance instead of requiring a separate comparison table.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Want to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              I help businesses design systems, dashboards, and data products that people actually want to open. Whether you need an integration, a full app, or both, let's talk.
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
