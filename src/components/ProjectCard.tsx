import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-colors duration-300 hover:border-accent-blue/40 hover:shadow-card-hover"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex items-center justify-center gap-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <TechBadge key={tech} tech={tech} size="lg" />
            ))}
            {project.placeholder && (
              <span className="absolute -bottom-8 font-mono text-xs text-faint">em breve</span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-soft bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {!project.placeholder && (
          <div className="mt-6 flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-accent-blue/50 decoration-2 underline-offset-4 transition-colors hover:text-accent-blue"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-accent-violet/50 decoration-2 underline-offset-4 transition-colors hover:text-accent-violet"
              >
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
