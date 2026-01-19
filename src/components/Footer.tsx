import { motion } from 'framer-motion';
import { Heart, Cake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-100 via-yellow-100 to-sky-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cake className="text-amber-600" size={40} />
            </motion.div>
            <img
              src="/logo-sin-fondo.png"
              alt="Logo"
              className="h-20 w-20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="text-sky-500 fill-sky-500" size={40} />
            </motion.div>
          </div>

          <h3
            className="text-3xl md:text-4xl font-bold text-amber-700 mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            ¡Gracias por Celebrar Conmigo!
          </h3>

          <p
            className="text-lg md:text-xl text-sky-700 mb-6"
            style={{ fontFamily: 'Comic Neue, cursive' }}
          >
            Este día especial será inolvidable gracias a ti
          </p>

          <div className="border-t-2 border-amber-200 pt-6 mt-6">
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Comic Neue, cursive' }}
            >
              © Hecho con{' '}
              <Heart className="inline text-red-500 fill-red-500" size={16} />{' '}
              por Lucas Mierez
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
