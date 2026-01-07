import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface SolutionCardProps {
  badge: string;
  title: string;
  items: string[];
  index: number;
}

export const SolutionCard = ({ badge, title, items, index }: SolutionCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative h-64 perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 card-elevated flex flex-col items-center justify-center text-center backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.span
            className="badge-success mb-3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            {badge}
          </motion.span>
          <h4 className="font-display font-semibold text-lg text-foreground px-2">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mt-2">
            Toque para revelar →
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 card-elevated bg-gradient-to-br from-primary to-secondary text-primary-foreground flex flex-col justify-center p-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <ul className="space-y-2 text-sm">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-success">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
