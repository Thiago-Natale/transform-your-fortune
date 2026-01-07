import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

interface StickyCTAProps {
  isVisible: boolean;
}

export const StickyCTA = ({ isVisible }: StickyCTAProps) => {
  const handleClick = () => {
    window.open("https://pay.hotmart.com/seulink", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="sticky-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedButton
            icon="🛒"
            variant="highlight"
            onClick={handleClick}
            className="w-full"
          >
            QUERO MINHA LIBERDADE FINANCEIRA
          </AnimatedButton>
          <p className="text-center text-xs text-muted-foreground mt-2 flex items-center justify-center gap-2">
            <span>🔒</span> Compra 100% segura
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
