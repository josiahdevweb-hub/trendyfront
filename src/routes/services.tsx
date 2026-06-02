import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trendylocs" },
      {
        name: "description",
        content: "Sisterlocks™, Microlocs, Traditional Locs, retightening, styling and more.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const active = activeSlug ? services.find((s) => s.slug === activeSlug) ?? null : null;

  useEffect(() => {
    if (active) return;
    const t = setInterval(() => setFeaturedIdx((i) => (i + 1) % services.length), 5000);
    return () => clearInterval(t);
  }, [active]);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
      e.currentTarget.src = "/images/fallback.jpg";
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">What We Offer</p>
          <h1 className="text-3xl md:text-4xl mb-3">Our Services</h1>
          <p className="text-base text-primary-foreground/70">
            Expert care for every stage of your natural hair journey
          </p>
        </div>
      </section>

      {active ? (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <button
            onClick={() => setActiveSlug(null)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all services
          </button>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            <article>
              <span className="inline-block bg-gold text-gold-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Service
              </span>
              <h2 className="text-4xl mb-4">{active.title}</h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {active.time}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="h-4 w-4" /> {active.price}
                </span>
              </div>
              <div className="aspect-[16/9] overflow-hidden rounded-md mb-8">
                <img
                  src={active.img}
                  alt={active.title}
                  onError={handleImgError}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="prose max-w-none space-y-5 text-base leading-relaxed text-foreground/90 whitespace-pre-line mb-8">
                {active.longDesc ?? active.desc}
              </div>

              <h3 className="font-serif text-xl mb-3">What's included</h3>
              <ul className="space-y-2 mb-8">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                search={{ service: active.slug }}
                className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] hover:bg-primary/90"
              >
                Book Now
              </Link>
            </article>

            <aside className="lg:border-l lg:pl-8 border-border">
              <h3 className="font-serif text-lg mb-6 uppercase tracking-widest text-xs text-muted-foreground">
                More services
              </h3>
              <div className="space-y-5">
                {services
                  .filter((s) => s.slug !== active.slug)
                  .map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => {
                        setActiveSlug(s.slug);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex gap-3 text-left group w-full"
                    >
                      <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={s.img}
                          alt={s.title}
                          onError={handleImgError}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-gold mb-1">{s.time}</p>
                        <p className="text-sm leading-snug group-hover:text-gold line-clamp-2">{s.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{s.price}</p>
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
            const featured = services[featuredIdx];
            const rest = services.filter((_, i) => i !== featuredIdx);
            return (
              <>
                <article className="grid md:grid-cols-2 gap-10 mb-12 items-center">
                  <button
                    key={`img-${featured.slug}`}
                    onClick={() => setActiveSlug(featured.slug)}
                    className="aspect-[4/3] overflow-hidden rounded-md block animate-fade-in"
                  >
                    <img
                      src={featured.img}
                      alt={featured.title}
                      onError={handleImgError}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                  <div key={`txt-${featured.slug}`} className="animate-fade-in">
                    <span className="inline-block bg-gold text-gold-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      Featured Service
                    </span>
                    <h2 className="text-4xl mb-4">{featured.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featured.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {featured.time}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Tag className="h-4 w-4" /> {featured.price}
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveSlug(featured.slug)}
                      className="group/cta inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] hover:opacity-90 transition-all shadow-sm hover:shadow-md"
                    >
                      View Service Details
                      <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>

                <div className="flex justify-center gap-2 mb-16">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setFeaturedIdx(i)}
                      aria-label={`Featured service ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === featuredIdx ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((s) => (
                    <article
                      key={s.slug}
                      className="group cursor-pointer"
                      onClick={() => setActiveSlug(s.slug)}
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-md mb-4">
                        <img
                          src={s.img}
                          alt={s.title}
                          onError={handleImgError}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-xs uppercase tracking-wider text-gold mb-2">{s.time}</p>
                      <h3 className="text-xl mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gold font-medium">{s.price}</span>
                        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-foreground border-b border-gold/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors">
                          View Details
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
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
        <section className="bg-dark text-primary-foreground py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-primary-foreground/70 mb-8">
              Book your free consultation today and let's discuss your hair goals
            </p>
            <Link
              to="/book"
              search={{ service: "consultation" }}
              className="inline-flex bg-gold text-gold-foreground px-8 py-3.5 rounded-md hover:opacity-90"
            >
              Book Free Consultation
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
