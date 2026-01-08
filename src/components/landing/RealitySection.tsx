import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { MentiraCard } from "./MentiraCard";
import { AnimatedButton } from "./AnimatedButton";
import { CHECKOUT_URL } from "@/config/links";

interface RealitySectionProps {
  onProgressChange: (progress: number) => void;
}

export const RealitySection = ({ onProgressChange }: RealitySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mentiras = [
    {
      icon: "🏠",
      title: '"Casa própria é investimento"',
      description:
        "70% dos imóveis financiados no Brasil são passivos que sugam sua renda por 30 anos.",
    },
    {
      icon: "📚",
      title: '"Estude e arrume um emprego seguro"',
      description:
        "Diploma não protege ninguém da inflação, da demissão ou do endividamento.",
    },
    {
      icon: "💰",
      title: '"Investir é só para ricos"',
      description: "Quem pensa assim nunca vai deixar de ser pobre.",
    },
    {
      icon: "🎲",
      title: '"Empreender é muito arriscado"',
      description: "Depender de um único empregador é o risco maior.",
    },
    {
      icon: "🤫",
      title: '"Falar de dinheiro é feio"',
      description:
        "Resultado: Você cresce sem educação financeira, toma decisões erradas e repete o ciclo.",
    },
  ];

  const consequences = [
    "Seu salário será sempre insuficiente",
    "Suas decisões financeiras serão emocionais",
    'Você viverá no modo "sobrevivência"',
    "Seu futuro dependerá da sorte ou do governo",
  ];

  return (
    <SectionWrapper
      id="realidade"
      onInView={() => onProgressChange(50)}
      className="relative overflow-hidden"
    >
      {/* Circuit pattern background */}
      <div
        ref={ref}
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v10M30 50v10M0 30h10M50 30h10M30 20v20M20 30h20' stroke='%230A2463' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-12 relative z-10"
      >
        <span className="inline-block text-4xl mb-4">😲</span>
        <h2 className="heading-section text-foreground mb-4">
          Por que no Brasil é{" "}
          <span className="text-gradient-action">tão difícil</span> sair desse ciclo?
        </h2>
        <p className="text-body text-muted-foreground">
          A culpa não é sua.{" "}
          <strong className="text-primary">
            Você foi programado para falhar financeiramente:
          </strong>
        </p>
      </motion.div>

      {/* Mentira cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {mentiras.map((mentira, i) => (
          <MentiraCard
            key={i}
            icon={mentira.icon}
            title={mentira.title}
            description={mentira.description}
            index={i}
          />
        ))}
      </div>

      {/* Consequences */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 md:p-8 mb-10"
      >
        <p className="text-body text-foreground font-semibold mb-4">
          Enquanto você carrega essas crenças...
        </p>
        <ul className="space-y-3">
          {consequences.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="flex items-center gap-3 text-body text-foreground"
            >
              <span className="text-destructive text-xl">✓</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Emphasis */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.6 }}
        className="text-center text-emphasis text-xl md:text-2xl text-success mb-10"
      >
        NÃO PRECISA SER ASSIM.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8 }}
        className="text-center"
      >
        <AnimatedButton icon="💡" variant="primary" onClick={() => window.open(CHECKOUT_URL, "_blank")}>
          QUERO DESPROGRAMAR MINHA MENTE FINANCEIRA
        </AnimatedButton>
      </motion.div>
    </SectionWrapper>
  );
};
