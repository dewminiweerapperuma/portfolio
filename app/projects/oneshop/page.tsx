import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "OneShop — Cloud POS & Unified E-Commerce Platform | Dewmini Weerapperuma",
  description:
    "Case study of OneShop, an integrated cloud POS and E-Commerce Progressive Web Application developed for Eutech Cybernetic Lanka (Pvt) Ltd by Team Cipher5 at University of Moratuwa.",
};

const photos = [
  {
    src: "/assets/oneshop-storefront-hero.png",
    alt: "OneShop Storefront Homepage — Open Door Multi-Tenant Store",
    caption:
      "Storefront Homepage — Live production deployment (opendoor.allinoneshop.store) with dynamic promotional carousel, fast category search, and real-time cart header.",
  },
  {
    src: "/assets/oneshop-trending-products.png",
    alt: "OneShop Trending Products & Real-Time Stock",
    caption:
      "Trending Grocery Feed — Real-time inventory status, unit pricing (LKR), and product expiration date tracking synced with in-store POS.",
  },
  {
    src: "/assets/oneshop-new-arrivals.png",
    alt: "OneShop New Arrivals Section",
    caption:
      "New Arrivals Catalog — Fresh grocery & stationery inventory intake, one-click cart addition, and live unit availability.",
  },
  {
    src: "/assets/oneshop-product-categories.png",
    alt: "OneShop Category Explorer & Filtering",
    caption:
      "Category Filtering & Catalog Navigation — Deep categorized browsing across groceries, dairy, bakery, and household goods.",
  },
  {
    src: "/assets/oneshop-product-detail.png",
    alt: "OneShop Product Detail View & Cart Purchase",
    caption:
      "Product Details & Cart Actions — Detailed stock count verification, expiration date transparency, and customer review ratings.",
  },
  {
    src: "/assets/oneshop-customer-reviews.png",
    alt: "OneShop Verified Customer Reviews",
    caption:
      "Customer Reviews & Social Proof — Verified buyer feedback ratings and delivery experience reviews.",
  },
  {
    src: "/assets/oneshop-write-review.png",
    alt: "OneShop Product Review Submission Modal",
    caption:
      "Write Review Flow — Modal form allowing customers to submit star ratings, title, and feedback.",
  },
  {
    src: "/assets/oneshop-register.png",
    alt: "OneShop Customer Account Registration",
    caption:
      "Customer Onboarding & Registration — Responsive registration flow with input validation, password confirmation, and role assignment.",
  },
  {
    src: "/assets/oneshop-account-settings.png",
    alt: "OneShop Profile & Account Settings with Photo Upload",
    caption:
      "Tabbed Profile & Account Settings — Customer identity dashboard with avatar upload, contact management, and password change.",
  },
  {
    src: "/assets/oneshop-shopping-cart.png",
    alt: "OneShop Shopping Cart & Basket",
    caption:
      "Interactive Shopping Cart — Item quantity adjustment, expiration date warnings, live subtotal, and checkout entry.",
  },
  {
    src: "/assets/oneshop-cart-recommendations.png",
    alt: "OneShop Cart Cross-Sell Recommendations",
    caption:
      "Smart Cross-Sell Recommendations — 'You may also like' dynamically suggested products on the cart page.",
  },
  {
    src: "/assets/oneshop-secure-checkout.png",
    alt: "OneShop Secure Checkout & District Delivery Fee",
    caption:
      "Secure Checkout Flow — Account-locked identity details, shipping address capture, and real-time Sri Lanka delivery fee computation.",
  },
  {
    src: "/assets/oneshop-delivery-payment.png",
    alt: "OneShop Delivery & Payment Method Selection",
    caption:
      "Checkout Delivery & Payment Methods — Standard/Express delivery selection, Cash on Delivery, and PayHere.lk payment integration.",
  },
  {
    src: "/assets/oneshop-orders-list.png",
    alt: "OneShop Customer Order History Ledger",
    caption:
      "Order History & Status Tracking — Comprehensive customer order ledger displaying real-time status badges (Processing, Delivered).",
  },
  {
    src: "/assets/oneshop-order-tracking.png",
    alt: "OneShop Order Milestone Stepper & Unique Tracking #",
    caption:
      "Order Milestone Stepper & Tracking Number — Live delivery progress visualization with unique tracking generator (OS282889MBY) and invoice emailing.",
  },
];

const features = [
  {
    icon: "🔐",
    title: "Dual-Path Password Recovery",
    description:
      "Email-based reset via Nodemailer paired with an encrypted security-question fallback specifically designed for Sri Lankan retail environments where email access is irregular.",
  },
  {
    icon: "🔄",
    title: "Real-Time Unified Inventory Sync",
    description:
      "Eliminates stock mismatches between physical POS checkouts and web orders using atomic database transactions and centralized cloud state on AWS.",
  },
  {
    icon: "⚡",
    title: "Order Lifecycle State Machine",
    description:
      "Guarantees data integrity through a strict state machine (Pending → Confirmed → Shipped → Delivered) with automated stock reservation and restoration on cancellation.",
  },
  {
    icon: "🚚",
    title: "District-Based Delivery Calculator",
    description:
      "Calculates accurate shipping tariffs across all 25 Sri Lankan administrative districts, supporting tiered regional weights and zone rates.",
  },
  {
    icon: "💳",
    title: "PayHere.lk Sri Lankan Payments",
    description:
      "Integrated Sri Lankan payment gateway supporting Visa, MasterCard, Genie, Frimi, eZ Cash, mCash, and internet banking with server-side MD5 signature verification.",
  },
  {
    icon: "🧪",
    title: "In-Memory Integration Testing",
    description:
      "Robust test coverage with Jest and Supertest running against MongoMemoryServer, verifying authentication boundaries, RBAC transitions, and order endpoints.",
  },
];

export default function OneShopPage() {
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
        <span className="font-mono text-xs text-slate-400">PROJECT CASE STUDY // U2.3</span>
      </div>

      {/* Main 12-Column Hero & Overview Grid */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Hero Header & Core Description (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-signal">
              <span className="h-2 w-2 rounded-full bg-signal" />
              Completed & Deployed
            </span>
            <span className="rounded-full border border-copper/30 bg-copper/10 px-3 py-1 font-mono text-xs font-medium text-copper">
              Industry Client Project
            </span>
            <span className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-slate-300">
              Team Cipher5 • 2nd Year
            </span>
            <a
              href="https://opendoor.allinoneshop.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-signal/60 bg-signal/15 px-3.5 py-1 font-mono text-xs font-semibold text-signal transition-colors hover:bg-signal hover:text-bg group"
            >
              <span>opendoor.allinoneshop.store</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
            OneShop — <br className="hidden sm:inline" />
            <span className="text-copper">Cloud POS & Unified E-Commerce</span>
          </h1>

          <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-300">
            A cloud-based, multi-tenant Progressive Web Application (PWA) bridging the gap between physical retail POS operations and online e-commerce stores in Sri Lanka.
          </p>

          <div className="rounded-2xl border border-line bg-panel/80 p-6 sm:p-8 backdrop-blur space-y-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              // Client Background & Problem Statement
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Developed for a real industry client — <strong className="text-slate-100">Eutech Cybernetic Lanka (Pvt) Ltd</strong> — as our second-year team project (team &quot;Cipher5&quot;) at the Faculty of Information Technology, University of Moratuwa.
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              In Sri Lanka, retail merchants frequently grapple with disconnected systems: physical point-of-sale registers operate completely offline, isolated from online web storefronts. This fragmentation produces constant stock discrepancies, overselling of scarce inventory, and cumbersome manual data reconciliation.
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              OneShop unifies both into one cohesive, multi-tenant cloud platform deployed on AWS, synchronizing in-store POS transactions and web shopping carts to a single source of truth in real-time.
            </p>
          </div>

          {/* Production Storefront Live Preview Card */}
          <div className="overflow-hidden rounded-2xl border border-line bg-panel p-2 shadow-2xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-line bg-bg/60 rounded-t-xl gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <a
                href="https://opendoor.allinoneshop.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-panel px-3 sm:px-4 py-1 text-[0.7rem] font-mono text-slate-300 border border-line hover:border-signal hover:text-signal transition-colors truncate max-w-[280px] sm:max-w-none group"
                title="Open live store in a new tab"
              >
                <span className="text-emerald-400">🔒</span>
                <span>https://opendoor.allinoneshop.store</span>
                <span className="text-xs text-copper opacity-70 group-hover:opacity-100">↗</span>
              </a>
              <a
                href="https://opendoor.allinoneshop.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.65rem] text-signal font-semibold uppercase tracking-wider whitespace-nowrap hover:underline"
              >
                LIVE APP ↗
              </a>
            </div>
            <a
              href="https://opendoor.allinoneshop.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[16/8.2] w-full overflow-hidden rounded-b-xl bg-bg group"
              title="Click to visit live storefront"
            >
              <Image
                src="/assets/oneshop-storefront-hero.png"
                alt="OneShop Open Door Live Storefront"
                fill
                priority
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-bg/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="rounded-full bg-copper px-4 py-2 font-mono text-xs font-semibold text-bg shadow-xl">
                  Visit Live Storefront ↗
                </span>
              </div>
            </a>
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
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Live Storefront URL</span>
                <a
                  href="https://opendoor.allinoneshop.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-copper hover:text-signal font-mono text-xs font-semibold underline underline-offset-4 transition-colors"
                >
                  opendoor.allinoneshop.store ↗
                </a>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Client</span>
                <span className="text-slate-100 font-semibold text-sm">
                  Eutech Cybernetic Lanka (Pvt) Ltd
                </span>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Academic Context</span>
                <span className="text-slate-100 font-semibold text-sm">
                  Team &quot;Cipher5&quot; • Faculty of IT, University of Moratuwa
                </span>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">My Contribution</span>
                <p className="text-slate-200 font-sans text-xs leading-relaxed">
                  Lead Developer: Authentication, Customer Account Management & Order Fulfillment Module (full lifecycle from registration to tracking and staff workflows).
                </p>
              </div>

              <div>
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Primary Tech Stack</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    "Next.js",
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "AWS",
                    "PayHere.lk",
                    "JWT",
                    "bcrypt",
                    "Nodemailer",
                    "Jest / Supertest",
                  ].map((t) => (
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
                <span className="text-slate-400 block uppercase tracking-wider mb-1">Key Architecture Highlight</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  State machine-driven order processing with atomic stock reservation, fallback authentication, and automated in-memory integration testing.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://opendoor.allinoneshop.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-copper px-5 py-3 font-mono text-xs font-bold text-bg transition-all hover:bg-signal hover:shadow-lg shadow-copper/20"
              >
                Visit Live Storefront ↗
              </a>
              <a
                href="#gallery"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl border border-line bg-panel2 px-5 py-2.5 font-mono text-xs font-semibold text-slate-200 transition-colors hover:border-copper hover:text-copper"
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
            Engineered for Retail Resiliency & Customer Trust
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Covering the complete customer identity lifecycle, bulletproof order state flow, and local Sri Lankan commerce integrations.
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
      <div className="mt-16 space-y-8">
        {/* Module 1: Architecture & Data Modeling */}
        <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              Under The Hood // Data Modeling & Backend REST API
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-100">
              MongoDB Schema Architecture & Access Control
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed the core domain models in MongoDB using Mongoose: <strong className="text-slate-100">User</strong> (with customer and staff profiles), <strong className="text-slate-100">Order</strong> (containing items, pricing snapshots, payment records, and status timestamps), <strong className="text-slate-100">DeliveryZone</strong> (district-to-tariff mappings), and <strong className="text-slate-100">Address</strong> (structured billing and shipping data).
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Constructed the backend REST API in Express.js powering user onboarding, profile updates with profile image uploads, delivery fee quotation, and checkout order placement. Authenticated routes are protected via JWT tokens, with strict role-based access control (RBAC) ensuring only authorized cashiers and managers can inspect customer orders or trigger status transitions.
            </p>
          </div>
        </div>

        {/* Module 2: Order State Machine & Stock Safety */}
        <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              Business Logic // Order Fulfillment
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-100">
              Deterministic State Machine with Automatic Stock Rollback
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To eliminate the risk of overselling or orphaned orders when online shoppers and physical cashiers transact simultaneously, I engineered an order lifecycle state machine:
            </p>
            <div className="p-4 rounded-xl bg-bg/80 border border-line font-mono text-xs sm:text-sm text-copper flex flex-wrap items-center gap-2">
              <span className="text-amber-400 font-semibold">Pending</span>
              <span>──▶</span>
              <span className="text-sky-400 font-semibold">Confirmed</span>
              <span>──▶</span>
              <span className="text-indigo-400 font-semibold">Shipped</span>
              <span>──▶</span>
              <span className="text-emerald-400 font-semibold">Delivered</span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When an order is created, items enter a <strong className="text-slate-100">Pending</strong> state with active stock reserved. If payment via PayHere.lk succeeds, the order shifts to <strong className="text-slate-100">Confirmed</strong> and stock is permanently decremented. If payment times out or the customer cancels, an automatic rollback restores reserved inventory to the pool. Cashiers and warehouse staff handle dispatch transitions (<strong className="text-slate-100">Shipped</strong>), automatically generating unique tracking numbers and notifying the customer.
            </p>
          </div>
        </div>

        {/* Module 3: Dual-Path Password Recovery & Frontend UX */}
        <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              Frontend & UX // Next.js & TypeScript
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-100">
              Dual-Path Authentication & Tabbed Customer Experience
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Recognizing that retail staff and small store customers in Sri Lanka may not always have active or monitored email accounts, I architected a dual-path recovery mechanism: a standard cryptographically signed one-time link sent via Nodemailer, paired with a salt-hashed security-question challenge fallback.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              On the frontend, built responsive, accessible interfaces using Next.js, TypeScript, and Tailwind CSS. The customer dashboard features a tabbed profile containing order history, live order tracking with milestone progress bars, saved addresses, wishlist items, and account settings with avatar upload.
            </p>
          </div>
        </div>

        {/* Module 4: Testing & Quality Assurance */}
        <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-copper">
              Verification // Automated Quality Assurance
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-100">
              Integration Testing with Jest, Supertest & In-Memory MongoDB
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Wrote comprehensive integration test suites using Jest and Supertest against an ephemeral, in-memory MongoDB instance (<code className="text-copper font-mono text-xs">mongodb-memory-server</code>). This ensured rapid, isolated test execution without polluting staging databases.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Test suites validated the entire customer registration and authentication lifecycle, password reset token expiry, role-based status transition restrictions (e.g. cashiers unable to modify managerial tariffs), and delivery fee calculations across all 25 Sri Lankan district zones.
            </p>
          </div>
        </div>
      </div>

      {/* Full Width Application Screenshots Gallery */}
      <div id="gallery" className="mt-20 scroll-mt-24">
        <ProjectGallery photos={photos} />
      </div>
    </article>
  );
}
