const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="font-display text-lg text-background/90 tracking-wider">
          Sabine Kretz
        </p>
        <p className="mt-1 font-display text-sm italic text-background/60">
          Fotografie & Design
        </p>
        <p className="mt-4 font-body text-xs text-background/40 tracking-wide">
          © {new Date().getFullYear()} Sabine Kretz Hochzeitsfotografie. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
