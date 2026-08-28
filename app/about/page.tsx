import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About — Dewmini Weerapperuma",
};

const categories = [
  {
    title: "Frontend",
    desc: "Building interfaces and client-side logic.",
    tags: ["Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    desc: "APIs, auth, and server-side logic.",
    tags: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    desc: "Relational and document-based data.",
    tags: ["PostgreSQL", "MongoDB", "Supabase", "Prisma ORM"],
  },
  {
    title: "Tools & Platforms",
    desc: "Everything around the code itself.",
    tags: ["Docker", "Git", "Firebase", "Arduino / C++"],
  },
];

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
          What I build with
        </h2>
        <p className="mt-3 max-w-lg text-inkDim">
          A stack spun up for full-stack web apps, with detours into
          embedded hardware when a project calls for it.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm text-inkDim">{cat.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-copperDim bg-copper/10 px-3 py-1 font-mono text-xs text-copper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
