import { projects } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projetos" className="py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="projetos"
          title="O que venho construindo"
          description="Novos projetos serão adicionados aqui conforme forem desenvolvidos."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
