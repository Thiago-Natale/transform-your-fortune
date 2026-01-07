import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { SolutionCard } from "./SolutionCard";
import { AnimatedButton } from "./AnimatedButton";

interface SolutionSectionProps {
  onProgressChange: (progress: number) => void;
}

export const SolutionSection = ({ onProgressChange }: SolutionSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const solutions = [
    {
      badge: "REVELADO",
      title: "A VERDADE SOBRE ATIVOS E PASSIVOS",
      items: [
        "Porque sua casa pode estar te empobrecendo",
        "Como identificar o que realmente gera riqueza",
        "Os 3 ativos mais acessíveis para começar HOJE",
      ],
    },
    {
      badge: "PRÁTICO",
      title: "COMO CRIAR RENDA PASSIVA NO BRASIL REAL",
      items: [
        "Exemplos de brasileiros comuns que conseguiram",
        "Estratégias que funcionam mesmo com pouco capital",
        "Como começar com menos de R$100",
      ],
    },
    {
      badge: "DOMINADO",
      title: "A PSICOLOGIA DO DINHEIRO",
      items: [
        "Como dominar o medo que paralisa",
        "Como controlar a ganância que cega",
        "A mentalidade que separa quem prospera de quem só sobrevive",
      ],
    },
    {
      badge: "MAPEADO",
      title: "O MAPA PARA SAIR DA CORRIDA DOS RATOS",
      items: [
        "Passo a passo para criar múltiplas fontes de renda",
        "Como usar o sistema tributário a seu favor",
        "Como empreender sem precisar largar seu emprego",
      ],
    },
  ];

  const shouldRead = [
    "Quem vive de salário em salário",
    "Quem tem medo de investir",
    "Quem trabalha muito mas não vê resultado",
    "Quem quer empreender mas não sabe por onde começar",
    'Quem sente que está sempre "quase lá", mas nunca chega',
  ];

  const shouldNotRead = [
    "Quem acredita que riqueza é só sorte",
    "Quem não está disposto a mudar sua mentalidade",
    "Quem prefere reclamar a agir",
    'Quem acha que "amanhã" é um bom dia para começar',
  ];

  return (
    <SectionWrapper
      id="solucao"
      className="relative overflow-hidden"
      onInView={() => onProgressChange(80)}
    >
      {/* Map pattern background */}
      <div
        ref={ref}
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L30 20 L50 15 L70 25 L90 10 M10 50 L30 60 L50 55 L70 65 L90 50 M10 90 L30 80 L50 85 L70 75 L90 90' stroke='%230A2463' stroke-width='1' fill='none' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-12 relative z-10"
      >
        <span className="inline-block text-4xl mb-4">😌</span>
        <h2 className="heading-section text-foreground mb-4">
          Apresento:{" "}
          <span className="text-gradient-action">
            "Você Está Preparado Para Parar de Ser Pobre?"
          </span>
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Este não é "mais um e-book de finanças". É um{" "}
          <strong className="text-primary">
            manual de reprogramação mental financeira
          </strong>{" "}
          adaptado à realidade brasileira.
        </p>
      </motion.div>

      {/* Solution cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {solutions.map((solution, i) => (
          <SolutionCard
            key={i}
            badge={solution.badge}
            title={solution.title}
            items={solution.items}
            index={i}
          />
        ))}
      </div>

      {/* For who sections */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Should read */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-success/5 border border-success/20 rounded-2xl p-6"
        >
          <h4 className="font-display font-bold text-lg text-success mb-4">
            ✅ QUEM DEVERIA LER ISSO?
          </h4>
          <ul className="space-y-3">
            {shouldRead.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body text-foreground">
                <span className="text-success mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Should not read */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6"
        >
          <h4 className="font-display font-bold text-lg text-destructive mb-4">
            ❌ QUEM NÃO DEVERIA LER ISSO?
          </h4>
          <ul className="space-y-3">
            {shouldNotRead.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body text-foreground">
                <span className="text-destructive mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <AnimatedButton icon="🚀" variant="highlight">
          QUERO ESSE MANUAL DE TRANSFORMAÇÃO
        </AnimatedButton>
      </motion.div>
    </SectionWrapper>
  );
};
