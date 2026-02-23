import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="start" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hochzeitsfotografie von Sabine Kretz"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wide leading-tight">
            Sabine Kretz
          </h1>
          <p className="mt-2 font-display text-lg md:text-2xl italic text-primary-foreground/90 tracking-wider">
            Hochzeitsfotografie
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-lg font-body text-base md:text-lg text-primary-foreground/80 tracking-wide"
        >
          Fotografie, mit Herz und Leidenschaft!
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          onClick={scrollToPortfolio}
          className="mt-12 border border-primary-foreground/50 px-8 py-3 font-body text-sm uppercase tracking-[0.25em] text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground"
        >
          Portfolio entdecken
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
