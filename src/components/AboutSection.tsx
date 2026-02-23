import { motion } from "framer-motion";
import aboutImage from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Sabine Kretz — Hochzeitsfotografin"
              className="w-full max-w-sm mx-auto object-cover aspect-[3/4]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Über mich
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hallo liebes Brautpaar,</strong>
              </p>
              <p>
                hier bin ich also, eure Hochzeitsfotografin. Seit 2008 begleite
                ich professionell Hochzeiten und besitze die entsprechende
                Erfahrung und das passende Equipment.
              </p>
              <p>
                Für mich ist es wichtig, die entscheidenden Momente und Emotionen
                neben ausdrucksstarken Portraits fotografisch einzufangen.
              </p>
              <p>
                Sollte Euch mein Stil gefallen und Emotionen, Details, Momente
                sind genau die Dinge, die Ihr fotografisch an Eurem Hochzeitstag
                festhalten möchtet, dann bin ich genau die richtige
                Hochzeitsfotografin für euch.
              </p>
              <p className="font-display italic text-foreground text-lg mt-6">
                Ich freue mich darauf euch kennenzulernen,
                <br />
                Eure Sabine
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
