import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const allPhotos = Array.from({ length: 10 }, (_, i) =>
  `/images/image-${i + 1}.webp`
);

const getRandomPhotos = (photos: string[], count: number) => {
  return [...photos]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export default function Gallery() {
  const [photos, setPhotos] = useState<string[]>(() =>
    getRandomPhotos(allPhotos, 6)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotos(getRandomPhotos(allPhotos, 6));
    }, 5000); // ⏱️ 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-yellow-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-16"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Mis Mejores Momentos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={photo}
                  alt={`Momento ${index + 1}`}
                  className="w-full h-64 md:h-80 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
