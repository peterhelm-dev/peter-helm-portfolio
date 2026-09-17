import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

export default function NoriCaseStudy() {
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
          <h1 className="text-lg font-semibold">Nori Case Study</h1>
          <div className="w-24 flex justify-end"><ThemeToggle /></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16 max-w-4xl">
        {/* Header */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/images/nova/nova-app-icon.png"
              alt="Nori app icon"
              className="w-14 h-14 rounded-xl"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <h1 className="text-xl md:text-2xl">Nori: Onchain DeFi Portfolio Tracker</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            A cross-chain crypto and DeFi portfolio tracker (dApp) I designed and built solo, covering wallets and DeFi positions across Base and Ethereum. It auto-detects assets and LP/lending positions across protocols like Aave V3, PancakeSwap V3, and Aerodrome, and surfaces net worth, allocation, diversification risk, and gas spend in one view. Nori, the onboard mascot, explains what the numbers mean instead of just displaying them.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="pixel-badge-light">Web3</span>
            <span className="pixel-badge-light">DeFi</span>
            <span className="pixel-badge-light">Solidity</span>
            <span className="pixel-badge-light">React</span>
            <span className="pixel-badge-light">Smart Contracts</span>
            <span className="pixel-badge-light">Base</span>
          </div>
          <a href="https://youtu.be/JWoYl4f5nFg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
            <Play size={16} />
            Watch dApp Showcase
          </a>
        </section>

        {/* Hero screenshot */}
        <section className="mb-16">
          <div className="pixel-frame">
            <img
              src="/images/nova/nova-dashboard-overview.png"
              alt="Nori portfolio tracker dashboard showing total net worth, performance, and allocation"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">How It Works</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Multi-protocol DeFi position detection (deposits, loans, staking, LP positions) aggregated into one real-time net worth figure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Concentration and risk flags (e.g. "WETH is 96% of your net worth") computed from live holdings, not static rules</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Solidity smart contract experimentation and deployment testing in Remix as part of building toward on-chain functionality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>A full spec-driven design system (design tokens, component specs, implementation rules) written to hand off cleanly to Claude Code</span>
            </li>
          </ul>
        </section>

        {/* Screenshots */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Screenshots</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="pixel-frame">
              <img
                src="/images/nova/nova-token-holdings.png"
                alt="Nori token holdings table across chains"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="pixel-frame">
              <img
                src="/images/nova/nova-defi-positions.png"
                alt="Nori detected DeFi positions across Aave, PancakeSwap, and Aerodrome, with the Nori mascot explaining staking rewards"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Video Walkthroughs */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Video Walkthroughs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="relative w-full bg-black pixel-frame">
                <div className="relative w-full" style={{ paddingBottom: "177.77%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/1M5lC1_vnuM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="I Built My Own dApp"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">"I Built My Own dApp" (Short)</p>
            </div>
            <div>
              <div className="relative w-full bg-black pixel-frame">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/JWoYl4f5nFg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="Nora dApp Showcase"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Nori dApp Showcase</p>
            </div>
            <div>
              <div className="relative w-full bg-black pixel-frame">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/mDUSsiRWtkc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="Nova dApp - Making Progress"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Nova dApp — Making Progress (Dev Log)</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Want to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              I help businesses design systems, automations, and AI-powered tools that work together. Whether you need a data product, an integration, or both, let's talk.
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
