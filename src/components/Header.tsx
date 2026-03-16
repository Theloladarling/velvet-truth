import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/80 backdrop-blur-sm"
    >
      <span className="font-display text-xl tracking-wide text-foreground">
        The Container
      </span>
      <a
        href="#enter"
        className="font-body text-xs tracking-[0.2em] uppercase border border-primary px-6 py-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-700"
      >
        Enter the Container
      </a>
    </motion.header>
  );
};

export default Header;
