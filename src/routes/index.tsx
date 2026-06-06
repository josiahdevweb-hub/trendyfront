import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Instagram, Phone, ChevronDown, GraduationCap, CalendarCheck, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import heroBantuKnots from "@/assets/hero/hero-bantu-knots.png.asset.json";
import heroMicrolocsTop from "@/assets/hero/hero-microlocs-top.png.asset.json";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({ component: Home });

const FALLBACK_IMG = "/images/fallback.jpg";
const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf(FALLBACK_IMG) === -1) e.currentTarget.src = FALLBACK_IMG;
};

// Real Google reviews — names & quotes kept verbatim
const testimonials = [
  {
    quote:
      "I have been with Trendylocs since my installation in November 2018 and my daughter had her install in February 2020. We are so pleased with Gina's services.",
    name: "Edinah Ngwarati",
    service: "Sisterlocks™ · client since 2018",
    initials: "EN",
    rating: 5,
  },
  {
    quote:
      "Gina is amazing! Professional, knowledgeable and absolutely top tier customer service. I've been using her service for over 5 years.",
    name: "Maisha Marsh",
    service: "Sisterlocks™ · 5+ years",
    initials: "MM",
    rating: 5,
  },
  {
    quote:
      "Great service, accessible location, comfortable environment. I tried a few others before settling on Trendylocs and so far it's been great.",
    name: "Yinks x",
    service: "Natural Hair Care",
    initials: "YX",
    rating: 5,
  },
];

const stats = [
  { number: "300+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "4.9★", label: "Average Rating" },
];

// Removed wide-2.jpg, detail-2.jpg and detail-3.jpg as requested
const HERO_PAIRS = [
  {
    left: "/images/hero/wide.jpg",
    leftAlt: "Trendylocs Manchester salon client mid-service",
    right: "/images/hero/detail.jpg",
    rightAlt: "Precision microlocs being installed close-up craftsmanship",
    split: 60,
  },
  {
    left: "/images/hero/wide-3.jpg",
    leftAlt: "Fresh microlocs install clean uniform parting lines down the back",
    leftObjectPosition: "50% 55%",
    right: heroBantuKnots.url,
    rightAlt: "Bantu knots over microlocs - Trendylocs protective styling",
    rightObjectPosition: "50% 35%",
    split: 55,
  },
  {
    left: heroMicrolocsTop.url,
    leftAlt: "Top-down view of freshly retightened microlocs Trendylocs precision",
    leftObjectPosition: "50% 45%",
    right: "/images/hero/detail.jpg",
    rightAlt: "Precision microlocs being installed close-up craftsmanship",
    rightObjectPosition: "center",
    split: 50,
  },
] as const;

const HERO_GRADE = "saturate(0.82) contrast(1.06) brightness(0.92) sepia(0.16)";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
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

function Home() {
  const [mounted, setMounted] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImages = HERO_PAIRS.flatMap((p) => [
    { src: p.left, alt: p.leftAlt, pos: (p as any).leftObjectPosition ?? "50% 30%" },
    { src: p.right, alt: p.rightAlt, pos: (p as any).rightObjectPosition ?? "center" },
  ]);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-dark text-primary-foreground flex items-start md:items-center grain md:h-[min(80dvh,80vh)] md:min-h-[480px]">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(212,165,116,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[55%] h-[120%] pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 65%)",
          }}
        />

        <div className="relative w-full mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-center">
            <div
              className={`relative z-10 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="relative inline-block text-primary-foreground font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[56px] tracking-[0.01em] mb-2 md:mb-3 pb-2 leading-none">
                <span>Trendylocs</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-gold" />
              </div>

              <h1 className="font-serif text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-[1.15] tracking-tight mb-3 md:mb-4 text-primary-foreground/85 word-rise">
                <span style={{ animationDelay: "120ms" }}>Premium</span>{" "}
                <span style={{ animationDelay: "260ms" }}>Locs.</span>
                <br />
                <span style={{ animationDelay: "420ms" }}>Crafted</span>{" "}
                <span style={{ animationDelay: "540ms" }}>in</span> {/* Manchester — no italic as requested */}
                <span className="text-gold" style={{ animationDelay: "700ms" }}>
                  Manchester.
                </span>
              </h1>

              <p className="text-[13px] md:text-sm text-primary-foreground/75 max-w-md leading-relaxed mb-4 md:mb-5">
                Sisterlocks™, Microlocs &amp; Traditional Locs: precision installations and gentle maintenance from
                certified consultants.
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

              <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-md">
                {stats.map(({ number, label }) => (
                  <div key={label}>
                    <p className="font-serif text-lg md:text-xl text-gold leading-none mb-1">{number}</p>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-primary-foreground/55 leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative w-full mx-auto max-w-[280px] sm:max-w-sm md:max-w-none aspect-[4/5] sm:aspect-[5/6] md:aspect-auto md:h-[400px] lg:h-[460px] transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="absolute inset-0 md:inset-x-4" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-gold/20">
                  <span className="absolute top-3 left-3 z-10 w-6 h-px bg-gold/70" />
                  <span className="absolute top-3 left-3 z-10 h-6 w-px bg-gold/70" />
                  <span className="absolute bottom-3 right-3 z-10 w-6 h-px bg-gold/70" />
                  <span className="absolute bottom-3 right-3 z-10 h-6 w-px bg-gold/70" />
                  {heroImages.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className={`hero-merge-mask-portrait absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out ${i === heroIdx ? "opacity-100 hero-kenburns" : "opacity-0"}`}
                      style={{ objectPosition: img.pos, filter: HERO_GRADE }}
                      onError={onImgError}
                    />
                  ))}
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

        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-8 md:h-10 block" aria-hidden="true">
            <path d="M0,30 C240,60 480,0 720,20 C960,45 1200,15 1440,40 L1440,60 L0,60 Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ── 2. OUR STORY ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Mobile: stacked. Desktop: side by side */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 md:items-start">
          {/* Founder image — fixed square-ish, never stretched */}
          <div className="relative shrink-0 w-full max-w-[260px] mx-auto md:mx-0 md:w-[240px] lg:w-[280px]">
            <div
              className="w-full aspect-square overflow-hidden rounded-md ring-1 ring-gold/20"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src="/images/salon/founder.jpg"
                alt="Gina, founder of Trendylocs"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Gold corner accents */}
            <span className="absolute top-2.5 left-2.5 w-5 h-px bg-gold/60" />
            <span className="absolute top-2.5 left-2.5 h-5 w-px bg-gold/60" />
            <span className="absolute bottom-2.5 right-2.5 w-5 h-px bg-gold/60" />
            <span className="absolute bottom-2.5 right-2.5 h-5 w-px bg-gold/60" />
          </div>

          {/* Story + team note */}
          <div className="flex-1 min-w-0">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Story</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">Who we are.</h2>

            <p className="text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">
              Trendylocs was born from a personal journey. Gina our founder and a certified Sisterlocks™ Consultant
              spent years chasing styles that weren't meant for her hair. Relaxers, braids, weaves: everything except
              letting her natural hair be. When it finally broke after a retouch, she stopped.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">
              A friend suggested locs. That conversation changed everything. She trained as a practitioner, became a
              certified consultant, and opened Trendylocs so other women wouldn't have to take the long road she did.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
              We are a small, tight-knit team of locs consultants each one genuinely invested in your hair health. Every
              visit is a personalised journey toward healthy, natural hair.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-xs px-3 py-1.5 border border-gold/30 rounded-full text-gold bg-gold/5">
                ✓ Certified Sisterlocks™ Consultancy
              </span>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 bg-dark text-primary-foreground px-5 py-2.5 text-sm rounded-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_var(--gold)] hover:bg-dark/90"
            >
              Read Our Full Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ───────────────────────────────────────────── */}
      <section className="bg-secondary/40 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-gold mb-2">Our Services</p>
              <h2 className="text-2xl md:text-3xl leading-tight">Expert care for every stage of your Locs journey</h2>
            </div>
            <Link
              to="/services"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] border-b border-gold/40 pb-0.5 hover:border-gold hover:text-gold transition-colors self-start sm:self-auto"
            >
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Desktop: auto-scrolling carousel with arrows */}
          <div className="hidden md:block">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]}
              className="relative"
            >
              <CarouselContent className="-ml-4">
                {services.map((s) => (
                  <CarouselItem key={s.slug} className="pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <ServiceCard s={s} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 lg:-left-6 h-11 w-11 bg-gold text-gold-foreground border-gold shadow-lg shadow-gold/30 hover:bg-gold/90 hover:text-gold-foreground [&_svg]:size-5" />
              <CarouselNext className="right-2 lg:-right-6 h-11 w-11 bg-gold text-gold-foreground border-gold shadow-lg shadow-gold/30 hover:bg-gold/90 hover:text-gold-foreground [&_svg]:size-5" />
            </Carousel>
          </div>

          {/* Mobile: two stacked rows (4 services) + more button */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {services.slice(0, 4).map((s) => (
                <ServiceCard key={s.slug} s={s} />
              ))}
            </div>
            {services.length > 4 && (
              <div className="mt-5 flex justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] bg-dark text-primary-foreground px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                >
                  … More services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. BEFORE & AFTER ─────────────────────────────────────── */}
      <BeforeAfterShowcase />

      {/* ── 5. TESTIMONIALS ───────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">In Their Words</p>
            <h2 className="text-3xl md:text-4xl mb-2">What our clients say</h2>
            <p className="text-primary-foreground/50 text-xs">
              From verified Google reviews —{" "}
              <a
                href="https://share.google/3nMtasjIEjeuD7AnL"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-gold transition-colors"
              >
                read them yourself
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-primary-foreground/10 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <StarRating count={t.rating} />
                <p className="font-serif text-sm mb-5 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary-foreground/10">
                  <div className="h-8 w-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-xs font-semibold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-gold/80">{t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://share.google/3nMtasjIEjeuD7AnL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-gold transition-colors"
            >
              <Star className="h-3.5 w-3.5" />
              See all reviews on Google
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. INSTAGRAM ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Follow Along</p>
            <h2 className="text-3xl md:text-4xl mb-4 leading-tight">The work speaks for itself.</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Every photo is a real client, a real transformation. No filters just honest before-and-afters from our
              consultations and maintenance sessions.
            </p>
            <a
              href="https://www.instagram.com/trendylocs_uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border rounded-md px-5 py-2.5 text-sm hover:border-gold hover:text-gold transition-all group"
            >
              <Instagram className="h-4 w-4 group-hover:text-gold transition-colors" />
              Follow @trendylocs_uk
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              "/images/Gallery/microlocs1.jpg",
              "/images/styles/microlocs.jpg",
              "/images/Gallery/traditionallocs2.jpg",
              "/images/styles/sisterlocks.jpg",
              "/images/Gallery/styling1.jpg",
              "/images/Gallery/maintenance.jpg",
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
                  alt={`Trendylocs work ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  onError={onImgError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Subtle persistent Instagram nudge */}
        <div className="flex items-center gap-4 pt-6 border-t border-border/40">
          <span className="h-px flex-1 bg-border/40" />
          <a
            href="https://www.instagram.com/trendylocs_uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            @trendylocs_uk on Instagram
          </a>
          <span className="h-px flex-1 bg-border/40" />
        </div>
      </section>

      {/* ── 7. BOOKING CTA ────────────────────────────────────────── */}
      <section className="bg-gold py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gold-foreground mb-3">
            Ready to start your loc journey?
          </h2>
          <p className="text-gold-foreground/70 mb-7 text-sm">
            Book a consultation today, just honest advice about what's right for your hair.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/book"
              search={{ service: "consultation" }}
              className="inline-flex items-center gap-2 bg-gold-foreground text-primary-foreground px-7 py-3.5 rounded-md font-medium hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/447838328131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 border border-gold-foreground/30 text-gold-foreground px-7 py-3.5 rounded-md hover:bg-white/30 transition"
            >
              <Phone className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

type ServiceItem = (typeof services)[number];

function ServiceCard({ s }: { s: ServiceItem }) {
  return (
    <div className="group flex flex-col bg-card border border-border/60 rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg transition-all duration-300 h-full">
      <Link to="/services/$slug" params={{ slug: s.slug }} className="block shrink-0">
        <div className="h-36 sm:h-40 overflow-hidden bg-muted relative">
          <img
            src={s.img}
            alt={`${s.title} at Trendylocs`}
            loading="lazy"
            decoding="async"
            onError={onImgError}
            className="w-full h-full object-cover object-top sm:group-hover:object-contain sm:group-hover:scale-100 transition-all duration-500 ease-out"
          />
        </div>
      </Link>
      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2">
        <div>
          <h3 className="font-serif text-[14px] sm:text-[15px] font-semibold leading-snug mb-1">{s.title}</h3>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3 shrink-0" />
            <span>{s.time}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 hidden sm:block line-clamp-2">{s.desc}</p>
        <div className="flex items-center justify-between pt-2 border-t border-border/50 gap-2">
          <span className="font-serif text-base sm:text-lg text-primary font-medium leading-none">{s.price}</span>
          <div className="flex items-center gap-1.5">
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="text-[10px] uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors px-1.5 py-1.5 hidden sm:block"
            >
              Details
            </Link>
            <Link
              to="/book"
              search={{ service: s.slug }}
              className="inline-flex items-center gap-1 bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.15em] font-medium px-2.5 py-1.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <CalendarCheck className="h-3 w-3" />
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
