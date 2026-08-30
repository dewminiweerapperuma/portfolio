import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CertificationsSection from "@/components/CertificationsSection";

export const metadata: Metadata = {
  title: "Certifications — Dewmini Weerapperuma",
};

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
    issuer: "Centre for Open & Distance Learning (CODL), Dept. of Information Technology",
    place: "Faculty of Information Technology, University of Moratuwa",
    desc: "Online learning programme covering standard HTML5, CSS3, modern UI layout principles, and web standard best practices.",
    image: "/assets/cert-web-design.png",
  },
  {
    id: "java",
    name: "Introduction to Java",
    issuer: "SoloLearn Certificate of Achievement",
    date: "Issued August 2025",
    desc: "Verified course certificate demonstrating object-oriented programming principles, data structures, and Java core fundamentals.",
    image: "/assets/cert-java.jpg",
  },
  {
    id: "c-lang",
    name: "Introduction to C",
    issuer: "SoloLearn Certificate of Achievement",
    date: "Issued July 2025",
    desc: "Verified course certificate covering memory management, pointer arithmetic, control structures, and low-level C programming.",
    image: "/assets/cert-c.jpg",
  },
];

export default function CertificationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 sm:py-28">
      <PageHeader
        eyebrow="Certifications"
        title="Certifications & Qualifications"
        subtitle="Verified courses and completed programmes, from foundational programming to web design."
        nodeId="U4 — CERTIFICATIONS"
      />

      <CertificationsSection certifications={certifications} />
    </section>
  );
}
