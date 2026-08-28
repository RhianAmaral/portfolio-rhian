import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  external?: boolean;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  external,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-6 py-3 font-body font-medium text-sm transition-all duration-300 focus-visible:outline-2';

  const styles =
    variant === 'primary'
      ? `${base} bg-accent-gradient text-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5`
      : `${base} border border-border bg-surface text-ink hover:border-accent-blue/50 hover:bg-surface-2 hover:-translate-y-0.5`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={styles}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles} type={type}>
      {children}
      {icon}
    </button>
  );
}
