import { motion } from "framer-motion";
import aboutImage from "@/assets/about-breath.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: "easeOut" },
};

const AboutSection = () => {
  return (
    <section className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Text */}
        <div className="md:col-span-7 md:col-start-1">
          <motion.p
            {...fadeInUp}
            className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            The Work
          </motion.p>
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-foreground mb-8"
          >
            This is not coaching.<br />
            This is remembering.
          </motion.h2>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="space-y-6 text-muted-foreground text-sm md:text-base leading-[1.8] max-w-xl"
          >
            <p>
              I hold space the way smoke holds a room — filling every corner without force.
              Through somatic awareness, unflinching reflection, and the alchemy of breath,
              we peel back the layers of performance to reveal what's been waiting underneath.
            </p>
            <p>
              Your original essence. Your innate truth. The version of you
              that existed before the world told you who to be.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="md:col-span-4 md:col-start-9 relative"
        >
          <div className="border border-primary p-2">
            <img
              src={aboutImage}
              alt="Breath in the dark"
              className="w-full aspect-square object-cover grayscale-[20%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
