import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Award,
  Users,
  TrendingUp,
  BadgeCheck,
  Scissors,
  HeartHandshake,
  Gem,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Trendylocs" },
      { name: "description", content: "Celebrating natural beauty since 2015. Manchester's premier locs specialist." },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { icon: Sparkles, title: "Authenticity", desc: "We celebrate natural beauty and embrace cultural heritage." },
    { icon: Award, title: "Excellence", desc: "Certified expertise and continuous education in every service." },
    { icon: Users, title: "Community", desc: "A supportive space where natural hair is celebrated." },
    { icon: TrendingUp, title: "Growth", desc: "Empowering clients on their natural hair journey." },
  ];
  const history = [
    { year: "4 Years Ago", title: "The Beginning", desc: "Trendylocs opened in Manchester with a single chair and a clear vision." },
    { year: "Growth", title: "Building the Craft", desc: "Expanded into Sisterlocks, Microlocs and Traditional Locs as the client family grew." },
    { year: "Milestones", title: "500+ Clients Served", desc: "Crossed 1000+ installations and earned trust across the North West." },
    { year: "Today", title: "Manchester's Premier Studio", desc: "A dedicated team, refined techniques, and a loyal, growing community." },
  ];
  const certs = [
    { icon: BadgeCheck, label: "Certified Sisterlocks Consultant" },
    { icon: Scissors, label: "Advanced Microlocs Specialist" },
    { icon: Sparkles, label: "Natural Hair Care Professional" },
    { icon: HeartHandshake, label: "Loc Maintenance Expert" },
    { icon: GraduationCap, label: "Trichology Foundation Certificate" },
    { icon: Gem, label: "Premium Product Specialist" },
  ];
  const stats = [
    ["8+", "Years Experience"],
    ["500+", "Happy Clients"],
    ["1000+", "Installations"],
    ["5★", "Client Rating"],
  ];

  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Journey</p>
          <h1 className="text-3xl md:text-4xl mb-3">About Trendylocs</h1>
          <p className="text-base text-primary-foreground/70">Celebrating Natural Beauty Since 2015</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] md:aspect-[4/5] max-h-[600px] overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/images/salon/founder.jpg"
            alt="Founder"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                e.currentTarget.src = "/images/fallback.jpg";
            }}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Story</p>
          <h2 className="text-4xl mb-6">A passion built into a craft.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Trendylocs was founded with a simple yet powerful mission: to provide exceptional natural hair and locs
              care in a space that celebrates the beauty and versatility of textured hair.
            </p>
            <p>
              Our founder's personal journey with locs inspired the creation of a salon where expertise meets passion.
              After years of struggling to find quality loc maintenance, she decided to become the specialist she wished
              she'd had.
            </p>
            <p>
              Today, Trendylocs stands as Manchester's premier destination for Sisterlocks, Microlocs, Traditional Locs,
              and comprehensive natural hair care.
            </p>
          </div>
        </div>
      </section>

      {/* History + Certifications — two columns */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          {/* Our History */}
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our History</p>
            <h2 className="text-3xl md:text-4xl mb-8">A journey of craft & growth</h2>
            <div className="space-y-4">
              {history.map(({ year, title, desc }) => (
                <div
                  key={title}
                  className="bg-card/60 backdrop-blur-md border border-gold/20 shadow-sm rounded-xl p-5 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">{year}</span>
                    <span className="h-px flex-1 bg-gold/20" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Credentials</p>
            <h2 className="text-3xl md:text-4xl mb-8">Certifications & expertise</h2>
            <div className="space-y-3">
              {certs.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-card/60 backdrop-blur-md border border-gold/20 shadow-sm rounded-xl px-5 py-4 flex items-center gap-4 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles — compact */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-2">Our Values</p>
          <h2 className="text-2xl md:text-3xl">The principles that guide us</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card/50 backdrop-blur-md border border-white/20 shadow-sm rounded-xl p-5 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-gold" />
              </div>
              <h3 className="text-base font-medium mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark text-primary-foreground py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Philosophy</p>
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-14 text-primary-foreground/90">
            "Your hair is your crown. We're here to help you wear it with pride."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(([n, l]) => (
              <div
                key={l}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-8 px-4 hover:scale-105 hover:border-gold/40 transition-all duration-300"
              >
                <div className="font-serif text-5xl text-gold mb-2">{n}</div>
                <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
