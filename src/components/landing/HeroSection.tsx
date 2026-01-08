import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypewriterText } from "./TypewriterText";
import { AnimatedButton } from "./AnimatedButton";
import heroBg from "@/assets/hero-bg.jpg";
interface HeroSectionProps {
  onCTAClick: () => void;
}
export const HeroSection = ({
  onCTAClick
}: HeroSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Pessoa exausta com contas" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Animated hamster wheel element */}
      <motion.div className="absolute right-4 md:right-20 top-1/4 opacity-20 hidden md:block" animate={{
      rotate: 360
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}>
        <div className="w-40 h-40 border-4 border-dashed border-primary-foreground/30 rounded-full flex items-center justify-center">
          <motion.span className="text-6xl" animate={{
          y: [0, -5, 0]
        }} transition={{
          duration: 0.5,
          repeat: Infinity
        }}>
            🏃
          </motion.span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-5 py-20 text-center">
        {/* Progress indicator start */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-xl">😫</span>
            <div className="w-32 h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
              <motion.div className="h-full bg-action rounded-full" initial={{
              width: "0%"
            }} animate={isInView ? {
              width: "20%"
            } : {}} transition={{
              delay: 0.5,
              duration: 1
            }} />
            </div>
            <span className="text-primary-foreground text-sm font-display font-semibold">
              20%
            </span>
          </div>
        </motion.div>

        {/* Headline with typewriter effect */}
        <h1 className="heading-hero text-primary-foreground mb-6">
          <TypewriterText text="Trabalha o mês inteiro mas no fim só sobra o cansaço?" delay={500} />
        </h1>

        {/* Subheadline */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 2.5,
        duration: 0.6
      }} className="text-body text-primary-foreground/90 max-w-2xl mx-auto mb-10">
          No Brasil, milhões vivem essa rotina exaustiva: acordar cedo, enfrentar
          horas no trânsito, dar tudo no trabalho... para ver o salário desaparecer
          em contas. Mas enquanto você corre atrás do dinheiro,{" "}
          <strong className="text-action">
            um pequeno grupo faz o dinheiro trabalhar por eles.
          </strong>
        </motion.p>

        {/* CTA Button */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        delay: 3,
        duration: 0.5,
        type: "spring"
      }} className="mb-[50px]">
          <AnimatedButton icon="🔓" onClick={onCTAClick} variant="highlight">
            REVELAR O SEGREDO DOS QUE SAÍRAM DESSA RODA
          </AnimatedButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="">
          <div className="text-primary-foreground/60 flex flex-col items-center justify-center text-center">
            <span className="text-sm font-body mb-2">Role para descobrir</span>
            <span className="text-2xl">↓</span>
          </div>
        </motion.div>
      </div>
    </section>;
};