import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * N8N & AI Agents Showcase Page
 * Design: Minimalist Tech Elegance
 * - Clean grid layout for video showcases
 * - Embedded Loom videos for easy viewing
 * - Back navigation to portfolio
 */

interface VideoItem {
  id: string;
  title: string;
  description: string;
  loomUrl: string;
  tags: string[];
}

export default function N8nShowcase() {
  // Videos will be populated with actual Loom URLs
  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Workflow Automation Demo",
      description: "Building a complete automation workflow from scratch using n8n",
      loomUrl: "https://www.loom.com/embed/placeholder1",
      tags: ["n8n", "Automation", "Workflow"],
    },
    {
      id: "2",
      title: "AI Agent Integration",
      description: "Integrating AI agents with business processes",
      loomUrl: "https://www.loom.com/embed/placeholder2",
      tags: ["AI Agents", "Integration", "n8n"],
    },
    {
      id: "3",
      title: "API Orchestration",
      description: "Orchestrating multiple APIs with n8n",
      loomUrl: "https://www.loom.com/embed/placeholder3",
      tags: ["APIs", "n8n", "Integration"],
    },
    {
      id: "4",
      title: "Data Processing Pipeline",
      description: "Building scalable data processing workflows",
      loomUrl: "https://www.loom.com/embed/placeholder4",
      tags: ["Data", "Pipeline", "Automation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="text-2xl font-bold text-accent">PH</div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <h1 className="section-title mb-4">N8N & AI Agents</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore my work with n8n automation and AI agent integrations. Click on any video to watch a detailed walkthrough of the workflow, implementation details, and results.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {videos.map((video) => (
              <div key={video.id} className="group">
                {/* Video Embed Container */}
                <div className="relative w-full bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={video.loomUrl}
                      frameBorder="0"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      title={video.title}
                    ></iframe>
                  </div>
                </div>

                {/* Video Info */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {video.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          {videos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                Videos coming soon. Check back for detailed walkthroughs of n8n workflows and AI agent integrations.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-6">Interested in Similar Work?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can build custom automations and AI integrations for your business.
          </p>
          <Link
            href="/#contact"
            className="cta-button inline-flex items-center justify-center"
          >
            Get in Touch
          </Link>
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
