import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Education — Dewmini Weerapperuma",
};

const timeline = [
  {
    period: "2024 — Present",
    title: "B.Sc. (Hons) Information Technology and Management",
    place: "University of Moratuwa",
    desc: "Undergraduate degree combining information technology with business and management studies.",
    status: "In Progress",
  },
  {
    period: "2023 — 2024",
    title: "Diploma in English Language and Literature",
    place: "Aquinas Higher College of Studies",
    desc: "Diploma-level study of English language and literature.",
    status: "Completed",
  },
  {
    period: "2023",
    title: "Diploma in Information Technology and Communication",
    place: "ICBT Campus",
    desc: "Foundational diploma covering fundamentals of computer networks, cybersecurity, Python programming, web development, and IT system essentials.",
    status: "Completed",
  },
  {
    period: "2023",
    title: "G.C.E. Advanced Level — Physical Science Stream",
    place: "Buddhist Girls' National College, Wennappuwa",
    desc: "Secondary education, Physical Science stream.",
    status: "Completed",
  },
];

export default function EducationPage() {
  return (
    <section className="mx-auto max-w-5xl px-7 py-20 sm:py-28">
      <PageHeader
        eyebrow="Education"
        title="Education"
        subtitle="Academic timeline, from secondary school through my current undergraduate degree."
        nodeId="U3 — EDUCATION"
      />

      <div className="trace-module mt-10 space-y-0">
        {timeline.map((item, i) => (
          <div
            key={item.title}
            className={`grid grid-cols-1 gap-4 py-8 sm:grid-cols-[180px_1fr] ${
              i !== 0 ? "border-t border-line" : ""
            }`}
          >
            <div>
              <div className="font-mono text-xs text-copper">{item.period}</div>
              <span
                className={`mt-2 inline-block rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest ${
                  item.status === "In Progress"
                    ? "border-signal text-signal"
                    : "border-inkFaint text-inkFaint"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-100">{item.title}</h3>
              <div className="mt-2 font-mono text-sm sm:text-base font-semibold text-copper tracking-wide">
                {item.place}
              </div>
              <p className="mt-3 max-w-xl text-base text-slate-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
