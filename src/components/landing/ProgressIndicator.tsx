import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  progress: number;
  emotions: string[];
}

export const ProgressIndicator = ({ progress, emotions }: ProgressIndicatorProps) => {
  const currentEmotionIndex = Math.min(
    Math.floor((progress / 100) * emotions.length),
    emotions.length - 1
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
    >
      {/* Progress bar vertical */}
      <div className="w-2 h-48 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          className="absolute bottom-0 w-full bg-gradient-to-t from-action via-success to-success rounded-full"
          initial={{ height: "0%" }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>
      
      {/* Current emotion */}
      <motion.div
        key={currentEmotionIndex}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-3xl"
      >
        {emotions[currentEmotionIndex]}
      </motion.div>
      
      {/* Progress percentage */}
      <span className="font-display font-bold text-sm text-primary">
        {progress}%
      </span>
    </motion.div>
  );
};
