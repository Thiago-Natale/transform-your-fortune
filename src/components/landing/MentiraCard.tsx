import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MentiraCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export const MentiraCard = ({ icon, title, description, index }: MentiraCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="card-mentira"
      initial={{ opacity: 0, x: -20, rotate: 0 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotate: [0, -2, 2, -1, 1, 0],
            }
          : {}
      }
      transition={{
        delay: index * 0.15,
        duration: 0.5,
        rotate: { delay: index * 0.15 + 0.3, duration: 0.4 },
      }}
    >
      {/* MENTIRA Badge */}
      <motion.span
        className="badge-mentira"
        initial={{ scale: 0, rotate: 0 }}
        animate={isInView ? { scale: 1, rotate: 12 } : {}}
        transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 300 }}
      >
        MENTIRA
      </motion.span>

      {/* Icon */}
      <div className="icon-circle mb-4">
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Content */}
      <h4 className="font-display font-semibold text-lg text-foreground mb-2">
        {title}
      </h4>
      <p className="text-body text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};
