"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center px-6 py-5 relative z-20">
      <div className="flex items-center justify-between w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M3 7 L7 3 L11 7 L7 11 Z" fill="white" />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm">FlowSight</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {["Home", "Product", "Solution", "Pricing", "About us", "Contact"].map((item) => (
            <Link key={item} href="#" className="hover:text-white transition-colors">{item}</Link>
          ))}
        </div>

        <Link href="/demo"
          className="text-sm bg-white text-[#1a1a1a] font-semibold px-5 py-1.5 rounded-full hover:bg-white/90 transition-colors">
          Login
        </Link>
      </div>
    </nav>
  );
}
