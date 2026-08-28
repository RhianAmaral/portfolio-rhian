import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import { links } from '../data/links';

export default function Contact() {
  return (
    <section id="contato" className="py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="contato"
          title="Vamos conversar"
          description="Estou aberto a oportunidades, projetos e trocas sobre tecnologia."
        />

        <div className="mx-auto grid max-w-2xl gap-4">
          <ContactCard
            label="LinkedIn"
            value="Conecte-se comigo"
            href={links.linkedin}
            icon={<LinkedInIcon />}
          />
          <ContactCard label="GitHub" value="Veja meu código" href={links.github} icon={<GitHubIcon />} />
          <ContactCard
            label="E-mail"
            value={links.email}
            href={`mailto:${links.email}`}
            icon={<MailIcon />}
            external={false}
          />
          <ContactCard label="WhatsApp" value="11 94506-4331" href={links.whatsapp} icon={<WhatsAppIcon />} />
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.75h3.9V21h-3.9V8.75zM10.5 8.75h3.74v1.68h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 5.98V21h-3.9v-5.86c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-3.9V8.75z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.19C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 6h18v12H3z" strokeLinejoin="round" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.44 1.32 4.94L2 22l5.29-1.39a9.87 9.87 0 004.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm0 18.02h-.01a8.1 8.1 0 01-4.14-1.13l-.3-.18-3.14.82.84-3.06-.19-.31a8.13 8.13 0 01-1.24-4.25c0-4.5 3.66-8.16 8.18-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 012.4 5.78c0 4.5-3.67 8.1-8.17 8.1zm4.48-6.07c-.25-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.78.95-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}
