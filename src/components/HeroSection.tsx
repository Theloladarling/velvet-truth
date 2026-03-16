import { motion } from "framer-motion";
import heroImage from "@/assets/hero-smoke.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Atmospheric smoke and light"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-8"
        >
          A somatic mirror for the soul
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground mb-8"
        >
          Come closer to what<br />you already are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          Intimate containers of breath, reflection, and radical honesty —
          where you remember the truth your body never forgot.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-foreground/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
