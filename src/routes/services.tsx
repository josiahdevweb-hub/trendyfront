import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trendylocs" },
      {
        name: "description",
        content: "Sisterlocks™, Microlocs, Traditional Locs, retightening, styling and more.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    slug: "sisterlocks",
    title: "Sisterlocs",
    price: "From £100",
    time: "2 hr",
    desc: "Sisterlocks (TM) are small locks made by precision sectioning of hair using a special locking tool. It is a trademarked hair style which was started and patented by Dr. Joanne Cornwell in the United States. Sisterlocks is a celebration of natural hair, freeing you from the numerous hair products created to straighten your hair. Its installation and maintenance is therefore as natural as can be.
If you are interested in installing Sisterlocks, we will initially invite you to come for a consultation during which we determine your hair type, discuss locking patterns and install samples.
We will then book your installation as well as book your first re-tightening session, normally after 4 weeks. Following your sisterlocks installation, we advise on a re-tightening schedule. This is usually after every 4-6 weeks.
Why Sisterlocks ™ ? 
-	 Freedom/ Versatility/Light
-	Endless styling possibilities
-	Thinnest of loose hair looks fuller
Duration: 8 hrs but exact duration is determined during consultation Cost: Determined during consultation and depends on length of hair.
.",
    img: "/images/transformations/microlocs-before-after.jpg",
    features: [
      "Initial consultation included",
      "Precision parting and installation",
      "Aftercare kit and instructions",
      "Follow-up appointment guidance",
      "Lifetime installation warranty",
    ],
  },
  {
    slug: "Styling",
    title: "Styling",
    price: "From £50",
    time: "1 hr",
    desc: "Creative styling services for special occasions or everyday wear. From updos to intricate designs..",
    img: "/images/services/hero-ombre-locs.png",

    features: [
      "Consultation to determine best method",
      "Professional installation",
      "Styling recommendations",
      "Maintenance schedule planning",
      "Product recommendations",
    ],
  },
  {
    slug: "Maintenance & Retightening",
    title: "Maintenance & Retightening",
    price: "From £200",
    time: "4 hrs 30 mins ",
    desc: " Assess your and create a care plan",
    img: "/images/services/traditional-locs.jpg",
    features: [
      "Multiple installation methods available",
      "Customized parting pattern",
      "Natural or cultivated options",
      "Maintenance guidance",
      "Growth tracking",
    ],
  },
  {
    slug: "retightening",
    title: "Retightening",
    price: "From £100",
    time: "2hrs 30 mins",
    desc: "Essential maintenance service to keep your locs neat, healthy, and mature properly. Recommended every 4–6 weeks.",
    img: "/images/services/sisterlocs2.jpg",
    features: [
      "Root maintenance",
      "Scalp cleansing and treatment",
      "Loc health assessment",
      "Styling included",
      "Next appointment scheduling",
    ],
  },
  {
    slug: "Locs Establishment",
    title: "Locs Establishment",
    price: "From £100",
    time: "8 hrs",
    desc: "Begin your loc journey with professional starter locs using your preferred method. Includes full consultation.",
    img: "/images/services/microlocs2.jpg",
    features: [
      "In-depth consultation",
      "Method selection guidance",
      "Professional installation",
      "Starter care package",
      "Educational resources",
    ],
  },
  {
    slug: "loc-styling",
    title: "Loc Styling",
    price: "From £50",
    time: "1 hr",
    desc: "Creative styling services for special occasions or everyday wear. From updos to intricate designs.",
    img: "/images/services/microlocs5",
    features: [
      "Consultation on desired style",
      "Professional styling",
      "Loc-safe accessories",
      "Style longevity tips",
      "Photo-ready finish",
    ],
  },
  {
    slug: "Retighten With Phyllis",
    title: "Retighten With Phyllis",
    price: "From £80",
    time: "2 hrs 30 mins",
    desc: "Safe, professional colour services for locs. From subtle highlights to bold transformations.",
    img: "/images/services/traditionallocs4.jpg",
    features: [
      "Colour consultation",
      "Strand testing",
      "Professional application",
      "Deep conditioning treatment",
      "Colour maintenance guidance",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    price: "£20",
    time: "1 hr",
    desc: "Personalized one-on-one consultation to discuss your hair goals, assess your hair, and create a care plan.",
    img: "/images/styles/consultation.jpg",
    features: [
      "Hair and scalp assessment",
      "Goal discussion",
      "Method recommendations",
      "Timeline and pricing",
      "Question and answer session",
    ],
  },
];

function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">What We Offer</p>
          <h1 className="text-3xl md:text-4xl mb-3">Our Services</h1>
          <p className="text-base text-primary-foreground/70">
            Expert care for every stage of your natural hair journey
          </p>
        </div>
      </section>

      {/* Services Grid — 3 cols × 2 rows visible = 6 per page */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col border border-border/60"
            >
              {/* 4:3 image — keeps cards compact enough for 6-per-page */}
              <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1)
                      e.currentTarget.src = "/images/fallback.jpg";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                {/* Time */}
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1.5 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {s.time}
                </p>

                {/* Title */}
                <h3 className="font-serif text-xl leading-tight mb-2 text-foreground">{s.title}</h3>

                {/* Description — clamped to 2 lines */}
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4 line-clamp-2 flex-1">
                  {s.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3.5 border-t border-border/60">
                  <span className="font-serif text-lg text-gold">{s.price}</span>
                  <Link
                    to="/book"
                    search={{ service: s.slug }}
                    className="inline-flex items-center justify-center bg-dark text-primary-foreground px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.18em] hover:bg-dark/90 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing info */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Pricing Information</h2>
          <p className="text-muted-foreground mb-3">
            All prices are starting prices and may vary based on hair length, density, and complexity. We provide a
            detailed quote during your consultation.
          </p>
          <p className="text-muted-foreground mb-3">
            We believe in transparent pricing with no hidden fees. Payment plans are available for installation
            services.
          </p>
          <p className="text-muted-foreground">
            First-time clients receive a complimentary consultation to discuss pricing and options.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-primary-foreground py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
          <p className="text-primary-foreground/70 mb-8">
            Book your free consultation today and let's discuss your hair goals
          </p>
          <Link
            to="/book"
            search={{ service: "consultation" }}
            className="inline-flex bg-gold text-gold-foreground px-8 py-3.5 rounded-md hover:opacity-90"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
