import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const categories = [
  {
    title: "Frontend",
    desc: "Building intuitive interfaces, responsive layouts, and client-side web application logic.",
    tags: ["Next.js 14", "React 18", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"],
  },
  {
    title: "Backend",
    desc: "RESTful APIs, authentication systems, and scalable server-side architecture.",
    tags: ["Node.js", "Express", "REST APIs", "JWT Auth", "Middleware"],
  },
  {
    title: "Databases",
    desc: "Relational database schema modeling, queries, and document-based data persistence.",
    tags: ["PostgreSQL", "MongoDB", "Supabase", "Prisma ORM", "SQL"],
  },
  {
    title: "Tools & Platforms",
    desc: "Developer tools, deployment workflows, version control, and embedded systems hardware.",
    tags: ["Docker", "Git / GitHub", "Firebase", "Arduino / C++", "ESP32 IoT"],
  },
];

const timeline = [
  {
    period: "2024 — Present",
    title: "B.Sc. (Hons) Information Technology and Management",
    place: "University of Moratuwa — Faculty of Information Technology",
    desc: "Undergraduate degree program combining information technology, software engineering, and database management with strategic business administration, accounting, and economics.",
    status: "In Progress",
  },
  {
    period: "2023 — 2024",
    title: "Diploma in English Language and Literature",
    place: "Aquinas Higher College of Studies",
    desc: "Comprehensive diploma program focusing on advanced English language communication, literature, and formal academic writing.",
    status: "Completed",
  },
  {
    period: "2023",
    title: "Diploma in Information Technology and Communication",
    place: "ICBT Campus",
    desc: "Foundational diploma covering fundamentals of computer networks, cybersecurity, Python programming, web development, and IT system essentials.",
    status: "Completed",
  },
  {
    period: "2023",
    title: "G.C.E. Advanced Level — Physical Science Stream",
    place: "Buddhist Girls' National College, Wennappuwa",
    desc: "Secondary education completed in the Physical Science stream (Combined Mathematics, Physics, and Chemistry).",
    status: "Completed",
  },
];

const certifications = [
  {
    id: "road-to-legacy",
    name: "Certificate of Appreciation — Road To Legacy 2.0",
    issuer: "IEEE USJ Student Branch",
    place: "University of Sri Jayewardenepura",
    date: "Issued May 31, 2025",
    desc: "Certificate of appreciation presented in sincere recognition of outstanding dedication and valuable contribution as a Member of the Delegates Handling Team in the Organizing Committee of Road To Legacy 2.0.",
    image: "/assets/cert-road-to-legacy.png",
  },
  {
    id: "web-design",
    name: "Web Design for Beginners",
    issuer: "Centre for Open & Distance Learning (CODL)",
    place: "Department of Information Technology, Faculty of Information Technology, University of Moratuwa",
    desc: "Official E-Certificate presented upon completing the online learning programme in Web Design for Beginners conducted by the Department of Information Technology, Faculty of Information Technology, University of Moratuwa, Sri Lanka.",
    image: "/assets/cert-web-design-official.png",
    verificationCode: "6dXMSXDg3g",
    verificationUrl: "https://open.uom.lk/verify",
  },
  {
    id: "java",
    name: "Introduction to Java",
    issuer: "Sololearn Course Certificate",
    date: "Issued August 30, 2025",
    desc: "Verified SoloLearn course certificate demonstrating theoretical and practical understanding of object-oriented programming, data structures, and Java core fundamentals.",
    image: "/assets/cert-java-official.jpg",
    verificationCode: "CC-OZKS6GFN",
  },
  {
    id: "c-lang",
    name: "Introduction to C",
    issuer: "Sololearn Course Certificate",
    date: "Issued July 31, 2025",
    desc: "Verified SoloLearn course certificate demonstrating theoretical and practical understanding of memory management, pointer arithmetic, control structures, and low-level C programming.",
    image: "/assets/cert-c-official.jpg",
    verificationCode: "CC-VPDF6QPS",
  },
];

const articles = [
  {
    title: "Introduction about Cloud Computing",
    date: "Published on Medium",
    readTime: "Medium Post",
    category: "Cloud Computing",
    desc: "An introductory blog post explaining the core principles of cloud computing, exploring cloud service models (IaaS, PaaS, SaaS), deployment architectures, and how scalable cloud infrastructure powers modern software applications.",
    tags: ["Cloud Computing", "IaaS / PaaS / SaaS", "Cloud Infrastructure"],
    link: "https://medium.com/@dewminiweerapperuma65",
  },
];

const contactItems = [
  {
    k: "LinkedIn",
    v: "linkedin.com/in/dewmini-weerapperuma",
    href: "https://www.linkedin.com/in/dewmini-weerapperuma-321174290",
  },
  {
    k: "GitHub",
    v: "github.com/dewminiweerapperuma",
    href: "https://github.com/dewminiweerapperuma",
  },
  {
    k: "Medium",
    v: "medium.com/@dewminiweerapperuma65",
    href: "https://medium.com/@dewminiweerapperuma65",
  },
  { k: "Phone", v: "+94 77 559 3914", href: "tel:0775593914" },
  { k: "Address", v: "No. 600, Old Road, Meegoda, Padukka, Sri Lanka" },
];

export default function Home() {
  return (
    <>
      {/* Full-Screen Vertically Centered Hero Section */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h1 className="mt-3 font-display text-4xl font-medium leading-[1.08] text-slate-100 sm:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I&apos;m <span className="text-copper">Dewmini</span>
            </h1>

            <h2 className="mt-5 font-display text-xl font-medium leading-snug text-slate-200 sm:text-2xl lg:text-3xl">
              A software engineer with a background in both engineering and management.
            </h2>
            
            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
              Undergraduate in Information Technology and Management at Faculty of IT, University of Moratuwa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="rounded-full bg-copper px-7 py-3.5 font-mono text-xs sm:text-sm font-semibold text-bg transition-colors hover:bg-signal"
              >
                View Projects
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border-2 border-copper px-7 py-3.5 font-mono text-xs sm:text-sm font-semibold text-copper transition-colors hover:bg-copper hover:text-bg"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-3xl border border-line bg-panel p-3 shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl bg-bg/60 h-[460px] sm:h-[540px] w-full">
                <Image
                  src="/assets/dewmini-profile-new.png"
                  alt="Dewmini Weerapperuma"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <PageHeader
            eyebrow="About"
            title="About Me"
            nodeId="U0 — ABOUT"
          />

          <div className="trace-module mt-10 space-y-5 text-sm sm:text-base leading-relaxed text-slate-300">
            <p>
              I&apos;m Dewmini Weerapperuma, a software engineer with a
              background that spans both engineering and management. I build
              full-stack applications with Next.js, TypeScript, React, and
              Node.js/Express, backed by PostgreSQL and MongoDB depending on
              what the data needs.
            </p>
            <p>
              I&apos;m currently pursuing a B.Sc. (Hons) in Information
              Technology and Management at the University of Moratuwa, a
              programme that pairs information technology with business and
              management coursework. That combination shapes how I approach
              engineering work — I don&apos;t just think about how something is
              built, but why it matters and who it serves.
            </p>
            <p>
              Alongside software, I&apos;ve also worked on embedded systems and
              IoT — most notably an indoor air quality monitoring system built
              around an ESP32 and a cluster of environmental sensors — so
              I&apos;m equally comfortable thinking in terms of software
              architecture and hardware constraints when a project calls for
              it.
            </p>
          </div>

          <div className="trace-module mt-20">
            <div className="mb-1 font-mono text-xs text-slate-400">
              U1 — SKILLS
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-copper">
              Technical Skills
            </span>
            <h3 className="mt-2 font-display text-3xl font-medium text-slate-100 sm:text-4xl">
              What I build with
            </h3>
            <p className="mt-3 max-w-xl text-base text-slate-200 sm:text-lg">
              A stack spun up for full-stack web apps, with detours into
              embedded hardware when a project calls for it.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-2">
              {categories.map((cat) => (
                <div key={cat.title} className="bg-panel p-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-signal font-semibold">
                    {cat.title}
                  </h4>
                  <p className="mt-3 text-base text-slate-200 leading-relaxed">{cat.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-copperDim bg-copper/10 px-3.5 py-1.5 font-mono text-xs text-copper font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <PageHeader
            eyebrow="Education"
            title="Education Timeline"
            subtitle="Academic timeline, from secondary school through my current undergraduate degree at the University of Moratuwa."
            nodeId="U3 — EDUCATION"
          />

          <div className="trace-module mt-12 space-y-0">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 gap-6 py-10 sm:grid-cols-[220px_1fr] ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <div>
                  <div className="font-mono text-sm font-semibold text-copper">{item.period}</div>
                  <span
                    className={`mt-3 inline-block rounded-full border px-3.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest font-medium ${
                      item.status === "In Progress"
                        ? "border-signal text-signal bg-signal/10"
                        : "border-slate-400 text-slate-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-slate-100">{item.title}</h3>
                  <div className="mt-2 font-mono text-sm sm:text-base font-semibold text-copper tracking-wide">
                    {item.place}
                  </div>
                  <p className="mt-3.5 max-w-3xl text-base text-slate-200 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <PageHeader
            eyebrow="Certifications"
            title="Certifications & Qualifications"
            subtitle="Verified courses and completed programmes, from foundational programming to web design."
            nodeId="U4 — CERTIFICATIONS"
          />

          <CertificationsSection certifications={certifications} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <PageHeader
            eyebrow="Selected Work"
            title="Featured Projects"
            subtitle="Software and hardware builds, from database design through to shipped interfaces."
            nodeId="U2 — PROJECTS"
          />

          <div className="trace-module mt-12 space-y-8">
            {/* Shop Inventory project */}
            <article className="border border-line bg-panel p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-2">
                <h3 className="font-display text-2xl font-semibold text-slate-100">
                  <Link
                    href="/projects/shop-inventory"
                    className="transition-colors hover:text-copper inline-flex items-center gap-2 group"
                  >
                    Small Shop Inventory + Reorder Alert System
                    <span className="text-sm font-mono text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </h3>
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
                <h3 className="font-display text-2xl font-semibold text-slate-100">
                  <Link
                    href="/projects/air-quality"
                    className="transition-colors hover:text-copper inline-flex items-center gap-2 group"
                  >
                    Indoor Air Quality Monitoring System
                    <span className="text-sm font-mono text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </h3>
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
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <PageHeader
            eyebrow="Writing & Thoughts"
            title="Blogs"
            subtitle="Articles and thoughts written by Dewmini Weerapperuma on Medium."
            nodeId="U6 — BLOGS"
          />

          <div className="trace-module mt-12 space-y-8">
            {articles.map((art) => (
              <article
                key={art.title}
                className="border border-line bg-panel p-8 transition-colors hover:bg-panel2 rounded-xl group"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-signal font-semibold">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="mt-2 font-display text-2xl font-semibold text-slate-100 group-hover:text-copper transition-colors">
                  <a
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {art.title}
                    <span className="text-sm font-mono text-copper opacity-80 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </h3>

                <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-4xl">
                  {art.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line/60">
                  <div className="flex flex-wrap gap-2.5">
                    {art.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-copperDim bg-copper/10 px-3.5 py-1.5 font-mono text-xs text-copper font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-copper px-5 py-2 font-mono text-xs font-semibold text-copper transition-colors hover:bg-copper hover:text-bg"
                  >
                    Read Article on Medium ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
