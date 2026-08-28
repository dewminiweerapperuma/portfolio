import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Indoor Air Quality Monitoring System — Dewmini Weerapperuma",
  description:
    "Case study of a real-time microcontroller-based indoor air quality monitoring device developed by Team Tech Titans for FIT EXPO 2025 at the University of Moratuwa.",
};

const photos = [
  {
    src: "/assets/air-quality-poster.jpg",
    alt: "FIT EXPO 2025 Air Quality Project Poster",
    caption: "Official FIT EXPO 2025 Presentation Poster — Circuit Diagram, Block Diagram, PCB Design, Components & Hardware Assembly.",
  },
  {
    src: "/assets/team-tech-titans.png",
    alt: "Team Tech Titans with completed prototype at FIT EXPO 2025",
    caption: "Team 'Tech Titans' with the completed Indoor Air Quality Monitoring System prototype, FIT EXPO 2025.",
  },
];

const features = [
  {
    icon: "🍃",
    title: "Real-Time AQI Calculation",
    description:
      "Computes standardized Air Quality Index parameters customized specifically to Sri Lankan ambient air safety guidelines.",
  },
  {
    icon: "📡",
    title: "Dual Network Redundancy",
    description:
      "Integrated Wi-Fi and W5500 hardwired Ethernet failover to guarantee uninterrupted telemetry transmission during network outages.",
  },
  {
    icon: "💾",
    title: "Dual Cloud & Local Storage",
    description:
      "Real-time sync to Firebase Cloud DB coupled with onboard W25Q128 SPI flash memory for offline data backup during power failures.",
  },
  {
    icon: "🔊",
    title: "Audible Hazard Alerts",
    description:
      "KY-012 active buzzer trigger and warning thresholds when harmful gas concentrations (CO₂, VOCs, Ozone) exceed safety limits.",
  },
  {
    icon: "🔌",
    title: "Integrated Battery Power",
    description:
      "High-efficiency 18650 Li-ion battery pack with buck converter voltage regulation for portable deployment.",
  },
  {
    icon: "🖥️",
    title: "Interactive Web Dashboard",
    description:
      "React + Vite frontend web dashboard rendering live sensor graphs and environmental health telemetry.",
  },
];

export default function AirQualityPage() {
  return (
    <article className="mx-auto max-w-7xl px-4 sm:px-8 py-10 sm:py-16">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between border-b border-line pb-6">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-copper transition-colors hover:text-signal"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Projects
        </Link>
        <span className="font-mono text-xs text-slate-400">HARDWARE PROJECT CASE STUDY // U2.2</span>
      </div>

      {/* Main 12-Column Hero & Overview Grid */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Hero Header & Core Description (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-signal">
              <span className="h-2 w-2 rounded-full bg-signal" />
              Completed — FIT EXPO 2025
            </span>
            <span className="rounded-full border border-copper/30 bg-copper/10 px-3 py-1 font-mono text-xs font-medium text-copper">
              IoT & Microcontroller Systems
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
            Indoor Air Quality <br className="hidden sm:inline" />
            <span className="text-copper">Monitoring System</span>
          </h1>

          <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-300">
            A real-time microcontroller-based environmental monitoring system engineered by Team Tech Titans for FIT EXPO 2025 at the University of Moratuwa.
          </p>

          <div className="rounded-2xl border border-line bg-panel/80 p-6 sm:p-8 backdrop-blur space-y-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              // Background & Academic Context
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Developed for the Microcontroller-Based Applications Development module in the Faculty of Information Technology, University of Moratuwa. This physical device continuously monitors indoor air conditions to promote healthier study and office spaces.
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              It measures particulate matter (PM1.0, PM2.5, PM10), gaseous pollutants (VOCs, NOx), Ozone (O₃), CO₂ levels, humidity, and temperature — unifying multi-sensor telemetry into a single compact hardware unit.
            </p>
          </div>
        </div>

        {/* Right Column: Quick Project Specs Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-xl space-y-6 sticky top-24">
            <h3 className="font-display text-xl font-semibold text-slate-100 border-b border-line pb-4">
              Hardware & Tech Specs
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Team</span>
                <span className="text-slate-100 font-semibold text-sm">Tech Titans (UoM FIT)</span>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Core Controller</span>
                <span className="text-slate-100 font-semibold text-sm">ESP32-WROOM-32</span>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Sensor Suite</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["PMS5003", "SGP41", "ZMOD4510", "MH-Z19 NDIR", "DHT22", "DS18B20", "DS3231 RTC"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-bg/80 px-2.5 py-1 text-xs text-slate-300 font-sans"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Software & Design</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Arduino (C++)", "Firebase", "React + Vite", "EasyEDA PCB", "Blender 3D"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-bg/80 px-2.5 py-1 text-xs text-slate-300 font-sans"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#poster"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-copper px-5 py-3 font-mono text-xs font-semibold text-bg transition-colors hover:bg-signal"
              >
                View EXPO Poster & Team 📸
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Poster Mockup Frame */}
      <div id="poster" className="mt-14 overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl">
        <div className="flex items-center justify-between border-b border-line bg-bg/90 px-5 py-3 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">fit-expo-2025-presentation-poster.pdf</span>
          </div>
          <span className="text-copper">FIT EXPO 2025 Showcase Poster</span>
        </div>
        <div className="relative h-[400px] sm:h-[600px] lg:h-[750px] w-full bg-bg/50">
          <Image
            src="/assets/air-quality-poster.jpg"
            alt="FIT EXPO 2025 Air Quality Project Poster"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
            System Capabilities
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-100">
            Precision Sensor Fusion & Offline Resilience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-line bg-panel p-6 sm:p-7 transition-all duration-300 hover:border-copper/40 hover:bg-panel2 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 border border-copper/30 text-2xl mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware Architecture Breakdown */}
      <div className="mt-16 rounded-2xl border border-line bg-panel p-8 sm:p-10 space-y-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
          Hardware & Enclosure Engineering
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-100">
          Custom PCB Design & 3D Form Factor
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The physical circuit schematics and custom multi-layer PCB layout were designed in EasyEDA for minimal form factor and zero electrical crosstalk between high-frequency Wi-Fi antennas and sensitive gas sensors. Blender was utilized to model the custom 3D protective enclosure with optimized air intake vents.
        </p>
      </div>

      {/* Full Width Photos Gallery */}
      <div className="mt-20">
        <ProjectGallery photos={photos} />
      </div>
    </article>
  );
}
