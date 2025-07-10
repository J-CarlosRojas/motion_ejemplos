import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollFadeScaleBox() {
  const ref = useRef(null);
  
  // Detecta el progreso del scroll dentro del área referenciada
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Mapea el progreso (0 a 1) a valores de opacidad y escala
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="h-[200vh] flex items-center justify-center p-10">
      <motion.div
        ref={ref}
        className="bg-red-500 w-40 h-40 rounded-lg shadow-lg"
        style={{ opacity, scale }}
      />
    </div>
  );
}
