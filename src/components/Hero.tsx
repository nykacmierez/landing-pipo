import { motion } from 'framer-motion';
import { Cake, PartyPopper } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-yellow-50 to-amber-50 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 text-yellow-300 opacity-30"
        >
          <PartyPopper size={80} />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 text-sky-300 opacity-30"
        >
          <Cake size={80} />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/logo-sin-fondo.png"
            alt="Celebración"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-700 mb-6"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          ¡Cumplo 1 Añito!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl text-sky-600 font-medium mb-8"
          style={{ fontFamily: 'Comic Neue, cursive' }}
        >
          Y quiero celebrarlo contigo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#invitation"
            className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Ver Invitación
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-amber-600"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
