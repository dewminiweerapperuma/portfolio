"use client";

import { useState } from "react";
import Image from "next/image";

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption: string;
}

export default function ProjectGallery({ photos }: { photos: ProjectPhoto[] }) {
  const [lightbox, setLightbox] = useState<ProjectPhoto | null>(null);

  return (
    <div className="mt-12">
      <h3 className="font-display text-2xl font-semibold text-slate-100 mb-6">
        Application Screenshots
      </h3>

      {/* Responsive 3-Column Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setLightbox(photo)}
            className="group cursor-pointer overflow-hidden rounded-xl border border-line bg-panel p-3 transition-all duration-300 hover:border-copper/70 hover:shadow-xl"
          >
            {/* Medium size container (height ~220px to 260px) */}
            <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-lg bg-bg/80">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-copper px-4 py-2 font-mono text-xs font-semibold text-bg shadow-md">
                  🔍 View Full Image
                </span>
              </div>
            </div>
            <p className="mt-3 font-mono text-xs text-slate-300 px-1 font-medium">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-5xl overflow-auto rounded-xl border border-line bg-bg p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-copper px-4 py-2 font-mono text-xs font-bold text-bg hover:bg-signal transition-colors"
            >
              ✕ Close
            </button>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1400}
              height={900}
              className="h-auto w-full max-h-[80vh] object-contain rounded-lg mt-8 sm:mt-0"
            />
            <p className="mt-4 text-center font-mono text-xs text-slate-300 font-medium">
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
