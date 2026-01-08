import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { CounterBox } from "./CounterBox";
import { AnimatedButton } from "./AnimatedButton";
import { CHECKOUT_URL } from "@/config/links";

interface ScarcitySectionProps {
  onProgressChange: (progress: number) => void;
}

export const ScarcitySection = ({ onProgressChange }: ScarcitySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapper
      id="escassez"
      className="relative overflow-hidden"
      onInView={() => onProgressChange(95)}
    >
      {/* Burnt paper texture background */}
      <div
        ref={ref}
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(139, 90, 43, 0.1) 70%, rgba(139, 90, 43, 0.3) 100%)`,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-block bg-action text-action-foreground font-display font-bold text-sm px-4 py-2 rounded-full mb-4 animate-pulse-slow"
        >
          ⚡ LANÇAMENTO
        </motion.div>
        <h2 className="heading-section text-foreground mb-4">
          Atenção: Esta oferta tem{" "}
          <span className="text-gradient-action">condições especiais</span>
        </h2>
        <p className="text-body text-muted-foreground">
          Vou ser transparente com você:
        </p>
      </motion.div>

      {/* Counters */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <CounterBox
          label="Cópias Disponíveis"
          startValue={100}
          endValue={47}
          direction="down"
          icon="📦"
        />
        <CounterBox
          label="Preço Atual"
          startValue={100}
          endValue={100}
          prefix="R$"
          direction="up"
          icon="💰"
        />
        <CounterBox
          label="Bônus"
          startValue={0}
          endValue={0}
          suffix=" GRÁTIS"
          direction="down"
          icon="🎁"
        />
      </div>

      {/* Conditions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="space-y-4 mb-10"
      >
        <div className="bg-card rounded-xl p-5 shadow-card border-l-4 border-destructive">
          <h4 className="font-display font-bold text-foreground mb-2">
            1. ESTOQUE LIMITADO
          </h4>
          <p className="text-body text-muted-foreground">
            Só liberamos <strong className="text-destructive">100 cópias</strong>{" "}
            por mês com o bônus completo.
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 shadow-card border-l-4 border-action">
          <h4 className="font-display font-bold text-foreground mb-2">
            2. PREÇO DE LANÇAMENTO
          </h4>
          <p className="text-body text-muted-foreground">
            O valor atual é{" "}
            <strong className="text-success">R$100</strong>. Nas próximas semanas,
            subirá para{" "}
            <span className="line-through text-muted-foreground">R$200</span>.
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 shadow-card border-l-4 border-success">
          <h4 className="font-display font-bold text-foreground mb-2">
            3. OFERTA TEMPORÁRIA
          </h4>
          <p className="text-body text-muted-foreground">
            O bônus "300 SALÁRIOS" só está incluído nesta leva. Nas próximas, será
            vendido separadamente por{" "}
            <strong className="text-muted-foreground">R$50</strong>.
          </p>
        </div>
      </motion.div>

      {/* Why these limitations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="bg-primary/5 rounded-2xl p-6 md:p-8 text-center mb-10"
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">
          POR QUE ESSAS LIMITAÇÕES?
        </h3>
        <p className="text-body text-muted-foreground mb-4">
          Porque não queremos "vender para todos". Queremos vender para{" "}
          <strong className="text-primary">
            quem está realmente pronto para mudar.
          </strong>
        </p>
        <p className="text-body text-muted-foreground">
          Para quem cansou da teoria e quer ação. Para quem entende que o melhor
          momento para plantar uma árvore foi há 20 anos...{" "}
          <strong className="text-success">o segundo melhor é HOJE.</strong>
        </p>
      </motion.div>

      {/* Digital hourglass */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.9 }}
        className="flex justify-center mb-10"
      >
        <motion.div
          className="text-6xl"
          animate={{ rotateY: [0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          ⏳
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <AnimatedButton icon="⚡" variant="highlight" onClick={() => window.open(CHECKOUT_URL, "_blank")}>
          GARANTIR ANTES QUE ACABE
        </AnimatedButton>
      </motion.div>
    </SectionWrapper>
  );
};
