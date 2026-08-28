import { education } from '../data/education';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';

export default function Education() {
  return (
    <section id="formacao" className="py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle eyebrow="formação" title="Minha trajetória de estudos" />
        <div className="max-w-2xl">
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
