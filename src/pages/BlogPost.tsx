import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-body text-muted-foreground">
            Beitrag nicht gefunden.
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/80"
          >
            {post.date}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl text-primary-foreground mt-3 max-w-3xl"
          >
            {post.title}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <article className="bg-background py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Zurück zum Blog
          </Link>

          {post.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {section.text && (
                <p className="font-body text-foreground leading-relaxed mb-6 text-lg">
                  {section.text}
                </p>
              )}
              <div
                className={`grid gap-4 ${
                  section.images.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {section.images.map((img, j) => (
                  <img
                    key={j}
                    src={img}
                    alt={`${post.title} - Bild ${i + 1}-${j + 1}`}
                    className="w-full object-cover rounded-sm"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
