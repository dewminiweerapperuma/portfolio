import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blogs — Dewmini Weerapperuma",
  description:
    "Articles and thoughts published by Dewmini Weerapperuma on Medium.",
};

const articles = [
  {
    title: "Introduction about Cloud Computing",
    date: "Published on Medium",
    readTime: "Medium Post",
    category: "Cloud Computing",
    desc: "An introductory blog post explaining the core principles of cloud computing, exploring cloud service models (IaaS, PaaS, SaaS), deployment architectures, and how scalable cloud infrastructure powers modern software applications.",
    tags: ["Cloud Computing", "IaaS / PaaS / SaaS", "Cloud Infrastructure"],
    link: "https://medium.com/@dewminiweerapperuma65",
  },
];

export default function BlogsPage() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 sm:py-28">
      <PageHeader
        eyebrow="Writing & Thoughts"
        title="Blogs"
        subtitle="Articles and thoughts written by Dewmini Weerapperuma on Medium."
        nodeId="U6 — BLOGS"
      />

      <div className="trace-module mt-12 space-y-8">
        {articles.map((art) => (
          <article
            key={art.title}
            className="border border-line bg-panel p-8 transition-colors hover:bg-panel2 rounded-xl group"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-semibold">
                {art.category}
              </span>
              <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
                <span>{art.date}</span>
                <span>•</span>
                <span>{art.readTime}</span>
              </div>
            </div>

            <h2 className="mt-2 font-display text-2xl font-semibold text-slate-100 group-hover:text-copper transition-colors">
              <a
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                {art.title}
                <span className="text-sm font-mono text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </a>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-4xl">
              {art.desc}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line/60">
              <div className="flex flex-wrap gap-2.5">
                {art.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-copperDim bg-copper/10 px-3.5 py-1.5 font-mono text-xs text-copper font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-copper px-5 py-2 font-mono text-xs font-semibold text-copper transition-colors hover:bg-copper hover:text-bg"
              >
                Read Article on Medium ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
