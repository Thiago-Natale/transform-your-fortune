import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { AnimatedButton } from "./AnimatedButton";
import { CHECKOUT_URL } from "@/config/links";

interface RevelationSectionProps {
  onProgressChange: (progress: number) => void;
}

export const RevelationSection = ({ onProgressChange }: RevelationSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const comparisons = [
    {
      poor: '"Preciso trabalhar para ganhar dinheiro."',
      rich: '"Preciso fazer o dinheiro trabalhar para mim."',
      label: "ACREDITA vs ENTENDE",
    },
    {
      poor: "Carros, eletrônicos, roupas de marca (passivos)",
      rich: "Imóveis para alugar, negócios, ações (ativos)",
      label: "COMPRA vs ADQUIRE",
    },
    {
      poor: "Salários maiores",
      rich: "Fontes de renda múltiplas",
      label: "CORRE ATRÁS vs CONSTRÓI",
    },
    {
      poor: "Perder dinheiro",
      rich: "Risco calculado",
      label: "TEM MEDO vs TEM RESPEITO",
    },
  ];

  return (
    <SectionWrapper
      id="revelacao"
      className="bg-gradient-to-b from-muted/50 to-background"
      onInView={() => onProgressChange(60)}
    >
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block text-4xl mb-4">💡</span>
          <h2 className="heading-section text-foreground mb-4">
            O que você <span className="text-gradient-action">nunca aprendeu</span>{" "}
            (mas precisa saber hoje)
          </h2>
          <p className="text-body text-muted-foreground">
            Existe uma diferença{" "}
            <strong className="text-primary">ABISSAL</strong> entre como os pobres
            e os ricos pensam:
          </p>
        </motion.div>

        {/* Comparison paths */}
        <div className="space-y-6 mb-12">
          {comparisons.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {/* Poor path */}
              <motion.div
                className="path-poor rounded-xl p-4"
                animate={isInView ? { x: [-10, 0] } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <span className="text-xs font-display font-bold text-destructive uppercase mb-2 block">
                  ⬇️ O POBRE {comp.label.split(" vs ")[0]}
                </span>
                <p className="text-body text-foreground">{comp.poor}</p>
              </motion.div>

              {/* Rich path */}
              <motion.div
                className="path-rich rounded-xl p-4"
                animate={isInView ? { x: [10, 0] } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <span className="text-xs font-display font-bold text-success uppercase mb-2 block">
                  ⬆️ O RICO {comp.label.split(" vs ")[1]}
                </span>
                <p className="text-body text-foreground">{comp.rich}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Secret revelation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center text-primary-foreground mb-10"
        >
          <p className="text-body mb-4">
            Mas aqui está o segredo que ninguém te conta:
          </p>
          
          {/* Lightning connection */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
            <motion.div
              className="bg-primary-foreground/10 rounded-xl px-4 py-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="font-display font-bold">NÃO É GENÉTICA</span>
            </motion.div>
            
            <motion.span
              className="text-4xl"
              animate={{ x: [0, 5, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ⚡
            </motion.span>
            
            <motion.div
              className="bg-success/20 rounded-xl px-4 py-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              <span className="font-display font-bold text-success">É APRENDIDO</span>
            </motion.div>
          </div>

          <p className="text-body opacity-90">
            Essa mentalidade <strong>NÃO É GENÉTICA</strong>. Não é sorte. Não é
            privilégio.
          </p>
          <p className="text-emphasis text-xl md:text-2xl mt-4">
            É UM CONJUNTO DE ENSINAMENTOS QUE PODEM SER APRENDIDOS.
          </p>
        </motion.div>

        {/* Benefit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
          className="text-center text-body text-muted-foreground mb-10"
        >
          E quando você aprende, começa a ver{" "}
          <strong className="text-success">oportunidades</strong> onde antes só via
          problemas.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <AnimatedButton icon="📖" variant="primary" onClick={() => window.open(CHECKOUT_URL, "_blank")}>
            ME MOSTRE ESSES ENSINAMENTOS PROIBIDOS
          </AnimatedButton>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
