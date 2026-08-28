import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function Goals() {
  return (
    <section id="objetivos" className="py-28">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 shadow-card sm:p-14"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-gradient opacity-[0.08] blur-3xl"
            aria-hidden="true"
          />
          <p className="eyebrow font-mono text-xs uppercase tracking-[0.2em] text-muted">objetivos</p>
          <h2 className="relative mt-4 max-w-2xl text-2xl font-medium leading-relaxed text-ink sm:text-3xl">
            {profile.goals}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
