import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Invitación', href: '#invitation' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Ubicación', href: '#location' },
    { label: 'Confirmar', href: '#rsvp' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-yellow-100 via-amber-50 to-sky-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/logo-sin-fondo.png"
              alt="Logo"
              className="h-10 w-10 md:h-24 md:w-24 rounded-full"
            />
            <span className="text-2xl md:text-3xl font-bold text-amber-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Mi 1er Año
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-amber-800 hover:text-sky-500 font-medium transition-colors duration-300"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-amber-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-amber-200"
        >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-amber-800 hover:text-sky-500 font-medium py-2 transition-colors"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
