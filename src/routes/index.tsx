import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Star,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  GraduationCap,
  Leaf,
  Heart,
} from "lucide-react";
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
    title: "Sisterlocks™",
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
      "I have been with Trendylocs since my installation in November 2018 and my daughter had her install in February February 2020. We are so pleased with Gina’s services. My eldest daughter has also decided she wants Sister locks so she will be going to Trendylocs.",
    name: "Edinah Ngwarati",
    service: "Sisterlocks™",
    initials: "AJ",
    rating: 5,
  },
  {
    quote:
      "Gina is an amazing! Professional, knowledge and absolutely top tier customer service. I've been using her service for over 5 years as she was the person who installed my current set of locs. Higy recommend..",
    name: "Maisha Marsh",
    service: "Sisterlocks™",
    initials: "KW",
    rating: 5,
  },
  {
    quote:
      "Great service, accessible location, comfortable environment. I tried a few others before settling on Trendylocs and so far it’s been great.",
    name: "Yinks x",
    service: "Natural Hair Care",
    initials: "NT",
    rating: 5,
  },
];

const stats = [
  { number: "300+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "4.9★", label: "Average Rating" },
  { number: "2", label: "Loc Specialists" },
];

const faqs = [
  {
    q: "How long does a Sisterlocks™ installation take?",
    a: "A full Sisterlocks™ installation typically takes 2–3 days depending on hair length and density. We split sessions across visits to ensure precision and your comfort.",
  },
  {
    q: "How often do I need retightening?",
    a: "We recommend retightening every 4–6 weeks for new locs, and every 6–8 weeks for mature locs. Consistent maintenance keeps your locs healthy and looking their best.",
  },
  {
    q: "Do you offer a consultation before installation?",
    a: "Yes: every new client begins with a complimentary consultation to assess your hair type, discuss your goals, and recommend the best service for your hair journey.",
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
    leftAlt: "Trendylocs Manchester salon client mid-service",
    right: "/images/hero/detail.jpg",
    rightAlt: "Precision microlocs being installed — close-up craftsmanship",
    split: 60, // left %
  },
  {
    left: "/images/hero/wide-2.jpg",
    leftAlt: "Trendylocs Manchester studio natural light, plants, styling chair",
    leftObjectPosition: "50% 55%",
    right: "/images/hero/detail-2.jpg",
    rightAlt: "Stylist's hands working microlocs craftsmanship close-up",
    rightObjectPosition: "72% 45%",
    split: 40,
  },
  {
    left: "/images/hero/wide-3.jpg",
    leftAlt: "Fresh microlocs install — clean uniform parting lines down the back",
    leftObjectPosition: "50% 55%",
    right: "/images/hero/detail-3.jpg",
    rightAlt: "Close-up of precise grid partings on microlocs with copper-tipped ends",
    rightObjectPosition: "50% 50%",
    split: 55,
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
            {/* DESKTOP — LEFT */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-[1600ms] ease-in-out hidden md:block"
              style={{ width: `${p.split}%` }}
            >
              <img
                src={p.left}
                alt={p.leftAlt}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6500ms] ease-out ${
                  mounted && active ? "scale-100" : "scale-105"
                }`}
                style={{ filter: HERO_GRADE, objectPosition: (p as any).leftObjectPosition ?? "center" }}
                onError={onImgError}
              />
            </div>
            {/* DESKTOP — RIGHT */}
            <div
              className="absolute inset-y-0 right-0 overflow-hidden transition-[width] duration-[1600ms] ease-in-out hidden md:block"
              style={{ width: `${100 - p.split}%` }}
            >
              <img
                src={p.right}
                alt={p.rightAlt}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6500ms] ease-out ${
                  mounted && active ? "scale-100" : "scale-105"
                }`}
                style={{ filter: HERO_GRADE, objectPosition: (p as any).rightObjectPosition ?? "center" }}
                onError={onImgError}
              />
            </div>

            {/* MOBILE — full-screen diagonal diptych */}
            <div className="md:hidden absolute inset-0">
              {/* Back layer: right image fills full screen */}
              <img
                src={p.right}
                alt={p.rightAlt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: HERO_GRADE,
                  objectPosition: (p as any).rightObjectPosition ?? "center",
                }}
                onError={onImgError}
              />
              {/* Front layer: left image clipped to upper-left triangle */}
              <img
                src={p.left}
                alt={p.leftAlt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: HERO_GRADE,
                  objectPosition: (p as any).leftObjectPosition ?? "center",
                  clipPath: "polygon(0 0, 100% 0, 0 85%)",
                  WebkitClipPath: "polygon(0 0, 100% 0, 0 85%)",
                }}
                onError={onImgError}
              />
              {/* Gold seam rendered as a precise CSS diagonal line */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent calc(85% - 1px), rgba(201,169,110,0.65) calc(85% - 1px), rgba(201,169,110,0.65) 85%, transparent 85%)",
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Subtle brand-tinted blend overlay — desktop only (mobile uses split panel) */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none mix-blend-color opacity-15"
        style={{ background: "linear-gradient(135deg, var(--dark) 0%, var(--gold) 100%)" }}
      />
      <div
        className="hidden md:block absolute inset-0 pointer-events-none mix-blend-multiply opacity-10"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--dark) 100%)" }}
      />
      {/* Desktop readability gradient — light bottom-left anchor for headline */}
      <div className="hidden md:block absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/45 via-black/15 to-transparent" />

      {/* Desktop gold hairline seam — slides with split ratio */}
      <div
        className="hidden md:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/55 to-transparent pointer-events-none transition-[left] duration-[1600ms] ease-in-out"
        style={{ left: `${split}%` }}
      />

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

  // Cycle through all hero images for the right-side portrait
  const heroImages = HERO_PAIRS.flatMap((p) => [
    { src: p.left, alt: p.leftAlt, pos: (p as any).leftObjectPosition ?? "50% 30%" },
    { src: p.right, alt: p.rightAlt, pos: (p as any).rightObjectPosition ?? "center" },
  ]);
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <>
      {/* ── 1. HERO (Split: Text Left, Portrait Right) ───────── */}
      <section
        className="relative w-full overflow-hidden bg-dark text-primary-foreground flex items-start md:items-center grain md:h-[min(80dvh,80vh)] md:min-h-[480px]"
      >
        {/* Subtle dot pattern background */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(212,165,116,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Warm gold glow behind portrait */}
        <div
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[55%] h-[120%] pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 65%)",
          }}
        />

        <div className="relative w-full mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-center">
            {/* LEFT — copy + CTAs + stats */}
            <div
              className={`relative z-10 transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="hidden" />


              <div className="relative inline-block text-primary-foreground font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[56px] tracking-[0.01em] mb-2 md:mb-3 pb-2 leading-none">
                <span>Trendy</span>
                <span className="font-semibold italic">Locs</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-gold" />
              </div>

              <h1 className="font-serif text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-[1.15] tracking-tight mb-3 md:mb-4 text-primary-foreground/85 word-rise">
                <span style={{ animationDelay: "120ms" }}>Premium</span>{" "}
                <span style={{ animationDelay: "260ms" }}>Locs.</span>
                <br />
                <span style={{ animationDelay: "420ms" }}>Crafted</span>{" "}
                <span style={{ animationDelay: "540ms" }}>in</span>{" "}
                <span className="text-gold italic" style={{ animationDelay: "700ms" }}>Manchester.</span>
              </h1>

              <p className="text-[13px] md:text-sm text-primary-foreground/75 max-w-md leading-relaxed mb-4 md:mb-5">
                Sisterlocks™, Microlocs &amp; Traditional Locs — precision installations and gentle maintenance from
                certified specialists who treat every head of hair like their own.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 mb-4 md:mb-6">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-all focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-gold/40 bg-white/5 backdrop-blur px-5 py-2.5 rounded-md text-sm text-primary-foreground hover:bg-gold/10 hover:border-gold transition-all"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats row — inline like the reference */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-md">
                {stats.slice(0, 3).map(({ number, label }) => (
                  <div key={label}>
                    <p className="font-serif text-lg md:text-xl text-gold leading-none mb-1">{number}</p>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-primary-foreground/55 leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — cycling portrait */}
            <div
              className={`relative w-full mx-auto max-w-[280px] sm:max-w-sm md:max-w-none aspect-[4/5] sm:aspect-[5/6] md:aspect-auto md:h-[400px] lg:h-[460px] transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="absolute inset-0 md:inset-x-4" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-gold/20">
                  {/* corner gold accents */}
                  <span className="absolute top-3 left-3 z-10 w-6 h-px bg-gold/70" />
                  <span className="absolute top-3 left-3 z-10 h-6 w-px bg-gold/70" />
                  <span className="absolute bottom-3 right-3 z-10 w-6 h-px bg-gold/70" />
                  <span className="absolute bottom-3 right-3 z-10 h-6 w-px bg-gold/70" />
                  {heroImages.map((img, i) => {
                    const active = i === heroIdx;
                    return (
                      <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
                          active ? "opacity-100 hero-kenburns" : "opacity-0"
                        }`}
                        style={{ objectPosition: img.pos, filter: HERO_GRADE }}
                        onError={onImgError}
                      />
                    );
                  })}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--dark) 55%, transparent) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-12 left-10 z-20 flex-col items-center gap-3 text-primary-foreground/55">
          <span className="text-[9px] uppercase tracking-[0.4em] [writing-mode:vertical-rl] rotate-180">Scroll</span>
          <span className="block w-px h-12 bg-gold/70 origin-top scroll-cue-line" />
        </div>

        {/* Bottom wave — blends into next section */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-8 md:h-10 block" aria-hidden="true">
            <path d="M0,30 C240,60 480,0 720,20 C960,45 1200,15 1440,40 L1440,60 L0,60 Z" fill="var(--background)" />
          </svg>
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
              We are Manchester's premier locs and natural hair salon specialising in Sisterlocks™, Microlocs, and
              Traditional Locs. Every visit is a personalised journey toward healthy, thriving hair.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our certified specialists combine proven techniques and genuine care to give your hair the attention it
              deserves in a warm, welcoming atmosphere where you always feel at home.
            </p>
            {/* Mini trust signals */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Certified Sisterlocks™ Consultant", "Natural Products Only", "Free Consultation"].map((tag) => (
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
                alt="Trendylocs specialist installing Sisterlocks™ on a client"
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
              href="https://share.google/3nMtasjIEjeuD7AnL"
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
              title: "Certified Sisterlocks™ Consultant",
              desc: "Our stylists hold formal certification in Sisterlocks™ and are trained in the latest loc techniques not self-taught.",
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
            href="https://www.instagram.com/trendylocs_uk"
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
              href="https://www.instagram.com/trendylocs_uk"
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
            Book a free consultation today no commitment, just great advice.
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
              href="https://wa.me/44123456789"
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
