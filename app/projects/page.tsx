import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects — Dewmini Weerapperuma",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 sm:py-28">
      <PageHeader
        eyebrow="Selected Work"
        title="Projects"
        subtitle="Software and hardware builds, from database design through to shipped interfaces."
        nodeId="U2 — PROJECTS"
      />

      <div className="trace-module mt-10 space-y-8">
        {/* Shop Inventory project */}
        <article className="border border-line bg-panel p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-2">
            <h2 className="font-display text-2xl font-semibold text-slate-100">
              <Link
                href="/projects/shop-inventory"
                className="transition-colors hover:text-copper inline-flex items-center gap-2 group"
              >
                Small Shop Inventory + Reorder Alert System
                <span className="text-sm font-mono text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            </h2>
            <span className="whitespace-nowrap rounded-full border border-signal bg-signal/10 px-3.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-signal font-semibold">
              In Progress
            </span>
          </div>
          <div className="pt-2">
            <p className="max-w-4xl text-base sm:text-lg text-slate-200 leading-relaxed">
              A standalone inventory management system built for small shop
              owners who currently track stock by hand. Supports barcode
              scanning via phone camera, scan-to-sell with automatic stock
              decrement, low-stock reorder alerts, owner/staff role-based
              access, and a dashboard summarizing sales and best/worst
              sellers.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2.5">
                {["Next.js 14", "TypeScript", "Node.js / Express", "PostgreSQL (Supabase)", "Prisma ORM"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-copperDim bg-copper/10 px-3.5 py-1.5 font-mono text-xs text-copper font-medium"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/projects/shop-inventory"
                className="inline-flex items-center gap-2 rounded-full border border-copper px-5 py-2 font-mono text-xs font-semibold text-copper transition-colors hover:bg-copper hover:text-bg"
              >
                View Case Study →
              </Link>
            </div>
            <p className="mt-5 border-t border-dashed border-line pt-4 text-sm text-slate-300">
              Schema designed with future scaling in mind — stock movement
              event logs, supplier price history, and expiry/batch tracking.
            </p>
          </div>
        </article>

        {/* Air Quality project */}
        <article className="border border-line bg-panel p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-2">
            <h2 className="font-display text-2xl font-semibold text-slate-100">
              <Link
                href="/projects/air-quality"
                className="transition-colors hover:text-copper inline-flex items-center gap-2 group"
              >
                Indoor Air Quality Monitoring System
                <span className="text-sm font-mono text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            </h2>
            <span className="whitespace-nowrap rounded-full border border-signal bg-signal/10 px-3.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-signal font-semibold">
              Completed
            </span>
          </div>
          <div className="pt-2">
            <p className="max-w-4xl text-base sm:text-lg text-slate-200 leading-relaxed">
              First-year hardware project (Microcontroller-Based
              Applications Development, Faculty of IT, University of
              Moratuwa) built with team &quot;Tech Titans,&quot; presented
              at FIT EXPO 2025. A real-time system that measures particulate
              matter, VOCs, CO₂, temperature, and humidity, with an AQI
              calculation based on Sri Lankan standards, cloud + local data
              logging, and audible alerts for unsafe air quality.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2.5">
                {["ESP32", "Arduino IDE (C++)", "Firebase", "React + Vite", "EasyEDA"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-copperDim bg-copper/10 px-3.5 py-1.5 font-mono text-xs text-copper font-medium"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/projects/air-quality"
                className="inline-flex items-center gap-2 rounded-full border border-copper px-5 py-2 font-mono text-xs font-semibold text-copper transition-colors hover:bg-copper hover:text-bg"
              >
                View Case Study →
              </Link>
            </div>
            <p className="mt-5 border-t border-dashed border-line pt-4 text-sm text-slate-300">
              Sensors: PMS5003, SGP41, ZMOD4510, MH-Z19 (CO₂), DHT22,
              DS18B20 — with Ethernet + Wi-Fi redundancy and battery backup
              for uninterrupted logging.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
