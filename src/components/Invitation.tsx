import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Invitation() {
  return (
    <section id="invitation" className="py-20 bg-gradient-to-b from-sky-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-16"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Estás Invitado
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-full max-h-[420px] md:max-h-[480px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/principal.webp"
                alt="Cumpleañero"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
            </div>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -top-6 -right-6 bg-yellow-400 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold shadow-lg"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              1
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3
                className="text-3xl md:text-4xl font-bold text-sky-600 mb-6"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                ¡Celebremos Juntos!
              </h3>
              <p
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
                style={{ fontFamily: 'Comic Neue, cursive' }}
              >
                Hace un año llegue para llenar todo de amor, risas y travesuras!
                Ya sé gatear, reír y robar corazones 💙
                Ahora solo me falta festejar con vos 🥳

                Y quiero invitarte a celebrar conmigo este día tan especial!
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-amber-700"
                >
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      07 de Febrero, 2026
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-amber-700"
                >
                  <div className="bg-sky-100 p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      19:30 hs
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-amber-700"
                >
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      Mi Casa
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
