import type { Metadata } from "next";
import Image from "next/image";
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
    image: "/assets/cloud-computing-blog.png",
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
            className="border border-line bg-panel p-6 sm:p-8 transition-all duration-300 hover:border-copper/70 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] rounded-2xl group"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
              {/* Left Content Column */}
              <div className="flex-1 min-w-0">
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

                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-slate-100 group-hover:text-copper transition-colors">
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

                <p className="mt-3.5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
                  {art.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line/60">
                  <div className="flex flex-wrap gap-2.5">
                    {art.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-copperDim/60 bg-copper/10 px-3.5 py-1.5 font-mono text-xs text-copper font-medium"
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
              </div>

              {/* Right Photo Column */}
              {art.image && (
                <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 self-center lg:self-stretch flex items-center justify-center">
                  <a
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full overflow-hidden rounded-xl border border-line bg-white/5 p-2 shadow-lg transition-all duration-300 group-hover:border-copper/60 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
