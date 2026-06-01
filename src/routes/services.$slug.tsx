import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Tag, Check, ArrowLeft } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Service"} — Trendylocs` },
        { name: "description", content: s?.desc ?? "Service details" },
      ],
    };
  },
  loader: ({ params }) => {
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
  errorComponent: ({ reset }) => (
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

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const related = services.filter((r) => r.slug !== s.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-dark text-primary-foreground py-12">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold mb-6 hover:opacity-80"
          >
            <ArrowLeft className="h-3 w-3" /> All Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{s.title}</h1>
          <p className="text-primary-foreground/70 max-w-2xl">{s.desc}</p>
        </div>
      </section>

      {/* Detail */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden bg-secondary/30 aspect-[4/3]">
            <img
              src={s.img}
              alt={s.title}
              onError={(e) => {
                if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                  e.currentTarget.src = "/images/fallback.jpg";
              }}
              className="w-full h-full object-cover"
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
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
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

            <div className="flex items-center justify-between p-5 rounded-xl bg-secondary/40 border border-border/60">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Starting from</p>
                <p className="font-serif text-3xl text-primary">{s.price}</p>
              </div>
              <Link
                to="/book"
                search={{ service: s.slug }}
                className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] hover:bg-primary/90"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    onError={(e) => {
                      if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                        e.currentTarget.src = "/images/fallback.jpg";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg mb-2">{r.title}</h3>
                  <p className="text-sm text-primary">{r.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
