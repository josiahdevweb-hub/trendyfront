import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Trendylocs" },
    { name: "description", content: "Sisterlocks, Microlocs, Traditional Locs, retightening, styling and more." },
  ]}),
  component: Services,
});

const services = [
  { slug: "sisterlocks", title: "Sisterlocks", price: "From £350", time: "8-12 hours", desc: "Precision micro locs created using a specialized tool and technique. Perfect for those seeking a versatile, low-manipulation protective style.", img: "/images/styles/sisterlocks.jpg", features: ["Initial consultation included", "Precision parting and installation", "Aftercare kit and instructions", "Follow-up appointment guidance", "Lifetime installation warranty"] },
  { slug: "microlocs", title: "Microlocs", price: "From £280", time: "6-10 hours", desc: "Small, uniform locs installed using coiling, braiding, or interlocking. Offers styling flexibility with manageability.", img: "/images/styles/microlocs.jpg", features: ["Consultation to determine best method", "Professional installation", "Styling recommendations", "Maintenance schedule planning", "Product recommendations"] },
  { slug: "traditional-locs", title: "Traditional Locs", price: "From £180", time: "4-8 hours", desc: "Classic dreadlocks created through various methods including two-strand twists, coils, or freeform. A timeless protective style.", img: "/images/styles/traditional-locs.jpg", features: ["Multiple installation methods available", "Customized parting pattern", "Natural or cultivated options", "Maintenance guidance", "Growth tracking"] },
  { slug: "retightening", title: "Retightening", price: "From £85", time: "2-4 hours", desc: "Essential maintenance service to keep your locs neat, healthy, and mature properly. Recommended every 4-6 weeks.", img: "/images/styles/retightening.jpg", features: ["Root maintenance", "Scalp cleansing and treatment", "Loc health assessment", "Styling included", "Next appointment scheduling"] },
  { slug: "starter-locs", title: "Starter Locs", price: "From £150", time: "3-6 hours", desc: "Begin your loc journey with professional starter locs using your preferred method. Includes full consultation.", img: "/images/transformations/before-natural-3.jpg", features: ["In-depth consultation", "Method selection guidance", "Professional installation", "Starter care package", "Educational resources"] },
  { slug: "loc-styling", title: "Loc Styling", price: "From £45", time: "1-2 hours", desc: "Creative styling services for special occasions or everyday wear. From updos to intricate designs.", img: "/images/styles/styling.jpg", features: ["Consultation on desired style", "Professional styling", "Loc-safe accessories", "Style longevity tips", "Photo-ready finish"] },
  { slug: "loc-colour", title: "Loc Colour", price: "From £120", time: "3-5 hours", desc: "Safe, professional colour services for locs. From subtle highlights to bold transformations.", img: "/images/styles/color.jpg", features: ["Colour consultation", "Strand testing", "Professional application", "Deep conditioning treatment", "Colour maintenance guidance"] },
  { slug: "consultation", title: "Consultation", price: "Free", time: "30-45 minutes", desc: "Personalized one-on-one consultation to discuss your hair goals, assess your hair, and create a care plan.", img: "/images/styles/consultation.jpg", features: ["Hair and scalp assessment", "Goal discussion", "Method recommendations", "Timeline and pricing", "Question and answer session"] },
];

function Services() {
  return (
    <>
      <section className="bg-dark text-primary-foreground min-h-[80vh] min-h-[80dvh] flex items-center">
        <div className="mx-auto max-w-3xl px-6 text-center py-16">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gold mb-5">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-primary-foreground">Our Services</h1>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/85 max-w-2xl mx-auto">Expert care for every stage of your natural hair journey. Each service is personalized to your unique needs and goals.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-md overflow-hidden group flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { if (e.currentTarget.src.indexOf('/images/fallback.jpg') === -1) e.currentTarget.src = '/images/fallback.jpg'; }}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-gold mb-2 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" /> {s.time}
                </p>
                <h3 className="text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1 line-clamp-3">{s.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {s.features.slice(0, 3).map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-gold mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-medium text-lg text-gold">{s.price}</span>
                  <Link to="/book" search={{ service: s.slug }} className="bg-dark text-primary-foreground px-4 py-2 rounded-md text-sm hover:bg-dark/90">Book</Link>
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
