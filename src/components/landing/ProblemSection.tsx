import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { AnimatedButton } from "./AnimatedButton";
import { CHECKOUT_URL } from "@/config/links";

interface ProblemSectionProps {
  onProgressChange: (progress: number) => void;
}

export const ProblemSection = ({ onProgressChange }: ProblemSectionProps) => {
  const treadmillRef = useRef(null);
  const isInView = useInView(treadmillRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  const checkItems = [
    { text: "Você acelera (trabalha mais horas)", symbol: "✅" },
    { text: "Sua (se estressa com contas)", symbol: "✅" },
    { text: "Gasta energia (investe tempo e saúde)", symbol: "✅" },
  ];

  const problemItems = [
    "O carro continua financiado.",
    "O cartão sempre no limite.",
    "O medo de perder o emprego, presente.",
    'A sensação de que "um imprevisto vai me quebrar".',
  ];

  const manualItems = [
    "Arrumar um bom emprego ✓",
    "Trabalhar duro ✓",
    "Comprar uma casa própria ✓",
    "Buscar promoções ✓",
  ];

  return (
    <SectionWrapper
      id="problema"
      className="bg-section-alt"
      onInView={() => onProgressChange(40)}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-12"
      >
        <span className="inline-block text-4xl mb-4">😠</span>
        <h2 className="heading-section text-foreground mb-4">
          Você já se perguntou por que o{" "}
          <span className="text-gradient-action">esforço nunca vira tranquilidade?</span>
        </h2>
      </motion.div>

      {/* Treadmill visualization */}
      <motion.div
        ref={treadmillRef}
        className="relative bg-card rounded-2xl p-6 md:p-10 shadow-card mb-10 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Treadmill background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="h-full w-[200%] flex"
            animate={{ x: isHovered ? "-50%" : "0%" }}
            transition={{
              duration: isHovered ? 1 : 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-20 h-full border-r border-primary/20" />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10">
          <p className="text-body text-foreground mb-6">
            Imagine sua vida financeira como uma{" "}
            <strong className="text-primary">corrida numa esteira:</strong>
          </p>

          {/* Animated running person */}
          <div className="flex justify-center mb-6">
            <motion.div
              className="text-6xl"
              animate={{
                x: [0, 10, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: isHovered ? 0.3 : 0.6,
                repeat: Infinity,
              }}
            >
              🏃‍♂️
            </motion.div>
          </div>

          {/* Check items */}
          <ul className="space-y-3 mb-6">
            {checkItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-3 text-body"
              >
                <span className="text-xl">{item.symbol}</span>
                {item.text}
              </motion.li>
            ))}
          </ul>

          {/* Result */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-body text-muted-foreground italic"
          >
            Mas quando olha para o lado...{" "}
            <strong className="text-destructive">
              está no mesmo lugar de 5 anos atrás.
            </strong>
          </motion.p>
        </div>
      </motion.div>

      {/* Problem items */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {problemItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 + i * 0.15 }}
            className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-body text-foreground"
          >
            <span className="text-destructive mr-2">•</span>
            {item}
          </motion.div>
        ))}
      </div>

      {/* Manual section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.6 }}
        className="bg-muted/50 rounded-2xl p-6 mb-10"
      >
        <p className="text-body text-foreground mb-4">
          E o pior: Você segue o "manual" que te ensinaram:
        </p>
        <ul className="space-y-2 mb-4">
          {manualItems.map((item, i) => (
            <li key={i} className="text-body text-muted-foreground">
              • {item}
            </li>
          ))}
        </ul>
        <p className="text-body text-destructive font-semibold">
          Mas o resultado é... mais dívidas, mais pressão, menos tempo.
        </p>
      </motion.div>

      {/* Emphasis */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="text-center text-emphasis text-xl md:text-2xl text-primary mb-10"
      >
        NÃO É FALTA DE ESFORÇO. É FALTA DE DIREÇÃO.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2 }}
        className="text-center"
      >
        <AnimatedButton icon="🔥" variant="primary" onClick={() => window.open(CHECKOUT_URL, "_blank")}>
          JÁ CANSEI DE CORRER SEM SAIR DO LUGAR
        </AnimatedButton>
      </motion.div>
    </SectionWrapper>
  );
};
