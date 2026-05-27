import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Instagram, Phone, Mail, MapPin, ChevronDown, GraduationCap, Leaf, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";

export const Route = createFileRoute("/")({ component: Home });

const FALLBACK_IMG = "/images/fallback.jpg";
const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf(FALLBACK_IMG) === -1) e.currentTarget.src = FALLBACK_IMG;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Sisterlocks",
    price: "From £350",
    desc: "Precision micro locs for a versatile, manageable style",
    img: "/images/styles/sisterlocks.jpg",
    badge: "Most Popular",
  },
  {
    title: "Microlocs",
    price: "From £280",
    desc: "Small, uniform locs perfect for styling flexibility",
    img: "/images/styles/microlocs.jpg",
    badge: null,
  },
  {
    title: "Traditional Locs",
    price: "From £180",
    desc: "Classic freeform or cultivated dreadlocks",
    img: "/images/styles/traditional-locs.jpg",
    badge: null,
  },
  {
    title: "Retightening",
    price: "From £85",
    desc: "Maintenance sessions for healthy, neat locs",
    img: "/images/styles/retightening.jpg",
    badge: "Book Monthly",
  },
  {
    title: "Loc Styling",
    price: "From £120",
    desc: "Special occasion updos and creative styling",
    img: "/images/styles/styling.jpg",
    badge: null,
  },
];

const testimonials = [
  {
    quote:
      "The best decision I ever made. My sisterlocks are absolutely beautiful — I get compliments everywhere I go.",
    name: "Amara Johnson",
    service: "Sisterlocks",
    initials: "AJ",
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and so welcoming. I finally found my loc specialist and I'm never going anywhere else.",
    name: "Kendra Williams",
    service: "Microlocs",
    initials: "KW",
    rating: 5,
  },
  {
    quote: "My hair has never been healthier or more beautiful. The expertise here is genuinely unmatched in Manchester.",
    name: "Nia Thompson",
    service: "Natural Hair Care",
    initials: "NT",
    rating: 5,
  },
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "4.9★", label: "Average Rating" },
  { number: "3", label: "Loc Specialists" },
];

const faqs = [
  {
    q: "How long does a Sisterlocks installation take?",
    a: "A full Sisterlocks installation typically takes 2–3 days depending on hair length and density. We split sessions across visits to ensure precision and your comfort.",
  },
  {
    q: "How often do I need retightening?",
    a: "We recommend retightening every 4–6 weeks for new locs, and every 6–8 weeks for mature locs. Consistent maintenance keeps your locs healthy and looking their best.",
  },
  {
    q: "Do you offer a consultation before installation?",
    a: "Yes — every new client begins with a complimentary consultation to assess your hair type, discuss your goals, and recommend the best service for your hair journey.",
  },
  {
    q: "What products do you use?",
    a: "We use only premium, natural salon-grade products free from harmful sulphates and parabens. We'll recommend a personalised home-care routine after your appointment.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-medium text-base group-hover:text-gold transition-colors">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-gold flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}>
        <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// Morphing diptych — two pairs cross-fade with split ratio + gold seam animating
const HERO_PAIRS = [
  {
    left: "/images/hero/wide.jpg",
    leftAlt: "Trendylocs Manchester salon — client mid-service",
    right: "/images/hero/detail.jpg",
    rightAlt: "Precision microlocs being installed — close-up craftsmanship",
    split: 60, // left %
  },
  {
    left: "/images/hero/wide-2.jpg",
    leftAlt: "Trendylocs salon ambient — plants, natural light, finished sisterlocks",
    right: "/images/hero/detail-2.jpg",
    rightAlt: "Microloc parting craftsmanship — top-down precision detail",
    split: 40,
  },
] as const;

const HERO_GRADE = "saturate(0.82) contrast(1.06) brightness(0.92) sepia(0.16)";

function HeroDiptych({ mounted }: { mounted: boolean }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_PAIRS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const split = HERO_PAIRS[idx].split;

  // Diagonal split — line goes from (top%, 0) to (bottom%, 100%) for a subtle tilt
  const topPct = split;
  const bottomPct = Math.max(0, split - 15);
  const leftClip = `polygon(0 0, ${topPct}% 0, ${bottomPct}% 100%, 0 100%)`;
  const rightClip = `polygon(${topPct}% 0, 100% 0, 100% 100%, ${bottomPct}% 100%)`;

  return (
    <div className="absolute inset-0">
      {HERO_PAIRS.map((p, i) => {
        const active = i === idx;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: active ? 1 : 0 }}
          >
            <img
              src={p.left}
              alt={p.leftAlt}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6500ms] ease-out ${
                mounted && active ? "scale-100" : "scale-105"
              }`}
              style={{
                filter: HERO_GRADE,
                clipPath: leftClip,
                WebkitClipPath: leftClip,
                transition:
                  "clip-path 1600ms ease-in-out, -webkit-clip-path 1600ms ease-in-out, transform 6500ms ease-out",
              }}
              onError={onImgError}
            />
            <img
              src={p.right}
              alt={p.rightAlt}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6500ms] ease-out ${
                mounted && active ? "scale-100" : "scale-105"
              }`}
              style={{
                filter: HERO_GRADE,
                clipPath: rightClip,
                WebkitClipPath: rightClip,
                transition:
                  "clip-path 1600ms ease-in-out, -webkit-clip-path 1600ms ease-in-out, transform 6500ms ease-out",
              }}
              onError={onImgError}
            />
          </div>
        );
      })}

      {/* Brand-tinted blend overlay — ties both pairs to the espresso/gold palette */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-color opacity-40"
        style={{ background: "linear-gradient(135deg, var(--dark) 0%, var(--gold) 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-30"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--dark) 100%)" }}
      />
      {/* Readability gradient — bottom-left dark anchor for headline */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/85 via-black/35 to-transparent" />

      {/* Gold diagonal seam — morphs with the split ratio */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line
          x1={topPct}
          y1="0"
          x2={bottomPct}
          y2="100"
          stroke="color-mix(in oklab, var(--gold) 55%, transparent)"
          strokeWidth="0.25"
          vectorEffect="non-scaling-stroke"
          style={{ transition: "all 1600ms ease-in-out" }}
        />
      </svg>

      {/* Bottom fade — blends hero into the dark stats section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 md:h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, var(--dark) 100%)" }}
      />
    </div>
  );
}

function Home() {
  const [mounted, setMounted] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ── 1. HERO (Morphing diptych: 60/40 ↔ 40/60) ───────── */}
      <section className="relative w-full overflow-hidden bg-dark" style={{ height: "min(80vh, 80dvh)", minHeight: 520 }}>
        <HeroDiptych mounted={mounted} />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Headline — anchored bottom-left in the "quiet zone" */}
        <div className="relative h-full mx-auto max-w-7xl px-6 md:px-10 flex items-end pb-16 md:pb-20">
          <div
            className={`max-w-xl text-white transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold/90">
                Manchester · Locs Specialists
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl mb-5 leading-[1.05]">
              Proudly
              <br />
              <span className="italic text-gold">Natural.</span>
            </h1>

            <p className="text-base md:text-lg text-white/85 mb-5 max-w-md leading-relaxed">
              Premium Sisterlocks, Microlocs &amp; Traditional Locs — crafted with precision for every hair journey.
            </p>

            <div className="flex items-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3 w-3 fill-gold text-gold" />
              ))}
              <span className="text-white/70 text-xs ml-2">4.9 · 500+ happy clients</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-md font-medium hover:opacity-90 hover:scale-[1.03] transition-all focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 rounded-md hover:bg-white/20 transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                View Transformations
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-5 w-5 text-white/40" />
        </div>
      </section>


      {/* ── 2. STATS STRIP (compact) ──────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-4 divide-x divide-primary-foreground/10">
            {stats.map(({ number, label }) => (
              <div key={label} className="py-4 md:py-5 px-2 md:px-6 text-center">
                <p className="font-serif text-lg md:text-2xl text-gold leading-none mb-1">{number}</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WELCOME ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Welcome to Trendylocs</p>
            <h2 className="text-3xl md:text-4xl mb-5 leading-tight">
              Your hair. <span className="italic">Our expertise.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are Manchester's premier locs and natural hair salon — specialising in Sisterlocks, Microlocs, and
              Traditional Locs. Every visit is a personalised journey toward healthy, thriving hair.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our certified specialists combine proven techniques, premium natural products, and genuine care to give
              your hair the attention it deserves — in a warm, welcoming atmosphere where you always feel at home.
            </p>
            {/* Mini trust signals */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Certified Loc Specialists", "Natural Products Only", "Free Consultation"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 border border-gold/30 rounded-full text-gold bg-gold/5">
                  ✓ {tag}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 bg-dark text-primary-foreground px-6 py-3 rounded-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_-5px_var(--gold)] hover:bg-dark/90 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-md row-span-2">
              <img
                src="/images/salon/stylish-work.jpg"
                alt="Trendylocs specialist installing sisterlocks on a client"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/images/salon/loc-detail.jpg"
                alt="Close-up of freshly installed microlocs"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/images/salon/interior.jpg"
                alt="Trendylocs salon interior in Manchester, UK"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES CAROUSEL ──────────────────────────────────────── */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto leading-tight">
              Expert care for every stage of your hair journey
            </h2>
          </div>

          <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true, dragFree: false }}
              plugins={[autoplay.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((s) => (
                  <CarouselItem key={s.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full relative">
                      {s.badge && (
                        <div className="absolute top-3 left-3 z-10 bg-gold text-gold-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {s.badge}
                        </div>
                      )}
                      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/40">
                        <img
                          src={s.img}
                          alt={`${s.title} at Trendylocs salon Manchester`}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          onError={onImgError}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-gold font-medium">{s.price}</p>
                          <Link
                            to="/book"
                            className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1"
                          >
                            Book <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-5 bg-card border-border hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors" />
              <CarouselNext className="hidden md:flex -right-5 bg-card border-border hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors" />
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-dark text-primary-foreground px-7 py-3.5 rounded-md hover:bg-dark/90 hover:scale-[1.03] transition-all focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              View All Services & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. BEFORE & AFTER ─────────────────────────────────────────── */}
      <BeforeAfterShowcase />

      {/* ── 6. TESTIMONIALS ───────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Client Stories</p>
            <h2 className="text-3xl md:text-5xl mb-3">Real results. Real clients.</h2>
            <p className="text-primary-foreground/50 text-sm">Verified Google reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-primary-foreground/10 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <StarRating count={t.rating} />
                <p className="font-serif italic text-base mb-6 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary-foreground/10">
                  <div className="h-9 w-9 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-xs font-semibold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-gold">{t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google review CTA */}
          <div className="text-center mt-10">
            <a
              href="https://g.page/trendylocs/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-gold transition-colors"
            >
              <Star className="h-3.5 w-3.5" />
              Read all reviews on Google
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. WHY TRENDYLOCS ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Why Choose Trendylocs</p>
          <h2 className="text-3xl md:text-5xl mb-4">A premium experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Every visit is crafted around your hair, your time, and your comfort.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: GraduationCap,
              title: "Certified Specialists",
              desc: "Our stylists hold formal certification in Sisterlocks and are trained in the latest loc techniques — not self-taught.",
            },
            {
              icon: Leaf,
              title: "Natural Products Only",
              desc: "Every product we use is free from sulphates, parabens, and harmful chemicals. Your hair's health always comes first.",
            },
            {
              icon: Heart,
              title: "Personalised Consultations",
              desc: "We start every new client relationship with a free consultation — because your hair journey is unique to you.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/40 animate-fade-in"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg mb-2 font-semibold">{title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────────────────────────────── */}

      {/* ── 9. SOCIAL MEDIA ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Follow Our Work</p>
          <h2 className="text-3xl md:text-4xl mb-3">See the transformations</h2>
          <a
            href="https://instagram.com/trendylocs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
          >
            <Instagram className="h-4 w-4" />
            @trendylocs
          </a>
        </div>

        {/* Instagram grid — drop files in public/images/instagram/ as post-1.jpg…post-6.jpg to replace */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
          {[
            "/images/styles/goddess-locs.jpg",
            "/images/styles/microlocs.jpg",
            "/images/styles/loc-color.jpg",
            "/images/styles/sisterlocks.jpg",
            "/images/styles/updo.jpg",
            "/images/styles/traditional-locs.jpg",
          ].map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/trendylocs"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-md bg-secondary/60 relative group"
            >
              <img
                src={src}
                alt={`Trendylocs Instagram post ${i + 1} — loc styles and transformations`}
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/trendylocs_uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border rounded-md px-6 py-3 text-sm hover:border-gold hover:text-gold transition-all"
          >
            <Instagram className="h-4 w-4" />
            Follow @trendylocs for daily inspiration
          </a>
        </div>
      </section>

      {/* ── 11. BOOKING CTA BANNER ────────────────────────────────────── */}
      <section className="bg-gold py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gold-foreground mb-3">
            Ready to start your loc journey?
          </h2>
          <p className="text-gold-foreground/70 mb-8 text-sm">
            Book a free consultation today — no commitment, just great advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/book"
              search={{ service: "consultation" }}
              className="inline-flex items-center gap-2 bg-gold-foreground text-primary-foreground px-8 py-4 rounded-md font-medium hover:opacity-90 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gold-foreground focus-visible:ring-offset-2"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 border border-gold-foreground/30 text-gold-foreground px-8 py-4 rounded-md hover:bg-white/30 transition focus-visible:ring-2 focus-visible:ring-gold-foreground"
            >
              <Phone className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── 12. CONTACT STRIP ─────────────────────────────────────────── */}
    </>
  );
}
