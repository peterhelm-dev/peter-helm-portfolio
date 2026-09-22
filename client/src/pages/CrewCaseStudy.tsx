import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

export default function CrewCaseStudy() {
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
          <h1 className="text-lg font-semibold">The Crew Case Study</h1>
          <div className="w-24 flex justify-end"><ThemeToggle /></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16 max-w-4xl">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-xl md:text-2xl mb-6">
            The Crew Business Operations & Reporting System
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Building a centralized automation and reporting system to connect sales, operations, and executive decision-making across multiple platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="pixel-badge-light">Workflow Automation</span>
            <span className="pixel-badge-light">CRM Integration</span>
            <span className="pixel-badge-light">Reporting Architecture</span>
            <span className="pixel-badge-light">API Integrations</span>
          </div>
        </section>

        {/* System Overview Diagram */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">System Architecture Overview</h2>
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
            {[
              { label: "Lead sources", sub: "Calls, web, referrals" },
              { label: "GoHighLevel", sub: "CRM + 13-stage pipeline" },
              { label: "Housecall Pro", sub: "Jobs + scheduling" },
              { label: "Zapier + webhooks", sub: "Sync + automation" },
              { label: "Google Sheets", sub: "Scorecards + reporting" },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-2 flex-1">
                <div className="pixel-border-sm bg-card p-3 text-center flex-1">
                  <div className="text-sm font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem", lineHeight: 1.6 }}>{node.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{node.sub}</div>
                </div>
                {i < arr.length - 1 && <div className="text-accent-warm text-center" aria-hidden="true">▶</div>}
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">The Business Problem</h2>
          <p className="text-lg text-muted-foreground mb-6">
            As The Crew Cleaning & Restoration grew, leadership faced a critical challenge: information was scattered across multiple systems, reporting required manual effort, and it was difficult to identify bottlenecks in the customer journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/50 p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-3">Before</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lead information scattered across systems</li>
                <li>• Manual reporting processes</li>
                <li>• Inconsistent performance metrics</li>
                <li>• No operational visibility</li>
                <li>• Teams working from different data</li>
              </ul>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-3">After</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Centralized data hub</li>
                <li>• Automated reporting</li>
                <li>• Real-time performance tracking</li>
                <li>• Full operational visibility</li>
                <li>• Single source of truth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">My Role & Responsibilities</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I led the complete lifecycle of this system, from initial discovery through ongoing maintenance and optimization. My responsibilities included:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-accent">Analysis & Design</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gathered requirements from leadership and teams</li>
                <li>• Mapped business processes end-to-end</li>
                <li>• Designed workflow logic and data flows</li>
                <li>• Identified integration points</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">Implementation & Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Built integrations between systems</li>
                <li>• Created reporting dashboards</li>
                <li>• Troubleshot data and workflow issues</li>
                <li>• Trained users and documented processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">System Architecture</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The system integrated multiple operational platforms into a unified workflow:
          </p>
          <div className="bg-secondary/30 p-8 rounded-lg border border-border mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-accent">Core Platforms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Housecall Pro (Job Management)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>GoHighLevel CRM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Google Sheets (Reporting)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Zapier (Automation)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-accent">Data Movement</h3>
                <p className="text-sm text-muted-foreground">
                  Data flowed between systems through APIs, webhooks, workflow automations, and reporting integrations, creating a unified view of the entire customer lifecycle.
                </p>
              </div>
            </div>
          </div>
          <h3 className="font-semibold mb-2">How the HighLevel workspace is organized</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Twenty-five workflows only stay maintainable if there's a rule for where each one lives. I wrote a placement guide so anyone can answer "which folder does this belong in?" with a single question, and this is the resulting structure:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "01 Sales Pipeline", rule: "Does it move, track, qualify, or report on a lead?", items: ["Inbound Lead", "Contact Stages", "Unqualified & Lost", "Meeting Set", "Estimates", "Google Sheet Scorecard", "HCP Integration"] },
              { name: "02 IVR Phone System", rule: "Did it start from a phone call or call-routing event?", items: ["Flooring", "Water"] },
              { name: "03 Loyalty", rule: "Does it build a long-term relationship?", items: ["Plumber Nurture", "Referral System", "Residential + Commercial Nurture", "Reviews"] },
              { name: "04 Internal Ops", rule: "Is it about running the business itself?", items: ["Maintenance Accounts", "Water Pipeline"] },
            ].map((folder) => (
              <div key={folder.name} className="card-minimal">
                <h4 className="font-bold mb-1 text-accent" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem", lineHeight: 1.7 }}>{folder.name}</h4>
                <p className="text-sm text-muted-foreground italic mb-3">{folder.rule}</p>
                <ul className="space-y-1 text-sm">
                  {folder.items.map((item) => (
                    <li key={item} className="text-foreground">└ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Plus two housekeeping folders: a Sandbox for testing changes before they touch live customers, and an Archive so retired workflows are kept instead of deleted.
          </p>
        </section>

        {/* Process Flow Diagram */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Customer Journey & Automation Flow</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The customer journey runs through seven stages, from lead capture through revenue tracking, and each stage has its own automation triggers and hand-offs:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["Lead Capture", "Lead Routing", "Estimate", "Scheduling", "Completion", "Revenue Tracking", "Reporting"].map((stage, i) => (
              <div key={stage} className="pixel-border-sm bg-card p-3 text-center">
                <div className="text-accent-warm mb-1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="text-base font-bold">{stage}</div>
              </div>
            ))}
          </div>
          <div className="bg-secondary/30 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-3">Key Workflow Stages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Lead Capture:</strong> Leads enter from multiple sources and are logged in both Housecall Pro and GoHighLevel</li>
              <li><strong>Lead Routing:</strong> Automated assignment to sales representatives based on territory, availability, and lead type</li>
              <li><strong>Estimate Generation:</strong> Estimates created and sent to customers with automatic follow-up sequences</li>
              <li><strong>Job Scheduling:</strong> Accepted estimates become scheduled jobs with customer confirmations and reminders</li>
              <li><strong>Job Completion:</strong> Technician completion triggers invoicing and customer satisfaction workflows</li>
              <li><strong>Revenue Tracking:</strong> Payments recorded and linked to original leads for ROI analysis</li>
              <li><strong>Reporting:</strong> All data aggregated for daily, weekly, and monthly performance dashboards</li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Key Features & Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-accent">Sales & Marketing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lead tracking</li>
                <li>• Lead source reporting</li>
                <li>• Estimate close rates</li>
                <li>• Sales pipeline visibility</li>
                <li>• Referral tracking</li>
              </ul>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-accent">Operations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Technician performance</li>
                <li>• Job completion metrics</li>
                <li>• Revenue reporting</li>
                <li>• Average job value</li>
                <li>• Team scorecards</li>
              </ul>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-accent">Automation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lead routing</li>
                <li>• Customer communications</li>
                <li>• Internal notifications</li>
                <li>• Pipeline updates</li>
                <li>• Reporting updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges Solved */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Challenges Solved</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Building this system required solving several technical and operational challenges:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Duplicate Records</h3>
                <p className="text-sm text-muted-foreground">Implemented deduplication logic to ensure single source of truth across systems</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Data Synchronization</h3>
                <p className="text-sm text-muted-foreground">Built webhook-based sync mechanisms to keep data consistent across platforms</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Workflow Failures</h3>
                <p className="text-sm text-muted-foreground">Implemented error handling, logging, and retry logic for reliable automation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Data Entry Consistency</h3>
                <p className="text-sm text-muted-foreground">Created validation rules and user training to ensure data quality</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Cross-System Record Matching</h3>
                <p className="text-sm text-muted-foreground">Developed matching algorithms to link records across different systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Deep Dive */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Engineering Deep Dive: Appointment Sync</h2>
          <p className="text-lg text-muted-foreground mb-6">
            The core piece of custom code in this system is a webhook-triggered script that keeps appointments in sync between Housecall Pro and GoHighLevel whenever a job is created, rescheduled, or canceled. Housecall Pro and GoHighLevel don't share a native record ID, so the sync couldn't just match on a primary key. Here's how it actually works:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Matching without a shared ID</h3>
                <p className="text-sm text-muted-foreground">Paginates GoHighLevel's API to match records on a custom field, since the two platforms have no common identifier to join on</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Routing business logic</h3>
                <p className="text-sm text-muted-foreground">Branches the sync logic differently for commercial versus residential jobs, since each follows a different pipeline and set of fields</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Idempotent state tracking</h3>
                <p className="text-sm text-muted-foreground">Maintains a persistent ID mapping between the two systems so a repeat or duplicate webhook event updates the existing record instead of creating a new one</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Technician assignment</h3>
                <p className="text-sm text-muted-foreground">Assigns the correct technician to the job on the CRM side via API once the appointment details are confirmed</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-1">Self-verification</h3>
                <p className="text-sm text-muted-foreground">Refetches the record immediately after writing to confirm the write actually persisted, instead of assuming a 200 response means the data is correct</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            A companion script normalizes eight different Housecall Pro webhook event types into one stable schema before they hit the sync logic, so the rest of the system only has to reason about a single consistent event shape.
          </p>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">356</div>
              <p className="text-sm text-muted-foreground">Leads tracked through a 13-stage GoHighLevel pipeline</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">$524,881</div>
              <p className="text-sm text-muted-foreground">Revenue tracked from those leads</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">51%</div>
              <p className="text-sm text-muted-foreground">Close rate on tracked leads</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">25</div>
              <p className="text-sm text-muted-foreground">Workflows built across five connected platforms</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            The platform enabled leadership to identify bottlenecks, monitor performance, improve accountability, and make more informed operational decisions. Teams gained visibility into the entire customer journey and could respond quickly to operational issues.
          </p>
        </section>

        {/* Skills Demonstrated */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Skills Demonstrated</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Business Systems Analysis",
              "Workflow Automation",
              "CRM Administration",
              "API Integrations",
              "Webhooks & Event-Based Architecture",
              "Reporting Architecture",
              "Dashboard Development",
              "Data Validation & Quality",
              "Process Mapping",
              "Technical Documentation",
              "Stakeholder Communication",
              "Operational Analytics"
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Automations in practice */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-3">The Automations, In Practice</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Real screenshots from the working system, not mockups.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { image: "/images/crew/artifacts/zapier-automations.jpg", alt: "Zapier folder for The Crew listing four automations", caption: "The Crew's Zapier folder: CRM sync, the Housecall Pro import, the referral program email, and the Mailchimp review-tagging automation." },
              { image: "/images/crew/artifacts/ai-sales-bot-config.jpg", alt: "GoHighLevel conversation AI bot configuration", caption: "Configuring the AI text-message assistant in GoHighLevel: its persona, its objective (get the customer to book), and limits like a response cap and a wait time so it never feels spammy." },
            ].map((item) => (
              <div key={item.image} className="card-minimal">
                <div className="mb-4 bg-muted pixel-frame">
                  <img src={item.image} alt={item.alt} className="w-full h-auto" />
                </div>
                <p className="text-sm text-muted-foreground">{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Experience Gallery */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-3">Customer Experience & Content Design</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Alongside the technical integration work, I designed customer-facing marketing and sales materials: referral collateral, yard signs, testimonial graphics, and partner promotions. See the full write-up, including how my design work evolved, on the <Link href="/work/crew/customer-experience" className="text-accent underline">Customer Experience page</Link>.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Referral Gift Card, Front", description: "Referral incentive card built around one offer and one photo", image: "/images/crew/sales-folder-cover.png" },
              { title: "Referral Gift Card, Back", description: "Back of the card with terms and how to redeem", image: "/images/crew/referral-card-back.png" },
              { title: "Yard Sign: Dirty Grout?", description: "Roadside sign with one question, a huge phone number, and the logo", image: "/images/crew/artifacts/yard-sign-dirty-grout.jpg" },
              { title: "Yard Sign: Clean and Seal", description: "Second sign variant for the tile and grout service line", image: "/images/crew/artifacts/yard-sign-clean-seal.jpg" },
              { title: "Testimonial Graphic", description: "A real customer quote turned into a shareable social post", image: "/images/crew/artifacts/testimonial-graphic.jpg" },
              { title: "Partner Promo Graphic", description: "Co-branded graphic for a water-damage partner promotion", image: "/images/crew/artifacts/ostrom-partner-graphic.jpg" },
            ].map((item) => (
              <div key={item.title} className="group pixel-frame bg-card hover:-translate-y-1 transition-transform">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-secondary/50 p-8 rounded-lg border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to discuss your automation needs?</h2>
          <p className="text-muted-foreground mb-6">Let's explore how I can help streamline your operations.</p>
          <Link href="/contact" asChild>
            <Button size="lg" className="gap-2">
              Get in Touch
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
