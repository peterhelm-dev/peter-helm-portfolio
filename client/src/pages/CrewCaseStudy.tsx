import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "wouter";

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
          <div className="w-24" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16 max-w-4xl">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Crew Business Operations & Reporting System
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Building a centralized automation and reporting system to connect sales, operations, and executive decision-making across multiple platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Workflow Automation</span>
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">CRM Integration</span>
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Reporting Architecture</span>
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">API Integrations</span>
          </div>
        </section>

        {/* System Overview Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">System Architecture Overview</h2>
          <img
            src="/manus-storage/Gemini_Generated_Image_brxj9ubrxj9ubrxj_b9d9e369.png"
            alt="AI-Enabled Business Operations & Reporting System"
            className="w-full rounded-lg shadow-lg border border-border"
          />
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Business Problem</h2>
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
          <h2 className="text-3xl font-bold mb-6">My Role & Responsibilities</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I led the complete lifecycle of this system—from initial discovery through ongoing maintenance and optimization. My responsibilities included:
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
          <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
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
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588202014/J4xrRQrRNCaF8mYqRPW9Rc/crew-system-architecture-WdY97krfgDZL2aMcYhFHfQ.webp"
            alt="The Crew System Architecture Diagram"
            className="w-full rounded-lg shadow-lg border border-border"
          />
        </section>

        {/* Process Flow Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Customer Journey & Automation Flow</h2>
          <p className="text-lg text-muted-foreground mb-8">
            This diagram shows the complete customer journey from lead capture through revenue tracking, with all automation triggers, data flows, and system integrations:
          </p>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588202014/J4xrRQrRNCaF8mYqRPW9Rc/crew-workflow-process-NwYFGEDWX4vYm98mjZQxMe.webp"
            alt="The Crew Customer Journey and Automation Flow"
            className="w-full rounded-lg shadow-lg border border-border mb-8"
          />
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
          <h2 className="text-3xl font-bold mb-6">Key Features & Capabilities</h2>
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
          <h2 className="text-3xl font-bold mb-6">Challenges Solved</h2>
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

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">60</div>
              <p className="text-sm text-muted-foreground">Leads tracked per month</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">4</div>
              <p className="text-sm text-muted-foreground">Sales representatives supported</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <p className="text-sm text-muted-foreground">Technicians managed</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">$200K+</div>
              <p className="text-sm text-muted-foreground">Monthly revenue tracked</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            The platform enabled leadership to identify bottlenecks, monitor performance, improve accountability, and make more informed operational decisions. Teams gained visibility into the entire customer journey and could respond quickly to operational issues.
          </p>
        </section>

        {/* Skills Demonstrated */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills Demonstrated</h2>
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
