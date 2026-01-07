import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { AnimatedButton } from "./AnimatedButton";

interface PackageSectionProps {
  onProgressChange: (progress: number) => void;
}

export const PackageSection = ({ onProgressChange }: PackageSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const packageItems = [
    'E-book "Você Está Preparado Para Parar de Ser Pobre?"',
    'Bônus: Web-App "300 Salários"',
    "Acesso vitalício",
    "Atualizações gratuitas",
    "Suporte por email",
  ];

  return (
    <SectionWrapper
      id="pacote"
      className="bg-gradient-to-b from-muted/30 to-background"
      onInView={() => onProgressChange(98)}
    >
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block text-4xl mb-4">🎯</span>
          <h2 className="heading-section text-foreground">
            Escolha seu pacote de{" "}
            <span className="text-gradient-action">transformação</span>
          </h2>
        </motion.div>

        {/* Package cards */}
        <div className="max-w-lg mx-auto">
          {/* Recommended package */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-action via-success to-action rounded-3xl blur-lg opacity-30 animate-pulse-slow" />

            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-primary-foreground shadow-2xl">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-action text-action-foreground font-display font-bold text-sm px-6 py-2 rounded-full shadow-lg"
              >
                🌟 RECOMENDADO
              </motion.div>

              <h3 className="heading-subsection text-center mt-4 mb-6">
                📦 PACOTE TRANSFORMAÇÃO COMPLETA
              </h3>

              {/* Items */}
              <ul className="space-y-3 mb-8">
                {packageItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-body"
                  >
                    <span className="text-success text-xl">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="text-center mb-6"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-primary-foreground/60 line-through text-lg">
                    R$200
                  </span>
                  <span className="bg-success text-success-foreground text-sm font-bold px-2 py-1 rounded">
                    -50%
                  </span>
                </div>
                <div className="text-5xl font-display font-extrabold">
                  R$<span className="text-action">100</span>
                </div>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  à vista ou em até 12x
                </p>
              </motion.div>

              {/* CTA */}
              <AnimatedButton icon="🌟" variant="highlight" className="w-full">
                QUERO A TRANSFORMAÇÃO COMPLETA
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span className="text-sm">Compra segura</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💳</span>
            <span className="text-sm">Até 12x sem juros</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span className="text-sm">Acesso imediato</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
