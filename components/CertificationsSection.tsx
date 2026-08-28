"use client";

import { useState } from "react";
import Image from "next/image";

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  place?: string;
  date?: string;
  desc: string;
  image?: string;
}

export default function CertificationsSection({
  certifications,
}: {
  certifications: CertificationItem[];
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="trace-module mt-10 grid grid-cols-1 gap-6">
        {certifications.map((cert) => {
          const isExpanded = expandedId === cert.id;

          return (
            <div
              key={cert.id}
              onClick={() => toggleExpand(cert.id)}
              className={`group cursor-pointer border transition-all duration-300 rounded-xl bg-panel p-6 sm:p-8 ${
                isExpanded
                  ? "border-copper shadow-[0_10px_30px_rgba(229,154,101,0.15)]"
                  : "border-line hover:border-copper/60 hover:bg-panel2"
              }`}
            >
              {/* Card Header (Always Visible Topic) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-signal font-semibold">
                    {cert.issuer}
                  </span>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-slate-100 group-hover:text-copper transition-colors">
                    {cert.name}
                  </h3>
                  {cert.date && (
                    <div className="mt-1 font-mono text-xs text-slate-400">
                      {cert.date}
                    </div>
                  )}
                  {cert.place && (
                    <div className="mt-1 font-mono text-xs text-slate-400">
                      {cert.place}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full border px-4 py-2 font-mono text-xs font-medium transition-all ${
                      isExpanded
                        ? "border-copper bg-copper text-bg"
                        : "border-copper/40 text-copper group-hover:border-copper group-hover:bg-copper/10"
                    }`}
                  >
                    {isExpanded ? "Hide Details ▲" : "View Certificate & Details ▼"}
                  </span>
                </div>
              </div>

              {/* Expandable Content (Description & Certificate Photo) */}
              {isExpanded && (
                <div
                  className="mt-6 border-t border-line/60 pt-6 animate-fadeIn"
                  onClick={(e) => e.stopPropagation()} // Keep open when interacting inside
                >
                  <p className="text-base text-slate-200 leading-relaxed max-w-3xl">
                    {cert.desc}
                  </p>

                  {cert.image && (
                    <div className="mt-6">
                      <div className="mb-2 font-mono text-xs text-copper">
                        // Verified Certificate Document (Click image to zoom)
                      </div>
                      <div
                        onClick={() =>
                          setLightboxImage({
                            src: cert.image!,
                            alt: cert.name,
                          })
                        }
                        className="group/img relative inline-block overflow-hidden rounded-lg border-2 border-line bg-bg cursor-zoom-in transition-all duration-300 hover:border-copper max-w-2xl"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          width={900}
                          height={650}
                          className="h-auto w-full max-h-[420px] object-contain transition-transform duration-300 group-hover/img:scale-[1.02]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-bg/40 opacity-0 transition-opacity group-hover/img:opacity-100">
                          <span className="rounded-full bg-copper px-4 py-2 font-mono text-xs font-semibold text-bg shadow-lg">
                            🔍 View Full Resolution
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal for Full Certificate Inspection */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-xl border border-line bg-bg p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-copper px-4 py-2 font-mono text-xs font-bold text-bg hover:bg-signal transition-colors"
            >
              ✕ Close Preview
            </button>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={900}
              className="h-auto w-full max-h-[80vh] object-contain rounded-lg mt-8 sm:mt-0"
            />
            <p className="mt-3 text-center font-mono text-xs text-slate-300">
              {lightboxImage.alt} — Verified Course Certificate
            </p>
          </div>
        </div>
      )}
    </>
  );
}
