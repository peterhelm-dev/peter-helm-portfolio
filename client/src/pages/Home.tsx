import { Linkedin, Mail, ArrowRight, Play, Github } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { PixelMountains, PixelBush, PixelTree, PixelFlower, PixelFlowerWarm, PixelCoffee, PixelGardenRow } from "@/components/pixel-art/PixelSprites";

/**
 * Peter Helm Portfolio - Home Page
 * Design: Pixel Garden (retro 8-bit, nature-themed)
 * Positioning: Business Systems, Automation & Product Design, with a Web3/blockchain interest
 * - Serves Data Analyst, Business Analyst, AI/Automation Engineer, and Product/App Design roles
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-accent">PH</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#services" className="nav-link">Services</a>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-40 md:pb-56 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <PixelFlower className="h-6 w-auto" />
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                Business Systems, Automation & Product Design
              </p>
              <PixelFlowerWarm className="h-6 w-auto" />
            </div>
            <h1 className="text-2xl md:text-4xl mb-8">
              I turn messy business data and processes into systems people can trust.
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              I design and build automation infrastructure that connects business systems (CRMs, scheduling tools, spreadsheets, messaging platforms) through APIs and webhooks, then document and hand it off so non-technical teams can run it themselves. Workflow automation, AI integration, and reporting systems, built to actually get used, and designed with the same care I'd put into a product someone actually wants to open every day.
            </p>
              <div className="flex gap-4">
                <a href="#projects" className="cta-button">
                  View Projects <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="/contact" className="pixel-btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
        </div>
        {/* Decorative pixel mountain horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none select-none" aria-hidden="true">
          <PixelMountains className="w-full h-full" />
        </div>
        <div className="absolute bottom-2 right-4 md:right-12 flex items-end gap-3 pointer-events-none select-none" aria-hidden="true">
          <PixelBush className="h-8 w-auto" />
          <PixelBush className="h-10 w-auto" />
        </div>
      </section>

      {/* Divider */}
      <PixelGardenRow className="container py-4" />
      <div className="divider mt-0"></div>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Pixel garden vignette */}
            <div className="pixel-frame relative h-72 md:h-96 bg-gradient-to-b from-[#dcecd6] to-[#c3dab8] overflow-hidden">
              <PixelMountains className="absolute bottom-0 left-0 w-full h-2/3" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-end gap-4">
                <PixelBush className="h-10 w-auto" />
                <PixelTree className="h-16 w-auto" />
                <PixelFlowerWarm className="h-8 w-auto" />
                <PixelTree className="h-12 w-auto" />
                <PixelBush className="h-8 w-auto" />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="section-title">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I graduated from Liberty University in 2022 with a degree in Biblical Studies, which is not exactly the standard on-ramp into automation and systems work. Here's how it actually happened: I was working at The Crew Cleaning and Restoration in a different role, and I just asked my boss if there was anything else I could help with. That turned into building out a lead pipeline in GoHighLevel, which turned into connecting Housecall Pro and GoHighLevel with webhooks, which turned into being the person who designed and ran the company's entire automation infrastructure. I learned most of it by doing it, one broken workflow at a time.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                These days I design and build automation infrastructure that connects the tools businesses already use (CRMs, scheduling platforms, spreadsheets, messaging tools) through APIs and webhooks. I write the integration logic, build the reporting on top of it, then document everything and train the team so the system doesn't depend on me being in the room. AI shows up in my work too, both as a coding aid that helps me build and debug faster, and, where it earns its place, as part of the systems themselves.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed flex gap-4">
                <PixelCoffee className="h-10 w-auto flex-shrink-0 mt-1" />
                <span>A book called "God and Guinness" changed how I think about this kind of work. It's about a brewing family that built a business with a direct, tangible, positive impact on their community, and I think about sales and systems work the same way: it's not just about optimizing a metric, it's about serving the people on the other end of the process well, whether that's a customer getting an honest estimate or a coworker who finally has a dashboard that tells them the truth. I'm based in Plymouth, New Hampshire now, and open to remote work or local hybrid and on-site roles.</span>
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Design is the other half of how I build. This site, Clover AI, and Nori are all things I designed end to end, not just wired together: the interface, the interaction, the tone of voice in an error message. I care about how a tool feels to use, not just whether the API call succeeds. That same curiosity has pulled me toward blockchain and DeFi recently. Nori started as a way to track my own onchain positions and turned into a real interest in how transparent, composable financial infrastructure gets designed and built.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                  <h3 className="font-semibold text-foreground mb-1">Workflow Automation</h3>
                  <p className="text-muted-foreground">Design automation workflows with structured logic, data routing, and human review points</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Data Analysis & Reporting</h3>
                    <p className="text-muted-foreground">Design KPI dashboards, validate data quality, and translate business questions into actionable insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Systems Integration</h3>
                    <p className="text-muted-foreground">Connect platforms, sync data across systems, and build reliable integrations that keep teams aligned</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Product & App Design</h3>
                    <p className="text-muted-foreground">Design and build full apps end to end, interface, interaction, and system, not just the backend plumbing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Blockchain & Web3</h3>
                    <p className="text-muted-foreground">Exploring DeFi, smart contracts, and onchain data through Nori, my cross-chain portfolio tracker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Real-world examples of automation systems, data tools, operational dashboards, and workflow implementations I've built.
          </p>

          <div className="space-y-20">
            {/* Project 1: Clover AI - FEATURED */}
            <div className="pixel-panel mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl md:text-2xl mb-4 text-white">Clover AI</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    A live, daily-use nutrition tracker built with Claude Code. Users log a meal by photo or voice, and the AI model itself decides which function to call to extract nutrition data, cross-reference it against FDA standards, and write results to a database powering live tables, weekly reports, and stats. This is true agentic tool-calling, not a scripted pipeline.
                  </p>
                  <p className="text-white/80 mb-6">
                    <strong>Key Technical Concepts:</strong> Agentic tool-calling, server-side output validation, provider-abstraction layer, multi-intent classification, multimodal input.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="pixel-badge">AI Agents</span>
                    <span className="pixel-badge">Tool Calling</span>
                    <span className="pixel-badge">Data Integration</span>
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

            {/* Project 2: TerraIQ */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-lg mb-3">TerraIQ</h3>
                <p className="text-muted-foreground mb-6">
                  A commercial real estate portfolio and deal-intelligence terminal. React 18 and Vite on the frontend, Supabase (Postgres, auth, realtime, edge functions) on the backend with multi-tenant row-level security and a four-role permission matrix. Claude is called directly through Supabase Edge Functions to analyze deals and give portfolio advice (streaming chat and analysis, not tool-calling), using live macroeconomic data from the Federal Reserve Bank of St. Louis's FRED API and Mapbox for the portfolio map. Stripe handles subscription billing, and there's an automated Postgres test suite behind it.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="pixel-badge-light">Full-Stack</span>
                  <span className="pixel-badge-light">API Integration</span>
                  <span className="pixel-badge-light">Multi-tenant</span>
                  <span className="pixel-badge-light">Stripe</span>
                  <span className="pixel-badge-light">Data Analysis</span>
                </div>
                <a href="https://terraiq-olive.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
                  <Play size={16} />
                  View Live App
                </a>
              </div>
              <div className="pixel-frame">
                <img
                  src="/images/terraiq/terraiq-screenshot.webp"
                  alt="TerraIQ CRE Intelligence Terminal interface"
                  className="w-full h-auto object-cover"
                  onError={(e) => { if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.display = "none"; }}
                />
              </div>
            </div>

            {/* Project 3: The Crew Automation Case Study - FEATURED */}
            <div className="pixel-panel mb-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Logo */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <img
                    src="/images/crew/crew-logo.webp"
                    alt="The Crew Logo"
                    className="w-full max-w-xs h-auto"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                {/* Content */}
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl mb-4 text-white">The Crew: Housecall Pro to HighLevel Integration</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  A comprehensive webhook-based integration I built at The Crew Cleaning and Restoration. This system connects Housecall Pro's job management platform to HighLevel's CRM, syncing customer data, estimates, appointments, and job status updates across systems. The architecture uses custom code logic to parse webhook payloads, route data based on event types, and maintain consistency across multiple platforms. The system feeds into KPI dashboards and lead-pipeline reporting that align sales, operations, and management teams.
                </p>
                  <p className="text-white/80 mb-6">
                    <strong>Key Technical Concepts:</strong> Webhook architecture, event-based routing, custom code logic, platform integration, data synchronization, multi-system orchestration, real-time automation, reporting systems.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="pixel-badge">Webhooks</span>
                    <span className="pixel-badge">API Integration</span>
                    <span className="pixel-badge">HighLevel</span>
                    <span className="pixel-badge">Custom Code</span>
                    <span className="pixel-badge">CRM Automation</span>
                    <span className="pixel-badge">Reporting</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/work/crew" asChild>
                      <Button size="lg" className="text-base px-8 py-6 pixel-border">Explore Full Case Study with Diagrams →</Button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: AI Patient Intake */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-lg mb-3">AI Patient Intake and Routing Workflow</h3>
                <p className="text-muted-foreground mb-6">
                  A mock AI-assisted patient intake system built with n8n, OpenAI, Gmail, and Google Sheets. The workflow captures inbound inquiries, structures the data, classifies urgency and intent, routes submissions, generates follow-up drafts, logs activity, and escalates higher-risk cases for human review.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="pixel-badge-light">n8n</span>
                  <span className="pixel-badge-light">OpenAI</span>
                  <span className="pixel-badge-light">Human-in-the-loop</span>
                  <span className="pixel-badge-light">Gmail</span>
                  <span className="pixel-badge-light">Google Sheets</span>
                </div>
                <a href="https://www.youtube.com/watch?v=IwyFULvhUNU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
                  <Play size={16} />
                  Watch Demo
                </a>
              </div>
              <div className="relative w-full bg-secondary pixel-frame">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/IwyFULvhUNU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="AI Patient Intake & Routing Workflow"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Project 5: AI Knowledge Base */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative w-full bg-secondary pixel-frame order-2 md:order-1">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/b4F3ZLBM6ac"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="AI Knowledge Base / Support Agent Workflow"
                  ></iframe>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-lg mb-3">AI Knowledge Base and Support Agent Workflow</h3>
                <p className="text-muted-foreground mb-6">
                  A retrieval-augmented generation (RAG) workflow demonstrating how submitted Q and A pairs can be ingested, tagged, stored in a data table, and queried by an AI agent to provide grounded responses instead of generic hallucinated answers. This is a concrete example of using structured data to constrain AI outputs.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="pixel-badge-light">RAG</span>
                  <span className="pixel-badge-light">AI Agents</span>
                  <span className="pixel-badge-light">Knowledge Base</span>
                  <span className="pixel-badge-light">Data Tables</span>
                  <span className="pixel-badge-light">Grounded AI</span>
                </div>
                <a href="https://www.youtube.com/watch?v=b4F3ZLBM6ac" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
                  <Play size={16} />
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Project 6: TrialOps Board */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-lg mb-3">TrialOps Board, Clinical Trial Operations Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  A comprehensive healthcare operations management web application designed to help teams plan, track, and coordinate clinical trial work. Features include a customizable KPI dashboard, filterable project table with inline editing, five-column kanban board for task management, review queue for approvals, team workload visualization, analytics reports, and role-based admin controls.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="pixel-badge-light">Full-Stack Web App</span>
                  <span className="pixel-badge-light">React</span>
                  <span className="pixel-badge-light">Kanban Board</span>
                  <span className="pixel-badge-light">Dashboard</span>
                  <span className="pixel-badge-light">Analytics</span>
                </div>
                <a href="https://trialops.peterhelm.biz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:opacity-80">
                  <Play size={16} />
                  View Live App
                </a>
              </div>
              <div className="relative w-full bg-secondary pixel-frame">
                <img
                  src="/images/trialops/trialops-dashboard.webp"
                  alt="TrialOps Board Dashboard"
                  className="w-full h-auto"
                  onError={(e) => { if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.display = "none"; }}
                />
              </div>
            </div>

            {/* Project 7: Nori - Onchain DeFi Portfolio Tracker (dApp) - FEATURED */}
            <div className="pixel-panel mb-12">
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
                    A cross-chain crypto and DeFi portfolio tracker (dApp) I designed and built solo, covering wallets and DeFi positions across Base and Ethereum. It auto-detects assets and LP/lending positions across protocols like Aave V3, PancakeSwap V3, and Aerodrome, and surfaces net worth, allocation, diversification risk, and gas spend in one view. Nori, the onboard mascot, explains what the numbers mean instead of just displaying them.
                  </p>
                  <p className="text-white/80 mb-6">
                    <strong>Key Technical Concepts:</strong> Multi-protocol DeFi position detection, live risk and concentration flags, Solidity smart contract experimentation, spec-driven design handoff.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="pixel-badge">Web3</span>
                    <span className="pixel-badge">DeFi</span>
                    <span className="pixel-badge">Solidity</span>
                    <span className="pixel-badge">React</span>
                    <span className="pixel-badge">Smart Contracts</span>
                    <span className="pixel-badge">Base</span>
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

            {/* Project 8: Custom GPT for The Crew */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Custom GPT for The Crew</h3>
              <p className="text-muted-foreground mb-4">
                Built and deployed a custom GPT for the CEO to help non-technical stakeholders understand internal processes and the systems being built. Serves as a bridge between technical implementation and business understanding.
              </p>
              <p className="text-sm text-muted-foreground italic">Deployed and in active use</p>
            </div>

            {/* Project 9: Notion Agent System */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Notion Agent System</h3>
              <p className="text-muted-foreground mb-4">
                A set of personal AI agents that reference a persistent instruction set on every run instead of starting from a blank prompt each time. The more advanced agent draws on an identity document, persistent memory, and a standing set of goals, functioning as a reusable agent template rather than a one-off script.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="pixel-badge-light">Agent Design</span>
                <span className="pixel-badge-light">Persistent Memory</span>
                <span className="pixel-badge-light">Notion API</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Impact Section */}
      <section id="impact" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">Impact</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Real operational impact from the automation infrastructure I built at The Crew Cleaning & Restoration.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div className="card-minimal text-center py-10">
              <div className="text-5xl font-bold text-foreground mb-3">$7,300+/yr</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
              <p className="text-muted-foreground">in labor cost avoided through automated reporting and customer messaging</p>
            </div>
            <div className="card-minimal text-center py-10">
              <div className="text-5xl font-bold text-foreground mb-3">6,200+</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
              <p className="text-muted-foreground">automated customer touchpoints per year, zero manual sends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Work History Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-16">Work History</h2>
          <div className="space-y-12">
            {/* Role 1 */}
            <div className="card-minimal">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Automation & Systems Specialist</h3>
                <span className="text-sm text-muted-foreground">Oct 2024 – May 2026</span>
              </div>
              <p className="text-accent font-semibold mb-4">The Crew Cleaning & Restoration</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Independently designed, built, and maintained a 25-workflow automation infrastructure connecting five platforms (Housecall Pro, GoHighLevel, Google Sheets, Slack, Zapier) via webhook-driven data flows and REST API integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Built a 13-stage GoHighLevel lead pipeline tracking 356 leads and $524,881 in revenue at a 51% close rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Built a real-time KPI dashboard covering 50+ metrics that replaced manual weekly reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Ran stakeholder discovery sessions with the CEO and sales team, authored SOPs, and trained non-technical staff to run the systems independently</span>
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="card-minimal">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Outbound Email Specialist (Internship → Contractor)</h3>
                <span className="text-sm text-muted-foreground">Sep 2025 – Present</span>
              </div>
              <p className="text-accent font-semibold mb-4">828 Web & Marketing (Remote)</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Manages outbound email list segmentation and campaign sends via Apollo, roughly 1,000 emails per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Contributes to AI-related marketing and personalization projects as the agency expands into AI-powered lead generation</span>
                </li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="card-minimal">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Site Leader to Director</h3>
                <span className="text-sm text-muted-foreground">Jun 2019 – Aug 2022</span>
              </div>
              <p className="text-accent font-semibold mb-4">Liveit Ministries</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Led teams of student volunteers delivering education and mentorship programs in underserved neighborhoods, including basketball-based mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Promoted to Director for a third year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="section-title mb-16">Skills and Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages & Scripting */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Languages & Scripting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Python</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Integration & APIs */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Integration & APIs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>REST APIs</li>
                <li>Webhooks</li>
                <li>Field mapping</li>
                <li>Third-party SaaS integrations</li>
              </ul>
            </div>

            {/* Automation Platforms */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Automation Platforms</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>GoHighLevel</li>
                <li>Zapier</li>
                <li>n8n</li>
              </ul>
            </div>

            {/* AI & LLM */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">AI & LLM</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>OpenAI API</li>
                <li>Claude API / Anthropic SDK</li>
                <li>Prompt engineering</li>
                <li>Agentic workflow design</li>
                <li>Human-in-the-loop / guardrail design</li>
              </ul>
            </div>

            {/* Data & Reporting */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Data & Reporting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Sheets</li>
                <li>Excel</li>
                <li>KPI dashboards</li>
                <li>Supabase / Postgres</li>
              </ul>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Documentation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>SOP authoring</li>
                <li>Technical specs</li>
                <li>Stakeholder handoff materials</li>
              </ul>
            </div>

            {/* Product & UI Design */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Product & UI Design</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>End-to-end app design</li>
                <li>Design systems & tokens</li>
                <li>Interaction & UX writing</li>
                <li>Spec-driven design handoff</li>
              </ul>
            </div>

            {/* Blockchain & Web3 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Blockchain & Web3</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Solidity fundamentals</li>
                <li>Smart contract experimentation (Remix)</li>
                <li>DeFi protocols (Aave, PancakeSwap, Aerodrome)</li>
                <li>Onchain / cross-chain data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-4">How I Can Help</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            I work with teams and organizations that need to build scalable systems, streamline operations, connect their data and processes, and make better decisions with reliable information.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
              <p className="text-muted-foreground">
                Design and build workflows that handle intake, routing, classification, and routing logic. Structured outputs and clear decision trees.
              </p>
            </div>

            {/* Service 2 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">CRM and Lifecycle Systems</h3>
              <p className="text-muted-foreground">
                Build multi-branch CRM automations, lifecycle triggers, and conditional logic that improve operational efficiency and data consistency.
              </p>
            </div>

            {/* Service 3 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Data Analysis and Reporting</h3>
              <p className="text-muted-foreground">
                Design KPI dashboards, validate data quality, and translate business questions into actionable insights and stakeholder-ready reports.
              </p>
            </div>

            {/* Service 4 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Business Process and Requirements Analysis</h3>
              <p className="text-muted-foreground">
                Translate ambiguous business needs into documented specifications. Work directly with stakeholders before any build starts.
              </p>
            </div>

            {/* Service 5 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Internal Tool Prototyping</h3>
              <p className="text-muted-foreground">
                Rapid prototyping of internal tools, dashboards, and workflow apps. From concept to working prototype in days.
              </p>
            </div>

            {/* Service 6 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Systems Integration</h3>
              <p className="text-muted-foreground">
                Connect platforms, sync data across systems, and build reliable integrations that keep teams aligned and data consistent.
              </p>
            </div>

            {/* Service 7 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Product & App Design</h3>
              <p className="text-muted-foreground">
                Design and build full apps end to end: interface, interaction, and design system, not just the backend. For teams who want something people actually enjoy using.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Credentials Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-2xl">
          <h2 className="section-title mb-8">Education and Certifications</h2>
          <div className="space-y-6">
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-1">B.A. Biblical Studies</h3>
              <p className="text-accent font-semibold">Liberty University, 2022</p>
            </div>
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-1">Google Digital Marketing and E-Commerce Certificate</h3>
              <p className="text-accent font-semibold">Coursera, 2024</p>
            </div>
            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-1">Technical Certifications</h3>
              <ul className="space-y-2 text-muted-foreground mt-3">
                <li>SQL Fundamentals (2026)</li>
                <li>Python Automation (2026)</li>
                <li>Agentic AI Workflows (2026)</li>
                <li>Generative AI for Automating Workflows (2026)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 Peter Helm. Business Systems, Automation & Product Design.</p>
        </div>
      </footer>
    </div>
  );
}
