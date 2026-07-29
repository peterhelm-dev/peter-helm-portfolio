import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CrewCustomerExperience() {
  const [, setLocation] = useLocation();

  const galleryItems = [
    {
      id: "folder-1",
      title: "Common Grout Problems",
      description: "Educational content explaining grout issues, causes, and troubleshooting approaches for customers",
      image: "/manus-storage/1_9a42a8cc.png",
    },
    {
      id: "folder-2",
      title: "Clean and Restore Process",
      description: "Step-by-step visual guide showing the five-stage restoration process with images and explanations",
      image: "/manus-storage/3_017d8d58.png",
    },
    {
      id: "folder-3",
      title: "About Us",
      description: "Company story, values, and differentiators designed to build trust during in-home sales visits",
      image: "/manus-storage/ABOUT US_7a43393b.png",
    },
    {
      id: "folder-4",
      title: "Frequently Asked Questions",
      description: "Comprehensive Q&A addressing common customer concerns about tile, grout, sealing, and warranties",
      image: "/manus-storage/FAQ's + CTA_46757b50.png",
    },
    {
      id: "folder-5",
      title: "Maintenance Guide",
      description: "Post-service maintenance instructions and best practices for customers to care for their floors",
      image: "/manus-storage/Maintenance_86daf494.png",
    },
    {
      id: "folder-6",
      title: "Warranty Information",
      description: "Clear explanation of warranty coverage, terms, and what is included with service",
      image: "/manus-storage/WARRANTY_6319051f.png",
    },
    {
      id: "folder-7",
      title: "What to Expect",
      description: "Preparation guide helping customers understand the service process and what happens during a job",
      image: "/manus-storage/WHAT TO EXPECT_14acb72e.png",
    },
    {
      id: "folder-8",
      title: "Referral Program",
      description: "Details on The Crew's referral incentive program encouraging customer advocacy",
      image: "/manus-storage/Page 9 - REFERRAL PROGRAM INCLUDES BOTH_bd20b26f.png",
    },
    {
      id: "gift-card-front",
      title: "Referral Gift Card - Front",
      description: "Customer-facing referral incentive card highlighting the $50 gift card offer",
      image: "/manus-storage/Front_0ff3e5ca.png",
    },
    {
      id: "gift-card-back",
      title: "Referral Gift Card - Back",
      description: "Back side of referral gift card with terms and usage information",
      image: "/manus-storage/Back_444624ae.png",
    },
    {
      id: "template-1",
      title: "Sales Folder Template - Cover",
      description: "Template design for the tile and grout restoration sales folder used in customer meetings",
      image: "/manus-storage/2_f3005aa6.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Customer Experience & Content Design</h1>
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
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

        {/* Gallery */}
        <section>
          <h2 className="section-title mb-12">Content Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="card-minimal overflow-hidden">
                <div className="mb-4 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
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
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
