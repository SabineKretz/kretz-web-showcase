import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Zurück
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12">
          Impressum
        </h1>

        <div className="space-y-10 font-body text-muted-foreground leading-relaxed">
          <div>
            <p className="text-foreground font-medium">Sabine Kretz</p>
            <p>Nußbergstr. 109</p>
            <p>97422 Schweinfurt</p>
            <p className="mt-2">Telefon 09721 2902957</p>
            <p>Mobil 0179 4599515</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Disclaimer / Haftungsausschluss
            </h2>
            <p>
              Die einzelnen Seiten dieser Internet-Domain wurden sorgfältig erstellt. Sie dienen nur der allgemeinen Information und nicht der Beratung in konkreten Fällen.
            </p>
            <p className="mt-3">
              Die Firma Sabine Kretz schließt jegliche Haftung für Schäden, die direkt oder indirekt aus der Benutzung dieser Website oder durch das Herunterladen von Daten von dieser Website entstehen, aus.
            </p>
            <p className="mt-3">
              Unsere Website enthält Links zu anderen Website-Betreibern. Die Firma Sabine Kretz übernimmt keine Gewähr oder Haftung für deren Funktion sowie eventuell rechtswidrige Inhalte oder sonstige Rechtsverletzungen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Copyright
            </h2>
            <p>
              Firma Sabine Kretz, Schweinfurt, Deutschland. Alle Rechte vorbehalten. Sämtliche Inhalte, wie Texte, Bilder, Grafiken, Ton-, Video- und Animationsdateien sowie deren Arrangements unterliegen dem Schutz des Urheberrechts und anderen Gesetzen zum Schutz geistigen Eigentums.
            </p>
            <p className="mt-3">
              Eine Vervielfältigung oder Verbreitung der Seiten oder ihrer Inhalte ist nur mit vorheriger schriftlicher Einwilligung der Firma Sabine Kretz und nur in Verbindung mit Quellen- und Datumsangabe zulässig. Ohne diese schriftliche Einwilligung dürfen die Inhalte dieser Website nicht zu kommerziellen Zwecken kopiert, verbreitet, verändert oder Dritten zugänglich gemacht werden.
            </p>
            <p className="mt-3">
              Die Inhalte der Seiten dieser Internet-Domain stammen teilweise von Dritten, die eine weitere Vervielfältigung und Verbreitung nicht gestatten. Soweit auf Quellen oder Fundstellen hingewiesen wird, geben die Seiten weder die Rechtsansicht noch die Meinung der Firma Sabine Kretz wieder.
            </p>
            <p className="mt-3">
              Das geistige Eigentum ist durch verschiedene Rechte wie Patent-, Marken- und Urheberrecht durch die Firma Sabine Kretz geschützt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Datenschutz, Datensicherheit
            </h2>
            <p>
              Für die Bearbeitung von Anfragen oder Mitteilungen bitten wir Sie um die Angabe persönlicher Daten. Der Umgang und die Verwendung der übermittelten Daten erfolgen mit der gebotenen Sorgfalt und nur zur Bearbeitung Ihres Ersuchens.
            </p>
            <p className="mt-3">
              Wir erfassen Daten ausschließlich im notwendigen Umfang und in Übereinstimmung mit den deutschen Gesetzen zu Datenschutz und Datensicherheit. Es erfolgt keine Weitergabe von Daten an Dritte oder eine anderweitige Vermarktung.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Automatisch gesammelte Informationen
            </h2>
            <p>
              Beim Zugriff auf unsere Website erfassen wir allgemeine Informationen, wie z.B. Browser, Anzahl der Besuche, Verweildauer, aufgerufene Seiten. Diese Informationen nutzen wir intern zu statistischen Zwecken.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Verwaltung der Website
            </h2>
            <p>
              Die Firma Sabine Kretz betreibt und verwaltet die Website in Deutschland gemäß dem deutschen Recht.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
