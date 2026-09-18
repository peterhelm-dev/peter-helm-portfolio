import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function CrewCustomerExperience() {
  const [, setLocation] = useLocation();

  const galleryItems = [
    {
      id: "folder-1",
      title: "Common Grout Problems",
      description: "Educational content explaining grout issues, causes, and troubleshooting approaches for customers",
      image: "/images/crew/sales-folder-page1.png",
    },
    {
      id: "folder-2",
      title: "Clean and Restore Process",
      description: "Step-by-step visual guide showing the five-stage restoration process with images and explanations",
      image: "/images/crew/clean-restore-process.png",
    },
    {
      id: "folder-3",
      title: "About Us",
      description: "Company story, values, and differentiators designed to build trust during in-home sales visits",
      image: "/images/crew/about-us.png",
    },
    {
      id: "folder-4",
      title: "Frequently Asked Questions",
      description: "Comprehensive Q&A addressing common customer concerns about tile, grout, sealing, and warranties",
      image: "/images/crew/faq.png",
    },
    {
      id: "folder-5",
      title: "Maintenance Guide",
      description: "Post-service maintenance instructions and best practices for customers to care for their floors",
      image: "/images/crew/maintenance.png",
    },
    {
      id: "folder-6",
      title: "Warranty Information",
      description: "Clear explanation of warranty coverage, terms, and what is included with service",
      image: "/images/crew/warranty.png",
    },
    {
      id: "folder-7",
      title: "What to Expect",
      description: "Preparation guide helping customers understand the service process and what happens during a job",
      image: "/images/crew/what-to-expect.png",
    },
    {
      id: "folder-8",
      title: "Referral Program",
      description: "Details on The Crew's referral incentive program encouraging customer advocacy",
      image: "/images/crew/referral-program.png",
    },
    {
      id: "gift-card-front",
      title: "Referral Gift Card - Front",
      description: "Customer-facing referral incentive card highlighting the $50 gift card offer",
      image: "/images/crew/sales-folder-cover.png",
    },
    {
      id: "gift-card-back",
      title: "Referral Gift Card - Back",
      description: "Back side of referral gift card with terms and usage information",
      image: "/images/crew/referral-card-back.png",
    },
    {
      id: "template-1",
      title: "Sales Folder Template - Cover",
      description: "Template design for the tile and grout restoration sales folder used in customer meetings",
      image: "/images/crew/sales-folder-template-cover.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-accent hover:text-accent-foreground transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>
          <h1 className="text-sm md:text-lg text-center px-2 truncate">Customer Experience & Content Design</h1>
          <div className="flex-shrink-0"><ThemeToggle /></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div className="max-w-3xl">
            <h2 className="section-title mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At The Crew Cleaning and Restoration, I designed customer-facing content and materials that shaped how customers understood and experienced the service. This work went beyond automation and systems to focus on the human side of the business: making information clear, building trust, and guiding customers through their decision-making process.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Working in close collaboration with the CEO, I mapped customer touchpoints, identified information gaps, and created materials that customers actually used and valued. This included an eight-page educational sales folder for in-home estimates, intake and estimate forms, referral incentive materials, and educational content delivered via text, email, and PDF.
            </p>
            <p className="text-lg text-muted-foreground">
              The work demonstrates a core principle: systems and automation serve people. When you understand what customers need to know and when they need to know it, you can design experiences that feel thoughtful and trustworthy, not just efficient.
            </p>
          </div>
        </section>

        {/* Design Evolution */}
        <section className="mb-20 pt-16 border-t border-border">
          <h2 className="section-title mb-4">How My Design Work Evolved</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            These are real materials I made for The Crew over about a year, in the order I made them. I'm including the early one on purpose, it's not my best work, but it's honest evidence of where I started and how much the later pieces improved.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-minimal overflow-hidden">
              <div className="mb-4 bg-muted pixel-frame">
                <img src="/images/crew/design-evolution/2024-thanksgiving-flyer.jpg" alt="Thanksgiving promotional flyer, November 2024" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Nov 2024</p>
              <h3 className="text-lg font-bold mb-2">Thanksgiving Promo Flyer</h3>
              <p className="text-muted-foreground text-sm">
                My early marketing design. There's a real offer and a QR code, but the layout is doing too much: a decorative border competing with the headline, mismatched fonts, and no clear single focal point. Functional, not disciplined.
              </p>
            </div>
            <div className="card-minimal overflow-hidden">
              <div className="mb-4 bg-muted pixel-frame">
                <img src="/images/crew/design-evolution/2025-gift-card-front.jpg" alt="Referral gift card front, 2025" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Mid 2025</p>
              <h3 className="text-lg font-bold mb-2">Referral Gift Card</h3>
              <p className="text-muted-foreground text-sm">
                One offer, one number, one photo. Everything else (color, texture, logo placement) supports that hierarchy instead of competing with it. This is the same brand, a lot more restraint.
              </p>
            </div>
            <div className="card-minimal overflow-hidden">
              <div className="mb-4 bg-muted pixel-frame">
                <img src="/images/crew/design-evolution/2025-b2b-handout.jpg" alt="26-page B2B commercial floor maintenance sales handout, late 2025" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Late 2025</p>
              <h3 className="text-lg font-bold mb-2">26-Page B2B Sales Handout</h3>
              <p className="text-muted-foreground text-sm">
                A full commercial sales document with a clickable outline, a repeating header template, and consistent typography across every page. This is a design system, not a single asset: the same decisions applied 26 times without drifting.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="section-title mb-12">Content Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="card-minimal overflow-hidden">
                <div className="mb-4 bg-muted pixel-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                    onError={(e) => { if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.display = "none"; }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Automated Customer Messaging */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2 className="section-title mb-4">Automated Messaging, Still a Good Experience</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Part of the automation infrastructure I built at The Crew includes an AI reply system for Google reviews. These are real, unedited screenshots from the review dashboard, "Replied By Reviews AI" is the system responding automatically, not a person typing it live. The goal was a reply that sounds like the business actually read the review, every time, without anyone having to sit down and write one.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-minimal overflow-hidden">
              <div className="mb-4 bg-muted pixel-frame">
                <img src="/images/crew/reviews/ai-reply-timothy.jpg" alt="Google review from Timothy Robey with an automated reply from Reviews AI" className="w-full h-auto object-cover" />
              </div>
              <p className="text-muted-foreground text-sm">
                A 5-star review about carpet and grout cleaning, answered automatically within about 25 minutes, specific to what he actually mentioned instead of a generic thank-you.
              </p>
            </div>
            <div className="card-minimal overflow-hidden">
              <div className="mb-4 bg-muted pixel-frame">
                <img src="/images/crew/reviews/ai-reply-sherri.jpg" alt="Google review from Sherri Ann Bennett with an automated reply from Reviews AI" className="w-full h-auto object-cover" />
              </div>
              <p className="text-muted-foreground text-sm">
                Same system, a different customer and a different job (tile and grout color sealing), and the reply still reads like it was written for her specifically, not copy-pasted.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2 className="section-title mb-8">Skills Demonstrated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Customer Journey Mapping", description: "Identified touchpoints and information needs across the customer lifecycle" },
              { title: "Content Strategy", description: "Designed educational materials that address customer concerns and build confidence" },
              { title: "Visual Design", description: "Created clear, professional layouts that guide customers through complex information" },
              { title: "Collaboration", description: "Worked closely with leadership to align messaging with company values and brand" },
              { title: "Sales Enablement", description: "Built materials that support the sales team and improve close rates" },
              { title: "User Experience", description: "Focused on clarity and accessibility, making technical information approachable" },
            ].map((skill, idx) => (
              <div key={idx} className="card-minimal">
                <h3 className="font-bold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Want to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              I help businesses design systems, automations, and customer experiences that work together. Whether you need operational improvements, customer-facing content, or both, let's talk.
            </p>
            <Button
              onClick={() => setLocation("/contact")}
              className="pixel-border"
            >
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
