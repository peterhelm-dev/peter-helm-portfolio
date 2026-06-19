import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import { getBlogPostBySlug } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";

/**
 * Blog Post Detail Page
 * Design: Minimalist Tech Elegance
 * - Long-form article layout, consistent with site chrome
 */

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/blog" className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Blog</span>
          </Link>
          <div className="text-2xl font-bold text-accent">PH</div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <article className="container max-w-3xl">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={index} className="space-y-3 text-muted-foreground mb-6">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-accent mt-1">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                {block.text}
              </p>
            );
          })}
        </article>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-6">Want to Talk Through a Workflow?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm open to roles and projects involving AI operations, workflow automation, and internal tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="cta-button inline-flex items-center justify-center">
              Get in Touch
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200 inline-flex items-center justify-center"
            >
              More Posts
            </Link>
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
