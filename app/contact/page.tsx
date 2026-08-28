import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Dewmini Weerapperuma",
  description:
    "Get in touch with Dewmini Weerapperuma for software engineering opportunities, project inquiries, and technical collaborations.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactSection />
    </div>
  );
}
