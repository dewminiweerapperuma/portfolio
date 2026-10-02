import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TechStackCarousel from "@/components/TechStackCarousel";

export const metadata: Metadata = {
  title: "About — Dewmini Weerapperuma",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-7 py-20 sm:py-28">
      <PageHeader
        eyebrow="About"
        title="About Me"
        nodeId="U0 — ABOUT"
      />

      <div className="trace-module mt-10 space-y-6 text-inkDim">
        <p>
          I&apos;m Dewmini Weerapperuma, a software engineer with a
          background that spans both engineering and management. I build
          full-stack applications with Next.js, TypeScript, React, and
          Node.js/Express, backed by PostgreSQL and MongoDB depending on
          what the data needs.
        </p>
        <p>
          I&apos;m currently pursuing a B.Sc. (Hons) in Information
          Technology and Management at the University of Moratuwa, a
          programme that pairs information technology with business and
          management coursework. That combination shapes how I approach
          engineering work — I don&apos;t just think about how something is
          built, but why it matters and who it serves.
        </p>
        <p>
          Alongside software, I&apos;ve also worked on embedded systems and
          IoT — most notably an indoor air quality monitoring system built
          around an ESP32 and a cluster of environmental sensors — so
          I&apos;m equally comfortable thinking in terms of software
          architecture and hardware constraints when a project calls for
          it.
        </p>
      </div>

      <div className="trace-module mt-16">
        <div className="mb-1 font-mono text-xs text-inkFaint">
          U1 — SKILLS
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-copper">
          Technical Skills
        </span>
        <h2 className="mt-2 font-display text-3xl font-medium">
          My Tech Stack
        </h2>
        <p className="mt-3 max-w-lg text-inkDim">
          A stack spun up for full-stack web apps, with detours into
          embedded hardware when a project calls for it.
        </p>

        <div className="mt-6">
          <TechStackCarousel />
        </div>
      </div>
    </section>
  );
}
