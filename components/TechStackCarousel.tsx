"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

export interface TechItem {
  name: string;
  shortLabel?: string;
  color?: string;
  icon: React.ReactNode;
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  items: TechItem[];
}

// Crisp, high quality vector icons
const Icons = {
  TypeScript: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded bg-[#3178C6] text-[11px] sm:text-xs font-bold font-mono text-white shadow-sm">
      TS
    </div>
  ),
  JavaScript: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded bg-[#F7DF1E] text-[11px] sm:text-xs font-bold font-mono text-black shadow-sm">
      JS
    </div>
  ),
  Python: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 128 128">
      <path
        fill="#3776AB"
        d="M63.5 12c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H25.4S12 38.4 12 65.8c0 27.5 11.7 26.5 11.7 26.5h7V80.1s-.4-14.5 14.3-14.5h24.7s13.8.2 13.8-13.6V25.7S85.2 12 63.5 12zm-14.7 8.3c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"
      />
      <path
        fill="#FFD43B"
        d="M64.5 116c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H63.9v-3.7h38.7s13.4 1.5 13.4-25.9c0-27.5-11.7-26.5-11.7-26.5h-7v12.2s.4 14.5-14.3 14.5H48.3s-13.8-.2-13.8 13.6v26.3s-1.7 13.7 20 13.7zm14.7-8.3c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"
      />
    </svg>
  ),
  C: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00599C] to-[#004482] text-sm sm:text-base font-extrabold font-mono text-white shadow-sm border border-cyan-400/40">
      C
    </div>
  ),
  Cpp: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00599C] to-[#0086D4] text-[10px] sm:text-xs font-black font-mono text-white shadow-sm border border-cyan-400/40">
      C++
    </div>
  ),
  Java: (
    <div className="flex flex-col items-center justify-center">
      <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.5 18.5c2.5.5 5.5-.5 7.5-.5-1 .5-2 1-3.5 1.2-2.5.3-4.5-.2-4-.7zM11 20.5c2 .2 4-.2 5.5-.4-1.2.6-2.8.8-4.5.8-2 0-3.2-.4-1-.4z"
          fill="#F89820"
        />
        <path
          d="M14.5 12c.5-1.5-.5-2.8-1-4 .8.5 1.5 1.5 1.5 2.5 0 1-.5 1.5-.5 1.5z"
          fill="#5382A1"
        />
        <path
          d="M17 10c1-1.2.5-3-1-5 1 1 2 2.5 1.8 4-.2 1-.8 1-.8 1zM9 16c2.5.8 6.5.8 9.5 0-3 1.2-7 1.2-9.5 0z"
          fill="#F89820"
        />
        <path
          d="M12.5 5c1-1.5 0-3-1-4 .8 1 1.5 2 1.2 3.2-.2.8-.2.8-.2.8z"
          fill="#5382A1"
        />
      </svg>
      <span className="text-[9px] font-bold font-mono text-[#F89820] leading-none mt-0.5">JAVA</span>
    </div>
  ),
  SQL: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  React: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8 animate-spin-slow" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="4" ry="11" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="11" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="11" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#00D8FF" />
    </svg>
  ),
  Nextjs: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black text-xs sm:text-sm font-bold font-display text-white border border-slate-700 shadow-sm">
      N
    </div>
  ),
  Nodejs: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="#68A063">
      <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm-.1 3.1l9.8 5.6-4.5 2.6-9.8-5.6 4.5-2.6zm-11 7.4l4.5-2.6v9.8l-4.5-2.6v-4.6zm11 15.3l-9.8-5.6 4.5-2.6 9.8 5.6-4.5 2.6zm1-6.9v-9.8l4.5 2.6v4.6l-4.5 2.6z" />
    </svg>
  ),
  Express: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded bg-slate-900 text-[11px] sm:text-xs font-mono font-bold text-slate-200 border border-slate-700">
      ex
    </div>
  ),
  Tailwind: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  PostgreSQL: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#336791">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
    </svg>
  ),
  MongoDB: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#13AA52">
      <path d="M12 1.5s-4.5 4.5-4.5 10.5c0 4.5 3 7.5 4.5 10.5 1.5-3 4.5-6 4.5-10.5C16.5 6 12 1.5 12 1.5zm.2 18.2c-.2.4-.4.8-.6 1.1-.1-.3-.3-.7-.5-1.1-.8-1.6-2.1-3.6-2.1-6.7 0-3.5 2-6.5 3.2-8.3 1.2 1.8 3.2 4.8 3.2 8.3 0 3.1-1.3 5.1-2.1 6.7z" />
    </svg>
  ),
  Supabase: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#3ECF8E">
      <path d="M11.9 1.1c-.8-.7-2 .1-1.7 1.1l2.5 8.3H3.8c-1.1 0-1.7 1.3-.9 2.1l9.9 10.2c.8.8 2-.1 1.7-1.1l-2.5-8.3h8.9c1.1 0 1.7-1.3.9-2.1L11.9 1.1z" />
    </svg>
  ),
  Firebase: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#FFCA28">
      <path d="M4.6 17.5L8.5 2.8c.2-.7 1.1-.9 1.5-.4l3.5 6.2-8.9 8.9zm13.3-3.6L14.7 7.7c-.3-.5-1-.5-1.3 0l-2.4 4.3 6.9 1.9zm-13.6 5L5.7 18 12 22l-7.7-3.1zm15.4-3.1l-1.9-5.1-9.2 9.2 8.7-3.2c1.4-.5 2.4-1.7 2.4-.9z" />
    </svg>
  ),
  Prisma: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#2D3748">
      <path d="M12.7 1.3c-.4-.4-1-.4-1.4 0L1.7 11c-.4.4-.4 1 0 1.4l9.6 9.7c.4.4 1 .4 1.4 0l9.6-9.7c.4-.4.4-1 0-1.4L12.7 1.3zm-.7 2.4L19.2 11 12 18.2 4.8 11 12 3.7z" fill="#00f2fe" />
    </svg>
  ),
  Git: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.6 10.6l-8.2-8.2c-.8-.8-2.1-.8-2.9 0L8.4 4.5l3.6 3.6c.9-.3 1.9-.1 2.5.6.7.7.9 1.7.6 2.5l3.5 3.5c.9-.3 1.9-.1 2.5.6.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.8-.8-.9-1.9-.5-2.8l-3.2-3.2v6.6c.3.2.5.6.5 1 0 .9-.8 1.7-1.7 1.7s-1.7-.8-1.7-1.7c0-.4.2-.8.5-1V9.7c-.3-.2-.5-.6-.5-1 0-.6.4-1.2 1-1.5L8.5 3.5 2.4 9.6c-.8.8-.8 2.1 0 2.9l8.2 8.2c.8.8 2.1.8 2.9 0l8.1-8.1c.8-.8.8-2.1 0-2.9z" />
    </svg>
  ),
  GitHub: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#F8FAFC">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Docker: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m21.758 1.137a5.534 5.534 0 00-2.42-1.258l-.443-.11-.274.363a4.498 4.498 0 01-2.408 1.554l-.454.12.18.435c.42 1.01.298 2.016-.364 2.99-.443.653-1.077 1.168-1.882 1.53l-.382.17.27.319c.732.863 1.764 1.403 2.983 1.562 3.655.48 6.55-1.848 6.784-5.467.042-.647-.024-1.207-.156-1.688M.06 13.567a8.558 8.558 0 003.585 5.502c2.09 1.488 4.678 2.148 7.483 1.91 4.544-.386 8.358-3.084 10.198-7.218.06-.135-.044-.282-.19-.26a8.497 8.497 0 01-3.64.062c-.11-.02-.178-.124-.15-.23.185-.71.553-1.393 1.096-2.032.084-.1.03-.255-.102-.27a10.024 10.024 0 00-2.072-.08c-.104.008-.188-.073-.17-.176.12-.68.412-1.378.87-2.072.07-.107.006-.252-.123-.252a11.166 11.166 0 00-2.497.35c-.1.026-.195-.046-.19-.15.045-.98.3-2.02.76-3.09.048-.11-.03-.233-.147-.23-1.636.036-3.23.504-4.61 1.356-.1.062-.224.015-.262-.095a5.52 5.52 0 00-.773-1.42.176.176 0 00-.236-.04 11.135 11.135 0 00-3.67 3.916c-.053.094-.176.115-.257.044a5.05 5.05 0 00-1.487-.84.18.18 0 00-.232.09c-.524 1.15-.79 2.45-.79 3.864 0 .463.028.924.086 1.378.016.126-.07.238-.196.242-1.077.037-2.145.244-3.178.618a.187.187 0 00-.117.234z" />
    </svg>
  ),
  ESP32: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded bg-gradient-to-br from-emerald-950 to-emerald-800 text-[10px] sm:text-xs font-mono font-bold text-emerald-300 border border-emerald-500/50 shadow-sm">
      ESP
    </div>
  ),
  Arduino: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.5 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c2 0 3.5-1.5 4.5-3 1 1.5 2.5 3 4.5 3 2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5c-2 0-3.5 1.5-4.5 3-1-1.5-2.5-3-4.5-3zm-2 5h4m7.5-1v2m-1-1h2"
        stroke="#00979D"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Sensors: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" fill="#F59E0B" fillOpacity="0.2" />
    </svg>
  ),
  Postman: (
    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#FF6C37] text-white font-black text-xs sm:text-sm shadow-sm">
      P
    </div>
  ),
  VSCode: (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="#007ACC">
      <path d="M17.5 1.5l-9.3 8.7L4.5 7 1.5 8.5l4.3 3.5-4.3 3.5 3 1.5 3.7-3.2 9.3 8.7 5-2.5V4l-5-2.5zm1 16.5l-6-5.5 6-5.5v11z" />
    </svg>
  ),
};

const techCategories: TechCategory[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "Core Programming & Scripting",
    desc: "Primary languages used for building reliable full-stack applications, system routines, and embedded microcontrollers.",
    items: [
      { name: "TypeScript", icon: Icons.TypeScript, color: "#3178C6" },
      { name: "JavaScript", icon: Icons.JavaScript, color: "#F7DF1E" },
      { name: "Python", icon: Icons.Python, color: "#3776AB" },
      { name: "C", icon: Icons.C, color: "#00599C" },
      { name: "Java", icon: Icons.Java, color: "#F89820" },
      { name: "SQL", icon: Icons.SQL, color: "#38BDF8" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    subtitle: "Web & API Architecture",
    desc: "Modern frameworks enabling reactive, high-performance UI engineering and resilient backend endpoints.",
    items: [
      { name: "Next.js 14", icon: Icons.Nextjs, color: "#FFFFFF" },
      { name: "React 18", icon: Icons.React, color: "#00D8FF" },
      { name: "Node.js", icon: Icons.Nodejs, color: "#68A063" },
      { name: "Express.js", icon: Icons.Express, color: "#94A3B8" },
      { name: "Tailwind CSS", icon: Icons.Tailwind, color: "#38BDF8" },
      { name: "Prisma ORM", icon: Icons.Prisma, color: "#00f2fe" },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORMs",
    subtitle: "Persistence & Schema Design",
    desc: "Relational modeling, document stores, and real-time cloud data layers configured for integrity and low latency.",
    items: [
      { name: "PostgreSQL", icon: Icons.PostgreSQL, color: "#336791" },
      { name: "MongoDB", icon: Icons.MongoDB, color: "#13AA52" },
      { name: "Supabase", icon: Icons.Supabase, color: "#3ECF8E" },
      { name: "Firebase", icon: Icons.Firebase, color: "#FFCA28" },
      { name: "SQL", icon: Icons.SQL, color: "#38BDF8" },
      { name: "Prisma", icon: Icons.Prisma, color: "#00f2fe" },
    ],
  },
  {
    id: "devops",
    title: "DevOps Tools",
    subtitle: "Deployment & Tooling",
    desc: "Version control workflows, containerization, API testing suites, and seamless production hosting pipelines.",
    items: [
      { name: "Git", icon: Icons.Git, color: "#F05032" },
      { name: "GitHub", icon: Icons.GitHub, color: "#F8FAFC" },
      { name: "Docker", icon: Icons.Docker, color: "#2496ED" },
      { name: "Postman", icon: Icons.Postman, color: "#FF6C37" },
      { name: "VS Code", icon: Icons.VSCode, color: "#007ACC" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware Platforms",
    subtitle: "Embedded Systems & IoT",
    desc: "Microcontroller programming, hardware-level sensors, and environmental monitoring circuits with real-time cloud ingestion.",
    items: [
      { name: "ESP32 IoT", icon: Icons.ESP32, color: "#10B981" },
      { name: "Arduino IDE", icon: Icons.Arduino, color: "#00979D" },
      { name: "Embedded C", icon: Icons.C, color: "#00599C" },
      { name: "Air Quality Sensors", icon: Icons.Sensors, color: "#F59E0B" },
    ],
  },
];

function HexagonItem({ item }: { item: TechItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group/hex relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-[68px] w-[60px] sm:h-[80px] sm:w-[70px] items-center justify-center transition-all duration-300 group-hover/hex:scale-110">
        {/* SVG Hexagon with sleek cyan border matching screenshot */}
        <svg
          viewBox="0 0 100 115"
          className="absolute inset-0 h-full w-full drop-shadow-md transition-all duration-300"
        >
          <polygon
            points="50,2 96,28.5 96,86.5 50,113 4,86.5 4,28.5"
            fill="#090D22"
            stroke={isHovered ? (item.color || "#00f2fe") : "#00f2fe"}
            strokeOpacity={isHovered ? 1 : 0.45}
            strokeWidth={isHovered ? 3.5 : 2.5}
            className="transition-all duration-300"
          />
        </svg>

        {/* Tech Icon inside */}
        <div className="relative z-10 flex items-center justify-center">
          {item.icon}
        </div>
      </div>

      {/* Tooltip / Label on hover */}
      <span
        className={`pointer-events-none absolute -bottom-7 z-30 whitespace-nowrap rounded-md border border-cyan-400/50 bg-[#050816]/95 px-2.5 py-1 font-mono text-[11px] font-semibold text-cyan-300 shadow-xl transition-all duration-200 ${
          isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        {item.name}
      </span>
    </div>
  );
}

export default function TechStackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = techCategories.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <div className="relative w-full select-none py-6" ref={containerRef}>
      {/* Category Pills Header for Quick Direct Selection */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {techCategories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
              activeIndex === i
                ? "border border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-semibold"
                : "border border-line bg-panel/60 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* 3D Cover Flow Stage */}
      <div
        className="relative mx-auto flex h-[480px] sm:h-[460px] w-full max-w-6xl items-center justify-center overflow-visible"
        style={{ perspective: "1200px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {techCategories.map((cat, index) => {
          // Circular offset calculation relative to activeIndex
          let offset = index - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;

          // 3D Transforms according to offset
          let transformStyle = "";
          let zIndex = 10;
          let opacity = 0;
          let pointerEvents: "auto" | "none" = "none";

          if (isActive) {
            transformStyle = "translateX(0%) scale(1) rotateY(0deg)";
            zIndex = 30;
            opacity = 1;
            pointerEvents = "auto";
          } else if (isPrev) {
            transformStyle = "translateX(-68%) scale(0.85) rotateY(28deg)";
            zIndex = 20;
            opacity = 0.45;
            pointerEvents = "auto";
          } else if (isNext) {
            transformStyle = "translateX(68%) scale(0.85) rotateY(-28deg)";
            zIndex = 20;
            opacity = 0.45;
            pointerEvents = "auto";
          } else if (offset < -1) {
            transformStyle = "translateX(-115%) scale(0.7) rotateY(38deg)";
            zIndex = 10;
            opacity = 0.15;
          } else if (offset > 1) {
            transformStyle = "translateX(115%) scale(0.7) rotateY(-38deg)";
            zIndex = 10;
            opacity = 0.15;
          }

          // Divide items into 2 rows for balanced honeycomb layout (e.g. 3 and 3 for 6 items)
          const splitIndex = cat.items.length === 6 ? 3 : Math.ceil(cat.items.length / 2);
          const row1 = cat.items.slice(0, splitIndex);
          const row2 = cat.items.slice(splitIndex);

          return (
            <div
              key={cat.id}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
                pointerEvents,
                transition: "transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, box-shadow 450ms ease, border-color 450ms ease",
              }}
              className={`absolute top-0 flex flex-col justify-between w-[92%] sm:w-[580px] h-[440px] sm:h-[420px] rounded-3xl p-6 sm:p-8 backdrop-blur-xl ${
                isActive
                  ? "border-2 border-cyan-400/80 bg-[#0A0E27]/95 shadow-[0_0_40px_rgba(0,242,254,0.22),_0_20px_40px_rgba(0,0,0,0.6)] cursor-default"
                  : "border border-cyan-500/20 bg-[#080B1E]/80 cursor-pointer hover:border-cyan-400/40"
              }`}
            >
              {/* Card Header (Category Title) */}
              <div className="text-center">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {cat.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-cyan-300 font-medium">
                  {cat.subtitle}
                </p>
              </div>

              {/* Honeycomb Hexagon Grid */}
              <div className="my-auto py-2">
                {/* Row 1 */}
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                  {row1.map((item) => (
                    <HexagonItem key={item.name} item={item} />
                  ))}
                </div>

                {/* Row 2 (offset beneath row 1) */}
                {row2.length > 0 && (
                  <div className="mt-2 sm:mt-3 flex items-center justify-center gap-3 sm:gap-5">
                    {row2.map((item) => (
                      <HexagonItem key={item.name} item={item} />
                    ))}
                  </div>
                )}
              </div>

              {/* Card Description */}
              <div className="text-center pt-3 border-t border-line/50">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto line-clamp-2">
                  {cat.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous tech category"
          className="absolute left-2 sm:left-4 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-[#080D24]/80 text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.2)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-500/20 active:scale-95"
        >
          <span className="font-mono text-base font-bold">‹</span>
        </button>

        {/* Navigation Arrow Right + Inline Indicator (matching reference screenshot) */}
        <div className="absolute right-2 sm:right-4 z-40 flex items-center gap-3">
          <button
            onClick={nextSlide}
            aria-label="Next tech category"
            className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-[#080D24]/80 text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.2)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-500/20 active:scale-95"
          >
            <span className="font-mono text-base font-bold">›</span>
          </button>

          {/* Inline pill + dots indicator as seen in reference image */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#080D24]/80 px-2.5 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-md">
            {techCategories.map((_, i) => (
              <span
                key={i}
                className={`transition-all duration-300 ${
                  activeIndex === i
                    ? "h-2 w-6 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.8)]"
                    : "h-2 w-2 rounded-full bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Bar (Matching Screenshot Pill + Dots) */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {techCategories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              activeIndex === i
                ? "h-2 w-8 sm:w-10 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.8)]"
                : "h-2 w-2 sm:w-2.5 rounded-full bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
