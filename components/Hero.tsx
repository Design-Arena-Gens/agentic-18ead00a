"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-12 shadow-xl">
      <motion.div
        className="absolute inset-y-0 -right-24 w-3/5"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 scale-110 rounded-full bg-primary-500/40 blur-3xl" />
      </motion.div>
      <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr] lg:items-center">
        <div className="space-y-8">
          <motion.span
            className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-primary-100"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            Rajkot-based SEO Strategist
          </motion.span>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, type: "spring", stiffness: 90, damping: 14 }}
          >
            I help ambitious Indian brands turn organic search into their most predictable revenue channel.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, type: "spring", stiffness: 95, damping: 18 }}
          >
            From technical clean-ups to content velocity, I pair data-backed playbooks with collaborative enablement so your GTM teams stay aligned.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, type: "spring", stiffness: 95, damping: 18 }}
          >
            <Link
              href="https://calendly.com/rushabhsanghavi/30min"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-600"
            >
              Book a call
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-primary-400 hover:bg-white/5"
            >
              View impact
            </Link>
          </motion.div>
          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, type: "spring", stiffness: 95, damping: 18 }}
          >
            {[
              { label: "Average YoY organic", value: "+62%" },
              { label: "High-intent rankings", value: "450+" },
              { label: "Successful migrations", value: "18" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-primary-500/50 via-primary-500/10 to-transparent p-2 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 22 }}
        >
          <div className="gradient-ring flex h-full w-full flex-col items-center justify-center gap-3 rounded-full border border-white/10 bg-slate-950/80 p-8 text-slate-100">
            <span className="text-sm uppercase tracking-[0.35em] text-primary-200/80">Rushabh</span>
            <span className="text-4xl font-semibold text-white">Sanghavi</span>
            <span className="text-xs uppercase tracking-[0.35em] text-slate-300/80">SEO Manager</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
