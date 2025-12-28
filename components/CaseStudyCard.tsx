"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

type CaseStudyCardProps = {
  company: string;
  outcome: string;
  narrative: string;
  metrics: { label: string; value: string }[];
  index: number;
};

export function CaseStudyCard({ company, outcome, narrative, metrics, index }: CaseStudyCardProps) {
  return (
    <motion.article
      className={clsx(
        "gradient-ring relative flex h-full flex-col gap-6 rounded-3xl border border-white/5 bg-slate-900/60 p-8 backdrop-blur",
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{company}</h3>
        <p className="text-sm uppercase tracking-[0.2em] text-primary-200/80">{outcome}</p>
      </div>
      <p className="text-base text-slate-300">{narrative}</p>
      <ul className="space-y-3 text-sm text-slate-200/80">
        {metrics.map((metric) => (
          <li key={metric.label} className="space-y-1 rounded-2xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200/90">{metric.label}</p>
            <p>{metric.value}</p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
