import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "highlight";
  className?: string;
}

export const AnimatedButton = ({
  children,
  icon,
  onClick,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
    if (onClick) {
      onClick();
    }
  };

  const baseStyles = "btn-action relative overflow-hidden";
  const variantStyles = {
    primary: "",
    secondary: "bg-primary hover:bg-secondary",
    highlight: "animate-glow",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Ripple effect */}
      {isClicked && (
        <motion.span
          className="absolute inset-0 bg-white/30 rounded-xl"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {/* Icon animation */}
      {icon && (
        <motion.span
          className="text-2xl"
          animate={{
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
