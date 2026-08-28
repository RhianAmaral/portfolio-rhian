import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
}

export default function ContactCard({ label, value, href, icon, external = true }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 shadow-card transition-colors duration-300 hover:border-accent-blue/40"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-gradient-soft text-accent-blue transition-colors group-hover:text-accent-violet">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs uppercase tracking-wide text-faint">{label}</span>
        <span className="block truncate text-sm font-medium text-ink">{value}</span>
      </span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="shrink-0 text-accent-blue transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.a>
  );
}
