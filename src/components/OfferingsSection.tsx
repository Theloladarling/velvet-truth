import { motion } from "framer-motion";
import offeringsImage from "@/assets/offerings-still.jpg";

const offerings = [
  {
    title: "Private Sessions",
    description:
      "One-on-one somatic containers. Breath, body, and brutal honesty woven together in sacred intimacy. This is where the real unraveling begins.",
  },
  {
    title: "Mini-Courses",
    description:
      "Pre-recorded journeys into the depths — self-paced initiations designed to crack you open at your own rhythm.",
  },
  {
    title: "The Podcast",
    description:
      "Raw, unfiltered conversations that feel like whiskey by a fire. Stories, somatic wisdom, and the kind of truth that leaves a mark.",
  },
  {
    title: "Telegram Community",
    description:
      "An intimate circle of souls who chose aliveness over comfort. Daily provocations, shared breath, collective evolution.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.2, ease: "easeOut" as const },
};

const OfferingsSection = () => {
  return (
    <section className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <img
              src={offeringsImage}
              alt="Dark roses, amber bottles, and parchment"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <motion.p
              {...fadeInUp}
              className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6"
            >
              Offerings
            </motion.p>
            <motion.h2
              {...fadeInUp}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-foreground"
            >
              Ways to enter<br />the container
            </motion.h2>
          </div>
        </div>

        {/* Offering cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="bg-background p-10 md:p-14 group hover:bg-card transition-colors duration-700"
            >
              <span className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 not-italic font-normal italic">
                {offering.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">
                {offering.description}
              </p>
              <div className="mt-8">
                <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground border-b border-primary pb-1 group-hover:border-accent transition-colors duration-700 cursor-pointer">
                  Learn more
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
