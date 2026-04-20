"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const layers = [
  { name: "L1 — Shale",      md: 2800, days: 12, activation: 18, gradient: 22, dominance: 15, delta: +10 },
  { name: "L2 — Sandstone",  md: 2950, days: 18, activation: 82, gradient: 74, dominance: 88, delta: +42 },
  { name: "L3 — Carbonate",  md: 3100, days: 24, activation: 65, gradient: 70, dominance: 60, delta: +28 },
  { name: "L4 — Tight Sand", md: 3280, days: 31, activation: 38, gradient: 42, dominance: 30, delta: -8  },
  { name: "L5 — Pay Zone",   md: 3500, days: 40, activation: 95, gradient: 91, dominance: 97, delta: +50 },
];

const formFields = [
  { label: "Well Name",    value: "Well-A24" },
  { label: "Field",        value: "North Block" },
  { label: "Formation",    value: "Cretaceous" },
  { label: "Total Depth",  value: "3,500 m" },
  { label: "Water Depth",  value: "450 m" },
];

export default function DemoPage() {
  const [activeDataTab, setActiveDataTab] = useState<"sample" | "upload">("sample");
  const [activeInfoTab, setActiveInfoTab] = useState("General Info");

  return (
    <main className="min-h-screen bg-[#07071a]">
      <Navbar />

      <div className="px-6 pb-10 pt-6">

        {/* ── Top tabs ── */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setActiveDataTab("sample")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              activeDataTab === "sample"
                ? "bg-violet-600 border-violet-600 text-white"
                : "border-white/15 text-white/50 hover:text-white/80"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Use Sample Data
            <span className="ml-1 text-[10px] font-normal bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
              Recommended
            </span>
          </button>

          <button
            onClick={() => setActiveDataTab("upload")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              activeDataTab === "upload"
                ? "bg-violet-600 border-violet-600 text-white"
                : "border-white/15 text-white/50 hover:text-white/80"
            }`}
          >
            Upload Your Data
            <span className="ml-1 text-[10px] font-normal bg-white/10 text-white/40 px-2 py-0.5 rounded-full">
              Coming soon
            </span>
          </button>
        </div>

        {/* ── Upload placeholder ── */}
        {activeDataTab === "upload" && (
          <div className="rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center py-32 text-center">
            <div className="text-5xl mb-4">📂</div>
            <p className="text-white font-semibold text-lg mb-2">Upload feature coming soon</p>
            <p className="text-white/40 text-sm max-w-xs">
              You'll be able to upload your own LAS / CSV well log files for interpretation.
            </p>
          </div>
        )}

        {/* ── Sample Data Dashboard ── */}
        {activeDataTab === "sample" && (
          <div className="grid grid-cols-[300px_1fr] gap-4 h-[calc(100vh-160px)] min-h-[600px]">

            {/* ── LEFT PANEL ── */}
            <div className="rounded-2xl border border-white/10 bg-[#0d0d24] flex flex-col overflow-hidden">
              {/* Info tabs */}
              <div className="flex border-b border-white/10">
                {["General Info", "Cost", "Schedule", "Operations"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveInfoTab(tab)}
                    className={`flex-1 text-[11px] font-semibold py-3 transition-colors ${
                      activeInfoTab === tab
                        ? "text-violet-400 border-b-2 border-violet-500"
                        : "text-white/35 hover:text-white/60"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Form fields */}
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
                {formFields.map((f) => (
                  <div key={f.label}>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest mb-1">{f.label}</p>
                    <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white/80 text-sm">
                      {f.value}
                    </div>
                  </div>
                ))}

                {/* Well type toggle */}
                <div>
                  <p className="text-white/35 text-[10px] uppercase tracking-widest mb-2">Well Type</p>
                  <div className="flex gap-2">
                    {["Horizontal", "Vertical", "Deviated"].map((t) => (
                      <button key={t}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                          t === "Deviated"
                            ? "bg-violet-600 border-violet-600 text-white"
                            : "border-white/10 text-white/40 hover:text-white/70"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Label toggle */}
                <div>
                  <p className="text-white/35 text-[10px] uppercase tracking-widest mb-2">Label</p>
                  <div className="flex gap-2">
                    {["PM", "SK", "SB"].map((l) => (
                      <button key={l}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                          l === "PM"
                            ? "bg-violet-600/30 border-violet-500/50 text-violet-300"
                            : "border-white/10 text-white/40 hover:text-white/70"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex flex-col gap-4 overflow-hidden">

              {/* Summary cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Producible Zone", sub: "Primary interpretation", accent: "text-green-400", border: "border-green-500/30" },
                  { value: "87.3% Confidence", sub: "SpectraTag score", accent: "text-violet-400", border: "border-violet-500/30" },
                ].map((s) => (
                  <div key={s.value}
                    className={`rounded-2xl border ${s.border} bg-[#0d0d24] px-8 py-6 flex flex-col items-center justify-center text-center`}>
                    <p className={`text-3xl font-bold ${s.accent} mb-1`}>{s.value}</p>
                    <p className="text-white/35 text-xs">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Signal chart */}
              <div className="rounded-2xl border border-white/10 bg-[#0d0d24] p-6 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Signal Analysis (%)</p>
                  <div className="flex items-center gap-4 text-[10px] text-white/40">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-green-500 inline-block"/>Activation</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-violet-500 inline-block"/>Gradient</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber-500 inline-block"/>Dominance</span>
                  </div>
                </div>
                <div className="border-b border-white/10 mb-4" />

                <div className="flex flex-col gap-3">
                  {layers.map((layer) => (
                    <div key={layer.name} className="flex items-center gap-3">
                      <div className="w-28 text-[11px] text-white/40 shrink-0 truncate">{layer.name}</div>
                      <div className="flex-1 flex flex-col gap-1">
                        {[
                          { val: layer.activation, color: "bg-green-500" },
                          { val: layer.gradient,   color: "bg-violet-500" },
                          { val: layer.dominance,  color: "bg-amber-500"  },
                        ].map((bar, i) => (
                          <div key={i} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.val}%`, opacity: 0.85 }} />
                          </div>
                        ))}
                      </div>
                      <div className={`w-12 text-right text-xs font-bold shrink-0 ${
                        layer.delta > 0 ? "text-green-400" : "text-red-400"
                      }`}>
                        {layer.delta > 0 ? "+" : ""}{layer.delta}%
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white/25 text-[10px] mt-3">Probabilistic · SpectraTag Engine</p>
              </div>

              {/* Data table */}
              <div className="rounded-2xl border border-white/10 bg-[#0d0d24] overflow-hidden">
                <div className="px-6 py-3 border-b border-white/10">
                  <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Layer Summary</p>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      {["Name", "MD (m)", "Days", "Activation", "Decision"].map((h) => (
                        <th key={h} className="text-left px-6 py-2.5 text-white/35 text-[11px] font-semibold uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {layers.map((row, i) => (
                      <tr key={row.name} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                        <td className="px-6 py-3 text-white/70 text-xs">{row.name}</td>
                        <td className="px-6 py-3 text-white/60 text-xs">{row.md}</td>
                        <td className="px-6 py-3 text-white/60 text-xs">{row.days}</td>
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <div className="h-full rounded-full bg-green-500" style={{ width: `${row.activation}%` }} />
                            </div>
                            <span className={`text-xs font-bold ${row.delta > 0 ? "text-green-400" : "text-red-400"}`}>
                              {row.delta > 0 ? "+" : ""}{row.delta}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                            row.activation > 70
                              ? "bg-green-500/15 text-green-400"
                              : row.activation > 40
                              ? "bg-amber-500/15 text-amber-400"
                              : "bg-red-500/15 text-red-400"
                          }`}>
                            {row.activation > 70 ? "Perforate" : row.activation > 40 ? "Evaluate" : "Skip"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        )}

        <div className="mt-6 flex justify-start">
          <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
