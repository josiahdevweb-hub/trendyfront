import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Trendylocs" },
    { name: "description", content: "Expert advice and inspiration for your natural hair journey." },
  ]}),
  component: Blog,
});

const posts = [
  { id: 1, featured: true, title: "The Complete Guide to Starting Your Loc Journey", excerpt: "Everything you need to know before getting locs, from choosing the right method to understanding the commitment.", cat: "Getting Started", date: "May 1, 2026", read: "8 min read", img: "/images/styles/sisterlocks.jpg" },
  { id: 2, title: "Sisterlocks vs Microlocs: Which Is Right for You?", excerpt: "A detailed comparison of these two popular loc methods to help you make an informed decision.", cat: "Education", date: "April 28, 2026", read: "6 min read", img: "/images/styles/microlocs.jpg" },
  { id: 3, title: "10 Essential Tips for Healthy Loc Maintenance", excerpt: "Expert advice on keeping your locs clean, moisturized, and looking their best between salon visits.", cat: "Maintenance", date: "April 25, 2026", read: "5 min read", img: "/images/styles/traditional-locs.jpg" },
  { id: 4, title: "The Loc Journey: What to Expect in the First Year", excerpt: "A month-by-month guide through your first year of locs, including all the stages and changes.", cat: "Journey", date: "April 22, 2026", read: "10 min read", img: "/images/styles/retightening.jpg" },
  { id: 5, title: "Natural Hair Growth: Science-Backed Strategies", excerpt: "Learn about the biological factors that influence hair growth and how to optimize them.", cat: "Hair Health", date: "April 19, 2026", read: "7 min read", img: "/images/styles/mature-locs.jpg" },
  { id: 6, title: "Styling Your Locs: From Casual to Formal", excerpt: "Creative styling ideas for every occasion, with step-by-step tutorials and product recommendations.", cat: "Styling", date: "April 16, 2026", read: "6 min read", img: "/images/styles/styling.jpg" },
  { id: 7, title: "Common Loc Mistakes and How to Avoid Them", excerpt: "Learn from others' experiences and avoid these common pitfalls on your loc journey.", cat: "Education", date: "April 13, 2026", read: "5 min read", img: "/images/styles/color.jpg" },
  { id: 8, title: "The Best Products for Your Loc Type", excerpt: "A comprehensive guide to choosing the right products based on your loc method and hair texture.", cat: "Products", date: "April 10, 2026", read: "8 min read", img: "/images/styles/consultation.jpg" },
  { id: 9, title: "Transitioning to Natural Hair: Your Complete Guide", excerpt: "Everything you need to know about transitioning from relaxed to natural hair successfully.", cat: "Getting Started", date: "April 7, 2026", read: "9 min read", img: "/images/styles/long-locs.jpg" },
];

function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="bg-dark text-primary-foreground py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Journal</p>
          <h1 className="text-5xl md:text-7xl mb-6">Blog</h1>
          <p className="text-lg text-primary-foreground/70">Expert advice, education, and inspiration for your natural hair journey</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <article className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="inline-block bg-gold text-gold-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">Featured · {featured.cat}</span>
            <h2 className="text-4xl mb-4">{featured.title}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>{featured.date}</span><span>·</span><span>{featured.read}</span>
            </div>
            <a href="#" className="inline-flex items-center gap-2 border-b border-gold pb-1">Read More <ArrowRight className="h-4 w-4" /></a>
          </div>
        </article>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map(p => (
            <article key={p.id} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-md mb-4">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs uppercase tracking-wider text-gold mb-2">{p.cat}</p>
              <h3 className="text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{p.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date} · {p.read}</span>
                <a href="#" className="text-foreground hover:text-gold">Read →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl mb-4">Never Miss a Post</h2>
          <p className="text-muted-foreground mb-8">Subscribe to our newsletter for weekly hair care tips and exclusive content</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:border-gold" />
            <button className="bg-dark text-primary-foreground px-6 rounded-md hover:bg-dark/90">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
