"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#education", label: "Education", id: "education" },
  { href: "/#certifications", label: "Certifications", id: "certifications" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#blogs", label: "Blogs", id: "blogs" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

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
      { threshold: 0.3 }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_8px_theme(colors.signal)]" />
          DEWMINI
        </Link>
        <nav className="hidden gap-8 font-mono text-xs sm:flex">
          {links.map((link) => {
            const active =
              pathname === "/"
                ? activeSection === link.id
                : pathname === `/${link.id}`;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-signal ${
                  active ? "text-signal font-medium" : "text-inkDim"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

