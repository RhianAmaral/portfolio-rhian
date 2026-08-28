import { technologies } from '../data/technologies';
import SectionTitle from '../components/SectionTitle';
import TechnologyCard from '../components/TechnologyCard';

export default function Technologies() {
  const principais = technologies.filter((t) => t.category === 'principal');
  const complementares = technologies.filter((t) => t.category === 'complementar');

  return (
    <section id="tecnologias" className="py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="tecnologias"
          title="Ferramentas com as quais venho construindo"
          description="Sem porcentagens inventadas — apenas onde realmente estou em cada uma delas."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {principais.map((tech, index) => (
            <TechnologyCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        <p className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          conhecimentos complementares
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {complementares.map((tech, index) => (
            <TechnologyCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
