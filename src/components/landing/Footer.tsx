import { motion } from "framer-motion";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground px-5 pt-10 pb-[200px]">
      <div className="container max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center">
          {/* Logo/Brand */}
          <h3 className="font-display font-bold text-xl mb-4">
            Você Está Preparado Para Parar de Ser Pobre?
          </h3>

          {/* Links
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70 mb-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div> */}

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60 mb-4">
            © {currentYear} - Você Está Preparado Para Parar de Ser Pobre?
            <br />
            Todos os direitos reservados.
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-primary-foreground/50 max-w-lg mx-auto">
            Este produto não garante enriquecimento, mas oferece educação financeira
            comprovada. Resultados dependem da aplicação individual.
          </p>
        </motion.div>
      </div>
    </footer>;
};