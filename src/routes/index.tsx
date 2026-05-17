import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Leaf, Gem } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const services = [
  { title: "Sisterlocks", price: "From £350", desc: "Precision micro locs for a versatile, manageable style", img: "https://images.unsplash.com/photo-1653263171083-71aad2fc6dfb?w=800&q=80" },
  { title: "Microlocs", price: "From £280", desc: "Small, uniform locs perfect for styling flexibility", img: "https://images.unsplash.com/photo-1653263176001-c38579e250df?w=800&q=80" },
  { title: "Traditional Locs", price: "From £180", desc: "Classic freeform or cultivated dreadlocks", img: "https://images.unsplash.com/photo-1653263171267-1cf1776f04d2?w=800&q=80" },
  { title: "Retightening", price: "From £85", desc: "Maintenance for healthy, neat locs", img: "https://images.unsplash.com/photo-1653263169788-9332cdbf07f5?w=800&q=80" },
];

const gallery = [
  "https://images.unsplash.com/photo-1653263169989-f696b66fedd7?w=600&q=80",
  "https://images.unsplash.com/photo-1653263169791-d1b35abd8f89?w=600&q=80",
  "https://images.unsplash.com/photo-1653263170120-573922b5b820?w=600&q=80",
  "https://images.unsplash.com/photo-1653263171094-0ca6b47047ac?w=600&q=80",
  "https://images.unsplash.com/photo-1653263171082-73c98f40edd1?w=600&q=80",
  "https://images.unsplash.com/photo-1653263169792-ee58037099c5?w=600&q=80",
];

const testimonials = [
  { quote: "The best decision I ever made! My sisterlocks are beautiful and the service was exceptional.", name: "Amara Johnson", service: "Sisterlocks" },
  { quote: "Professional, knowledgeable, and so welcoming. I finally found my loc specialist!", name: "Kendra Williams", service: "Microlocs" },
  { quote: "My hair has never been healthier. The expertise here is unmatched.", name: "Nia Thompson", service: "Natural Hair Care" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1653263176001-c38579e250df?w=1920&q=85"
          alt="Natural hair specialist"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <h1 className="font-serif text-6xl md:text-8xl mb-6">Proudly Natural.</h1>
          <p className="text-lg md:text-xl text-white/90 mb-10">Manchester's Premier Locs & Natural Hair Specialist</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-md hover:opacity-90 transition">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/shop" className="inline-flex items-center bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 rounded-md hover:bg-white/20 transition">
              Shop Products
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Welcome to Trendylocs</p>
          <h2 className="text-4xl md:text-5xl mb-6">Where natural hair is celebrated.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are a premium natural hair and locs salon dedicated to celebrating and nurturing the beauty of textured hair. Our expertise spans Sisterlocks, Microlocs, Traditional Locs, and comprehensive natural hair care.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With certified training and years of experience, we provide personalized care in a luxury, welcoming environment.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-foreground border-b border-gold pb-1 hover:gap-3 transition-all">
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-md">
          <img src="https://images.unsplash.com/photo-1653263176001-c38579e250df?w=900&q=85" alt="Natural hair specialist" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl">Expert care for every stage<br/>of your natural hair journey</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-card rounded-md overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <p className="text-gold font-medium">{s.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 bg-dark text-primary-foreground px-7 py-3.5 rounded-md hover:bg-dark/90 transition">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Our Transformations</p>
          <h2 className="text-4xl md:text-5xl">See the beauty we help create</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-md">
              <img src={src} alt={`Transformation ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-foreground border-b border-gold pb-1">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="border border-primary-foreground/10 rounded-md p-8">
                <p className="font-serif italic text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-gold">{t.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Why Choose Trendylocs</p>
          <h2 className="text-4xl md:text-5xl">A premium experience</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: "Certified Expertise", desc: "Fully trained and certified in Sisterlocks, Microlocs, and natural hair care techniques" },
            { icon: Leaf, title: "Natural Products", desc: "We use premium, natural products that nourish and protect your hair" },
            { icon: Gem, title: "Luxury Experience", desc: "Enjoy a premium, relaxing salon experience tailored to your needs" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-8">
              <div className="inline-flex h-16 w-16 rounded-full bg-gold/20 items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl mb-3">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">Subscribe for hair care tips, exclusive offers, and updates</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:border-gold" />
            <button className="bg-dark text-primary-foreground px-6 rounded-md hover:bg-dark/90">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
