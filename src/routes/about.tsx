import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Trendylocs" },
    { name: "description", content: "Celebrating natural beauty since 2015. Manchester's premier locs specialist." },
  ]}),
  component: About,
});

function About() {
  const values = [
    { title: "Authenticity", desc: "We celebrate natural beauty and embrace cultural heritage through our craft." },
    { title: "Excellence", desc: "Certified expertise and continuous education ensure the highest quality service." },
    { title: "Community", desc: "Building a supportive space where natural hair is celebrated and nurtured." },
    { title: "Growth", desc: "Empowering clients on their journey to healthy, beautiful natural hair." },
  ];
  const certs = ["Certified Sisterlocks Consultant", "Advanced Microlocs Specialist", "Natural Hair Care Professional", "Loc Maintenance Expert", "Trichology Foundation Certificate"];
  const stats = [["8+", "Years Experience"], ["500+", "Happy Clients"], ["1000+", "Installations"], ["5★", "Client Rating"]];

  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Journey</p>
          <h1 className="text-3xl md:text-4xl mb-3">About Trendylocs</h1>
          <p className="text-base text-primary-foreground/70">Celebrating Natural Beauty Since 2015</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-md">
          <img src="/images/salon/founder.jpg" alt="Founder" loading="lazy" decoding="async" onError={(e)=>{if(e.currentTarget.src.indexOf('/images/fallback.jpg')===-1)e.currentTarget.src='/images/fallback.jpg';}} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Story</p>
          <h2 className="text-4xl mb-6">A passion built into a craft.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Trendylocs was founded with a simple yet powerful mission: to provide exceptional natural hair and locs care in a space that celebrates the beauty and versatility of textured hair.</p>
            <p>Our founder's personal journey with locs inspired the creation of a salon where expertise meets passion. After years of struggling to find quality loc maintenance, she decided to become the specialist she wished she'd had.</p>
            <p>Today, Trendylocs stands as Manchester's premier destination for Sisterlocks, Microlocs, Traditional Locs, and comprehensive natural hair care.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-card rounded-md p-10">
            <h3 className="text-2xl mb-4 text-gold">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">To provide premium, personalized natural hair and locs services that honor cultural heritage while embracing modern techniques. We create a welcoming, educational environment where every client feels valued.</p>
          </div>
          <div className="bg-card rounded-md p-10">
            <h3 className="text-2xl mb-4 text-gold">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be recognized as the leading natural hair and locs specialist in the UK, setting the standard for excellence in technique, client care, and education.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Values</p>
          <h2 className="text-4xl md:text-5xl">The principles that guide us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(v => (
            <div key={v.title} className="border border-border rounded-md p-8 hover:border-gold transition-colors">
              <h3 className="text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Credentials</p>
          <h2 className="text-4xl mb-12">Certifications & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certs.map(c => <span key={c} className="bg-card border border-border px-5 py-3 rounded-full text-sm">{c}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Philosophy</p>
        <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">"Your hair is your crown. We're here to help you wear it with pride."</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-5xl text-gold mb-2">{n}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
