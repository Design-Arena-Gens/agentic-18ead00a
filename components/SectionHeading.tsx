"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-4", className)}>
      <motion.span
        className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-100"
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 110, damping: 16 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, type: "spring", stiffness: 90, damping: 14 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="max-w-2xl text-lg text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
