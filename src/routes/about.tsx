import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Trendylocs" },
      {
        name: "description",
        content:
          "The story behind Trendylocs — Manchester's premier locs salon. Sisterlocks™, Microlocs and Traditional Locs crafted by certified specialists.",
      },
    ],
  }),
  component: About,
});

function About() {
  const philosophy = [
    {
      n: "01",
      title: "Certified Expertise",
      desc: "Formal Sisterlocks™ and Microlocs training. Every install is technically precise and scalp-safe.",
    },
    {
      n: "02",
      title: "Natural Alchemy",
      desc: "Plant-based, sulphate-free products that nourish the hair shaft — no heavy buildup, just healthy growth.",
    },
    {
      n: "03",
      title: "Private Consult",
      desc: "Your journey is personal. One-on-one consultations map out your loc evolution from day one.",
    },
  ];

  const collections = [
    {
      title: "Sisterlocks™",
      tag: "The Grid System",
      price: "From £350",
      img: "/images/salon/loc-detail.jpg",
    },
    {
      title: "Microlocs",
      tag: "Small & Flexible",
      price: "From £280",
      img: "/images/salon/stylish-work.jpg",
    },
    {
      title: "Traditional",
      tag: "Classic Artistry",
      price: "From £180",
      img: "/images/salon/in-studio.jpg",
    },
  ];

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl px-6 pt-12 md:pt-20 pb-12">
        {/* ── Narrative Hero ─────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-gold block mb-4">
              The Narrative
            </span>
            <h1 className="font-serif italic leading-[0.9] text-5xl md:text-7xl lg:text-8xl -tracking-[0.02em] mb-6">
              Crafting
              <br />
              <span className="pl-8 md:pl-16 not-italic">Identity.</span>
            </h1>
            <p className="text-base md:text-lg font-light leading-relaxed mb-5 text-foreground/80 max-w-md">
              Manchester's premier locs and natural hair salon — a bespoke journey toward healthy, thriving hair for
              every crown that crosses our door.
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="italic font-serif">Founded by Gina</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className="w-full aspect-[4/5] overflow-hidden bg-muted ring-1 ring-gold/20"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src="/images/salon/founder.jpg"
                alt="Gina, founder of Trendylocs"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[0.25] hover:grayscale-0 transition-all duration-[1200ms]"
                onError={(e) => {
                  if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                    e.currentTarget.src = "/images/fallback.jpg";
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Philosophy Grid ─────────────────────────────── */}
        <section className="border-y border-foreground/10 py-10 md:py-14 mb-16 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {philosophy.map(({ n, title, desc }) => (
              <div key={n} className="space-y-3">
                <span className="block font-serif italic text-xl text-gold">{n}</span>
                <h3 className="font-serif text-2xl leading-none">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Credentials Marquee ─────────────────────────────── */}
        <section className="mb-16 md:mb-20 -mx-6 overflow-hidden bg-dark text-primary-foreground py-6">
          <div className="flex marquee-track whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex items-center gap-10 px-6 font-serif italic text-xl md:text-2xl text-primary-foreground/80 shrink-0"
              >
                {[
                  "Sisterlocks™ Certified",
                  "10+ Years Crafting",
                  "East Manchester",
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

        {/* ── Founder Letter ─────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-4">
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-gold block mb-4">
              A Letter From Gina
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic leading-[0.95]">A passion built into a craft.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
            <p>
              <span className="font-serif italic text-5xl float-left mr-3 leading-[0.85] text-gold">I</span>
              am a Sisterlocks™ Consultant based in East Manchester — five minutes from Piccadilly. I do Sisterlocks™
              installations, re-tightenings and styling, and I work with traditional locs and microlocs too.
            </p>
            <p>
              For years I ran away from my own hair. Relaxers, tiny braids, weaves, crochet braids — I tried it all. The
              wake-up call came after my first baby, when I retouched my hair and it fell out. A friend suggested locs,
              and that conversation changed everything.
            </p>
            <p>
              Sisterlocks™ gave me my hair back. I trained as a practitioner and became a certified consultant so I
              could give other women the same feeling — versatility, health, and a deep peace with their natural
              texture.
            </p>
            <blockquote className="not-italic my-6 pl-5 border-l-2 border-gold">
              <p className="font-serif italic text-2xl md:text-3xl leading-[1.1] text-foreground">
                "She gave me my hair&nbsp;back."
              </p>
              <span className="block mt-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                The moment everything changed
              </span>
            </blockquote>
            <p className="font-serif italic text-lg text-foreground">
              That is how I began my hair journey. Let me help you start yours.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Gina · Owner, Trendylocs</p>
          </div>
        </section>

        {/* ── Services Curated ─────────────────────────────── */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
            <h2 className="font-serif text-4xl md:text-5xl italic leading-none">The Collections</h2>
            <Link
              to="/services"
              className="text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-foreground pb-1 self-start hover:text-gold hover:border-gold transition-colors"
            >
              View Full Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map(({ title, tag, price, img }) => (
              <div key={title} className="group cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
                <div className="pt-4 flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif text-xl">{title}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-muted-foreground">{tag}</p>
                  </div>
                  <span className="text-sm italic font-serif text-gold whitespace-nowrap">{price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Editorial Testimonial ─────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-16 md:py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
          <blockquote className="font-serif italic text-2xl md:text-4xl leading-[1.2] mb-7">
            "I've been with Trendylocs for over 5 years — Gina installed my current set and has cared for them ever
            since. Truly the finest loctician in Manchester."
          </blockquote>
          <cite className="not-italic block">
            <span className="block uppercase tracking-[0.3em] text-[10px] font-semibold">Maisha Marsh</span>
            <span className="block font-serif italic text-gold mt-1.5">Loyal client since 2018</span>
          </cite>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="py-16 md:py-24 text-center px-6">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
          Begin Your
          <br />
          <span className="italic text-gold">Metamorphosis.</span>
        </h2>
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
            Contact Studio
          </Link>
        </div>
      </section>
    </main>
  );
}
