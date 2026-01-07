import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const PhoneMockup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showPreview, setShowPreview] = useState(false);
  const [progress, setProgress] = useState(83);

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto"
      style={{ maxWidth: "280px" }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Phone frame */}
      <div className="relative bg-foreground rounded-[40px] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-xl z-10" />

        {/* Screen */}
        <div className="bg-background rounded-[32px] overflow-hidden">
          {/* Status bar */}
          <div className="bg-primary h-8 flex items-center justify-between px-4">
            <span className="text-primary-foreground text-xs">9:41</span>
            <span className="text-primary-foreground text-xs">📶 100%</span>
          </div>

          {/* App content */}
          <motion.div
            className="p-4 min-h-[400px] bg-gradient-to-b from-background to-muted/30"
            animate={showPreview ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display font-bold text-lg text-primary text-center mb-4">
              300 Salários
            </h3>

            {/* Progress ring */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-success"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: progress / 300 } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="font-display font-extrabold text-3xl text-primary"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  {progress}
                </motion.span>
                <span className="text-xs text-muted-foreground">/300</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Seu progresso</span>
                <span>{Math.round((progress / 300) * 100)}%</span>
              </div>
              <div className="progress-emotional">
                <motion.div
                  className="progress-emotional-fill"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${(progress / 300) * 100}%` } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-card rounded-lg p-2 shadow-sm">
                <span className="text-success text-lg font-bold">217</span>
                <p className="text-[10px] text-muted-foreground">Faltam</p>
              </div>
              <div className="bg-card rounded-lg p-2 shadow-sm">
                <span className="text-primary text-lg font-bold">R$2.5k</span>
                <p className="text-[10px] text-muted-foreground">Meta/mês</p>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              className="w-full mt-4 py-2 bg-action text-action-foreground rounded-lg font-display font-semibold text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowPreview(!showPreview)}
            >
              EXPERIMENTE
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Reflection */}
      <div
        className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-foreground/10 to-transparent rounded-full blur-xl"
      />
    </motion.div>
  );
};
