import blogSinaCover from "@/assets/blog-sina-andreas.jpg";
import blogSina1 from "@/assets/blog-sina-1.jpg";
import blogSina2 from "@/assets/blog-sina-2.jpg";
import blogSina3 from "@/assets/blog-sina-3.jpg";
import blogSina4 from "@/assets/blog-sina-4.jpg";
import blogSina5 from "@/assets/blog-sina-5.jpg";
import blogSina6 from "@/assets/blog-sina-6.jpg";

import blogCmCover from "@/assets/blog-christina-manuel.jpg";
import blogCm1 from "@/assets/blog-cm-1.jpg";
import blogCm2 from "@/assets/blog-cm-2.jpg";
import blogCm3 from "@/assets/blog-cm-3.jpg";
import blogCm4 from "@/assets/blog-cm-4.jpg";
import blogCm5 from "@/assets/blog-cm-5.jpg";
import blogCm6 from "@/assets/blog-cm-6.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  sections: {
    text?: string;
    images: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sina-andreas",
    title: "Sina & Andreas",
    date: "24. Juni 2020",
    coverImage: blogSinaCover,
    excerpt:
      "Ich durfte Sina und Andreas schon beim Ankleiden in ihrem neu gebauten Haus begleiten, es war eine lockere und lustige Atmosphäre bei der die ersten schönen Bilder entstanden.",
    sections: [
      {
        text: "Ich durfte Sina und Andreas schon beim Ankleiden in ihrem neu gebauten Haus begleiten, es war eine lockere und lustige Atmosphäre bei der die ersten schönen Bilder entstanden.",
        images: [blogSina1, blogSina2],
      },
      {
        text: "Auch den First-Look-Moment erlebten wir im neuen Haus, da die beiden gemeinsam zur Hochzeitslocation dem Schloss Saaleck fahren wollten.",
        images: [blogSina3],
      },
      {
        text: "Im wunderschönen Turmzimmer, der ehemaligen Kapelle vom Schloss Saaleck, das mittlerweile eine Außenstelle des Standesamtes Hammelburg ist, gaben sich die beiden vor Familie und Freunden das Ja-Wort!",
        images: [blogSina4],
      },
      {
        text: "Im Innenhof wurden die Beiden herzlich empfangen.",
        images: [blogSina5],
      },
      {
        text: "Natürlich haben wir auch noch einige wunderschöne Bilder vom Brautpaar gemacht! Es war ein unheimlich heißer August Tag und die beiden haben das trotz der Hitze wirklich toll gemacht.",
        images: [blogSina6],
      },
    ],
  },
  {
    slug: "christina-manuel",
    title: "Christina & Manuel aus Würzburg heiraten in Bad Kissingen",
    date: "16. November 2017",
    coverImage: blogCmCover,
    excerpt:
      "Die Hochzeitsbesprechung und unser Pre-Shooting fanden am schönen Schweinfurter Stadtstrand statt. Geheiratet haben die beiden dann im traumhaft schönen Staatsbad Bad Kissingen.",
    sections: [
      {
        text: "Im Mai traf ich mich mit Christina & Manuel, um ihre Hochzeit im August entspannt bei einem kühlen Getränk am Stadtstrand Schweinfurt zu besprechen.",
        images: [blogCm1],
      },
      {
        text: "Zu der Besprechung gehört auch ein kleines Pre-Shooting, um das Brautpaar in Ruhe auf das Hochzeitsshooting vorzubereiten. Beim Vor-Shooting kann das Brautpaar schon mal ausprobieren was vor der Kamera gut aussieht und zu ihnen passt.",
        images: [blogCm2],
      },
      {
        text: "Die Trauung der beiden fand in der katholischen Kirche in Garitz statt und war sehr berührend.",
        images: [blogCm3],
      },
      {
        text: "Nach Kaffee und Kuchen ging es los zum Paarshooting. Trotz kurzem Regenschauer haben wir uns den Spaß nicht nehmen lassen und konnten erst im Trockenen und dann auch wieder draußen im herrlichen Kurpark von Bad Kissingen wunderschöne Fotos machen.",
        images: [blogCm4, blogCm5],
      },
      {
        text: "Hier noch ein paar Impressionen von der schönen Hochzeitsfeier von Christina und Manuel. Es war ein traumhafter Tag mit den beiden, mit vielen tollen Gästen, liebevoller Dekoration, lustigen Überraschungen und einem ganz lieben Brautpaar. Vielen Dank, dass ich euch an diesem wichtigen und wunderschönen Tag begleiten durfte.",
        images: [blogCm6],
      },
    ],
  },
];
