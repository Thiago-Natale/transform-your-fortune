import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { GuaranteeSeal } from "./GuaranteeSeal";
import { AnimatedButton } from "./AnimatedButton";
import { CHECKOUT_URL } from "@/config/links";

const handleCheckout = () => {
  window.open(CHECKOUT_URL, "_blank");
};

interface GuaranteeSectionProps {
  onProgressChange: (progress: number) => void;
}

export const GuaranteeSection = ({ onProgressChange }: GuaranteeSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const guaranteeSteps = [
    "Começar a reprogramação",
    "Aplicar os ensinamentos",
    "E não sentir uma mudança real na sua mentalidade financeira...",
  ];

  return (
    <SectionWrapper
      id="garantia"
      className="bg-gradient-to-b from-background to-success/5"
      onInView={() => onProgressChange(100)}
    >
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block text-4xl mb-4">🛡️</span>
          <h2 className="heading-section text-foreground mb-4">
            Sua tranquilidade é nossa{" "}
            <span className="text-gradient-success">prioridade</span>
          </h2>
        </motion.div>

        {/* Guarantee card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Seal */}
            <div className="flex-shrink-0">
              <GuaranteeSeal />
            </div>

            {/* Content */}
            <div>
              <h3 className="heading-subsection text-foreground mb-4">
                🛡️ GARANTIA DE 7 DIAS INCONDICIONAL
              </h3>
              <p className="text-body text-muted-foreground mb-4">
                Eu confio tanto no poder transformador deste material que ofereço
                esta garantia:
              </p>
              <p className="text-body text-foreground font-semibold mb-3">
                Se em 7 dias você:
              </p>
              <ol className="space-y-2 mb-4">
                {guaranteeSteps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-body text-foreground"
                  >
                    <span className="text-success font-bold">{i + 1}.</span>
                    {step}
                  </motion.li>
                ))}
              </ol>
              <p className="text-body text-success font-semibold">
                Basta um email que devolvemos 100% do seu dinheiro.
              </p>
            </div>
          </div>

          {/* Additional trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-6 pt-6 border-t border-border text-center"
          >
            <p className="text-body text-muted-foreground mb-2">
              Sem perguntas. Sem burocracia. Sem ressentimentos.
            </p>
            <p className="text-body text-foreground font-semibold">
              Porque se você não se transformar,{" "}
              <span className="text-action">não mereço seu dinheiro.</span>
            </p>
            <p className="text-emphasis text-lg text-primary mt-2">
              O risco é TODO NOSSO. A oportunidade é TODA SUA.
            </p>
          </motion.div>
        </motion.div>

        {/* Final question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-primary/5 to-action/5 rounded-2xl p-8 text-center mb-10"
        >
          <h3 className="heading-subsection text-foreground mb-6">
            O que vale mais?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Good choice */}
            <motion.div
              className="bg-success/10 border-2 border-success rounded-xl p-6"
              animate={isInView ? { scale: [1, 1.02, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-3xl mb-3 block">✅</span>
              <p className="font-display font-bold text-lg text-success">
                R$50 investidos na sua transformação
              </p>
            </motion.div>

            {/* Bad choice */}
            <div className="bg-destructive/5 border-2 border-destructive/30 rounded-xl p-6 opacity-70">
              <span className="text-3xl mb-3 block">❌</span>
              <p className="font-display font-bold text-lg text-muted-foreground">
                Mais um ano na mesma roda-viva financeira
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <AnimatedButton icon="🛒" variant="highlight" className="text-lg md:text-xl px-10 py-6" onClick={handleCheckout}>
            SIM, QUERO MINHA LIBERDADE FINANCEIRA (COM GARANTIA)
          </AnimatedButton>
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <span>🔒</span> Compra 100% segura | Dados protegidos
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
