import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Shop Inventory + Reorder Alert System — Dewmini Weerapperuma",
  description:
    "Case study of a lightweight, full-stack inventory management and point-of-sale system for small retail shops in Sri Lanka.",
};

const photos = [
  {
    src: "/assets/shoppos-dashboard.png",
    alt: "ShopPOS Overview Dashboard",
    caption: "Overview Dashboard — Real-time monitoring of transactions, stock levels, and critical alerts.",
  },
  {
    src: "/assets/shoppos-scan-sell.png",
    alt: "ShopPOS Scan & Sell POS Terminal",
    caption: "Scan & Sell POS Terminal — Interactive retail checkout cart, barcode lookup, and instant checkout.",
  },
  {
    src: "/assets/shoppos-receipt.png",
    alt: "ShopPOS Retail Store Sale Receipt",
    caption: "Sale Receipt — Instant transaction receipt with automatic stock level deduction.",
  },
  {
    src: "/assets/shoppos-products.png",
    alt: "ShopPOS Product Catalog",
    caption: "Product Catalog — Inventory listings, unit prices, stock levels, and reorder thresholds.",
  },
  {
    src: "/assets/shoppos-analytics.png",
    alt: "ShopPOS Sales Analytics & Reorder Warnings",
    caption: "Sales Analytics — Daily sales curve, top low-stock visual breakdown, and critical warnings.",
  },
  {
    src: "/assets/shoppos-restock.png",
    alt: "ShopPOS Restock Product Modal",
    caption: "Restock Management — Restock quantities, required expiry date tracking, and movement logs.",
  },
  {
    src: "/assets/shoppos-add-product.png",
    alt: "ShopPOS Add Product Listing Modal",
    caption: "Add Product Listing — Barcode code, unit basis, cost/selling prices, and alert thresholds.",
  },
  {
    src: "/assets/shoppos-suppliers.png",
    alt: "ShopPOS Suppliers Directory",
    caption: "Suppliers Directory — Manage wholesale distributors, contact details, and supply lines.",
  },
  {
    src: "/assets/shoppos-add-supplier.png",
    alt: "ShopPOS Register Wholesale Vendor Modal",
    caption: "Register Supplier Vendor — Create wholesale vendor profiles associated with catalog products.",
  },
  {
    src: "/assets/shoppos-login.png",
    alt: "ShopPOS Authentication Screen",
    caption: "ShopPOS Authentication — Role-based access for store owners and staff.",
  },
];

const features = [
  {
    icon: "📷",
    title: "Camera Barcode Scan-to-Sell",
    description:
      "Integrated browser-based barcode scanning using a mobile camera or laptop webcam, eliminating the need for expensive hardware POS scanners.",
  },
  {
    icon: "⚡",
    title: "Real-Time Event-Driven Stock Logs",
    description:
      "Every inventory movement (sales, restocks, returns, damaged items) is logged as an immutable audit event for complete inventory transparency.",
  },
  {
    icon: "🔔",
    title: "Automated Reorder & Expiry Alerts",
    description:
      "Visual indicators and instant alert badges notify store owners before fast-moving items run out of stock or products pass expiration dates.",
  },
  {
    icon: "👥",
    title: "Role-Based Access & Staff Controls",
    description:
      "Separate permissions for store owners and shop cashiers, securing sensitive profit margins, cost prices, and financial reports.",
  },
  {
    icon: "📊",
    title: "Sales Analytics & Credit Accounts",
    description:
      "Live visual charts of daily sales revenue, top-selling items, customer credit tab tracking (kade book system), and return handling.",
  },
  {
    icon: "📱",
    title: "Mobile-First Responsive Interface",
    description:
      "Designed specifically for small screen devices and tablets so store owners can audit inventory directly on the shop floor.",
  },
];

export default function ShopInventoryPage() {
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
        <span className="font-mono text-xs text-slate-400">PROJECT CASE STUDY // U2.1</span>
      </div>

      {/* Main 12-Column Hero & Overview Grid */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Hero Header & Core Description (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-signal">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
              In Active Development
            </span>
            <span className="rounded-full border border-copper/30 bg-copper/10 px-3 py-1 font-mono text-xs font-medium text-copper">
              Full-Stack Application
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
            Shop Inventory & <br className="hidden sm:inline" />
            <span className="text-copper">Reorder Alert System</span>
          </h1>

          <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-300">
            A lightweight, full-stack inventory management and point-of-sale solution engineered specifically for small retail shop owners in Sri Lanka.
          </p>

          <div className="rounded-2xl border border-line bg-panel/80 p-6 sm:p-8 backdrop-blur space-y-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              // Problem Statement & Solution
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Small retail shops — local kade owners, mini marts, and hardware stores — predominantly manage inventory manually using paper notebooks or memory. This leads to two critical operational issues: fast-moving items suddenly run out of stock unannounced, while slow-moving capital remains tied up in over-ordered inventory.
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              This system solves both challenges by offering a streamlined, mobile-friendly interface requiring zero complex training, providing automated stock threshold warnings, camera barcode scanning, and instant sales insights.
            </p>
          </div>
        </div>

        {/* Right Column: Quick Project Specs Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-xl space-y-6 sticky top-24">
            <h3 className="font-display text-xl font-semibold text-slate-100 border-b border-line pb-4">
              Project Specification
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Role</span>
                <span className="text-slate-100 font-semibold text-sm">Lead Full-Stack Developer</span>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Target Domain</span>
                <span className="text-slate-100 font-semibold text-sm">Retail & Inventory POS</span>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Primary Tech Stack</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Next.js 14", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Prisma ORM", "Tailwind CSS"].map((t) => (
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
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Architecture Highlight</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  Relational SQL database structure with audit logging for stock delta events to support future demand forecasting and batch expiry tracking.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#gallery"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-copper px-5 py-3 font-mono text-xs font-semibold text-bg transition-colors hover:bg-signal"
              >
                Explore Screen Demos 📸
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key System Features Cards Grid */}
      <div className="mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
            System Architecture & Features
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-100">
            Engineered for High Reliability & Simplicity
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Every feature is designed to reduce manual workload and eliminate human error in fast-paced retail environments.
          </p>
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

      {/* Technical Deep Dive Panel */}
      <div className="mt-16 rounded-2xl border border-line bg-panel p-8 sm:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
            Under The Hood // Technical Design
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-100">
            Relational Consistency & Scalable Schema
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Built with Next.js 14 and TypeScript on the frontend, Node/Express REST API on the backend, and PostgreSQL (via Supabase) with Prisma as the ORM. Relational SQL was chosen over NoSQL because stock calculations demand strict ACID transactions and multi-table analytical joins.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The schema explicitly logs every inventory change as an event record rather than only mutating a static total. This immutable ledger foundation allows future enhancements like automated reorder forecasting, supplier price trend tracking, and batch expiration alerts.
          </p>
        </div>
      </div>

      {/* Full Width Application Screenshots Gallery */}
      <div id="gallery" className="mt-20 scroll-mt-24">
        <ProjectGallery photos={photos} />
      </div>
    </article>
  );
}
