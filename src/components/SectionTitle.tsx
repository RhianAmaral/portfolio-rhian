import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </motion.div>
  );
}
