import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";
import GhlGallery from "@/components/GhlGallery";

const stats = [
  { value: "6,486", label: "contacts in one CRM" },
  { value: "27", label: "smart lists by industry, owner and priority" },
  { value: "5", label: "Housecall Pro job events synced to the pipeline" },
  { value: "8+", label: "pipeline stage triggers feeding a reporting sheet" },
];

const built = [
  { title: "CRM and smart lists", body: "Lists by industry, plus a high, medium and low priority list for each salesperson. Touchpoint date and cadence columns show who is due for a call. Housecall Pro customer IDs are stored on each contact." },
  { title: "Pipeline sync from Housecall Pro", body: "Five job events arrive by webhook: scheduled, rescheduled, updated, techs assigned, completed. Each one looks for the matching opportunity, updates it, or creates it if it is missing. Sales can still drag cards by hand." },
  { title: "Meeting-booked automation", body: "When a meeting is booked, the workflow finds or creates the opportunity, assigns the owner, waits two hours, then sends a follow-up education text. A tag stops the same message from going out twice." },
  { title: "Calendar sync", body: "Two-way Google Calendar sync. New bookings land on the team's real calendar, and calendar events show up in the system. Conflict calendars keep double-booking out." },
  { title: "Stage-change reporting", body: "Every pipeline stage change adds or updates a row in a Google Sheet. That sheet feeds a scorecard the owners read." },
];

export default function GhlCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-sm md:text-lg text-center px-2 truncate">GoHighLevel Case Study</h1>
          <div className="w-24 flex justify-end"><ThemeToggle /></div>
        </div>
      </nav>

      <main className="container py-16 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-xl md:text-2xl mb-6">GoHighLevel automation for a home-services company</h1>
          <p className="text-xl text-muted-foreground mb-8">
            I ran the GoHighLevel build for a company with water restoration and flooring divisions: CRM, pipeline, calendar, follow-up messages, and reporting. Job data from Housecall Pro kept the pipeline current without retyping.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="pixel-badge-light">GoHighLevel</span>
            <span className="pixel-badge-light">Webhooks</span>
            <span className="pixel-badge-light">CRM Automation</span>
            <span className="pixel-badge-light">Reporting</span>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-minimal !p-5">
                <div className="text-accent mb-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "1.1rem" }}>{s.value}</div>
                <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">What I built</h2>
          <div className="space-y-4">
            {built.map((b) => (
              <div key={b.title} className="card-minimal">
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-3">Screenshots</h2>
          <p className="text-muted-foreground mb-8">Click any image to enlarge.</p>
          <GhlGallery />
        </section>

        <section className="mb-16">
          <h2 className="text-lg md:text-xl mb-6">Why smart lists first</h2>
          <p className="text-lg text-muted-foreground">
            A smart list is a saved filter. It gives each salesperson a working view of their own contacts without touching the pipeline. If you set up one thing in a new account, set up these. Tag consistently from day one so the filters stay simple.
          </p>
        </section>

        <section className="mt-20 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Want something like this?</h2>
            <p className="text-muted-foreground mb-8">
              I can build or clean up a CRM, pipeline and follow-up system for your business. Let's talk.
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
