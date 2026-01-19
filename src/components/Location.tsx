import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const mapUrl = "https://www.google.com/maps?q=-30.42087141777737,-57.849999431999265&z=16&output=embed";


  return (
    <section id="location" className="py-20 bg-gradient-to-b from-sky-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-16"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          ¿Dónde Será la Fiesta?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <MapPin className="text-amber-700" size={32} />
                </div>
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-sky-600 mb-2"
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    Mi Casa
                  </h3>
                  <p
                    className="text-lg text-gray-700"
                    style={{ fontFamily: 'Comic Neue, cursive' }}
                  >
                    Luis Zamora S/N
                    <br />
                    Juan Pujol, Corrientes
                  </p>
                </div>
              </div>

              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=-30.42087141777737,-57.849999431999265"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                <Navigation size={24} />
                <span>Cómo Llegar</span>
              </motion.a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h4
                className="text-xl font-bold text-amber-700 mb-4"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Información Adicional
              </h4>
              <ul
                className="space-y-2 text-gray-700"
                style={{ fontFamily: 'Comic Neue, cursive' }}
              >
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  Estacionamiento disponible
                </li>
                <li>
                  <span className="text-yellow-500 mr-2">★</span>
                  Traer silletas para mas comodidad
                </li>
                <li>
                  <span className="text-yellow-500 mr-2">★</span>
                  Podés traer tu mate / tere
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del evento"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
