import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import GlobeWrapper from "@/components/GlobeWrapper";
import founderImg from "@/images/founder.png";

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex flex-col m-6 rounded-3xl"
        style={{
          minHeight: "95vh",
          background: "radial-gradient(ellipse at 50% 40%, #1a0a3a 0%, #08081a 60%, #020210 100%)",
        }}
      >
        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            [12,8,1.2,0.6],[87,15,0.8,0.4],[34,42,1.5,0.8],[65,23,0.9,0.5],
            [78,67,1.1,0.7],[23,78,0.7,0.3],[90,45,1.3,0.6],[45,12,0.8,0.5],
            [56,89,1.0,0.4],[11,56,1.4,0.7],[72,34,0.6,0.3],[38,91,1.2,0.6],
            [94,72,0.9,0.5],[19,38,1.1,0.8],[61,5,0.7,0.4],[83,82,1.5,0.6],
            [7,63,0.8,0.3],[47,47,1.0,0.7],[29,19,1.3,0.5],[75,58,0.6,0.4],
          ].map(([l,t,s,o],i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ left:`${l}%`, top:`${t}%`, width:`${s}px`, height:`${s}px`, opacity:o }} />
          ))}
        </div>

        <Navbar />

        {/* Globe + text */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
          <div className="relative w-[680px] h-[680px] max-w-[90vw] max-h-[90vw]">
            {/* Purple glow */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(110,30,220,0.6) 0%, rgba(70,15,170,0.35) 45%, transparent 70%)",
                filter: "blur(60px)",
                transform: "scale(1.15)",
              }}
            />

            <GlobeWrapper />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none px-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight"
                style={{ textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}>
                Reinventing Subsurface 
                <br />
                Intelligence with Physics-Based AI
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/75 text-center max-w-sm leading-relaxed"
                style={{ textShadow: "0 1px 20px rgba(0,0,0,0.9)" }}>
                Automated well log interpretation, reservoir insight, and production decision-making — powered by Activation, Gradient, and Dominance.
              </p>
              <div className="mt-8 flex items-center gap-4 pointer-events-auto">
                <Link href="/demo"
                  className="px-6 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2">
                  View Demo →
                </Link>
                <Link href="/demo"
                  className="px-6 py-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <div className="px-6">

        {/* ── Problem Section ── */}
        <section
          className="rounded-3xl py-20 px-8 mb-6 bg-white border border-gray-100"
        >
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              The Problem with Traditional Interpretation
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Conventional log interpretation relies heavily on empirical models, manual workflows,
              and fragmented analysis. This leads to:
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: "🎯", title: "Missed production opportunities",    stat: "~30%",   statLabel: "of reserves left behind" },
              { icon: "🛢️", title: "Undetected bypass oil",              stat: "Billions", statLabel: "lost annually" },
              { icon: "📍", title: "Suboptimal perforation decisions",   stat: "2×",     statLabel: "higher intervention cost" },
              { icon: "📊", title: "High uncertainty in reservoir behavior", stat: "60%+", statLabel: "prediction error rate" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col"
              >
                <span className="text-3xl mb-5">{card.icon}</span>
                <h3 className="text-gray-900 font-semibold text-base leading-snug mb-3">{card.title}</h3>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <span className="text-violet-600 font-bold text-xl">{card.stat}</span>
                  <span className="text-gray-400 text-xs ml-2">{card.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Solution Section ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4">The solution</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Meet Flowsight
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Flowsight is a next-generation interpretation platform built on physics-driven signal analysis.
                It transforms raw well log data into actionable reservoir intelligence.
              </p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-full px-5 py-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-violet-700 text-sm font-semibold">Powered by SpectraTag Engine</span>
              </div>
            </div>

            {/* Right — visual card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{ background: "linear-gradient(145deg, #1e1040 0%, #2d1060 50%, #1a0a3a 100%)" }}
            >
              {/* Fake signal lines */}
              <div className="flex flex-col gap-3">
                {[90, 60, 80, 45, 70, 55, 85].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 text-right text-[10px] text-white/30 shrink-0">{`L${i + 1}`}</div>
                    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${w}%`,
                          background: i % 3 === 0
                            ? "linear-gradient(90deg, #7c3aed, #a855f7)"
                            : i % 3 === 1
                            ? "linear-gradient(90deg, #6d28d9, #8b5cf6)"
                            : "linear-gradient(90deg, #4c1d95, #7c3aed)",
                          opacity: 0.85,
                        }}
                      />
                    </div>
                    <div className="w-10 text-[10px] text-violet-400 font-mono shrink-0">{w}%</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-white/40 text-xs">SpectraTag Analysis</span>
                <span className="text-green-400 text-xs font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Active
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ── 4. CORE TECHNOLOGY ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4 text-center">Core Technology</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-14">The Science Behind It</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Activation", color: "from-violet-500 to-violet-700", desc: "Measures reservoir energy and signal intensity" },
                { label: "Gradient",   color: "from-purple-500 to-purple-700", desc: "Detects dynamic changes and flow behavior" },
                { label: "Dominance",  color: "from-indigo-500 to-indigo-700", desc: "Identifies controlling physical processes" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:border-violet-200 transition-colors">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} mb-5`} />
                  <h3 className="text-gray-900 font-bold text-xl mb-3">{item.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-violet-50 border border-violet-100 px-8 py-5 text-center">
              <p className="text-gray-700 text-base leading-relaxed">
                Together, they form a <span className="font-semibold text-violet-700">multi-physics interpretation vector</span> that reveals the true state of the reservoir.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. CAPABILITIES ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4 text-center">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-14">What You Can Do with Flowsight</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🔍", title: "Bypass Oil Detection" },
                { icon: "🗺️", title: "Flow Potential Mapping" },
                { icon: "🔗", title: "Reservoir Connectivity Analysis" },
                { icon: "📍", title: "Perforation Targeting" },
                { icon: "⚠️", title: "Production Risk Assessment" },
              ].map((cap) => (
                <div key={cap.title} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-5 hover:border-violet-200 transition-colors">
                  <span className="text-2xl">{cap.icon}</span>
                  <span className="text-gray-900 font-semibold text-base">{cap.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. OUTPUT / RESULTS ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4">Results</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">From Data to Decisions</h2>
              <p className="text-gray-500 text-base leading-relaxed">Flowsight delivers clear, actionable outputs:</p>
            </div>
            <ul className="space-y-4">
              {[
                "Where to perforate",
                "Where oil is left behind",
                "Which zones will produce",
                "Reservoir behavior insights",
                "Production forecasts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5L4 7.5L8 3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

         {/* ── FOUNDER ── */}
        <section className="max-w-5xl mx-auto mb-6">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #0f0a1e 0%, #1e1040 50%, #160830 100%)" }}
          >
            {/* Decorative dots */}
            <div className="absolute inset-0 pointer-events-none select-none">
              {[["12%","18%"],["85%","12%"],["8%","72%"],["90%","65%"],["50%","8%"]].map(([l,t],i)=>(
                <div key={i} className="absolute text-violet-400/20 text-4xl" style={{left:l,top:t}}>✦</div>
              ))}
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 items-end">

              {/* Left — text */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-8 w-fit">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">Founder</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                  Shalkar Khangeldi
                </h2>
                <p className="text-violet-400 font-semibold text-base mb-6">
                  CEO & Chief Geophysicist
                </p>
                <p className="text-white/55 text-base leading-relaxed max-w-md mb-10">
                  15+ years in subsurface geophysics and well log interpretation. Built Flowsight to solve the exact problems he faced daily in the field — turning fragmented data into confident reservoir decisions.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Geophysics","Petrophysics","Reservoir Engineering","AI/ML"].map((tag) => (
                    <span key={tag} className="text-xs text-white/50 border border-white/10 rounded-full px-4 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — photo */}
              <div className="flex items-end justify-center md:justify-end px-8 md:px-0 pb-0 pt-8 md:pt-0">
                <div className="relative w-[340px] h-[420px] rounded-t-3xl overflow-hidden">
                  <Image
                    src={founderImg}
                    alt="Shalkar Khangeldi"
                    fill
                    className="object-cover object-top"
                    // style={{ mixBlendMode: "multiply" }}
                  />
                  {/* Bottom fade to match card bg */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, #160830 0%, #160830 8%, transparent 40%)",
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. ARCHITECTURE ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4 text-center">Architecture</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Built on a Multi-Layer Intelligent Architecture</h2>
            <p className="text-gray-400 text-center text-sm mb-14">Each layer ensures accuracy, reliability, and explainability.</p>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              {[
                "Data Input","Calibration","Normalization",
                "Activation","Gradient","Dominance",
                "Multi-Physics Synthesis","Petrophysical Context","Decision Intelligence",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`rounded-full px-5 py-2.5 text-sm font-medium border ${
                    ["Activation","Gradient","Dominance","Multi-Physics Synthesis","Decision Intelligence"].includes(step)
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }`}>
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M9 5l3 3-3 3" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. WHY DIFFERENT ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4">Differentiation</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Why Flowsight is Different</h2>
            </div>
            <ul className="space-y-5">
              {[
                { icon: "⚛️",  text: "Physics-based, not just data-driven" },
                { icon: "🔍",  text: "Explainable AI (not black-box)" },
                { icon: "⚙️",  text: "Automated full workflow" },
                { icon: "🎯",  text: "Designed for real engineering decisions" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-lg shrink-0">{item.icon}</span>
                  <span className="text-gray-700 text-base font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 9. FUTURE / PLATFORM ── */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase mb-4 text-center">Ecosystem</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-5">More Than Oil & Gas</h2>
            <p className="text-gray-500 text-center text-base mb-14">Flowsight is part of a scalable platform:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { label: "SpectraTag", sub: "Oil & Gas",    color: "bg-violet-600", dot: "bg-violet-400" },
                { label: "UranCore",   sub: "Uranium ISL",  color: "bg-indigo-600", dot: "bg-indigo-400" },
                { label: "GeoCore",    sub: "Minerals",     color: "bg-purple-600", dot: "bg-purple-400" },
              ].map((p) => (
                <div key={p.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:border-violet-200 transition-colors flex flex-col gap-3">
                  <span className={`w-3 h-3 rounded-full ${p.dot}`} />
                  <h3 className="text-gray-900 font-bold text-2xl">{p.label}</h3>
                  <p className="text-gray-500 text-sm">{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. CALL TO ACTION ── */}
        <section
          className="rounded-3xl my-6 py-24 px-8 text-center"
          style={{ background: "linear-gradient(145deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">See Flowsight in Action</h2>
          <p className="text-white/70 text-base md:text-lg max-w-md mx-auto mb-10">
            Experience how physics-based interpretation transforms reservoir decisions.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center bg-white text-violet-700 font-bold text-sm px-10 py-4 rounded-full hover:bg-white/90 transition-colors shadow-xl"
          >
            View Demo →
          </Link>
        </section>

      </div>
    </main>
  );
}
