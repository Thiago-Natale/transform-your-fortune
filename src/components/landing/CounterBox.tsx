import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterBoxProps {
  label: string;
  startValue: number;
  endValue: number;
  prefix?: string;
  suffix?: string;
  direction: "up" | "down";
  icon: string;
}

export const CounterBox = ({
  label,
  startValue,
  endValue,
  prefix = "",
  suffix = "",
  direction,
  icon,
}: CounterBoxProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = (endValue - startValue) / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setValue(endValue);
        clearInterval(interval);
      } else {
        setValue(Math.round(startValue + increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, startValue, endValue]);

  return (
    <motion.div
      ref={ref}
      className="counter-box"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="text-2xl mb-2 block">{icon}</span>
      <p className="text-xs text-muted-foreground font-display font-semibold uppercase tracking-wider mb-1">
        {label}
      </p>
      <motion.div
        className={`counter-value ${direction === "down" ? "text-destructive" : "text-success"}`}
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {prefix}
        {value}
        {suffix}
      </motion.div>
      <span className="text-xs text-muted-foreground">
        {direction === "down" ? "↓ Diminuindo" : "↑ Aumentando"}
      </span>
    </motion.div>
  );
};
