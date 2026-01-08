import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { PhoneMockup } from "./PhoneMockup";
import { AnimatedButton } from "./AnimatedButton";
import { CHECKOUT_URL } from "@/config/links";

interface BonusSectionProps {
  onProgressChange: (progress: number) => void;
}

export const BonusSection = ({ onProgressChange }: BonusSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mistakes = [
    "Fazer planilhas complexas que abandonou na segunda semana?",
    "Controlar gastos no caderninho que ficou esquecido na gaveta?",
    "Seguir métodos americanos que não fazem sentido no Brasil?",
  ];

  const reasons = [
    "Não vê progresso em tempo real - Parece que nada muda",
    "Se perde nos números - Contas, porcentagens, projeções confusas",
    "Não tem um norte claro - Sabe que precisa mudar, mas não sabe PARA ONDE",
    "Desanima com a complexidade - Ferramentas complicadas afastam mais que ajudam",
  ];

  const forWho = [
    "Precisa ver progresso para se motivar",
    "Se perde em números e planilhas",
    "Quer um método adaptado ao Brasil",
    "Valoriza ferramentas visuais e intuitivas",
    "Quer saber EXATAMENTE onde está e para onde vai",
  ];

  const notForWho = [
    'Acha que "se virar" sem sistema é melhor',
    "Não quer acompanhar seu progresso",
    "Prefere a incerteza à clareza",
    "Não se motiva com metas visuais",
  ];

  return (
    <SectionWrapper
      id="bonus"
      className="bg-gradient-to-b from-background via-muted/30 to-background"
      onInView={() => onProgressChange(90)}
    >
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block bg-action/10 text-action font-display font-bold px-4 py-2 rounded-full mb-4"
          >
            🎁 BÔNUS EXCLUSIVO
          </motion.div>
          <h2 className="heading-section text-foreground mb-4">
            Para garantir que você não só leia, mas{" "}
            <span className="text-gradient-success">TRANSFORME</span>
          </h2>
        </motion.div>

        {/* Mistakes section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mb-10"
        >
          <h3 className="heading-subsection text-foreground mb-4">
            O erro que 97% dos brasileiros cometem ao tentar sair da pobreza
          </h3>
          <p className="text-body text-muted-foreground mb-4">Você já tentou:</p>
          <ul className="space-y-3 mb-6">
            {mistakes.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3 text-body text-foreground"
              >
                <span className="text-destructive">•</span>
                {item}
              </motion.li>
            ))}
          </ul>
          <p className="text-body text-foreground font-semibold">
            O problema não é sua falta de vontade.{" "}
            <span className="text-action">É a falta de um SISTEMA.</span>
          </p>
        </motion.div>

        {/* Reasons for giving up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 mb-10"
        >
          <p className="text-body text-foreground font-semibold mb-4">
            A maioria desiste porque:
          </p>
          <ol className="space-y-3">
            {reasons.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-body text-foreground"
              >
                <span className="text-destructive font-bold">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-body text-muted-foreground italic mt-4">
            É como tentar navegar no mar sem bússola nem mapa.
          </p>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <div className="text-center mb-6">
            <h3 className="heading-subsection text-foreground mb-2">
              E se existisse um "painel de controle" da sua liberdade financeira?
            </h3>
            <p className="text-body text-muted-foreground">
              🎁 ACESSO AO WEB-APP <strong className="text-action">"300 SALÁRIOS"</strong>
            </p>
          </div>
          <PhoneMockup />
        </motion.div>

        {/* For who / Not for who */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="bg-success/5 border border-success/20 rounded-2xl p-6"
          >
            <h4 className="font-display font-bold text-lg text-success mb-4">
              ✅ É PARA VOCÊ SE:
            </h4>
            <ul className="space-y-2">
              {forWho.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-success">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6"
          >
            <h4 className="font-display font-bold text-lg text-destructive mb-4">
              ❌ NÃO É PARA VOCÊ SE:
            </h4>
            <ul className="space-y-2">
              {notForWho.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-destructive">✗</span>
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
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <AnimatedButton icon="🎯" variant="highlight" onClick={() => window.open(CHECKOUT_URL, "_blank")}>
            QUERO O E-BOOK + PAINEL
          </AnimatedButton>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
