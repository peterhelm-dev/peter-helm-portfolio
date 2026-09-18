import { useState } from "react";
import { ArrowLeft, Mail, CheckCircle, Github, Youtube } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Contact Page
 * Design: Minimalist Tech Elegance
 * - Clean form layout
 * - Dark theme optimized
 * - Email submission functionality
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open default email client
      window.location.href = `mailto:peterchelm@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back</span>
          </Link>
          <div className="text-2xl font-bold text-accent">PH</div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-2xl">
          <h1 className="text-xl md:text-2xl mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss systems, automation, or operations? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          {submitted && (
            <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-green-500 mb-1">Message Sent!</h3>
                <p className="text-green-500/80 text-sm">
                  Your email client has opened with your message. Please complete the send process in your email application.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="What is this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Info Text */}
            <p className="text-sm text-muted-foreground text-center">
              Your email client will open to complete the send. Alternatively, email me directly at{" "}
              <a href="mailto:peterchelm@gmail.com" className="text-accent-warm hover:underline">
                peterchelm@gmail.com
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 md:py-24 border-t border-border bg-secondary/30">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold mb-8">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Direct Email */}
            <div className="card-minimal">
              <Mail className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Send me an email directly for quick inquiries.
              </p>
              <a
                href="mailto:peterchelm@gmail.com"
                className="text-accent-warm font-semibold hover:underline"
              >
                peterchelm@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="card-minimal">
              <div className="text-accent mb-4 text-2xl">💼</div>
              <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground mb-4">
                Connect with me on LinkedIn to see my full professional background.
              </p>
              <a
                href="https://www.linkedin.com/in/peter-helm-231042287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-warm font-semibold hover:underline"
              >
                View Profile
              </a>
            </div>

            {/* GitHub */}
            <div className="card-minimal">
              <Github className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Browse the code behind the projects on this site.
              </p>
              <a
                href="https://github.com/peterhelm-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-warm font-semibold hover:underline"
              >
                View Profile
              </a>
            </div>

            {/* YouTube */}
            <div className="card-minimal">
              <Youtube className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">YouTube</h3>
              <p className="text-muted-foreground mb-4">
                Watch build logs and demos of the projects featured on this site.
              </p>
              <a
                href="https://www.youtube.com/@Five_Coins.Peter_Helm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-warm font-semibold hover:underline"
              >
                View Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 Peter Helm. Business Systems, Automation & Product Design.</p>
        </div>
      </footer>
    </div>
  );
}
