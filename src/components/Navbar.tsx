import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import MobileMenu from './MobileMenu';

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'border-b border-border bg-base/80 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-mono text-sm font-medium text-ink">
            rhian<span className="text-accent-blue">.</span>amaral
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative rounded-md px-4 py-2 text-sm transition-colors duration-200 ${
                    active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-gradient"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink md:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={menuOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </motion.header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={navItems}
        active={active}
      />
    </>
  );
}
