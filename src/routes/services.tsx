import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Tag, ArrowRight } from "lucide-react";
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
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-primary-foreground py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">What We Offer</p>
          <h1 className="text-3xl md:text-4xl mb-3">Our Services</h1>
          <p className="text-base text-primary-foreground/70">
            Expert care for every stage of your natural hair journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <article
              key={s.slug}
              className="relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col border border-border/60"
            >
              {/* Top gold accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                      e.currentTarget.src = "/images/fallback.jpg";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-serif text-xl leading-tight mb-4 text-foreground">
                  {s.title}
                </h3>

                {/* Pills: duration + price */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-[11px] font-medium text-primary">
                    <Clock className="h-3 w-3" />
                    {s.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-[11px] font-medium text-primary">
                    <Tag className="h-3 w-3" />
                    {s.price}
                  </span>
                </div>

                {/* Footer: price + explore */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="leading-none">
                    <span className="font-serif text-2xl text-primary">{s.price}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1.5">GBP</span>
                  </div>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-[11px] uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
                  >
                    Explore More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing info */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Pricing Information</h2>
          <p className="text-muted-foreground mb-3">
            All prices are starting prices and may vary based on hair length, density, and complexity. We provide a
            detailed quote during your consultation.
          </p>
          <p className="text-muted-foreground mb-3">
            We believe in transparent pricing with no hidden fees. Payment plans are available for installation
            services.
          </p>
          <p className="text-muted-foreground">
            First-time clients receive a complimentary consultation to discuss pricing and options.
          </p>
        </div>
      </section>

      {/* CTA */}
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
    </>
  );
}
