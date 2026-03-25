import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, alt: "Hochzeitsstrauß" },
  { src: portfolio2, alt: "Brautpaar Kuss in Schwarzweiß" },
  { src: portfolio3, alt: "Braut im Wald" },
  { src: portfolio4, alt: "Eheringe Detail" },
  { src: portfolio5, alt: "Brautpaar tanzt bei Sonnenuntergang" },
  { src: portfolio6, alt: "Romantisches Brautpaar Portrait" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[280px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
