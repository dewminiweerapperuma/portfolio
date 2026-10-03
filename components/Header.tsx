"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLink {
  href: string;
  label: string;
  id: string;
  icon: (active: boolean) => React.ReactNode;
}

const links: NavLink[] = [
  {
    href: "/#about",
    label: "About",
    id: "about",
    icon: (active) => (
      <svg
        className={`h-3.5 w-3.5 transition-colors ${
          active ? "text-signal" : "text-slate-400 group-hover:text-slate-200"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    href: "/#education",
    label: "Education",
    id: "education",
    icon: (active) => (
      <svg
        className={`h-3.5 w-3.5 transition-colors ${
          active ? "text-signal" : "text-slate-400 group-hover:text-slate-200"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    href: "/#certifications",
    label: "Certifications",
    id: "certifications",
    icon: (active) => (
      <svg
        className={`h-3.5 w-3.5 transition-colors ${
          active ? "text-signal" : "text-slate-400 group-hover:text-slate-200"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="m15.4 12.5 1.6 8.5-5-3-5 3 1.6-8.5" />
      </svg>
    ),
  },
  {
    href: "/#projects",
    label: "Projects",
    id: "projects",
    icon: (active) => (
      <svg
        className={`h-3.5 w-3.5 transition-colors ${
          active ? "text-signal" : "text-slate-400 group-hover:text-slate-200"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    href: "/#blogs",
    label: "Blogs",
    id: "blogs",
    icon: (active) => (
      <svg
        className={`h-3.5 w-3.5 transition-colors ${
          active ? "text-signal" : "text-slate-400 group-hover:text-slate-200"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    ),
  },
  {
    href: "/#contact",
    label: "Contact",
    id: "contact",
    icon: (active) => (
      <svg
        className={`h-3.5 w-3.5 transition-colors ${
          active ? "text-signal" : "text-slate-400 group-hover:text-slate-200"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0.1 }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-line/80 bg-bg/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-line/40 bg-bg/70 backdrop-blur-lg"
      }`}
    >
      {/* Subtle top ambient accent line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4">
        {/* Left: Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-copper/50 bg-gradient-to-br from-panel2 to-panel p-0.5 shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all group-hover:border-copper group-hover:shadow-[0_0_20px_rgba(99,102,241,0.45)]">
            <span className="font-mono text-xs font-bold tracking-wider text-signal group-hover:text-white">
              DW
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-bg bg-emerald-500" />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-wider text-slate-100 group-hover:text-signal transition-colors">
              DEWMINI
            </span>
            <span className="font-mono text-[10px] tracking-tight text-slate-400">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Center: Visually Stunning Floating Navigation Capsule */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-line/80 bg-panel/75 p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
          {links.map((link) => {
            const active =
              pathname === "/"
                ? activeSection === link.id
                : pathname === `/${link.id}`;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
                  active
                    ? "border border-copper/60 bg-gradient-to-r from-copper/25 to-violet/25 text-white shadow-[0_0_16px_rgba(99,102,241,0.35)]"
                    : "border border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.icon(active)}
                <span>{link.label}</span>
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_#818CF8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Quick Action / Let's Connect */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-copper/60 bg-gradient-to-r from-copper/15 via-violet/15 to-copper/15 px-4 py-1.5 font-mono text-xs font-semibold text-slate-100 shadow-[0_0_16px_rgba(99,102,241,0.2)] transition-all duration-300 hover:border-copper hover:bg-copper hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span>Let&apos;s Connect</span>
            <span className="text-signal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
