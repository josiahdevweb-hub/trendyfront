import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Trendylocs" },
    { name: "description", content: "Expert advice and inspiration for your natural hair journey." },
  ]}),
  component: Blog,
});

const posts = [
  { id: 1, featured: true, title: "The Complete Guide to Starting Your Loc Journey", excerpt: "Everything you need to know before getting locs, from choosing the right method to understanding the commitment.", cat: "Getting Started", date: "May 1, 2026", read: "8 min read", img: "/images/styles/sisterlocks.jpg" },
  { id: 2, title: "Sisterlocks™ vs Microlocs: Which Is Right for You?", excerpt: "A detailed comparison of these two popular loc methods to help you make an informed decision.", cat: "Education", date: "April 28, 2026", read: "6 min read", img: "/images/styles/microlocs.jpg" },
  { id: 3, title: "10 Essential Tips for Healthy Loc Maintenance", excerpt: "Expert advice on keeping your locs clean, moisturized, and looking their best between salon visits.", cat: "Maintenance", date: "April 25, 2026", read: "5 min read", img: "/images/styles/traditional-locs.jpg" },
  { id: 4, title: "The Loc Journey: What to Expect in the First Year", excerpt: "A month-by-month guide through your first year of locs, including all the stages and changes.", cat: "Journey", date: "April 22, 2026", read: "10 min read", img: "/images/styles/retightening.jpg" },
  { id: 5, title: "Natural Hair Growth: Science-Backed Strategies", excerpt: "Learn about the biological factors that influence hair growth and how to optimize them.", cat: "Hair Health", date: "April 19, 2026", read: "7 min read", img: "/images/styles/mature-locs.jpg" },
  { id: 6, title: "Styling Your Locs: From Casual to Formal", excerpt: "Creative styling ideas for every occasion, with step-by-step tutorials and product recommendations.", cat: "Styling", date: "April 16, 2026", read: "6 min read", img: "/images/styles/styling.jpg" },
  { id: 7, title: "Common Loc Mistakes and How to Avoid Them", excerpt: "Learn from others' experiences and avoid these common pitfalls on your loc journey.", cat: "Education", date: "April 13, 2026", read: "5 min read", img: "/images/styles/color.jpg" },
  { id: 8, title: "The Best Products for Your Loc Type", excerpt: "A comprehensive guide to choosing the right products based on your loc method and hair texture.", cat: "Products", date: "April 10, 2026", read: "8 min read", img: "/images/styles/consultation.jpg" },
  { id: 9, title: "Transitioning to Natural Hair: Your Complete Guide", excerpt: "Everything you need to know about transitioning from relaxed to natural hair successfully.", cat: "Getting Started", date: "April 7, 2026", read: "9 min read", img: "/images/styles/long-locs.jpg" },
];

function articleBody(p: typeof posts[number]) {
  return [
    `${p.excerpt}`,
    `In this guide we go deep on ${p.title.toLowerCase()}. Whether you're new to your natural hair journey or a seasoned loc-wearer, the tips below will help you get the most from your routine.`,
    `Our stylists at Trendylocs have spent years refining these techniques in the salon. We've pulled together the most important takeaways so you can apply them at home between appointments.`,
    `If you'd like a personalised plan, book a consultation and we'll tailor everything in this article to your hair type, lifestyle, and goals.`,
  ];
}

function Blog() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const active = activeId ? posts.find(p => p.id === activeId) ?? null : null;

  useEffect(() => {
    if (active) return;
    const t = setInterval(() => setFeaturedIdx(i => (i + 1) % posts.length), 5000);
    return () => clearInterval(t);
  }, [active]);

  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Journal</p>
          <h1 className="text-3xl md:text-4xl mb-3">Blog</h1>
          <p className="text-base text-primary-foreground/70">Expert advice, education, and inspiration for your natural hair journey</p>
        </div>
      </section>

      {active ? (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <button
            onClick={() => setActiveId(null)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </button>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            <article>
              <span className="inline-block bg-gold text-gold-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">{active.cat}</span>
              <h2 className="text-4xl mb-4">{active.title}</h2>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
                <span>{active.date}</span><span>·</span><span>{active.read}</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden rounded-md mb-8">
                <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="prose max-w-none space-y-5 text-base leading-relaxed text-foreground/90">
                {articleBody(active).map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </article>

            <aside className="lg:border-l lg:pl-8 border-border">
              <h3 className="font-serif text-lg mb-6 uppercase tracking-widest text-xs text-muted-foreground">More posts</h3>
              <div className="space-y-5">
                {posts.filter(p => p.id !== active.id).map(p => (
                  <button
                    key={p.id}
                    onClick={() => { setActiveId(p.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="flex gap-3 text-left group w-full"
                  >
                    <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-md">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-gold mb-1">{p.cat}</p>
                      <p className="text-sm leading-snug group-hover:text-gold line-clamp-2">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{p.read}</p>
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-6 py-20">
          {(() => {
            const featured = posts[featuredIdx];
            const rest = posts.filter((_, i) => i !== featuredIdx);
            return (
              <>
                <article className="grid md:grid-cols-2 gap-10 mb-12 items-center">
                  <button
                    key={`img-${featured.id}`}
                    onClick={() => setActiveId(featured.id)}
                    className="aspect-[4/3] overflow-hidden rounded-md block animate-fade-in"
                  >
                    <img src={featured.img} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                  <div key={`txt-${featured.id}`} className="animate-fade-in">
                    <span className="inline-block bg-gold text-gold-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">Featured · {featured.cat}</span>
                    <h2 className="text-4xl mb-4">{featured.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{featured.date}</span><span>·</span><span>{featured.read}</span>
                    </div>
                    <button onClick={() => setActiveId(featured.id)} className="inline-flex items-center gap-2 border-b border-gold pb-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>

                <div className="flex justify-center gap-2 mb-16">
                  {posts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setFeaturedIdx(i)}
                      aria-label={`Featured post ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === featuredIdx ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30"}`}
                    />
                  ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map(p => (
                    <article key={p.id} className="group cursor-pointer" onClick={() => setActiveId(p.id)}>
                      <div className="aspect-[4/3] overflow-hidden rounded-md mb-4">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-xs uppercase tracking-wider text-gold mb-2">{p.cat}</p>
                      <h3 className="text-xl mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{p.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{p.date} · {p.read}</span>
                        <span className="text-foreground group-hover:text-gold">Read →</span>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            );
          })()}
        </section>
      )}

      {!active && (
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
      )}
    </>
  );
}
