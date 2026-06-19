import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";

/**
 * Blog Listing Page
 * Design: Minimalist Tech Elegance
 * - Card grid of post previews
 * - Consistent with N8nShowcase / Contact page chrome
 */

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
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
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <h1 className="section-title mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Notes on AI workflows, automation, and operations — what I learn building practical systems with n8n, OpenAI, and CRM platforms.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-minimal group flex flex-col"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Read Post <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>

          {/* Empty State Message */}
          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No posts yet. Check back soon for new writing on AI workflows and automation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-6">Have a Workflow to Untangle?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can build custom automations and AI systems for your team.
          </p>
          <Link href="/#contact" className="cta-button inline-flex items-center justify-center">
            Get in Touch
          </Link>
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
