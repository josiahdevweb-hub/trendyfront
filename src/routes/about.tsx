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
    {
      year: "4 Years Ago",
      title: "The Beginning",
      desc: "Trendylocs opened in Manchester with a single chair and a clear vision.",
    },
    {
      year: "Growth",
      title: "Building the Craft",
      desc: "Expanded into Sisterlocks, Microlocs and Traditional Locs as the client family grew.",
    },
    {
      year: "Milestones",
      title: "500+ Clients Served",
      desc: "Crossed 1000+ installations and earned trust across the North West.",
    },
    {
      year: "Today",
      title: "Manchester's Premier Studio",
      desc: "A dedicated team, refined techniques, and a loyal, growing community.",
    },
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

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 aspect-[4/5] max-h-[450px] overflow-hidden rounded-2xl shadow-xl md:sticky md:top-24">
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
        <div className="md:col-span-3">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Story</p>
          <h2 className="text-4xl mb-6">A passion built into a craft.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-y-auto pr-4 max-h-[520px] md:max-h-[450px] scroll-smooth founder-scroll">
            <p>
              I am a Sisterlocks (TM) Consultant. I do Sisterlocks installations, re-tightenings and styling. I also
              install, retighten and style dreadlocks and micro locks. I’m based in East Manchester, a 5 minute bus/car
              drive from Manchester Piccadilly station.
            </p>
            <p>
              I have been running away from my hair for as long as I can remember. I have gone through relaxers and
              braiding tiny winy braids for years! The addiction to braiding was bad in such a way that I would undo the
              braids and the next day install new ones. Once the hair was too damaged for braids I had weaves on. While
              doing all this I still kept on relaxing my hair. A wake-up call came when I had my first baby and I made
              the mistake of retouching my hair and girl did it fall out. From then on I stopped relaxing my hair and
              kept it natural. I however made sure it was hidden by braiding it, weaving and using crotchet braids. When
              I stopped relaxing my hair I thought if I braided it would not break as much. Wrong again; the tension
              with braiding and styling had damaged my natural hair.
            </p>
            <p>
              A dear friend suggested I do dreadlocks. Knowing I could braid the locks I did it. I had not embraced and
              accepted my natural hair so I had extensions attached to my locks which obviously damaged my hair. After
              going through this hair journey I knew I did not want my two little girls to go through the same
              experience. I want to teach them to love their natural hair. I cannot do that while braiding or relaxing
              my hair. I got introduced to sisterlocks and got hooked. I love that it is versatile. I feel I have come
              full circle and could not wait to have my sisterlocks installed after the damage caused by years of
              braiding. I then trained as as sisterlocks practioner and I have since become a sisterlocks consultant.
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
