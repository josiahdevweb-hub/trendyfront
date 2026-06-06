import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Tag, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trendylocs" },
      {
        name: "description",
        content:
          "Sisterlocks™, Microlocs, Traditional Locs, retightening, styling and more. Certified locs consultancy in Manchester.",
      },
    ],
  }),
  component: Services,
});

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1) e.currentTarget.src = "/images/fallback.jpg";
};

function Services() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = activeSlug ? (services.find((s) => s.slug === activeSlug) ?? null) : null;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">What We Offer</p>
          <h1 className="font-serif text-3xl md:text-4xl mb-3">Our Services</h1>
          <p className="text-sm text-primary-foreground/70">Expert care for every stage of your natural hair journey</p>
        </div>
      </section>

      {/* ── DETAIL VIEW ───────────────────────────────────────────── */}
      {active ? (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <button
            onClick={() => setActiveSlug(null)}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground mb-8 uppercase tracking-[0.15em]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Services
          </button>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            {/* Left — image + description */}
            <article>
              {/* Image with subtle dark overlay so text legibility isn't needed on top */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-7">
                <img
                  src={active.img}
                  alt={active.title}
                  onError={onImgError}
                  className="w-full h-full object-cover object-center"
                />
                {/* lightweight vignette overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.28) 100%)",
                  }}
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5">
                  <Clock className="h-3.5 w-3.5 text-gold" /> {active.time}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5">
                  <Tag className="h-3.5 w-3.5 text-gold" /> {active.price}
                </span>
              </div>

              <h2 className="font-serif text-3xl mb-2">{active.title}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm mb-8">
                {active.longDesc ?? active.desc}
              </div>

              <h3 className="font-serif text-lg mb-3">What's included</h3>
              <ul className="space-y-2 mb-8">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Booking bar */}
              <div className="flex items-center justify-between p-5 rounded-xl bg-secondary/50 border border-border/60">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Starting from</p>
                  <p className="font-serif text-3xl text-primary">{active.price}</p>
                </div>
                <Link
                  to="/book"
                  search={{ service: active.slug }}
                  className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Now
                </Link>
              </div>
            </article>

            {/* Right sidebar — other services */}
            <aside className="lg:border-l lg:pl-8 border-border">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">More Services</p>
              <div className="space-y-3">
                {services
                  .filter((s) => s.slug !== active.slug)
                  .map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => {
                        setActiveSlug(s.slug);
                        scrollTop();
                      }}
                      className="flex gap-3 text-left group w-full p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-20 h-16 shrink-0 overflow-hidden rounded-md">
                        <img
                          src={s.img}
                          alt={s.title}
                          onError={onImgError}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0 py-0.5">
                        <p className="text-[10px] uppercase tracking-wider text-gold mb-0.5">{s.time}</p>
                        <p className="text-sm font-medium leading-snug group-hover:text-gold transition-colors line-clamp-2">
                          {s.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.price}</p>
                      </div>
                    </button>
                  ))}
              </div>
            </aside>
          </div>
        </section>
      ) : (
        /* ── GRID VIEW ──────────────────────────────────────────── */
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group relative rounded-xl overflow-hidden border border-border/60 hover:border-gold/50 hover:shadow-xl transition-all duration-500 cursor-pointer"
                style={{ height: "320px" }}
                onClick={() => {
                  setActiveSlug(s.slug);
                  scrollTop();
                }}
              >
                {/* Image — always fills card, zooms on hover */}
                <img
                  src={s.img}
                  alt={s.title}
                  onError={onImgError}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Default gradient — room for text strip at bottom */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.72) 100%)" }}
                />

                {/* Hover gradient — deeper */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.82) 100%)" }}
                />

                {/* Default footer — title + time + price + buttons */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:invisible group-hover:translate-y-3">
                  <h3 className="font-serif text-base text-white leading-snug mb-1 drop-shadow">{s.title}</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/60 mb-2.5">
                    <Clock className="h-3 w-3 shrink-0" />
                    <span>{s.time}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-xl text-gold drop-shadow">{s.price}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlug(s.slug);
                          scrollTop();
                        }}
                        className="text-[10px] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors px-2 py-1.5"
                      >
                        Details
                      </button>
                      <Link
                        to="/book"
                        search={{ service: s.slug }}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        <CalendarCheck className="h-3 w-3" />
                        Book
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hover footer — price only */}
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <p className="font-serif text-3xl text-gold drop-shadow-lg">{s.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      {!active && (
        <section className="bg-dark text-primary-foreground py-14 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Not sure where to start?</h2>
            <p className="text-primary-foreground/70 mb-7 text-sm max-w-md mx-auto">
              A consultation is the best first step — 20 minutes to understand your hair, answer your questions and map
              out exactly what's right for you.
            </p>
            <Link
              to="/book"
              search={{ service: "consultation" }}
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Consultation — £20
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
