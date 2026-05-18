import { motion } from "framer-motion";
import portfolioKiss from "@/assets/portfolio-kiss.jpg";
import portfolioWindow from "@/assets/portfolio-window.jpg";

const images = [
  { src: "https://picsum.photos/seed/photo1/600/400", alt: "Portfolio 1" },
  { src: "https://picsum.photos/seed/photo2/600/400", alt: "Portfolio 2" },
  { src: "https://picsum.photos/seed/photo3/600/400", alt: "Portfolio 3", span: true },
  { src: portfolioWindow, alt: "Brautpaar am Fenster" },
  { src: "https://picsum.photos/seed/photo5/600/400", alt: "Portfolio 5" },
  { src: "https://picsum.photos/seed/photo6/600/400", alt: "Portfolio 6" },
  { src: "https://picsum.photos/seed/photo7/600/400", alt: "Portfolio 7" },
  { src: portfolioKiss, alt: "Brautpaar Kuss" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-section-alt py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Portfolio
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Verträumt oder verrückt, klassisch oder modern — jedes Brautpaar und
            jede Hochzeit ist anders. Eure Hochzeitsbilder sollen auf jeden Fall
            zu euch passen.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-3"
          style={{ gap: "3px", gridAutoRows: "220px" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="overflow-hidden group cursor-pointer"
              style={img.span ? { gridRow: "span 2" } : undefined}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
