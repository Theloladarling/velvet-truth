import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="enter" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-8">
            The invitation
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-8">
            Are you ready to be<br />seen without your armour?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-[1.8] max-w-lg mx-auto mb-12">
            This work is not for everyone. It's for the ones who are tired of
            performing wholeness and are ready to actually feel it. If something
            in you stirred — trust that.
          </p>
          <a
            href="#"
            className="inline-block font-body text-xs tracking-[0.2em] uppercase border border-primary px-10 py-4 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-700"
          >
            Begin Here
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
