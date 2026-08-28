import { motion } from 'framer-motion';
import type { Technology } from '../data/technologies';

interface TechnologyCardProps {
  tech: Technology;
  index: number;
}

const levelColor: Record<Technology['level'], string> = {
  'Em desenvolvimento': 'text-accent-blue',
  'Em aprendizado': 'text-accent-violet',
  Conhecimento: 'text-muted',
  Familiaridade: 'text-faint',
};

export default function TechnologyCard({ tech, index }: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-card transition-colors duration-300 hover:border-accent-blue/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-accent-gradient-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-lg font-medium text-ink transition-transform duration-300 group-hover:translate-x-0.5">
            {tech.name}
          </span>
          {tech.category === 'principal' && (
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" aria-hidden="true" />
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{tech.description}</p>
        <p className={`mt-4 font-mono text-xs uppercase tracking-wide ${levelColor[tech.level]}`}>
          {tech.level}
        </p>
      </div>
    </motion.div>
  );
}
