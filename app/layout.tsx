import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dewmini Weerapperuma — Software Engineer",
  description:
    "Portfolio of Dewmini Weerapperuma, software engineer and full-stack developer, undergraduate at the University of Moratuwa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="font-sans bg-bg text-ink bg-grid antialiased relative min-h-screen">
        {/* Ambient Glowing Background Light Blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-amber-500/10 blur-[140px]" />
          <div className="absolute top-1/3 -right-32 h-[650px] w-[650px] rounded-full bg-blue-600/10 blur-[160px]" />
          <div className="absolute bottom-20 left-1/3 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[150px]" />
        </div>
        <div className="relative z-10">
          <Header />
          <MobileNav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
