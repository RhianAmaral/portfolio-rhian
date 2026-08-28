import { motion } from 'framer-motion';
import type { EducationItem } from '../data/education';

interface TimelineProps {
  items: EducationItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-border pl-8">
      {items.map((item, index) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          className="relative mb-10 last:mb-0"
        >
          <span
            className={`absolute -left-[2.32rem] top-1 h-3 w-3 rounded-full border-2 border-base ${
              item.status === 'Em andamento' ? 'bg-accent-gradient' : 'bg-faint'
            }`}
            aria-hidden="true"
          />
          <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <span
                className={`font-mono text-xs uppercase tracking-wide ${
                  item.status === 'Em andamento' ? 'text-accent-blue' : 'text-faint'
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{item.institution}</p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-faint">{item.description}</p>
            )}
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-accent-blue underline decoration-accent-blue/40 underline-offset-4 transition-colors hover:text-accent-violet"
              >
                {item.link.text}
              </a>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
