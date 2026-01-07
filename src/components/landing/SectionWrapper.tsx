import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onInView?: () => void;
}

export const SectionWrapper = ({
  children,
  className = "",
  id,
  onInView,
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  if (isInView && onInView) {
    onInView();
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section-padding ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-4xl mx-auto">{children}</div>
    </motion.section>
  );
};
