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
      offset: true,
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
      <div className="mx-auto max-w-screen-xl px-6 pt-16 md:pt-24 pb-12">
        {/* ── Narrative Hero ─────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-28 md:mb-40">
          <div className="lg:col-span-7">
            <header className="mb-10 md:mb-12">
              <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-gold block mb-6">
                The Narrative
              </span>
              <h1 className="font-serif italic leading-[0.88] text-6xl md:text-8xl lg:text-9xl -tracking-[0.02em]">
                Crafting
                <br />
                <span className="pl-12 md:pl-24 not-italic">Identity.</span>
              </h1>
            </header>
            <div className="max-w-md">
              <p className="text-lg md:text-2xl font-light leading-snug mb-8 text-foreground/85">
                We are Manchester's premier locs and natural hair salon — a
                bespoke journey toward healthy, thriving hair for every crown
                that crosses our door.
              </p>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <span className="italic font-serif text-lg">Founded by Gina</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/5] overflow-hidden bg-muted">
              <img
                src="/images/salon/founder.jpg"
                alt="Gina, founder of Trendylocs"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                    e.currentTarget.src = "/images/fallback.jpg";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:flex w-52 h-52 border border-gold bg-background p-5 flex-col justify-center shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                Our Process
              </p>
              <p className="text-base italic font-serif leading-tight">
                Precision techniques met with premium natural care.
              </p>
            </div>
          </div>
        </section>

        {/* ── Philosophy Grid ─────────────────────────────── */}
        <section className="border-y border-foreground/10 py-16 md:py-24 mb-28 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {philosophy.map(({ n, title, desc }) => (
              <div key={n} className="space-y-5">
                <span className="block font-serif italic text-2xl text-gold">
                  {n}
                </span>
                <h3 className="font-serif text-3xl leading-none">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Founder Letter ─────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 md:mb-40">
          <div className="lg:col-span-4">
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-gold block mb-6">
              A Letter From Gina
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic leading-[0.95]">
              A passion built into a craft.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-foreground/80 leading-relaxed">
            <p>
              <span className="font-serif italic text-6xl float-left mr-3 leading-[0.85] text-gold">
                I
              </span>
              am a Sisterlocks™ Consultant based in East Manchester — five
              minutes from Piccadilly. I do Sisterlocks™ installations,
              re-tightenings and styling, and I work with traditional locs and
              microlocs too.
            </p>
            <p>
              For years I ran away from my own hair. Relaxers, tiny braids,
              weaves, crochet braids — I tried it all. The wake-up call came
              after my first baby, when I retouched my hair and it fell out. I
              stopped relaxing and kept it natural, but braiding still damaged
              it. A friend suggested locs, and that conversation changed
              everything.
            </p>
            <p>
              Sisterlocks™ gave me my hair back. I trained as a practitioner
              and became a certified consultant so I could give other women the
              same feeling — versatility, health, and a deep peace with their
              natural texture.
            </p>
            <p className="font-serif italic text-xl text-foreground pt-2">
              That is how I began my hair journey. Let me help you start yours.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-gold pt-1">
              Gina · Owner, Trendylocs
            </p>
          </div>
        </section>

        {/* ── Services Curated ─────────────────────────────── */}
        <section className="mb-28 md:mb-40">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16 md:mb-20">
            <h2 className="font-serif text-5xl md:text-6xl italic leading-none">
              The Collections
            </h2>
            <Link
              to="/services"
              className="text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-foreground pb-2 self-start hover:text-gold hover:border-gold transition-colors"
            >
              View Full Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {collections.map(({ title, tag, price, img, offset }) => (
              <div
                key={title}
                className={`group cursor-pointer ${offset ? "md:translate-y-20" : ""}`}
              >
                <div className="w-full aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
                <div className="pt-6 flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif text-2xl">{title}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-muted-foreground">
                      {tag}
                    </p>
                  </div>
                  <span className="text-sm italic font-serif text-gold whitespace-nowrap">
                    {price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Editorial Testimonial ─────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
          <blockquote className="font-serif italic text-3xl md:text-5xl leading-[1.15] mb-10">
            "I've been with Trendylocs for over 5 years — Gina installed my
            current set and has cared for them ever since. Truly the finest
            loctician in Manchester."
          </blockquote>
          <cite className="not-italic block">
            <span className="block uppercase tracking-[0.3em] text-[10px] font-semibold">
              Maisha Marsh
            </span>
            <span className="block font-serif italic text-gold mt-2">
              Loyal client since 2018
            </span>
          </cite>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="py-28 md:py-40 text-center px-6">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] mb-12">
          Begin Your
          <br />
          <span className="italic text-gold">Metamorphosis.</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/book"
            className="bg-dark text-primary-foreground px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            Book a Consultation
          </Link>
          <Link
            to="/contact"
            className="border border-foreground text-foreground px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-dark hover:text-primary-foreground hover:border-dark transition-all"
          >
            Contact Studio
          </Link>
        </div>
      </section>
    </main>
  );
}
