import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
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
      // Open Graph for social sharing
      { property: "og:title", content: "About Trendylocs — Nairobi's Premier Loc Specialist" },
      { property: "og:description", content: "8+ years crafting beautiful locs in Nairobi. Meet our certified team." },
      { property: "og:image", content: "/images/salon/founder.jpg" },
    ],
  }),
  component: About,
});

// ─── Data ────────────────────────────────────────────────────────────────────

const timeline = [
  { year: "2015", title: "The Beginning", desc: "Founded from a personal journey — our founder couldn't find a quality loc specialist in Nairobi, so she became one." },
  { year: "2017", title: "First Certifications", desc: "Achieved official Sisterlocks Consultant certification and expanded to Microlocs services." },
  { year: "2019", title: "Growing Community", desc: "Passed 200 happy clients and launched our monthly natural hair education workshops." },
  { year: "2021", title: "Full Team", desc: "Grew to a team of 3 certified specialists, each with a distinct area of expertise." },
  { year: "2024", title: "500+ Transformations", desc: "Nairobi's most trusted locs salon — and still growing, one crown at a time." },
];

const values = [
  {
    title: "Authenticity",
    icon: "🪞",
    desc: "We celebrate natural beauty and honour cultural heritage through our craft. Every loc is a statement of self.",
  },
  {
    title: "Excellence",
    icon: "🏆",
    desc: "Certified expertise, continuous education, and meticulous technique ensure every client leaves better than they arrived.",
  },
  {
    title: "Community",
    icon: "🤝",
    desc: "We've built more than a salon — a welcoming space where the natural hair community in Nairobi finds home.",
  },
  {
    title: "Growth",
    icon: "🌿",
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
  { number: "8+", label: "Years Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "1,000+", label: "Installations" },
  { number: "4.9★", label: "Client Rating" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

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
          // Extract numeric part
          const num = parseFloat(target.replace(/[^0-9.]/g, ""));
          const suffix = target.replace(/[0-9.]/g, "");
          let start = 0;
          const duration = 1400;
          const step = (timestamp: number, startTime: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * num);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
          };
          requestAnimationFrame((t) => step(t, t));
        }
      },
      { threshold: 0.3 }
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
      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground relative overflow-hidden py-20 md:py-28">
        {/* Decorative gold circle */}
        <div
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: "var(--gold)" }}
        />
        <div
          className="absolute -left-20 bottom-0 w-64 h-64 rounded-full opacity-[0.03]"
          style={{ background: "var(--gold)" }}
        />

        <div
          className={`mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="uppercase tracking-[0.35em] text-xs text-gold mb-5">Our Journey</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            About <span className="italic text-gold">Trendylocs</span>
          </h1>
          <p className="text-lg text-primary-foreground/65 max-w-2xl mx-auto leading-relaxed">
            Founded in 2015 from a personal passion for natural hair — we've grown into Nairobi's most trusted
            Sisterlocks and locs specialist, one crown at a time.
          </p>
        </div>
      </section>

      {/* ── 2. STORY + IMAGE ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Image with gold accent border */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-xl border-2 border-gold/25 pointer-events-none"
            />
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src="/images/salon/founder.jpg"
                alt="Trendylocs founder in her Nairobi salon"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gold text-gold-foreground rounded-xl px-6 py-4 shadow-xl text-center">
              <p className="font-serif text-3xl font-bold leading-none">8+</p>
              <p className="text-xs uppercase tracking-wider mt-1 opacity-80">Years of Craft</p>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              A passion built<br />
              <span className="italic">into a craft.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                Trendylocs was born from a deeply personal place. Our founder spent years searching Nairobi for a
                specialist who truly understood locs — their culture, their care requirements, their beauty. She
                couldn't find one.
              </p>
              <p>
                So she became one. After years of dedicated training, formal Sisterlocks certification, and hundreds
                of hours of practice, Trendylocs opened its doors in 2015 with a single mission: to give every
                natural hair client the quality and expertise they deserve.
              </p>
              <p>
                Today, our team of certified specialists serves 500+ clients across Nairobi, offering Sisterlocks,
                Microlocs, Traditional Locs, and comprehensive natural hair care in a space that genuinely celebrates
                your crown.
              </p>
            </div>

            {/* Inline credentials */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Certified Sisterlocks", "Natural Products", "Free Consultation"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 border border-gold/30 rounded-full text-gold bg-gold/5"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS ──────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
            {stats.map(({ number, label }) => (
              <div key={label} className="py-8 px-6 text-center">
                <p className="font-serif text-4xl md:text-5xl text-gold mb-2">
                  <AnimatedNumber target={number} />
                </p>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TIMELINE ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Our History</p>
          <h2 className="font-serif text-3xl md:text-5xl">The journey so far</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-14 md:pl-0`}>
                  <div
                    className="bg-card border border-border rounded-xl p-6 hover:border-gold/40 transition-colors duration-300 hover:shadow-lg"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <p className="text-gold font-semibold text-sm mb-1">{item.year}</p>
                    <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Dot — positioned on the line */}
                <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MISSION & VISION ───────────────────────────────────────── */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-10 border border-border hover:border-gold/30 transition-colors">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-serif text-2xl mb-4 text-gold">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              To provide premium, personalised natural hair and locs services that honour cultural heritage while
              embracing modern techniques — in a welcoming environment where every client feels truly valued.
            </p>
          </div>
          <div className="bg-card rounded-xl p-10 border border-border hover:border-gold/30 transition-colors">
            <div className="text-3xl mb-4">🔭</div>
            <h3 className="font-serif text-2xl mb-4 text-gold">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              To be recognised as Nairobi's leading natural hair and locs specialist — setting the standard for
              expertise, client care, and education in the natural hair community across Kenya and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. VALUES ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">What Drives Us</p>
          <h2 className="font-serif text-3xl md:text-5xl">The principles that guide us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group border border-border rounded-xl p-8 hover:border-gold/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. TEAM ───────────────────────────────────────────────────── */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">The Specialists</p>
            <h2 className="font-serif text-3xl md:text-5xl">Meet your team</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Every stylist at Trendylocs is certified, continuously trained, and genuinely passionate about natural hair.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
                  <img
                    src={member.img}
                    alt={`${member.name} — ${member.role} at Trendylocs Nairobi`}
                    loading="lazy"
                    decoding="async"
                    onError={onImgError}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-base mb-1">{member.name}</h3>
                  <p className="text-xs text-gold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CERTIFICATIONS ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Credentials</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Certifications &amp; Expertise</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Our qualifications aren't just letters on a wall — they represent hours of study, practice, and commitment
            to your hair's health.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {certs.map((c) => (
            <span
              key={c}
              className="bg-card border border-border hover:border-gold/40 px-5 py-3 rounded-full text-sm transition-colors duration-300 hover:text-gold"
            >
              ✓ {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── 9. QUOTE ──────────────────────────────────────────────────── */}
      <section className="bg-dark text-primary-foreground py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote className="h-8 w-8 text-gold mx-auto mb-6 opacity-60" />
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-8 text-primary-foreground/90">
            "Your hair is your crown. We're here to help you wear it with pride."
          </p>
          <p className="text-sm text-primary-foreground/40 uppercase tracking-widest">
            — Trendylocs, est. 2015
          </p>
        </div>
      </section>

      {/* ── 10. BOOKING CTA ───────────────────────────────────────────── */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gold-foreground mb-3">
            Ready to meet your specialist?
          </h2>
          <p className="text-gold-foreground/70 mb-8 text-sm">
            Start with a free consultation — we'll assess your hair and map out your journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gold-foreground text-primary-foreground px-8 py-4 rounded-md font-medium hover:opacity-90 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gold-foreground focus-visible:ring-offset-2"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/15 border border-gold-foreground/30 text-gold-foreground px-8 py-4 rounded-md hover:bg-white/25 transition focus-visible:ring-2 focus-visible:ring-gold-foreground"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
