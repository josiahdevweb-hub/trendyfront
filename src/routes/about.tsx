import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Target,
  Eye,
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
    { icon: Sparkles, title: "Authenticity", desc: "We celebrate natural beauty and embrace cultural heritage through our craft." },
    { icon: Award, title: "Excellence", desc: "Certified expertise and continuous education ensure the highest quality service." },
    { icon: Users, title: "Community", desc: "Building a supportive space where natural hair is celebrated and nurtured." },
    { icon: TrendingUp, title: "Growth", desc: "Empowering clients on their journey to healthy, beautiful natural hair." },
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
        <div className="h-[220px] md:h-[320px] overflow-hidden rounded-2xl shadow-xl">
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

      {/* Mission & Vision */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To provide premium, personalized natural hair and locs services that honor cultural heritage while embracing modern techniques. We create a welcoming, educational environment where every client feels valued." },
            { icon: Eye, title: "Our Vision", text: "To be recognized as the leading natural hair and locs specialist in the UK, setting the standard for excellence in technique, client care, and education." },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card/60 backdrop-blur-md border border-gold/20 shadow-xl rounded-2xl p-10 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl mb-4 text-gold">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values — Glass cards */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Values</p>
          <h2 className="text-4xl md:text-5xl">The principles that guide us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card/50 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Credentials</p>
          <h2 className="text-4xl mb-12">Certifications & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-card/60 backdrop-blur-md border border-gold/20 shadow-lg rounded-2xl px-6 py-5 flex items-center gap-4 hover:scale-105 hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm text-left font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — match homepage aesthetic */}
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
