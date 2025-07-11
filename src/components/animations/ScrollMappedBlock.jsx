"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollMappedBlock() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mapeos
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#facc15", "#3b82f6"]
  );

  // Texto que aparece solo entre 40% y 60%
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);

  return (
    <div className="h-[200vh] bg-gray-100 flex items-center justify-center">
      <div
        className="h-[100vh] w-full flex items-center justify-center"
        ref={ref}
      >
        <motion.div
          style={{ y, scale, rotate, opacity, backgroundColor }}
          className="w-40 h-40 rounded-2xl flex items-center justify-center"
        >
          <motion.p
            style={{ opacity: textOpacity }}
            className="text-white font-bold text-xl text-center"
          >
            ¡Hola!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
