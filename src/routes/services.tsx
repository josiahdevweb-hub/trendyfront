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
  { title: "Sisterlocks", price: "From £350", time: "8-12 hours", desc: "Precision micro locs created using a specialized tool and technique. Perfect for those seeking a versatile, low-manipulation protective style.", img: "https://images.unsplash.com/photo-1653263171083-71aad2fc6dfb?w=900&q=80", features: ["Initial consultation included", "Precision parting and installation", "Aftercare kit and instructions", "Follow-up appointment guidance", "Lifetime installation warranty"] },
  { title: "Microlocs", price: "From £280", time: "6-10 hours", desc: "Small, uniform locs installed using coiling, braiding, or interlocking. Offers styling flexibility with manageability.", img: "https://images.unsplash.com/photo-1653263176001-c38579e250df?w=900&q=80", features: ["Consultation to determine best method", "Professional installation", "Styling recommendations", "Maintenance schedule planning", "Product recommendations"] },
  { title: "Traditional Locs", price: "From £180", time: "4-8 hours", desc: "Classic dreadlocks created through various methods including two-strand twists, coils, or freeform. A timeless protective style.", img: "https://images.unsplash.com/photo-1653263171267-1cf1776f04d2?w=900&q=80", features: ["Multiple installation methods available", "Customized parting pattern", "Natural or cultivated options", "Maintenance guidance", "Growth tracking"] },
  { title: "Retightening", price: "From £85", time: "2-4 hours", desc: "Essential maintenance service to keep your locs neat, healthy, and mature properly. Recommended every 4-6 weeks.", img: "https://images.unsplash.com/photo-1653263169788-9332cdbf07f5?w=900&q=80", features: ["Root maintenance", "Scalp cleansing and treatment", "Loc health assessment", "Styling included", "Next appointment scheduling"] },
  { title: "Starter Locs", price: "From £150", time: "3-6 hours", desc: "Begin your loc journey with professional starter locs using your preferred method. Includes full consultation.", img: "https://images.unsplash.com/photo-1653263169989-f696b66fedd7?w=900&q=80", features: ["In-depth consultation", "Method selection guidance", "Professional installation", "Starter care package", "Educational resources"] },
  { title: "Loc Styling", price: "From £45", time: "1-2 hours", desc: "Creative styling services for special occasions or everyday wear. From updos to intricate designs.", img: "https://images.unsplash.com/photo-1653263169791-d1b35abd8f89?w=900&q=80", features: ["Consultation on desired style", "Professional styling", "Loc-safe accessories", "Style longevity tips", "Photo-ready finish"] },
  { title: "Loc Colour", price: "From £120", time: "3-5 hours", desc: "Safe, professional colour services for locs. From subtle highlights to bold transformations.", img: "https://images.unsplash.com/photo-1653263170120-573922b5b820?w=900&q=80", features: ["Colour consultation", "Strand testing", "Professional application", "Deep conditioning treatment", "Colour maintenance guidance"] },
  { title: "Consultation", price: "Free", time: "30-45 minutes", desc: "Personalized one-on-one consultation to discuss your hair goals, assess your hair, and create a care plan.", img: "https://images.unsplash.com/photo-1653263171094-0ca6b47047ac?w=900&q=80", features: ["Hair and scalp assessment", "Goal discussion", "Method recommendations", "Timeline and pricing", "Question and answer session"] },
];

function Services() {
  return (
    <>
      <section className="bg-dark text-primary-foreground py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">What We Offer</p>
          <h1 className="text-5xl md:text-7xl mb-6">Our Services</h1>
          <p className="text-lg text-primary-foreground/70">Expert care for every stage of your natural hair journey. Each service is personalized to your unique needs and goals.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24 space-y-24">
        {services.map((s, i) => (
          <section key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex gap-6 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Price</p>
                  <p className="text-gold text-xl font-medium">{s.price}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Duration</p>
                  <p className="text-xl flex items-center gap-2"><Clock className="h-4 w-4" />{s.time}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-8">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex bg-dark text-primary-foreground px-6 py-3 rounded-md hover:bg-dark/90">Book This Service</Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-md">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            </div>
          </section>
        ))}
      </div>

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
          <Link to="/contact" className="inline-flex bg-gold text-gold-foreground px-8 py-3.5 rounded-md hover:opacity-90">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
