import { motion, PanInfo, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const allPhotos = Array.from({ length: 15 }, (_, i) => `/images/image-${i + 1}.webp`);

function wrap(x: number, min: number, max: number) {
  const range = max - min;
  if (range === 0) return min;
  let v = (x - min) % range;
  if (v < 0) v += range;
  return v + min;
}

export default function Gallery() {
  // 3 tandas para loop infinito
  const photos = useMemo(() => [...allPhotos, ...allPhotos, ...allPhotos], []);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [loopWidth, setLoopWidth] = useState(0);

  const x = useMotionValue(0);

  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  // ✅ Más lento (px/seg)
  const speedRef = useRef(-28);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const total = el.scrollWidth;
      setLoopWidth(total / 3); // 1 tanda
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, [photos]);

  useAnimationFrame((_, deltaMs) => {
    if (!loopWidth) return;
    if (paused || dragging) return;

    const dt = deltaMs / 1000;
    const next = x.get() + speedRef.current * dt;

    // mantenemos en [-loopWidth, 0)
    x.set(wrap(next, -loopWidth, 0));
  });

  const onWheel = (e: React.WheelEvent) => {
    if (!loopWidth) return;
    e.preventDefault();

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    // Wheel más suave
    const push = -delta * 0.6;

    x.set(wrap(x.get() + push, -loopWidth, 0));
  };

  const onDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setDragging(false);

    const v = info.velocity.x; // px/s
    const target = -v * 0.15;

    speedRef.current = Math.max(-80, Math.min(80, target || speedRef.current));

    setTimeout(() => {
      speedRef.current = -28;
    }, 400);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-yellow-50 to-sky-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-10"
          style={{ fontFamily: "Fredoka, sans-serif" }}
        >
          Mis Mejores Momentos
        </motion.h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fades pegados a los bordes del carrusel */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-yellow-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-sky-50 to-transparent" />

          {/* Carrusel */}
          <motion.div onWheel={onWheel} style={{ touchAction: "pan-y" }}>
            <motion.div
              ref={trackRef}
              className="flex gap-5 md:gap-6 py-4 cursor-grab active:cursor-grabbing select-none"
              style={{ x }}
              drag="x"
              dragElastic={0.08}
              dragMomentum
              onDragStart={() => {
                setDragging(true);
                setPaused(true);
              }}
              onDragEnd={(e, info) => {
                setPaused(false);
                onDragEnd(e, info);
              }}
            >
              {photos.map((photo, idx) => (
                <motion.div
                  key={`${photo}-${idx}`}
                  className="relative group flex-none"
                // ✅ 5 visibles:
                // - móvil: 1 (casi full)
                // - sm: 2
                // - md: 3
                // - lg+: 5
                >
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl bg-white"
                    style={{ willChange: "transform" }}
                  >
                    {/* ✅ Contenedor: define tamaño / proporción */}
                    <div
                      className="
      relative
      w-[88vw] sm:w-[46vw] md:w-[30vw] lg:w-[18vw]
      aspect-[3/4]
      bg-white
    "
                    >
                      {/* Fondo suave (opcional) para que object-contain quede prolijo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 to-sky-100/60" />
                      <div
                        className="absolute inset-0 opacity-30 blur-xl"
                        style={{
                          backgroundImage: `url(${photo})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />

                      {/* ✅ Imagen completa, sin recorte */}
                      <img
                        src={photo}
                        alt={`Momento ${(idx % allPhotos.length) + 1}`}
                        draggable={false}
                        className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4"
                      />
                    </div>

                    {/* Overlay elegante */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/25 via-transparent to-transparent" />
                      <div className="absolute inset-0 ring-2 ring-amber-400/40" />
                    </div>
                  </motion.div>


                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    className="absolute top-3 right-3 bg-yellow-400 text-white rounded-full w-11 h-11 flex items-center justify-center font-bold shadow-lg z-20"
                    style={{ fontFamily: "Fredoka, sans-serif" }}
                  >
                    {(idx % allPhotos.length) + 1}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="text-center text-sm text-amber-800/80 mt-4">
            Arrastrá para ir adelante/atrás.
          </div>
        </div>
      </div>
    </section>
  );
}
