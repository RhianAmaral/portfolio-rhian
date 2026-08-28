import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import Button from '../components/Button';
import photo from '../assets/rhian-photo.jpg';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* elementos decorativos discretos */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-violet/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[360px] w-[360px] rounded-full bg-accent-blue/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-16 px-6 py-16 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            portfólio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Olá, eu sou{' '}
            <span className="bg-accent-gradient bg-clip-text text-transparent">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 font-mono text-lg text-accent-blue"
          >
            {profile.role}
            <span className="animate-blink" aria-hidden="true">_</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#projetos">Ver projetos</Button>
            <Button href="#contato" variant="secondary">
              Entre em contato
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-accent-gradient opacity-20 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative animate-float rounded-[1.75rem] border border-border-soft bg-surface p-2 shadow-glow">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={photo}
                alt={`Foto profissional de ${profile.name}`}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-mono text-xs text-muted shadow-card">
              <span className="h-2 w-2 rounded-full bg-accent-gradient" aria-hidden="true" />
              status: aprendendo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
