import { Linkedin, Mail, ArrowRight, Play, Github, Youtube } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import CountUpStat from "@/components/CountUpStat";
import ParallaxLayer from "@/components/ParallaxLayer";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";
import PixelSceneBreak from "@/components/pixel-art/PixelSceneBreak";
import PixelGardenClicker from "@/components/pixel-art/PixelGardenClicker";
import PixelFirefly from "@/components/pixel-art/PixelFirefly";
import ScrollProgressPlant from "@/components/pixel-art/ScrollProgressPlant";
import { PixelFlower, PixelFlowerWarm, PixelCoffee } from "@/components/pixel-art/PixelSprites";

/**
 * Peter Helm Portfolio - Home Page
 * Design: Pixel Garden (retro 8-bit, nature-themed)
 * Positioning: Business Systems, Automation & Product Design, with a Web3/blockchain interest
 * - Serves Data Analyst, Business Analyst, AI/Automation Engineer, and Product/App Design roles
 *
 * Flow: hero -> story -> proof -> what I do -> featured work -> more work -> background -> contact.
 * Reordered so proof comes before the pitch, and the resume-shaped sections are compressed into one.
 */

const moreWork = [
  {
    title: "TerraIQ",
    description: "CRE portfolio & deal-intelligence terminal, Supabase + Claude-powered analysis.",
    href: "/work/terraiq",
    linkLabel: "Read the Design Breakdown",
  },
  {
    title: "Helm Systems",
    description: "My own automation consulting business, designed and built top to bottom.",
    href: "https://www.helmsystems.biz",
    external: true,
    linkLabel: "View Live Site",
  },
  {
    title: "AI Patient Intake & Routing",
    description: "n8n workflow classifying, routing, and escalating inbound intake with a human in the loop.",
    href: "https://www.youtube.com/watch?v=IwyFULvhUNU",
    external: true,
    linkLabel: "Watch Demo",
  },
  {
    title: "AI Knowledge Base & Support Agent",
    description: "RAG workflow grounding an AI agent's answers in stored, tagged Q&A pairs.",
    href: "https://www.youtube.com/watch?v=b4F3ZLBM6ac",
    external: true,
    linkLabel: "Watch Demo",
  },
  {
    title: "TrialOps Board",
    description: "Clinical trial operations dashboard: KPIs, kanban, review queue, role-based admin.",
    href: "https://trialops.peterhelm.biz",
    external: true,
    linkLabel: "View Live App",
  },
  {
    title: "Custom GPT for The Crew",
    description: "A plain-language GPT bridging technical systems and non-technical stakeholders.",
  },
  {
    title: "Notion Agent System",
    description: "Personal AI agents with persistent identity, memory, and goals instead of a blank prompt each run.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <TerminalEasterEgg />
          <div className="hidden md:flex gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Work</a>
            <a href="#play" className="nav-link">Play</a>
            <a href="#background" className="nav-link">Background</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="https://github.com/peterhelm-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/peter-helm-231042287/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@Five_Coins.Peter_Helm" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">
        {/* Illustrated garden horizon, drifts slower than scroll for a sense of depth */}
        <ParallaxLayer speed={0.06} className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/images/pixel-art/hero-banner.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>
        {/* Legibility scrim: opaque near the text, fading out toward the illustration's calmer sky */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, var(--background) 0%, var(--background) 30%, color-mix(in srgb, var(--background) 55%, transparent) 55%, transparent 78%)" }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <PixelFlower className="h-6 w-auto" />
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                Business Systems, Automation & Product Design
              </p>
              <PixelFlowerWarm className="h-6 w-auto" />
            </div>
            <h1 className="text-2xl md:text-4xl mb-6">
              I turn messy business data and processes into systems people can trust.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-lg">
              Workflow automation, AI integration, and reporting systems, designed to actually get used.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ background: "var(--secondary)", border: "2px solid var(--border)" }}>
              <span className="text-sm font-semibold text-secondary-foreground">$7,300+/yr saved · live in production</span>
            </div>
            <div className="flex gap-4 items-center flex-wrap">
              <a href="#projects" className="cta-button">
                View Projects <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="/contact" className="text-accent font-semibold hover:underline underline-offset-4">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mt-0"></div>

      {/* Story Section (condensed) */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Pixel garden vignette */}
            <div className="pixel-frame relative h-72 md:h-96 overflow-hidden">
              <img
                src="/images/pixel-art/about-vignette.webp"
                alt="A pixel-art garden path bordered by flowers and pine trees, overlooking distant hills"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <PixelFirefly top="20%" left="65%" duration="11s" />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="section-title">The Short Version</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A B.A. in Biblical Studies isn't the usual on-ramp into automation. I asked my boss at The Crew Cleaning and Restoration if there was anything else I could help with — that turned into building their lead pipeline, then connecting Housecall Pro and GoHighLevel with webhooks, then designing and running their entire automation infrastructure. I learned it by doing it, one broken workflow at a time.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Design is the other half of how I build. This site, Clover AI, and Nori are all things I designed end to end, not just wired together, interface, interaction, and the tone of an error message included. That same curiosity has pulled me toward blockchain and DeFi recently, through Nori, my cross-chain portfolio tracker.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed flex gap-4">
                <PixelCoffee className="h-10 w-auto flex-shrink-0 mt-1" />
                <span>A book called "God and Guinness" changed how I think about this kind of work: it's not just about optimizing a metric, it's about serving the person on the other end of the process well. I'm based in Plymouth, New Hampshire, and open to remote or local hybrid/on-site roles.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Proof Section */}
      <section id="impact" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">Impact</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Real operational impact from the automation infrastructure I built at The Crew Cleaning & Restoration.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div className="card-minimal text-center py-10">
              <CountUpStat end={7300} prefix="$" suffix="+/yr" className="text-5xl font-bold text-foreground mb-3" />
              <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
              <p className="text-muted-foreground">in labor cost avoided through automated reporting and customer messaging</p>
            </div>
            <div className="card-minimal text-center py-10">
              <CountUpStat end={6200} suffix="+" className="text-5xl font-bold text-foreground mb-3" />
              <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
              <p className="text-muted-foreground">automated customer touchpoints per year, zero manual sends</p>
            </div>
          </div>
        </div>
      </section>

      <PixelSceneBreak variant="dawn" />

      {/* What I Do */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Four things, in practice, across every project below.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-2">Automation & Integration</h3>
              <p className="text-muted-foreground text-sm">Connecting the tools businesses already use through APIs and webhooks.</p>
            </div>
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-2">Data & Reporting</h3>
              <p className="text-muted-foreground text-sm">KPI dashboards and reports people actually trust and use.</p>
            </div>
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-2">AI Systems</h3>
              <p className="text-muted-foreground text-sm">Agentic tool-calling and human-in-the-loop workflow design.</p>
            </div>
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-2">Product & App Design</h3>
              <p className="text-muted-foreground text-sm">Full apps end to end: interface, interaction, and system.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Featured Work: top 3 only */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Three projects, read in full. More below for anyone who wants the longer tail.
          </p>

          <div className="space-y-12">
            {/* Clover AI */}
            <div className="pixel-panel">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl md:text-2xl mb-4 text-white">Clover AI</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    A live, daily-use nutrition tracker. Log a meal by photo or voice, and the AI model decides which function to call to extract nutrition data, cross-reference it against FDA standards, and write results to a live dashboard. True agentic tool-calling, not a scripted pipeline.
                  </p>
                  <p className="text-white/70 mb-6 text-sm italic">
                    Design principle: logging by photo or voice matches how people already describe meals out loud, no new mental model to learn.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="pixel-badge">AI Agents</span>
                    <span className="pixel-badge">Tool Calling</span>
                    <span className="pixel-badge">Real-time Analytics</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/work/clover" asChild>
                      <Button size="lg" className="text-base px-8 py-6 pixel-border">Explore Full Case Study →</Button>
                    </Link>
                    <a href="https://clover-ai.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 font-semibold hover:gap-3 transition-all hover:text-white">
                      <Play size={16} />
                      View Live App
                    </a>
                  </div>
                </div>
                <div className="pixel-frame">
                  <img
                    src="/images/clover/clover-meal-logged.jpg"
                    alt="Clover AI logging a meal and returning nutrition data, allergens, and a contextual insight"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* The Crew */}
            <div className="pixel-panel">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 flex items-center justify-center">
                  <img
                    src="/images/crew/crew-logo.png"
                    alt="The Crew Logo"
                    className="w-full max-w-xs h-auto"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl mb-4 text-white">The Crew: Housecall Pro to HighLevel Integration</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    A webhook-based integration connecting Housecall Pro's job management platform to HighLevel's CRM, syncing customer data, estimates, appointments, and job status. Feeds the KPI dashboards and lead-pipeline reporting that align sales, operations, and management.
                  </p>
                  <p className="text-white/70 mb-6 text-sm italic">
                    Design principle: the KPI dashboard leads with summary numbers and lets ops staff drill into detail, progressive disclosure over dumping every field at once.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="pixel-badge">Webhooks</span>
                    <span className="pixel-badge">HighLevel</span>
                    <span className="pixel-badge">CRM Automation</span>
                  </div>
                  <Link href="/work/crew" asChild>
                    <Button size="lg" className="text-base px-8 py-6 pixel-border">Explore Full Case Study with Diagrams →</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Nori */}
            <div className="pixel-panel">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/images/nova/nova-app-icon.png"
                      alt="Nori app icon"
                      className="w-12 h-12 rounded-xl"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <h3 className="text-xl md:text-2xl text-white">Nori: Onchain DeFi Portfolio Tracker</h3>
                  </div>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    A cross-chain DeFi portfolio tracker covering wallets and positions across Base and Ethereum, designed and built solo. Auto-detects assets and LP/lending positions and surfaces net worth, allocation, and risk in plain language.
                  </p>
                  <p className="text-white/70 mb-6 text-sm italic">
                    Design principle: Nori explains risk in plain language instead of showing a raw number, visibility of system status, done right.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="pixel-badge">Web3</span>
                    <span className="pixel-badge">DeFi</span>
                    <span className="pixel-badge">Solidity</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/work/nori" asChild>
                      <Button size="lg" className="text-base px-8 py-6 pixel-border">Explore Full Case Study →</Button>
                    </Link>
                    <a href="https://youtu.be/JWoYl4f5nFg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 font-semibold hover:gap-3 transition-all hover:text-white">
                      <Play size={16} />
                      Watch Showcase
                    </a>
                  </div>
                </div>
                <div className="pixel-frame">
                  <img
                    src="/images/nova/nova-dashboard-overview.png"
                    alt="Nori portfolio tracker dashboard showing total net worth, performance, and allocation"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PixelSceneBreak variant="dusk" />

      {/* More Work: compact grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">More Work</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Seven more, one line each.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreWork.map((item) => (
              <div key={item.title} className="card-minimal">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                {item.href && (
                  item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                      <Play size={14} />
                      {item.linkLabel}
                    </a>
                  ) : (
                    <Link href={item.href} className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                      {item.linkLabel} →
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Playable break: the automation idea, as a game */}
      <section id="play" className="py-20 md:py-32">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">One More Thing</h2>
          <p className="text-lg text-muted-foreground mb-10">
            This whole site is about automating things people used to do by hand. Here's the smallest possible version of that idea: click to grow the garden yourself, or wait it out and watch it automate.
          </p>
          <PixelGardenClicker />
        </div>
      </section>

      <div className="divider"></div>

      {/* Background: work history + credentials + skills, merged */}
      <section id="background" className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="section-title mb-12">Background</h2>

          <div className="space-y-8 mb-12">
            <div className="card-minimal">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold">Automation & Systems Specialist</h3>
                <span className="text-sm text-muted-foreground">Oct 2024 – May 2026</span>
              </div>
              <p className="text-accent font-semibold mb-2">The Crew Cleaning & Restoration</p>
              <p className="text-muted-foreground text-sm">
                Independently designed and maintained a 25-workflow automation infrastructure across five platforms; built a 13-stage lead pipeline tracking 356 leads and $524,881 in revenue; built a real-time KPI dashboard covering 50+ metrics; trained non-technical staff to run it all independently.
              </p>
            </div>
            <div className="card-minimal">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold">Outbound Email Specialist</h3>
                <span className="text-sm text-muted-foreground">Sep 2025 – Present</span>
              </div>
              <p className="text-accent font-semibold mb-2">828 Web & Marketing (Remote)</p>
              <p className="text-muted-foreground text-sm">
                Manages outbound list segmentation and campaign sends via Apollo (~1,000/day); contributes to AI-powered lead generation projects.
              </p>
            </div>
            <div className="card-minimal">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold">Site Leader to Director</h3>
                <span className="text-sm text-muted-foreground">Jun 2019 – Aug 2022</span>
              </div>
              <p className="text-accent font-semibold mb-2">Liveit Ministries</p>
              <p className="text-muted-foreground text-sm">
                Led teams of student volunteers delivering education and mentorship in underserved neighborhoods; promoted to Director for a third year.
              </p>
            </div>
          </div>

          <div className="card-minimal mb-8">
            <h3 className="text-lg font-bold mb-3">Education & Certifications</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              B.A. Biblical Studies, Liberty University (2022) · Google Digital Marketing & E-Commerce Certificate, Coursera (2024) · SQL Fundamentals, Python Automation, Agentic AI Workflows, and Generative AI for Automating Workflows (2026)
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3 text-accent uppercase tracking-wide">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "JavaScript", "Node.js", "SQL",
                "REST APIs", "Webhooks",
                "GoHighLevel", "Zapier", "n8n",
                "OpenAI API", "Claude API / Anthropic SDK", "Prompt Engineering", "Agentic Workflow Design",
                "Google Sheets", "Excel", "Supabase / Postgres",
                "Design Systems & Tokens", "Interaction & UX Writing",
                "Solidity Fundamentals", "DeFi Protocols (Aave, PancakeSwap, Aerodrome)",
              ].map((skill) => (
                <span key={skill} className="pixel-badge-light">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <img
        src="/images/pixel-art/divider-strip.webp"
        alt=""
        aria-hidden="true"
        className="w-full h-16 md:h-24 object-cover"
      />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-6">Let's Build Better Systems</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm open to roles and projects involving workflow automation, data analysis, business systems, revenue operations, and operational tools. Interested in working together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cta-button inline-flex items-center justify-center gap-2">
              <Mail size={18} /> Send Message
            </a>
            <a href="https://www.linkedin.com/in/peter-helm-231042287/" target="_blank" rel="noopener noreferrer" className="pixel-btn-outline">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
            <a href="https://github.com/peterhelm-dev" target="_blank" rel="noopener noreferrer" className="pixel-btn-outline">
              <Github size={18} /> View GitHub
            </a>
            <a href="https://www.youtube.com/@Five_Coins.Peter_Helm" target="_blank" rel="noopener noreferrer" className="pixel-btn-outline">
              <Youtube size={18} /> Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border py-14 overflow-hidden">
        <img
          src="/images/pixel-art/footer-band.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, var(--background) 85%)" }} />
        <div className="container relative text-center text-muted-foreground">
          <p>&copy; 2026 Peter Helm. Business Systems, Automation & Product Design.</p>
        </div>
      </footer>

      <ScrollProgressPlant />
    </div>
  );
}
