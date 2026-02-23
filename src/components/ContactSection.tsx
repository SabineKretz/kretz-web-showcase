import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, Camera } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hochzeitsanfrage");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nHochzeitsdatum und Ort: ${formData.date}\n\n${formData.message}`
    );
    window.location.href = `mailto:foto@sabine-kretz.de?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-section-alt py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Kontakt
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Für jede Hochzeit unterbreite ich meinen Kunden ein individuelles
            Angebot. Ich freue mich auf euch!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Services & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-xl text-foreground mb-6">
              Leistungen
            </h3>
            <ul className="space-y-3 font-body text-muted-foreground text-sm leading-relaxed">
              <li className="flex gap-2"><Camera size={16} className="text-accent mt-0.5 shrink-0" /> Kennenlerngespräch persönlich oder am Telefon</li>
              <li className="flex gap-2"><Camera size={16} className="text-accent mt-0.5 shrink-0" /> Vor-Shooting zum besseren Kennenlernen inkl. Dateien</li>
              <li className="flex gap-2"><Camera size={16} className="text-accent mt-0.5 shrink-0" /> Reportagefotografie und Hochzeitsportraits auf digitalem Vollformat</li>
              <li className="flex gap-2"><Camera size={16} className="text-accent mt-0.5 shrink-0" /> Lieferung in Farbe und Schwarz-Weiß ohne Wasserzeichen</li>
              <li className="flex gap-2"><Camera size={16} className="text-accent mt-0.5 shrink-0" /> Video-Clips & Online-Download-Link</li>
            </ul>

            <div className="mt-8 space-y-4 font-body text-sm">
              <p className="text-foreground font-display text-base">
                Paarshootings ab <span className="text-accent font-semibold">490 €</span> · Reportage ab <span className="text-accent font-semibold">990 €</span>
              </p>
              <p className="text-muted-foreground">
                In der Nebensaison (November–März) erhaltet ihr 20 % Rabatt auf Reportagen.
              </p>
            </div>

            <div className="mt-10 space-y-3 font-body text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                09721 2902957 · 0179 4599515
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                foto@sabine-kretz.de
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                Hochzeitsdatum und Ort
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                Nachricht *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary px-8 py-3 font-body text-sm uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-accent"
            >
              Anfrage senden
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
