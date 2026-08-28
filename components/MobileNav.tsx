"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#education", label: "Education", id: "education" },
  { href: "/#certifications", label: "Certs", id: "certifications" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#blogs", label: "Blogs", id: "blogs" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function MobileNav() {
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
    <nav className="sticky top-[57px] z-20 flex gap-5 overflow-x-auto border-b border-line bg-bg/95 px-7 py-3 font-mono text-xs sm:hidden">
      {links.map((link) => {
        const active =
          pathname === "/"
            ? activeSection === link.id
            : pathname === `/${link.id}`;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap ${active ? "text-signal font-medium" : "text-inkDim"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

