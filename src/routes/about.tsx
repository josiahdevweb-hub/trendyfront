import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Trendylocs" },
      {
        name: "description",
        content:
          "The story behind Trendylocs — Manchester's locs consultancy. Sisterlocks™, Microlocs and Traditional Locs by certified consultants.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl px-6 pt-12 md:pt-20 pb-12">
        {/* ── Who We Are ────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 md:mb-20">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-gold block mb-4">
              Who We Are
            </span>
            <h1 className="font-serif leading-[0.9] text-5xl md:text-6xl lg:text-7xl -tracking-[0.02em] mb-6">
              Trendylocs.
            </h1>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4 text-foreground/80 max-w-md">
              A certified Sisterlocks™ consultancy based in Manchester. We install, re-tighten and style Sisterlocks™,
              Microlocs and Traditional Locs — with genuine care for the health of your hair.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              We are a small team, and we like it that way. Fewer appointments, more attention. Every client gets a
              proper consultation before anything is touched.
            </p>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div
              className="w-full aspect-[4/5] overflow-hidden ring-1 ring-gold/20"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src="/images/salon/founder.jpg"
                alt="Gina, founder of Trendylocs"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                onError={(e) => {
                  if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                    e.currentTarget.src = "/images/fallback.jpg";
                }}
              />
            </div>
            {/* Gold corner accents */}
            <span className="absolute top-3 left-3 w-6 h-px bg-gold/60" />
            <span className="absolute top-3 left-3 h-6 w-px bg-gold/60" />
            <span className="absolute bottom-3 right-3 w-6 h-px bg-gold/60" />
            <span className="absolute bottom-3 right-3 h-6 w-px bg-gold/60" />
          </div>
        </section>

        {/* ── Credentials Marquee ─────────────────────────────── */}
        <section className="mb-16 md:mb-20 -mx-6 overflow-hidden bg-dark text-primary-foreground py-5">
          <div className="flex marquee-track whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex items-center gap-10 px-6 font-serif text-base md:text-lg text-primary-foreground/70 shrink-0"
              >
                {[
                  "Sisterlocks™ Certified",
                  "10+ Years",
                  "East Manchester & Sale",
                  "Natural Hair Care",
                  "Plant-Based Products",
                  "By Appointment",
                  "Private Consultations",
                ].map((label, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-10">
                    <span>{label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── Gina's Story ─────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-4">
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-gold block mb-4">
              Gina's Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              A personal journey that became a practice.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
            <p>
              <span className="font-serif text-4xl float-left mr-3 leading-[0.85] text-gold">I</span>
              had been running away from my natural hair for as long as I can remember — relaxers, braids, weaves,
              crochet braids. The wake-up call came after my first baby, when I retouched my hair and it fell out.
            </p>
            <p>
              I stopped relaxing, but carried on hiding it. Braiding and styling were putting just as much tension on my
              hair. A dear friend suggested locs. I wasn't ready to accept my natural texture — so I attached extensions
              to the locks, which only caused more damage.
            </p>
            <p>
              Eventually I got introduced to Sisterlocks™ and everything changed. I felt like I had come full circle. I
              trained as a practitioner, then became a certified consultant. I wanted other women to reach that point
              without the years I wasted getting there.
            </p>
            <blockquote className="my-6 pl-5 border-l-2 border-gold">
              <p className="font-serif text-xl md:text-2xl leading-[1.2] text-foreground">
                "I have never loved my hair more."
              </p>
            </blockquote>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mt-4">Gina · Owner, Trendylocs</p>
          </div>
        </section>

        {/* ── Our Approach — 3 short points ─────────────────────── */}
        <section className="border-y border-foreground/10 py-10 md:py-14 mb-16 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                n: "01",
                title: "Consultation first",
                desc: "We never skip the consultation. Understanding your hair texture, history, and lifestyle shapes everything from method to maintenance.",
              },
              {
                n: "02",
                title: "No harsh products",
                desc: "We use plant-based, sulphate-free products only. Your hair should leave healthier than it arrived.",
              },
              {
                n: "03",
                title: "Long-term thinking",
                desc: "Locs are a commitment. We guide you through every stage — from installation to maturity — so you always know what to expect.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="space-y-3">
                <span className="block font-serif text-xl text-gold">{n}</span>
                <h3 className="font-serif text-xl leading-none">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery CTA ─────────────────────────────── */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl leading-none">See the work</h2>
              <p className="text-sm text-muted-foreground mt-2">Real clients, real results — no staged photography.</p>
            </div>
            <Link
              to="/gallery"
              className="text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-foreground pb-1 self-start hover:text-gold hover:border-gold transition-colors shrink-0"
            >
              Full gallery
            </Link>
          </div>

          {/* Preview grid — 6 images teasing the gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {[
              { src: "/images/Gallery/microlocs1.jpg", alt: "Microlocs installation" },
              { src: "/images/Gallery/traditionallocs2.jpg", alt: "Traditional locs" },
              { src: "/images/styles/sisterlocks.jpg", alt: "Sisterlocks™ style" },
              { src: "/images/Gallery/styling1.jpg", alt: "Loc styling" },
              { src: "/images/Gallery/sisterlocs1.jpg", alt: "Sisterlocks™ close-up" },
              { src: "/images/styles/microlocs.jpg", alt: "Microlocs style" },
            ].map(({ src, alt }, i) => (
              <Link
                key={i}
                to="/gallery"
                className={`group relative overflow-hidden bg-muted rounded-sm ${i === 5 ? "hidden sm:block" : ""}`}
              >
                <div className="aspect-square">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-600"
                    onError={(e) => {
                      if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                        e.currentTarget.src = "/images/fallback.jpg";
                    }}
                  />
                  {/* Last visible tile gets an overlay CTA */}
                  {i === 4 && (
                    <div className="absolute inset-0 bg-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary-foreground text-[10px] uppercase tracking-[0.25em] font-semibold">
                        View gallery
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Browse the full gallery
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>

      {/* ── Client quote ─────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-14 md:py-18 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
          <blockquote className="font-serif text-xl md:text-3xl leading-[1.3] mb-7">
            "I've been with Trendylocs for over 5 years — Gina installed my current set and has cared for them ever
            since."
          </blockquote>
          <cite className="not-italic block">
            <span className="block uppercase tracking-[0.3em] text-[10px] font-semibold">Maisha Marsh</span>
            <span className="block font-serif text-gold text-sm mt-1.5">Client since 2018</span>
          </cite>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="py-16 md:py-20 text-center px-6">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">Start with a conversation.</h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
          A free consultation is how every new client journey begins. No pressure, no sales pitch — just an honest look
          at your hair and what would work for it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/book"
            className="bg-dark text-primary-foreground px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            Book a Consultation
          </Link>
          <Link
            to="/contact"
            className="border border-foreground text-foreground px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-dark hover:text-primary-foreground hover:border-dark transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
