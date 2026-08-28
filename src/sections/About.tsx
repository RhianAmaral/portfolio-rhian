import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';

const highlights = [
  { label: 'Formação', value: 'ADS — FATEC Zona Sul' },
  { label: 'Foco atual', value: 'Java, C, C++, Kotlin' },
  { label: 'Objetivo', value: 'Carreira em desenvolvimento' },
];

export default function About() {
  return (
    <section id="sobre" className="py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="sobre mim"
          title="Quem está por trás do código"
        />

        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="space-y-5">
            {profile.about.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 md:w-64"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-surface p-5 shadow-card"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-faint">{item.label}</p>
                <p className="mt-1 font-medium text-ink">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
