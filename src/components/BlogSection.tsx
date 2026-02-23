import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="bg-background py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Blog
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Geschichten und Eindrücke von wunderschönen Hochzeiten, die ich
            begleiten durfte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block overflow-hidden"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pt-5">
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {post.date}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mt-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground mt-3 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 font-body text-sm uppercase tracking-[0.15em] text-accent group-hover:tracking-[0.25em] transition-all">
                    Mehr lesen →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
