import { motion } from "framer-motion";

export default function ViewportAnimatedTitle() {
  return (
    <div className="h-[200vh] bg-amber-300 flex items-center justify-center">
      <motion.h1
        className="text-8xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}      // Estado inicial: oculto y más abajo
        whileInView={{ opacity: 1, y: 0 }}   // Cuando entra al viewport: visible y en su lugar
        transition={{ duration: 6.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} // Solo una vez, cuando 50% del elemento esté visible
      >
        Guajillo Studio
      </motion.h1>
    </div>
  );
}
