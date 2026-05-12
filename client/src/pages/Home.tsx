import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Play } from "lucide-react";
import { Link } from "wouter";

/**
 * Peter Helm Portfolio - Home Page
 * Design: Minimalist Tech Elegance
 * - Clean typography hierarchy with Playfair Display for titles
 * - Off-white background with deep slate blue accents
 * - Asymmetric layouts with generous whitespace
 * - Minimal animations and subtle hover effects
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
            <a href="#work" className="nav-link">Work</a>
            <a href="#expertise" className="nav-link">Expertise</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588202014/J4xrRQrRNCaF8mYqRPW9Rc/hero-abstract-tech-8F6M5LueTpeM9gQBrY22Zu.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                GTM Effectiveness & <span className="text-accent">Automation</span> Specialist
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I build workflows that scale. From HighLevel and Housecall Pro integrations to custom API automation, I transform messy business processes into reliable, repeatable systems that drive revenue.
              </p>
              <div className="flex gap-4">
                <a href="#work" className="cta-button inline-flex items-center">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="#contact" className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: Headshot */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-accent/10 rounded-lg blur-2xl"></div>
                <img 
                  src="/manus-storage/peter-headshot_004a866d.png"
                  alt="Peter Helm"
                  className="relative rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Portfolio Showcase Section */}
      <section id="work" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="section-title mb-4">View My Work</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Explore my portfolio organized by category. Click on any category to see detailed case studies and demonstrations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* N8N & AI Agents Card */}
            <Link href="/work/n8n">
              <div className="group card-minimal cursor-pointer hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">🤖</div>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">N8N & AI Agents</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Automation workflows and AI agent integrations. Watch detailed walkthroughs of complex automations.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  <Play size={16} />
                  View Videos
                </div>
              </div>
            </Link>

            {/* Additional Portfolio Categories - Placeholder */}
            <div className="card-minimal opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🔗</div>
                <h3 className="text-xl font-bold">API Integrations</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Coming soon. Custom API integrations and workflow automations.
              </p>
              <div className="text-muted-foreground text-sm font-semibold">
                Coming Soon
              </div>
            </div>

            <div className="card-minimal opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📊</div>
                <h3 className="text-xl font-bold">Data Pipelines</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Coming soon. Data processing and analytics workflows.
              </p>
              <div className="text-muted-foreground text-sm font-semibold">
                Coming Soon
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
                I'm a systems thinker obsessed with eliminating friction. Over the past few years, I've built dozens of workflows that handle high execution volumes—translating messy business processes into clean, automated systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My sweet spot is GTM effectiveness: I find workflow bottlenecks, redesign processes, and build integrations using APIs, webhooks, and JSON. I've worked in 0→1 environments where precision and ownership matter.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Workflow Automation</h3>
                    <p className="text-muted-foreground">Built dozens of automations handling high execution volumes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">API & Integration Expertise</h3>
                    <p className="text-muted-foreground">Proficient with APIs, webhooks, JSON, and custom integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Process Design & Debugging</h3>
                    <p className="text-muted-foreground">Translate business needs into reliable, scalable systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title text-center mb-16">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-minimal">
              <div className="text-4xl font-bold text-accent mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">GTM Systems</h3>
              <p className="text-muted-foreground">
                Design and optimize go-to-market workflows. Eliminate friction in sales, marketing, and operations processes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-minimal">
              <div className="text-4xl font-bold text-accent mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3">API Integration</h3>
              <p className="text-muted-foreground">
                Connect disparate systems using APIs, webhooks, and custom code. HighLevel, Housecall Pro, Sheets, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-minimal">
              <div className="text-4xl font-bold text-accent mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-muted-foreground">
                Build reliable automations that scale. Debug failures, improve reliability, and document for handoff.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card-minimal">
              <div className="text-4xl font-bold text-accent mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Workflow Design</h3>
              <p className="text-muted-foreground">
                Translate messy business processes into clean, structured workflows. End-to-end ownership and documentation.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card-minimal">
              <div className="text-4xl font-bold text-accent mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Scaling & Reliability</h3>
              <p className="text-muted-foreground">
                Handle high execution volumes. Monitor, debug, and improve system reliability over time.
              </p>
            </div>

            {/* Card 6 */}
            <div className="card-minimal">
              <div className="text-4xl font-bold text-accent mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-muted-foreground">
                Clear, structured documentation for handoff. Ensure systems are maintainable and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <h2 className="section-title mb-16">Notable Projects</h2>
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">HighLevel Workflow Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Built comprehensive automation suite for a service business, integrating HighLevel with Housecall Pro and Google Sheets. Reduced manual data entry by 80% and improved lead response time.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">HighLevel</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">APIs</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Webhooks</span>
                </div>
              </div>
              <div className="bg-secondary rounded-lg h-64 flex items-center justify-center text-muted-foreground">
                [Project Screenshot]
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-secondary rounded-lg h-64 flex items-center justify-center text-muted-foreground order-2 md:order-1">
                [Project Screenshot]
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-3">Multi-System Integration Hub</h3>
                <p className="text-muted-foreground mb-4">
                  Designed and implemented a central integration hub connecting CRM, accounting, and operational systems. Standardized data flow across platforms and reduced integration maintenance time by 60%.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">JSON</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">REST APIs</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Process Design</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Operational Workflow Redesign</h3>
                <p className="text-muted-foreground mb-4">
                  Analyzed and redesigned core operational workflows for a scaling team. Implemented automation for repetitive tasks and created comprehensive documentation. Improved team efficiency by 40%.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Workflow Design</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Documentation</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Automation</span>
                </div>
              </div>
              <div className="bg-secondary rounded-lg h-64 flex items-center justify-center text-muted-foreground">
                [Project Screenshot]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-6">Let's Talk</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm interested in GTM effectiveness and automation roles. Let's discuss how I can help optimize your workflows and scale your systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:peter@example.com" className="cta-button inline-flex items-center justify-center gap-2">
              <Mail size={18} /> Send Email
            </a>
            <a href="https://linkedin.com" className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200 inline-flex items-center justify-center gap-2">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 Peter Helm. Designed with precision.</p>
        </div>
      </footer>
    </div>
  );
}
