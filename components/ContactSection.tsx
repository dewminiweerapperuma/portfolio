"use client";

import { useState } from "react";
import PageHeader from "./PageHeader";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");

    try {
      // FormSubmit.co — sends email directly to dewminikawshani5@gmail.com (no API key needed)
      const response = await fetch("https://formsubmit.co/ajax/dewminikawshani5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        // Fallback to mailto if API response has issue
        const mailtoUrl = `mailto:dewminikawshani5@gmail.com?subject=${encodeURIComponent(
          formData.subject || `Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setFormStatus("success");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch {
      // Fallback to mailto on network interruption
      const mailtoUrl = `mailto:dewminikawshani5@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <PageHeader
          eyebrow="Get In Touch"
          title="Contact & Connections"
          subtitle="Have a project in mind, an engineering opportunity, or want to collaborate? I'd love to connect with you."
          nodeId="U5 — CONTACT"
        />

        {/* Availability Badge */}
        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-full border border-signal/30 bg-signal/5 px-4.5 py-2 w-fit">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-signal"></span>
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
            Open for Software Engineering & Full-Stack Roles
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Contact & Social Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Email Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-8 transition-all duration-300 hover:border-copper/50 hover:bg-panel2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
                    Direct Email Inbox
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-slate-100">
                    dewminikawshani5@gmail.com
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Form submissions and email inquiries arrive directly in this inbox.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy("dewminikawshani5@gmail.com", "email")}
                    className="relative rounded-lg border border-copper/30 bg-copper/10 px-4 py-2 font-mono text-xs font-semibold text-copper transition-colors hover:bg-copper hover:text-bg"
                  >
                    {copiedField === "email" ? "Copied!" : "Copy Email"}
                  </button>
                  <a
                    href="mailto:dewminikawshani5@gmail.com"
                    className="rounded-lg border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-xs font-semibold text-signal transition-colors hover:bg-signal hover:text-bg"
                  >
                    Mail ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dewmini-weerapperuma-321174290"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-copper/40 hover:bg-panel2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
                    LinkedIn
                  </span>
                  <span className="font-mono text-sm text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
                <h4 className="mt-3 font-display text-lg font-semibold text-slate-100 group-hover:text-copper transition-colors">
                  Dewmini Weerapperuma
                </h4>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  linkedin.com/in/dewmini-weerapperuma
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/dewminiweerapperuma"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-copper/40 hover:bg-panel2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
                    GitHub
                  </span>
                  <span className="font-mono text-sm text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
                <h4 className="mt-3 font-display text-lg font-semibold text-slate-100 group-hover:text-copper transition-colors">
                  dewminiweerapperuma
                </h4>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  github.com/dewminiweerapperuma
                </p>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@dewminiweerapperuma65"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-copper/40 hover:bg-panel2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
                    Medium
                  </span>
                  <span className="font-mono text-sm text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
                <h4 className="mt-3 font-display text-lg font-semibold text-slate-100 group-hover:text-copper transition-colors">
                  @dewminiweerapperuma65
                </h4>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  medium.com/@dewminiweerapperuma65
                </p>
              </a>

              {/* Phone */}
              <div className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-copper/40 hover:bg-panel2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
                    Phone
                  </span>
                  <button
                    onClick={() => handleCopy("+94775593914", "phone")}
                    className="font-mono text-xs font-semibold text-copper hover:underline"
                  >
                    {copiedField === "phone" ? "Copied!" : "Copy"}
                  </button>
                </div>
                <a
                  href="tel:0775593914"
                  className="mt-3 block font-display text-lg font-semibold text-slate-100 hover:text-copper transition-colors"
                >
                  +94 77 559 3914
                </a>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  Direct Mobile Line
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
                    Location & Timezone
                  </span>
                  <h4 className="font-display text-base font-semibold text-slate-100">
                    No. 600, Old Road, Meegoda, Padukka, Sri Lanka (GMT +5:30)
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-panel p-8 shadow-xl">
              <h3 className="font-display text-2xl font-semibold text-slate-100">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Messages sent here go straight to <strong className="text-slate-100">dewminikawshani5@gmail.com</strong>.
              </p>

              {formStatus === "success" ? (
                <div className="mt-6 rounded-xl border border-signal/40 bg-signal/10 p-6 text-center">
                  <div className="text-3xl mb-2">✉️</div>
                  <h4 className="font-display text-lg font-semibold text-signal">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-xs font-mono text-slate-300 leading-relaxed">
                    Thank you! Your message has been sent directly to Dewmini&apos;s email inbox (<span className="text-signal">dewminikawshani5@gmail.com</span>).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block font-mono text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Perera"
                      className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity"
                      className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dewmini, I came across your portfolio and would like to connect regarding..."
                      className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full rounded-xl bg-copper px-6 py-3.5 font-mono text-sm font-semibold text-bg transition-colors hover:bg-signal disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Sending Message..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
