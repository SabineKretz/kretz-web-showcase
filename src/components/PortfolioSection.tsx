import { motion } from "framer-motion";

const columns = [
  [
    { src: "https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/s000058100d1a830c/image/ifc3d8393edf4e14a/version/1496864182/image.jpg", alt: "Hochzeitsfoto Brautpaar", aspect: "3/2" },
    { src: "https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/s000058100d1a830c/image/iff6e8a0fa040610b/version/1509303054/image.jpg", alt: "Hochzeitsfoto Portrait", aspect: "3/4" },
  ],
  [
    { src: "https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/s000058100d1a830c/image/i4ed583b1356c703b/version/1509303054/image.jpg", alt: "Hochzeitsfoto Zeremonie", aspect: "3/2" },
    { src: "https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/s000058100d1a830c/image/i143f3d4376c1bf34/version/1509303054/image.jpg", alt: "Hochzeitsfoto Detail", aspect: "3/2" },
    { src: "https://image.jimcdn.com/app/cms/image/transf/none/path/s000058100d1a830c/image/iebaf3f2a31245f1f/version/1509303043/image.jpg", alt: "Hochzeitsfoto Feier", aspect: "3/2" },
  ],
  [
    { src: "https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/s000058100d1a830c/image/i51b8dc84e85be706/version/1509303054/image.jpg", alt: "Hochzeitsfoto Braut", aspect: "3/4" },
    { src: "https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/s000058100d1a830c/image/i700557322f2d8513/version/1509303047/image.jpg", alt: "Hochzeitsfoto Paar", aspect: "3/2" },
  ],
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

        <div className="grid grid-cols-3" style={{ gap: "3px" }}>
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col" style={{ gap: "3px" }}>
              {col.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (colIndex * 2 + i) * 0.08 }}
                  className="overflow-hidden group cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    style={{ aspectRatio: img.aspect }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
