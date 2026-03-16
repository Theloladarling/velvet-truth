const Footer = () => {
  return (
    <footer className="border-t border-primary px-8 md:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg text-foreground">
          The Container
        </span>
        <div className="flex gap-8">
          {["Podcast", "Sessions", "Courses", "Community"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
