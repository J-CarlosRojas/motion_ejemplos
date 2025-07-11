import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyAnimatedTitle() {
  const sectionRef = useRef(null);

  // Medimos el scroll dentro del contenedor (div grande)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Animamos opacidad y color según scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.3]);
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#000000", "#EF4444"] // negro a rojo-500
  );

  return (
    <div className="h-[200vh] bg-gray-100">
      <div
        ref={sectionRef}
        className="relative h-[150vh] px-4 py-20 bg-white border shadow-md"
      >
        <motion.h2
          className="text-3xl font-bold sticky top-10"
          style={{ opacity, color }}
        >
          Título Sticky que Cambia Scrollando
        </motion.h2>

        <div className="mt-40 space-y-6 text-gray-700">
          {[...Array(10)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit tempus porttitor. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
