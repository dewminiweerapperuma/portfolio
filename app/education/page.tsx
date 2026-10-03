import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EducationSection from "@/components/EducationSection";

export const metadata: Metadata = {
  title: "Education — Dewmini Weerapperuma",
};

export default function EducationPage() {
  return (
    <section className="mx-auto max-w-5xl px-7 py-20 sm:py-28">
      <PageHeader
        eyebrow="Education"
        title="Education Journey"
        subtitle="Academic timeline, from secondary school physical sciences through my current undergraduate degree at the University of Moratuwa."
        nodeId="U3 — EDUCATION"
      />

      <div className="trace-module mt-10">
        <EducationSection />
      </div>
    </section>
  );
}
