import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const GuaranteeSeal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative inline-flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute w-40 h-40 rounded-full border-4 border-dashed border-success/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main seal */}
      <motion.div
        className="seal-guarantee flex-col"
        animate={isInView ? { rotateY: [0, 360] } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.span
          className="text-4xl font-display font-extrabold text-success-foreground"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          7
        </motion.span>
        <span className="text-xs font-display font-bold text-success-foreground/80 uppercase tracking-wider">
          DIAS
        </span>
      </motion.div>

      {/* Orbiting text */}
      <motion.div
        className="absolute w-48 h-48"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-display font-bold text-success uppercase"
          style={{ transform: "translateX(-50%) rotate(0deg)" }}
        >
          GARANTIA
        </span>
        <span
          className="absolute bottom-0 left-1/2 text-xs font-display font-bold text-success uppercase"
          style={{ transform: "translateX(-50%) rotate(180deg)" }}
        >
          TOTAL
        </span>
      </motion.div>

      {/* Shield icon overlay */}
      <motion.span
        className="absolute -top-2 -right-2 text-3xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🛡️
      </motion.span>
    </motion.div>
  );
};
