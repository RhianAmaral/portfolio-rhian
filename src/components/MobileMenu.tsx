import { AnimatePresence, motion } from 'framer-motion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: { id: string; label: string }[];
  active: string;
}

export default function MobileMenu({ open, onClose, items, active }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-base/95 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-mono text-sm text-ink">rhian<span className="text-accent-blue">.</span>amaral</span>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink"
              aria-label="Fechar menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-col gap-1 px-6 py-6"
          >
            {items.map((item) => (
              <motion.li
                key={item.id}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className={`block rounded-lg px-4 py-3 text-lg ${
                    active === item.id ? 'bg-surface text-ink' : 'text-muted'
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
