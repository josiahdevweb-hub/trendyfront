import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Trendylocs" },
    { name: "description", content: "Sisterlocks™, Microlocs, Traditional Locs, retightening, styling and more." },
  ]}),
  component: Services,
});

const services = [
  { slug: "sisterlocks", title: "Sisterlocks™", price: "From £350", time: "8-12 hours", desc: "Precision micro locs created using a specialized tool and technique. Perfect for those seeking a versatile, low-manipulation protective style.", img: "/images/styles/sisterlocks.jpg", features: ["Initial consultation included", "Precision parting and installation", "Aftercare kit and instructions", "Follow-up appointment guidance", "Lifetime installation warranty"] },
  { slug: "microlocs", title: "Microlocs", price: "From £280", time: "6-10 hours", desc: "Small, uniform locs installed using coiling, braiding, or interlocking. Offers styling flexibility with manageability.", img: "/images/Gallery/Microlocs1.jpeg", features: ["Consultation to determine best method", "Professional installation", "Styling recommendations", "Maintenance schedule planning", "Product recommendations"] },
  { slug: "traditional-locs", title: "Traditional Locs", price: "From £180", time: "4-8 hours", desc: "Classic dreadlocks created through various methods including two-strand twists, coils, or freeform. A timeless protective style.", img: "/images/styles/traditional-locs.jpg", features: ["Multiple installation methods available", "Customized parting pattern", "Natural or cultivated options", "Maintenance guidance", "Growth tracking"] },
  { slug: "retightening", title: "Retightening", price: "From £85", time: "2-4 hours", desc: "Essential maintenance service to keep your locs neat, healthy, and mature properly. Recommended every 4-6 weeks.", img: "/images/styles/retightening.jpg", features: ["Root maintenance", "Scalp cleansing and treatment", "Loc health assessment", "Styling included", "Next appointment scheduling"] },
  { slug: "starter-locs", title: "Starter Locs", price: "From £150", time: "3-6 hours", desc: "Begin your loc journey with professional starter locs using your preferred method. Includes full consultation.", img: "/images/styles/mature-locs.jpg", features: ["In-depth consultation", "Method selection guidance", "Professional installation", "Starter care package", "Educational resources"] },
  { slug: "loc-styling", title: "Loc Styling", price: "From £45", time: "1-2 hours", desc: "Creative styling services for special occasions or everyday wear. From updos to intricate designs.", img: "/images/styles/styling.jpg", features: ["Consultation on desired style", "Professional styling", "Loc-safe accessories", "Style longevity tips", "Photo-ready finish"] },
  { slug: "loc-colour", title: "Loc Colour", price: "From £120", time: "3-5 hours", desc: "Safe, professional colour services for locs. From subtle highlights to bold transformations.", img: "/images/styles/color.jpg", features: ["Colour consultation", "Strand testing", "Professional application", "Deep conditioning treatment", "Colour maintenance guidance"] },
  { slug: "consultation", title: "Consultation", price: "Free", time: "30-45 minutes", desc: "Personalized one-on-one consultation to discuss your hair goals, assess your hair, and create a care plan.", img: "/images/styles/consultation.jpg", features: ["Hair and scalp assessment", "Goal discussion", "Method recommendations", "Timeline and pricing", "Question and answer session"] },
];

function Services() {
  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">What We Offer</p>
          <h1 className="text-3xl md:text-4xl mb-3">Our Services</h1>
          <p className="text-base text-primary-foreground/70">Expert care for every stage of your natural hair journey</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col w-full max-w-sm text-center"
            >
              <div className="overflow-hidden bg-secondary/30 aspect-[4/3]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { if (e.currentTarget.src.indexOf('/images/fallback.jpg') === -1) e.currentTarget.src = '/images/fallback.jpg'; }}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> {s.time}
                </p>
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 line-clamp-3 max-w-xs">{s.desc}</p>
                <div className="mt-auto flex flex-col items-center gap-3">
                  <span className="text-base font-medium text-gold">{s.price}</span>
                  <Link
                    to="/book"
                    search={{ service: s.slug }}
                    className="inline-flex items-center justify-center bg-dark text-primary-foreground px-6 py-2.5 rounded-full text-sm hover:bg-dark/90 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Pricing Information</h2>
          <p className="text-muted-foreground mb-3">All prices are starting prices and may vary based on hair length, density, and complexity. We provide a detailed quote during your consultation.</p>
          <p className="text-muted-foreground mb-3">We believe in transparent pricing with no hidden fees. Payment plans are available for installation services.</p>
          <p className="text-muted-foreground">First-time clients receive a complimentary consultation to discuss pricing and options.</p>
        </div>
      </section>

      <section className="bg-dark text-primary-foreground py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
          <p className="text-primary-foreground/70 mb-8">Book your free consultation today and let's discuss your hair goals</p>
          <Link to="/book" search={{ service: "consultation" }} className="inline-flex bg-gold text-gold-foreground px-8 py-3.5 rounded-md hover:opacity-90">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
