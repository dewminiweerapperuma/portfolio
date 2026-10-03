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
        className={`h-3 w-3 shrink-0 ${active ? "text-signal" : "text-slate-400"}`}
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
        className={`h-3 w-3 shrink-0 ${active ? "text-signal" : "text-slate-400"}`}
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
        className={`h-3 w-3 shrink-0 ${active ? "text-signal" : "text-slate-400"}`}
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
        className={`h-3 w-3 shrink-0 ${active ? "text-signal" : "text-slate-400"}`}
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
        className={`h-3 w-3 shrink-0 ${active ? "text-signal" : "text-slate-400"}`}
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
];

export default function MobileNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("about");

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
    <nav className="sticky top-[61px] z-30 flex w-full items-center gap-2 overflow-x-auto border-b border-line/60 bg-bg/90 px-4 py-2.5 backdrop-blur-xl lg:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-1.5 min-w-max mx-auto">
        {links.map((link) => {
          const active =
            pathname === "/"
              ? activeSection === link.id
              : pathname === `/${link.id}`;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 font-mono text-xs font-medium transition-all duration-200 ${
                active
                  ? "border border-copper/60 bg-gradient-to-r from-copper/25 to-violet/25 text-white shadow-[0_0_12px_rgba(99,102,241,0.35)]"
                  : "border border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.icon(active)}
              <span>{link.label}</span>
              {active && (
                <span className="h-1 w-1 rounded-full bg-signal shadow-[0_0_6px_#818CF8]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
