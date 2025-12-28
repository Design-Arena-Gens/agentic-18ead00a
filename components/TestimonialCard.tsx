"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "./icons";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  index: number;
};

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.figure
      className="gradient-ring flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-left text-slate-200 backdrop-blur"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.05, type: "spring", stiffness: 120, damping: 18 }}
    >
      <QuoteIcon className="h-8 w-8 text-primary-400" />
      <blockquote className="text-lg leading-relaxed text-slate-100">{quote}</blockquote>
      <figcaption className="text-sm font-medium text-slate-400">
        <span className="block text-slate-100">{author}</span>
        <span>{role}</span>
      </figcaption>
    </motion.figure>
  );
}
