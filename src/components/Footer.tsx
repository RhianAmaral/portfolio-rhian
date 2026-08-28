import { profile } from '../data/profile';
import { links } from '../data/links';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-sm text-ink">
              rhian<span className="text-accent-blue">.</span>amaral
            </p>
            <p className="mt-2 text-sm text-muted">{profile.role}</p>
            <p className="mt-4 max-w-xs text-sm italic text-faint">“{profile.footerMessage}”</p>
          </div>

          <nav aria-label="Links de contato no rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li>
                <a href={links.github} className="transition-colors hover:text-ink">
                  GitHub
                </a>
              </li>
              <li>
                <a href={links.linkedin} className="transition-colors hover:text-ink">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${links.email}`} className="transition-colors hover:text-ink">
                  E-mail
                </a>
              </li>
              <li>
                <a href={links.whatsapp} className="transition-colors hover:text-ink">
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border-soft pt-6 text-xs text-faint">
          © {year} {profile.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
