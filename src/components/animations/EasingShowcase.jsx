import { motion } from "framer-motion";

const boxStyle =
  "w-40 h-40 rounded-xl text-white font-bold flex items-center justify-center mb-10";

export default function EasingShowcase() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20 space-y-10">
      <h1 className="text-3xl font-bold mb-10">Easing Showcase</h1>

      {/* Linear */}
      <motion.div
        className={`${boxStyle} bg-gray-700`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3.2, ease: "linear" }}
      >
        linear
      </motion.div>

      {/* EaseInOut */}
      <motion.div
        className={`${boxStyle} bg-blue-500`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
      >
        easeInOut
      </motion.div>

      {/* Spring */}
      <motion.div
        className={`${boxStyle} bg-green-500`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
      >
        spring
      </motion.div>
    </div>
  );
}
