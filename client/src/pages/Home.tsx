import { ArrowRight, Github, Linkedin, Mail, Play } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";

/**
 * Peter Helm Portfolio - Home Page
 * Design: Minimalist Tech Elegance
 * Positioning: AI Workflow & Operations Builder
 * - Professional, practical, recruiter-ready
 * - Dark/neutral background with green/blue AI accents
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
            <Link href="/blog" className="nav-link">Blog</Link>
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
        <div className="absolute inset-0">
          <img 
            src="/manus-storage/hero-with-headshot_b380b844.png"
            alt="Hero Background with Headshot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                AI Workflow & <span className="text-accent">Operations</span> Builder
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I design and build practical AI-powered workflows, automation systems, and operational tools for teams that need cleaner processes, faster follow-up, and better visibility.
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
                I'm focused on the intersection of AI operations, workflow automation, revenue operations, and business systems. My work combines process mapping, structured outputs, automation logic, CRM/lifecycle systems, and operational reporting to turn ambiguous workflows into usable systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I build with n8n, OpenAI, and modern data tools. I design human-in-the-loop systems that leverage AI without replacing judgment. I turn messy business processes into clean, documented, scalable automation workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI Workflow Design</h3>
                    <p className="text-muted-foreground">Build practical AI-powered workflows with structured outputs and human review</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Operations & Systems</h3>
                    <p className="text-muted-foreground">Design CRM automations, lifecycle systems, and operational reporting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Process Mapping & Automation</h3>
                    <p className="text-muted-foreground">Translate messy business processes into clean, documented automation workflows</p>
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
            Real-world examples of AI workflows, automation systems, and operational tools I've built.
          </p>

          <div className="space-y-20">
            {/* Project 1: AI Patient Intake */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">AI Patient Intake & Routing Workflow</h3>
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
                <a href="https://www.youtube.com/watch?v=IwyFULvhUNU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
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

            {/* Project 2: AI Knowledge Base */}
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
                <h3 className="text-2xl font-bold mb-3">AI Knowledge Base / Support Agent Workflow</h3>
                <p className="text-muted-foreground mb-6">
                  An AI workflow project demonstrating how submitted Q&A pairs can be ingested, tagged with AI, stored in a data table, and queried by an AI agent to provide grounded responses instead of generic hallucinated answers.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">AI Agents</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Knowledge Base</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Data Tables</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Grounded AI</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Prompting</span>
                </div>
                <a href="https://www.youtube.com/watch?v=b4F3ZLBM6ac" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  <Play size={16} />
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Project 3: TrialOps Board */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">TrialOps Board — Clinical Trial Operations Dashboard</h3>
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
                <a href="https://trialops.peterhelm.biz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
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

            {/* Project 4: The Crew Automation Showcase */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative w-full bg-secondary rounded-lg overflow-hidden shadow-md order-2 md:order-1">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/2-a-EwNlgoY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="The Crew Housecall Pro to HighLevel Integration"
                  ></iframe>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-3">The Crew: Housecall Pro to HighLevel Integration</h3>
                <p className="text-muted-foreground mb-6">
                  A deep dive into the webhook-based integration I built at The Crew Cleaning & Restoration. This workflow connects Housecall Pro's job management system to HighLevel's CRM, syncing customer data, estimates, appointments, and job status updates across platforms. The system uses custom code to parse webhook payloads, route data based on event types, and maintain data consistency across multiple systems.
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  <strong>Key Technical Concepts:</strong> Webhook architecture, event-based routing, custom code logic, platform integration, data synchronization, and multi-system orchestration.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Webhooks</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">API Integration</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">HighLevel</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Custom Code</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">CRM Automation</span>
                </div>
                <a href="https://youtu.be/2-a-EwNlgoY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  <Play size={16} />
                  Watch Full Walkthrough
                </a>
              </div>
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
              <h3 className="text-xl font-bold mb-2">Automation Builder + Marketing Coordinator</h3>
              <p className="text-accent font-semibold mb-4">The Crew Cleaning & Restoration</p>
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
              <p className="text-accent font-semibold mb-4">828 Web & Marketing</p>
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
          <h2 className="section-title mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI & Automation */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">AI & Automation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>n8n</li>
                <li>OpenAI</li>
                <li>AI agents</li>
                <li>Structured JSON outputs</li>
                <li>Workflow orchestration</li>
                <li>Human-in-the-loop systems</li>
                <li>Zapier</li>
                <li>Webhooks</li>
                <li>API exposure</li>
              </ul>
            </div>

            {/* Operations & Systems */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Operations & Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>CRM automation</li>
                <li>Lifecycle automation</li>
                <li>Process mapping</li>
                <li>Routing logic</li>
                <li>Business systems design</li>
                <li>Operational reporting</li>
              </ul>
            </div>

            {/* Data & Reporting */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Data & Reporting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Sheets</li>
                <li>Excel</li>
                <li>KPI dashboards</li>
                <li>CAC/LTV tracking</li>
                <li>Funnel analytics</li>
                <li>Revenue reporting</li>
                <li>SQL foundations</li>
              </ul>
            </div>

            {/* UX / Product */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">UX / Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>App prototyping</li>
                <li>Workflow diagrams</li>
                <li>SIPOC</li>
                <li>Swimlane diagrams</li>
                <li>Customer journey mapping</li>
                <li>Internal tool design</li>
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
            I work with teams and organizations that need practical AI systems, workflow automation, and operational tools.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">AI Workflow Automation</h3>
              <p className="text-muted-foreground">
                Design and build AI-powered workflows that handle intake, routing, classification, and human review. Structured outputs, not hallucinations.
              </p>
            </div>

            {/* Service 2 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">CRM & Lifecycle Systems</h3>
              <p className="text-muted-foreground">
                Build multi-branch CRM automations, lifecycle triggers, and conditional logic that improve operational efficiency and data consistency.
              </p>
            </div>

            {/* Service 3 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Internal Tool Prototyping</h3>
              <p className="text-muted-foreground">
                Rapid prototyping of internal tools, dashboards, and workflow apps. From concept to working prototype in days.
              </p>
            </div>

            {/* Service 4 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Revenue & Operations Reporting</h3>
              <p className="text-muted-foreground">
                Design KPI dashboards, funnel analytics, CAC/LTV tracking, and revenue reporting systems that align teams.
              </p>
            </div>

            {/* Service 5 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">Business Process Mapping</h3>
              <p className="text-muted-foreground">
                Audit messy workflows, identify automation opportunities, and create structured automation plans with implementation steps.
              </p>
            </div>

            {/* Service 6 */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-3">AI Agent Workflow Design</h3>
              <p className="text-muted-foreground">
                Build AI agents that leverage knowledge bases, structured data, and grounded responses for support and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Blog Section */}
      <section id="blog" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <h2 className="section-title mb-4">From the Blog</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Notes on AI workflows, automation, and operations from building real systems.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all whitespace-nowrap">
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-minimal group flex flex-col">
                <p className="text-sm text-muted-foreground mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground flex-1">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-6">Let's Build Practical AI Systems</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm open to roles and projects involving AI operations, workflow automation, revenue operations, marketing systems, and internal tools.
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
          <p>&copy; 2026 Peter Helm. AI Workflow & Operations Builder.</p>
        </div>
      </footer>
    </div>
  );
}
