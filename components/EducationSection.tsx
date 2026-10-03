"use client";

import React, { useState } from "react";

export interface EducationItem {
  id: string;
  period: string;
  degreeType: string;
  title: string;
  institution: string;
  desc: string;
  status: "In Progress" | "Completed";
  modules: string[];
  highlights: string;
  category: "degree" | "diploma" | "school";
}

const educationData: EducationItem[] = [
  {
    id: "moratuwa",
    period: "2024 — Present",
    degreeType: "Undergraduate Degree",
    title: "B.Sc. (Hons) Information Technology and Management",
    institution: "University of Moratuwa — Faculty of Information Technology",
    desc: "Premier undergraduate degree combining core computer science, software engineering, and database systems with strategic business management, finance, and applied economics.",
    status: "In Progress",
    modules: [
      "Software Engineering",
      "Database Systems",
      "Object-Oriented Programming (Java)",
      "Microcontroller Applications & IoT",
      "Web Technologies",
      "Business Management & Accounting",
    ],
    highlights:
      "Selected as Tech Titans team member presenting the ESP32-based Indoor Air Quality Monitoring System at FIT EXPO 2025. Bridging technical software logic with commercial product viability.",
    category: "degree",
  },
  {
    id: "aquinas",
    period: "2023 — 2024",
    degreeType: "Professional Diploma",
    title: "Diploma in English Language and Literature",
    institution: "Aquinas Higher College of Studies",
    desc: "Comprehensive diploma program focusing on advanced academic writing, linguistic structure, literature analysis, and professional English discourse.",
    status: "Completed",
    modules: [
      "Advanced Oral & Written Communication",
      "English Literature & Critical Analysis",
      "Academic & Technical Writing",
      "Professional Presentations & Discourse",
    ],
    highlights:
      "Mastered formal documentation and cross-disciplinary technical communication, enhancing leadership and team presentation capabilities.",
    category: "diploma",
  },
  {
    id: "icbt",
    period: "2023",
    degreeType: "Higher Diploma",
    title: "Diploma in Information Technology and Communication",
    institution: "ICBT Campus",
    desc: "Rigorous foundational programme covering computing fundamentals, networking topologies, cybersecurity defense essentials, and algorithmic scripting in Python.",
    status: "Completed",
    modules: [
      "Computer Networks & Topologies",
      "Cybersecurity Fundamentals",
      "Python Scripting & Algorithms",
      "Web Development Basics",
      "IT Infrastructure & Hardware",
    ],
    highlights:
      "Gained hands-on experience in networking architecture, threat modeling, and programmatic scripting before beginning university studies.",
    category: "diploma",
  },
  {
    id: "bgc",
    period: "2023",
    degreeType: "Secondary Education",
    title: "G.C.E. Advanced Level — Physical Science Stream",
    institution: "Buddhist Girls' National College, Wennappuwa",
    desc: "Completed secondary education in the demanding Physical Science stream, building analytical problem-solving and rigorous scientific reasoning.",
    status: "Completed",
    modules: [
      "Combined Mathematics",
      "Physics",
      "Chemistry",
    ],
    highlights:
      "Developed mathematical discipline and analytical critical thinking that form the mathematical backbone of algorithm analysis and software engineering.",
    category: "school",
  },
];

export default function EducationSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("moratuwa"); // Default open top card

  const filteredItems = educationData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="mb-12 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
        {[
          { key: "all", label: `All Milestones (${educationData.length})` },
          { key: "degree", label: "Undergraduate Degree" },
          { key: "diploma", label: "Diplomas & Foundations" },
          { key: "school", label: "Secondary Education" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`rounded-full px-4 py-2 font-mono text-xs font-medium transition-all duration-300 ${
              activeFilter === tab.key
                ? "border border-copper bg-copper/20 text-signal shadow-[0_0_15px_rgba(99,102,241,0.35)]"
                : "border border-line bg-panel text-slate-400 hover:border-copper/40 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-12 space-y-10">
        {/* Continuous Glowing Timeline Spine */}
        <div className="absolute left-[11px] sm:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-copper via-purple-500 to-indigo-950/30" />

        {filteredItems.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isInProgress = item.status === "In Progress";

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Node on the Spine */}
              <div className="absolute -left-[30px] sm:-left-[43px] top-6 flex items-center justify-center">
                {isInProgress ? (
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <span className="absolute -inset-1 rounded-full bg-signal/30 animate-ping" />
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-signal bg-panel text-signal shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                    </span>
                  </div>
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-line bg-panel group-hover:border-copper group-hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] transition-all">
                    <span className="h-2 w-2 rounded-full bg-slate-400 group-hover:bg-copper transition-colors" />
                  </div>
                )}
              </div>

              {/* Main Milestone Card */}
              <div
                onClick={() => toggleExpand(item.id)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 bg-panel/90 backdrop-blur-xl p-6 sm:p-8 ${
                  isExpanded
                    ? "border-copper shadow-[0_0_35px_rgba(99,102,241,0.25)] bg-panel"
                    : "border-line hover:border-copper/60 hover:bg-panel2"
                }`}
              >
                {/* Header: Period, Degree Badge & Live Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-line/60">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-copper">
                      {item.period}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-500" />
                    <span className="rounded-full border border-copper/30 bg-copper/10 px-3 py-1 font-mono text-[11px] font-medium text-signal">
                      {item.degreeType}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  {isInProgress ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/15 px-3 py-1 font-mono text-xs font-semibold text-signal">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-signal"></span>
                      </span>
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 font-mono text-xs font-medium text-slate-300">
                      ✓ Completed
                    </span>
                  )}
                </div>

                {/* Title & Institution */}
                <div className="mt-4">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-100 group-hover:text-copper transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-signal">
                    <span className="text-copper">🏛</span>
                    <span>{item.institution}</span>
                  </div>
                  <p className="mt-3 text-base text-slate-200 leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>

                {/* Focus Areas & Curriculum Modules Chips */}
                <div className="mt-5">
                  <div className="mb-2.5 font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Core Modules & Competencies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.modules.map((mod) => (
                      <span
                        key={mod}
                        className="rounded-lg border border-copperDim/40 bg-copper/10 px-3 py-1.5 font-mono text-xs text-indigo-200 font-medium transition-colors hover:border-copper hover:bg-copper/20"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Key Highlights Drawer */}
                {isExpanded && (
                  <div
                    className="mt-6 pt-5 border-t border-line/60 animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="rounded-xl border border-copper/30 bg-[#0A0D26]/90 p-4 sm:p-5 shadow-inner">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold">
                        <span>⚡</span>
                        <span>Key Highlights & Engineering Impact</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {item.highlights}
                      </p>
                    </div>
                  </div>
                )}

                {/* Footer Drawer Toggle */}
                <div className="mt-5 flex justify-end">
                  <span className="font-mono text-xs text-copper hover:text-signal transition-colors inline-flex items-center gap-1 font-semibold">
                    {isExpanded ? "Hide Highlights ▲" : "View Highlights & Details ▼"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
