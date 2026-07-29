import { Linkedin, Mail, ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Peter Helm Portfolio - Home Page
 * Design: Minimalist Tech Elegance
 * Positioning: Automation, Data & AI Systems Builder
 * - Serves Data Analyst, Business Analyst, and AI/Automation Engineer roles
 * - Professional, practical, recruiter-ready
 * - Dark/neutral background with accent colors
 * - Clean typography and section spacing
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
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/peter-helm-231042287/" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I turn messy business data and processes into systems people can trust.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Data analyst, business systems builder, and automation engineer. I design operational systems that connect people, processes, and data through workflow automation, business intelligence, and structured integrations.
            </p>
              <div className="flex gap-4">
                <a href="#projects" className="cta-button inline-flex items-center">
                  View Projects <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="/contact" className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                  Contact Me
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588202014/J4xrRQrRNCaF8mYqRPW9Rc/workflow-visualization-5L9F3JjesPs7xGDgYuFw6n.webp"
                alt="Workflow Automation"
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="section-title">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I focus on designing and building operational systems that connect people, processes, and data. My work combines process mapping, data analysis, automation logic, CRM/lifecycle systems, and operational reporting to transform ambiguous workflows into scalable, documented systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I build with n8n, Python, SQL, modern data tools, and AI where it adds value. I design systems that leverage automation and AI as assistants, not replacements, for human judgment. I turn messy business processes into clean, maintainable workflows backed by reliable data.
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
            <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 border-2 border-blue-500 rounded-lg p-8 mb-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-4xl font-bold mb-4 text-white">Clover AI</h3>
                  <p className="text-lg text-slate-100 mb-6 leading-relaxed">
                    A live daily-use nutrition tracker that demonstrates agentic AI tool-calling in action. Users upload a meal photo or voice recording. The AI decides which function to call to extract nutrition data, cross-references it against FDA standards, and writes results to a database powering live tables and graphs.
                  </p>
                  <p className="text-slate-200 mb-6">
                    <strong>Technical Highlights:</strong> Agentic tool-calling, function selection, nutrition data extraction, FDA standards integration, database persistence, real-time analytics.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">AI Agents</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">Tool Calling</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">Data Integration</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">Real-time Analytics</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://clover-ai.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:gap-3 transition-all hover:text-blue-200">
                      <Play size={16} />
                      View Live App
                    </a>
                    <a href="https://github.com/peterhelm-dev/clover-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 font-semibold hover:gap-3 transition-all hover:text-slate-100">
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-blue-500/30 shadow-lg">
                  <img
                    src="/manus-storage/Screenshot2026-07-29at3.36.32PM_9180b9a9.webp"
                    alt="Clover AI Voice Food Logger interface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project 2: TerraIQ */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">TerraIQ</h3>
                <p className="text-muted-foreground mb-6">
                  Commercial real estate portfolio and deal-intelligence tool. Claude analyzes deals using live economic data from the Federal Reserve's FRED API and Mapbox for portfolio mapping. Built on production-grade infrastructure: multi-tenant row-level security, four-role permission matrix, Stripe subscription billing, and automated Postgres test suite.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Full-Stack</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">API Integration</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Multi-tenant</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Stripe</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Data Analysis</span>
                </div>
                <a href="https://terraiq-olive.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:gap-3 transition-all hover:text-blue-200">
                  <Play size={16} />
                  View Live App
                </a>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-700 shadow-lg">
                <img
                  src="/manus-storage/terraiq-screenshot_bb6662a9.webp"
                  alt="TerraIQ CRE Intelligence Terminal interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Project 3: The Crew Automation Case Study - FEATURED */}
            <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 border-2 border-blue-500 rounded-lg p-8 mb-12 shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Logo */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <img 
                    src="/manus-storage/TheCrewLogocopy_2a49caf5.webp"
                    alt="The Crew Logo"
                    className="w-full max-w-xs h-auto"
                  />
                </div>
                {/* Content */}
                <div className="md:col-span-2">
                  <h3 className="text-4xl font-bold mb-4 text-white">The Crew: Housecall Pro to HighLevel Integration</h3>
                  <p className="text-lg text-slate-100 mb-6 leading-relaxed">
                  A comprehensive webhook-based integration I built at The Crew Cleaning and Restoration. This system connects Housecall Pro's job management platform to HighLevel's CRM, syncing customer data, estimates, appointments, and job status updates across systems. The architecture uses custom code logic to parse webhook payloads, route data based on event types, and maintain consistency across multiple platforms. The system feeds into KPI dashboards and lead-pipeline reporting that align sales, operations, and management teams.
                </p>
                  <p className="text-slate-200 mb-6">
                    <strong>Key Technical Concepts:</strong> Webhook architecture, event-based routing, custom code logic, platform integration, data synchronization, multi-system orchestration, real-time automation, reporting systems.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">Webhooks</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">API Integration</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">HighLevel</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">Custom Code</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">CRM Automation</span>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-100 rounded-full text-sm font-medium">Reporting</span>
                  </div>
                  <Link href="/work/crew" asChild>
                    <Button size="lg" className="text-base px-8 py-6 bg-blue-600 hover:bg-blue-700">Explore Full Case Study with Diagrams →</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4: AI Patient Intake */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">AI Patient Intake and Routing Workflow</h3>
                <p className="text-muted-foreground mb-6">
                  A mock AI-assisted patient intake system built with n8n, OpenAI, Gmail, and Google Sheets. The workflow captures inbound inquiries, structures the data, classifies urgency and intent, routes submissions, generates follow-up drafts, logs activity, and escalates higher-risk cases for human review.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">n8n</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">OpenAI</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Human-in-the-loop</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Gmail</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Google Sheets</span>
                </div>
                <a href="https://www.youtube.com/watch?v=IwyFULvhUNU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:gap-3 transition-all hover:text-blue-200">
                  <Play size={16} />
                  Watch Demo
                </a>
              </div>
              <div className="relative w-full bg-secondary rounded-lg overflow-hidden shadow-md">
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
              <div className="relative w-full bg-secondary rounded-lg overflow-hidden shadow-md order-2 md:order-1">
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
                <h3 className="text-2xl font-bold mb-3">AI Knowledge Base and Support Agent Workflow</h3>
                <p className="text-muted-foreground mb-6">
                  A retrieval-augmented generation (RAG) workflow demonstrating how submitted Q and A pairs can be ingested, tagged, stored in a data table, and queried by an AI agent to provide grounded responses instead of generic hallucinated answers. This is a concrete example of using structured data to constrain AI outputs.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">RAG</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">AI Agents</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Knowledge Base</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Data Tables</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Grounded AI</span>
                </div>
                <a href="https://www.youtube.com/watch?v=b4F3ZLBM6ac" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:gap-3 transition-all hover:text-blue-200">
                  <Play size={16} />
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Project 6: TrialOps Board */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">TrialOps Board, Clinical Trial Operations Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  A comprehensive healthcare operations management web application designed to help teams plan, track, and coordinate clinical trial work. Features include a customizable KPI dashboard, filterable project table with inline editing, five-column kanban board for task management, review queue for approvals, team workload visualization, analytics reports, and role-based admin controls.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Full-Stack Web App</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Kanban Board</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Dashboard</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Analytics</span>
                </div>
                <a href="https://trialops.peterhelm.biz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:gap-3 transition-all hover:text-blue-200">
                  <Play size={16} />
                  View Live App
                </a>
              </div>
              <div className="relative w-full bg-secondary rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/manus-storage/Screenshot2026-05-26at12.38.11PM_31def4b1.webp"
                  alt="TrialOps Board Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Project 7: Customer Experience & Content Design */}
            <div className="card-minimal overflow-hidden p-0">
              {/* Thumbnail strip */}
              <div className="grid grid-cols-3 gap-0 h-44 overflow-hidden">
                <img
                  src="/manus-storage/Front_0ff3e5ca.png"
                  alt="The Crew sales folder front cover"
                  className="w-full h-full object-cover"
                />
                <img
                  src="/manus-storage/1_9a42a8cc.png"
                  alt="The Crew sales folder page 1"
                  className="w-full h-full object-cover"
                />
                <img
                  src="/manus-storage/ABOUT US_7a43393b.png"
                  alt="The Crew About Us page"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Customer Experience and Content Design</h3>
                <p className="text-muted-foreground mb-4">
                  Designed customer-facing content and materials for The Crew, including an eight-page educational sales folder, intake forms, referral incentives, and educational resources. Worked closely with leadership to map customer touchpoints and create materials that build trust and guide decision-making.
                </p>
                <div className="flex gap-2 flex-wrap mb-5">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Content Design</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Customer Journey</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Sales Materials</span>
                </div>
                <Link href="/work/crew/customer-experience" asChild>
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 text-sm">
                    View Gallery →
                  </Button>
                </Link>
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
              <h3 className="text-xl font-bold mb-2">Automation and Systems Specialist</h3>
              <p className="text-accent font-semibold mb-4">The Crew Cleaning and Restoration</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Designed multi-branch CRM automations using conditional logic and lifecycle triggers to improve operational efficiency and data consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Structured revenue and performance reporting systems to align marketing, sales, and operations processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Built lifecycle-based growth systems tracking acquisition, conversion, retention, referral performance, CAC, and LTV</span>
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-2">Outbound Email Specialist Intern</h3>
              <p className="text-accent font-semibold mb-4">828 Web and Marketing</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Supported outbound campaign strategy and AI-assisted personalization workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Contributed to performance tracking, reporting, and campaign optimization</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI & Automation */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">AI and Automation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>n8n</li>
                <li>OpenAI</li>
                <li>AI agents</li>
                <li>Tool calling</li>
                <li>Structured JSON outputs</li>
                <li>Workflow orchestration</li>
                <li>Human-in-the-loop systems</li>
                <li>Zapier</li>
                <li>Webhooks</li>
                <li>API exposure</li>
              </ul>
            </div>

            {/* Data & Business Analysis */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Data and Business Analysis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Requirements gathering</li>
                <li>Stakeholder translation</li>
                <li>KPI dashboard design</li>
                <li>Data validation and QA</li>
                <li>SQL fundamentals</li>
                <li>Process mapping</li>
                <li>Documentation</li>
                <li>Funnel analysis</li>
              </ul>
            </div>

            {/* Operations & Systems */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Operations and Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>CRM automation</li>
                <li>Lifecycle automation</li>
                <li>Process mapping</li>
                <li>Routing logic</li>
                <li>Business systems design</li>
                <li>Operational reporting</li>
                <li>Data consistency</li>
              </ul>
            </div>

            {/* Data & Reporting */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Data and Reporting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Sheets</li>
                <li>Excel</li>
                <li>KPI dashboards</li>
                <li>CAC and LTV tracking</li>
                <li>Revenue reporting</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Data visualization</li>
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
            <a href="https://www.linkedin.com/in/peter-helm-231042287/" className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200 inline-flex items-center justify-center gap-2">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 Peter Helm. Systems and Automation Builder.</p>
        </div>
      </footer>
    </div>
  );
}
