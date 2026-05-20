import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trendylocs — Nairobi's Premier Loc Specialist Since 2015" },
      {
        name: "description",
        content:
          "Meet the team behind Trendylocs — Nairobi's most trusted Sisterlocks, Microlocs and natural hair salon. 8+ years of expertise, 500+ transformations, certified specialists.",
      },
      { property: "og:title", content: "About Trendylocs — Nairobi's Premier Loc Specialist" },
      { property: "og:description", content: "8+ years crafting beautiful locs in Nairobi. Meet our certified team." },
      { property: "og:image", content: "/images/salon/founder.jpg" },
    ],
  }),
  component: About,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Founded from a personal journey — our founder couldn't find a quality loc specialist in Nairobi, so she became one.",
  },
  {
    year: "2017",
    title: "First Certifications",
    desc: "Achieved official Sisterlocks Consultant certification and expanded to Microlocs services.",
  },
  {
    year: "2019",
    title: "Growing Community",
    desc: "Passed 200 happy clients and launched our monthly natural hair education workshops.",
  },
  {
    year: "2021",
    title: "Full Team",
    desc: "Grew to a team of 3 certified specialists, each with a distinct area of expertise.",
  },
  {
    year: "2024",
    title: "500+ Transformations",
    desc: "Nairobi's most trusted locs salon — and still growing, one crown at a time.",
  },
];

const values = [
  {
    title: "Authenticity",
    desc: "We celebrate natural beauty and honour cultural heritage through our craft. Every loc is a statement of self.",
  },
  {
    title: "Excellence",
    desc: "Certified expertise, continuous education, and meticulous technique ensure every client leaves better than they arrived.",
  },
  {
    title: "Community",
    desc: "We've built more than a salon — a welcoming space where the natural hair community in Nairobi finds home.",
  },
  {
    title: "Growth",
    desc: "Your hair journey is ongoing. We empower clients with knowledge, products, and maintenance plans that grow with you.",
  },
];

const team = [
  {
    name: "Founder & Lead Stylist",
    role: "Sisterlocks Consultant · Microlocs Specialist",
    img: "/images/team/founder.jpg",
    bio: "With 8+ years of experience and formal certification in Sisterlocks, our founder brings unmatched precision and passion to every installation.",
  },
  {
    name: "Senior Stylist",
    role: "Traditional Locs · Loc Styling",
    img: "/images/team/stylist-2.jpg",
    bio: "Specialising in Traditional Locs and creative styling, she brings an artistic eye and technical mastery to every client in the chair.",
  },
  {
    name: "Maintenance Specialist",
    role: "Retightening · Natural Hair Care",
    img: "/images/team/stylist-3.jpg",
    bio: "Our maintenance expert ensures every returning client's locs are healthy, neat, and thriving — appointment after appointment.",
  },
];

const certs = [
  "Certified Sisterlocks Consultant",
  "Advanced Microlocs Specialist",
  "Natural Hair Care Professional",
  "Loc Maintenance Expert",
  "Trichology Foundation Certificate",
];

const stats = [
  { number: "8+", label: "Years of Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "1,000+", label: "Installations" },
  { number: "4.9★", label: "Client Rating" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const FALLBACK_IMG = "/images/fallback.jpg";
const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf(FALLBACK_IMG) === -1) e.currentTarget.src = FALLBACK_IMG;
};

function AnimatedNumber({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const num = parseFloat(target.replace(/[^0-9.]/g, ""));
          const suffix = target.replace(/[0-9.,]/g, "");
          const duration = 1600;
          const step = (timestamp: number, startTime: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * num);
            setDisplay(`${current.toLocaleString()}${suffix}`);
            if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
          };
          requestAnimationFrame((t) => step(t, t));
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{display}</div>;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark text-primary-foreground overflow-hidden">
        {/* Subtle horizontal rule accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="uppercase tracking-[0.4em] text-[10px] text-gold mb-6">Est. 2015 · Nairobi, Kenya</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mb-6">
              The craft behind
              <br />
              <span className="italic text-gold">every crown.</span>
            </h1>
            <p className="text-primary-foreground/55 text-lg max-w-xl leading-relaxed">
              Trendylocs was built on a single belief — that every person with natural hair deserves a specialist who
              truly understands it. Eight years and 500 transformations later, that belief still drives everything we
              do.
            </p>
          </div>

          {/* Vertical stat accent — desktop only */}
          <div
            className={`hidden md:flex flex-col gap-8 border-l border-primary-foreground/10 pl-10 pb-2 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {stats.map(({ number, label }) => (
              <div key={label}>
                <p className="font-serif text-3xl text-gold leading-none">{number}</p>
                <p className="text-[11px] uppercase tracking-widest text-primary-foreground/35 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/8 to-transparent" />
      </section>

      {/* ── 2. ANIMATED STATS — mobile ────────────────────────────────── */}
      <section className="md:hidden bg-dark text-primary-foreground border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 divide-x divide-y divide-primary-foreground/10">
            {stats.map(({ number, label }) => (
              <div key={label} className="py-7 px-6 text-center">
                <p className="font-serif text-3xl text-gold mb-1">
                  <AnimatedNumber target={number} />
                </p>
                <p className="text-[10px] uppercase tracking-widest text-primary-foreground/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FOUNDER STORY ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[5fr_6fr] gap-14 md:gap-20 items-start">
          {/* Image — clean, no decorative gimmicks */}
          <div className="relative group">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-secondary/50">
              <img
                src="/images/salon/founder.jpg"
                alt="Trendylocs founder at work in her Nairobi salon"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            {/* Tasteful gold line accent */}
            <div className="absolute -bottom-4 left-6 right-6 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="md:pt-4">
            <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-5">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              A passion transformed
              <br />
              into a profession.
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                Trendylocs was born from a deeply personal place. Our founder spent years searching Nairobi for a
                specialist who truly understood locs — their culture, their care requirements, their beauty. She
                couldn't find one.
              </p>
              <p>
                So she became one. After formal Sisterlocks certification and hundreds of hours of dedicated practice,
                Trendylocs opened its doors in 2015 with a single mission: to give every natural hair client the quality
                and expertise they deserve.
              </p>
              <p>
                Today, our certified team serves 500+ clients, offering Sisterlocks, Microlocs, Traditional Locs, and
                natural hair care in a space that genuinely celebrates your crown.
              </p>
            </div>

            {/* Trust tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Certified Specialists", "Natural Products Only", "Free Consultation"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-[12px] px-3.5 py-1.5 border border-gold/25 rounded-full text-gold/80 bg-gold/5 tracking-wide"
                >
                  <CheckCircle2 className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ───────────────────────────────────────── */}
      <section className="bg-secondary/35 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-card p-10 md:p-12">
              <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-4">Mission</p>
              <h3 className="font-serif text-2xl mb-5 leading-snug">Expertise that honours your heritage.</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                To provide premium, personalised natural hair and locs services that honour cultural heritage while
                embracing modern techniques — in a welcoming environment where every client feels truly valued.
              </p>
            </div>
            <div className="bg-card p-10 md:p-12">
              <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-4">Vision</p>
              <h3 className="font-serif text-2xl mb-5 leading-snug">Nairobi's gold standard for natural hair.</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                To be recognised as Nairobi's leading natural hair and locs specialist — setting the standard for
                expertise, client care, and education in the natural hair community across Kenya and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TIMELINE ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-4">Our History</p>
          <h2 className="font-serif text-3xl md:text-5xl">The journey so far.</h2>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-8 hover:bg-secondary/20 -mx-4 px-4 rounded-lg transition-colors duration-200"
            >
              <div className="pt-0.5">
                <span className="font-serif text-2xl md:text-3xl text-gold/60 group-hover:text-gold transition-colors duration-300">
                  {item.year}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed max-w-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. VALUES ─────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-4">What Drives Us</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground">
              The principles
              <br />
              that guide us.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/8 rounded-xl overflow-hidden">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-dark p-8 hover:bg-primary-foreground/5 transition-colors duration-300 group"
              >
                <div className="w-8 h-px bg-gold mb-6 group-hover:w-14 transition-all duration-500" />
                <h3 className="text-base font-semibold mb-3 text-primary-foreground">{v.title}</h3>
                <p className="text-[13px] text-primary-foreground/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TEAM ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          {/* Sticky label column */}
          <div className="md:sticky md:top-28">
            <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-4">The Specialists</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Meet
              <br />
              your team.
            </h2>
            <p className="text-muted-foreground text-[14px] leading-relaxed max-w-xs">
              Every stylist at Trendylocs is formally certified, continuously trained, and genuinely passionate about
              natural hair.
            </p>
          </div>

          {/* Team cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                  <img
                    src={member.img}
                    alt={`${member.name} — ${member.role} at Trendylocs Nairobi`}
                    loading="lazy"
                    decoding="async"
                    onError={onImgError}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6 border-t border-border">
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-1">{member.role}</p>
                  <h3 className="font-semibold text-base mb-3">{member.name}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CERTIFICATIONS ─────────────────────────────────────────── */}
      <section className="bg-secondary/35 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div>
              <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-4">Credentials</p>
              <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                Certified.
                <br />
                Qualified.
                <br />
                Trusted.
              </h2>
            </div>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c} className="flex items-center gap-3 py-4 border-b border-border last:border-0 group">
                  <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                  <span className="text-[14px] font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. PULL QUOTE ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
        <Quote className="h-7 w-7 text-gold mx-auto mb-8 opacity-50" />
        <p className="font-serif italic text-2xl md:text-4xl leading-relaxed text-foreground mb-8">
          "Your hair is your crown.
          <br />
          We're here to help you wear it with pride."
        </p>
        <div className="w-12 h-px bg-gold/40 mx-auto" />
        <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Trendylocs · Est. 2015 · Nairobi, Kenya
        </p>
      </section>

      {/* ── 10. CTA ───────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground relative overflow-hidden py-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-[10px] text-gold mb-5">Begin Your Journey</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-5 leading-tight">
            Ready to meet
            <br />
            your specialist?
          </h2>
          <p className="text-primary-foreground/50 text-[15px] mb-10 max-w-md mx-auto leading-relaxed">
            Start with a free consultation — we'll assess your hair and map out a personalised care plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-md font-medium hover:opacity-90 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-md hover:border-gold/40 hover:text-gold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
