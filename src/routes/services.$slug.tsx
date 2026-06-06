import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Tag, Check, ArrowLeft, CalendarCheck, RefreshCw } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }: { params: { slug: string } }) => {
    const s = getServiceBySlug(params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Service"} — Trendylocs` },
        { name: "description", content: s?.desc ?? "Service details" },
      ],
    };
  },
  loader: ({ params }: { params: { slug: string } }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-3xl mb-3">Service not found</h1>
        <Link to="/services" className="text-primary underline">
          Back to all services
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }: { reset: () => void }) => (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-serif text-2xl mb-4">Something went wrong</h1>
        <button onClick={reset} className="bg-primary text-primary-foreground px-4 py-2 rounded">
          Try again
        </button>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1) e.currentTarget.src = "/images/fallback.jpg";
};

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const related = services.filter((r) => r.slug !== s.slug).slice(0, 3);

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-12">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold mb-6 hover:opacity-80"
          >
            <ArrowLeft className="h-3 w-3" /> All Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{s.title}</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-sm leading-relaxed">{s.desc}</p>
        </div>
      </section>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative rounded-2xl overflow-hidden bg-secondary/30 aspect-[4/3]">
            <img src={s.img} alt={s.title} onError={onImgError} className="w-full h-full object-cover object-center" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.32) 100%)" }}
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-xs font-medium text-primary">
                <Clock className="h-3.5 w-3.5" />
                {s.time}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-xs font-medium text-primary">
                <Tag className="h-3.5 w-3.5" />
                {s.price}
              </span>
            </div>

            <h2 className="font-serif text-2xl mb-3">About this service</h2>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm mb-8">
              {s.longDesc ?? s.desc}
            </div>

            <h3 className="font-serif text-xl mb-3">What's included</h3>
            <ul className="space-y-2 mb-8">
              {s.features.map((f: string) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Booking bar */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-secondary/40 border border-border/60">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Starting from</p>
                <p className="font-serif text-3xl text-primary">{s.price}</p>
                {s.upkeep && (
                  <div className="flex items-center gap-1 mt-1">
                    <RefreshCw className="h-3 w-3 text-muted-foreground" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Upkeep every {s.upkeep}
                    </p>
                  </div>
                )}
              </div>
              <Link
                to="/book"
                search={{ service: s.slug }}
                className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-gold/40 hover:shadow-xl transition-all duration-500 h-[300px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    onError={onImgError}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.55) 100%)" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.78) 100%)" }}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 group-hover:translate-y-1 transition-all duration-300">
                  <h3 className="font-serif text-lg text-white mb-1 drop-shadow">{r.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gold font-medium drop-shadow">{r.price}</p>
                    <span className="text-[10px] text-white/60 uppercase tracking-wider">{r.time}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="font-serif text-3xl text-gold drop-shadow-lg">{r.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}