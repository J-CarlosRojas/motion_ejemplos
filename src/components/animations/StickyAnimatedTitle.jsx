import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickySimulated() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Este valor determina el desplazamiento vertical simulado
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [100, 0, 0, -200]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <section className="h-[250vh] bg-gray-100">
      <div
        ref={containerRef}
        className="relative h-[200vh] px-4 py-20 bg-white border shadow-md"
      >
        <motion.h2
          style={{ y, opacity, scale }}
          className="text-4xl font-bold fixed top-20 left-1/2 -translate-x-1/2 z-50"
        >
          Sticky Animado con Scroll + Lenis
        </motion.h2>

        <div className="mt-[300px] space-y-6 text-gray-800">
          {[...Array(20)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit tempus porttitor. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
