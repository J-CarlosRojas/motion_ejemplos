import { motion } from "framer-motion";

const text = "Hola Carlos";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "easeInOut", stiffness: 300 } },
};

export default function SplitText() {
  return (
    <motion.div
      className="text-4xl font-bold flex gap-1 flex-wrap"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
