interface TechBadgeProps {
  tech: string;
  size?: 'sm' | 'lg';
}

// Ícones monocromáticos (herdam a cor do texto), no mesmo estilo minimalista
// usado no restante do site — inspirados nos símbolos de cada tecnologia,
// sem reproduzir as cores oficiais de marca.
function Icon({ tech }: { tech: string }) {
  switch (tech) {
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8.5 15.2c-1.4.9-1.3 2 .2 2.7c2.1 1 6.3 1 8.4 0c1.5-.7 1.6-1.8.2-2.7c-.3.2-.6.3-.9.5c-1.7.7-5.3.7-7 0c-.3-.2-.6-.3-.9-.5z" />
          <path d="M7.6 12.4c-1.7 1-1.6 2.3.1 3.2c2.4 1.2 7.2 1.2 9.6 0c1.7-.9 1.8-2.2.1-3.2c-.4.3-.8.5-1.3.7c-1.9.8-5.9.8-7.8 0c-.5-.2-.9-.4-1.3-.7z" />
          <path d="M15.5 9.6c1.1.6 1.6 1.3 1.3 2c-.2.5-.8.9-1.6 1.2c1.7-.1 3-.6 3-1.4c0-.7-1.1-1.3-2.7-1.8z" />
          <path d="M9.7 3.5c-.9 1-.6 1.9.6 2.9c1.2 1 1.3 1.9.2 2.8c-.1.1-.3.2-.4.3c1.2-.3 2.1-.9 2.1-1.7c0-.9-.7-1.5-1.6-2.2c-.9-.7-1.2-1.4-.9-2.1z" />
        </svg>
      );
    case 'HTML':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 3.5h14l-1.3 15L12 20.5l-5.7-2L5 3.5z" />
          <path d="M8.3 7.5h7.4M9 11h6.2l-0.35 4.4l-2.85 0.95l-2.85-0.95l-0.15-1.7" />
        </svg>
      );
    case 'CSS':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 3.5h14l-1.3 15L12 20.5l-5.7-2L5 3.5z" />
          <path d="M15.7 7.5H8.3l0.3 3.4h6.5l-0.35 4l-2.75 0.95l-2.75-0.95l-0.15-1.6" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="2.2" />
          <path d="M9.3 8v6.3c0 1.6-0.7 2.2-1.8 2.2c-0.9 0-1.5-0.4-1.9-1" />
          <path d="M13.2 8.2c0.5-0.35 1.05-0.5 1.75-0.5c1.4 0 2.35 0.7 2.35 1.75c0 2-3.4 1.55-3.4 3.55c0 1 0.85 1.6 2.05 1.6c0.75 0 1.35-0.2 1.85-0.65" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
        </svg>
      );
  }
}

export default function TechBadge({ tech, size = 'lg' }: TechBadgeProps) {
  const dimension = size === 'lg' ? 'h-14 w-14' : 'h-8 w-8';

  return (
    <span className={`flex ${dimension} shrink-0 items-center justify-center text-faint transition-colors duration-300 group-hover:text-accent-blue`} title={tech}>
      <Icon tech={tech} />
    </span>
  );
}
