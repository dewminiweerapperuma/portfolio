import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blogs", label: "Blogs" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-8 py-14">
      <div className="border-t border-line pt-8 sm:border-l sm:border-t-0 sm:ml-[6px] sm:pl-11 sm:pt-0">
        <nav className="flex flex-wrap gap-6 font-mono text-xs text-inkDim">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-signal">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 font-mono text-xs text-inkFaint">
          © 2026 Dewmini Weerapperuma — Built and maintained as a living
          document.
        </p>
      </div>
    </footer>
  );
}
