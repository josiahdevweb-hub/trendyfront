import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Users, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";

export const Route = createFileRoute("/")({ component: Home });

const FALLBACK_IMG = "/images/fallback.jpg";
const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf(FALLBACK_IMG) === -1) e.currentTarget.src = FALLBACK_IMG;
};
const heroPoster = "/images/salon/interior.jpg";

const services = [
  {
    title: "Sisterlocks",
    price: "From £350",
    desc: "Precision micro locs for a versatile, manageable style",
    img: "/images/styles/sisterlocks.jpg",
  },
  {
    title: "Microlocs",
    price: "From £280",
    desc: "Small, uniform locs perfect for styling flexibility",
    img: "/images/styles/microlocs.jpg",
  },
  {
    title: "Traditional Locs",
    price: "From £180",
    desc: "Classic freeform or cultivated dreadlocks",
    img: "/images/styles/traditional-locs.jpg",
  },
  {
    title: "Retightening",
    price: "From £85",
    desc: "Maintenance for healthy, neat locs",
    img: "/images/styles/retightening.jpg",
  },
  {
    title: "Loc Styling",
    price: "From £120",
    desc: "Special occasion updos and creative styling",
    img: "/images/styles/styling.jpg",
  },
];

const testimonials = [
  {
    quote: "The best decision I ever made! My sisterlocks are beautiful and the service was exceptional.",
    name: "Amara Johnson",
    service: "Sisterlocks",
  },
  {
    quote: "Professional, knowledgeable, and so welcoming. I finally found my loc specialist!",
    name: "Kendra Williams",
    service: "Microlocs",
  },
  {
    quote: "My hair has never been healthier. The expertise here is unmatched.",
    name: "Nia Thompson",
    service: "Natural Hair Care",
  },
];

const whyCards = [
  { icon: Users, title: "Expert Stylists", desc: "Certified specialists with years of dedicated loc expertise" },
  { icon: Leaf, title: "Premium Products", desc: "Natural, salon-grade products that nourish every strand" },
  { icon: Heart, title: "Healthy Hair Focus", desc: "Techniques designed to protect and strengthen your hair" },
];

function Home() {
  const [mounted, setMounted] = useState(false);
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero with local image */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full overflow-hidden">
        <img
          src="/images/salon/interior.jpg"
          alt="Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          onError={onImgError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        <div
          className={`relative h-full flex flex-col items-center justify-center text-center px-6 text-white transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="uppercase tracking-[0.4em] text-xs text-gold mb-6">Trendylocs Salon</p>
          <h1 className="font-serif text-6xl md:text-8xl mb-6 leading-tight">Proudly Natural.</h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
            Nairobi's Premier Locs &amp; Natural Hair Specialist
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-md hover:opacity-90 hover:scale-[1.03] transition-all"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 rounded-md hover:bg-white/20 transition"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </section>

      {/* Compact Welcome */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Welcome to Trendylocs</p>
            <h2 className="text-3xl md:text-4xl mb-5 leading-tight">Where natural hair is celebrated.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Where natural hair is celebrated and cared for with expertise and intention. We are a premium natural hair
              and locs salon dedicated to enhancing and nurturing the beauty of textured hair through specialized
              services tailored to your unique hair journey. From Sisterlocks, Microlocs, and Traditional Locs to
              comprehensive natural hair care solutions, we provide professional care designed to promote healthy,
              beautiful, and thriving hair. Our salon combines skill, personalized attention, and a luxurious, welcoming
              atmosphere to create an experience where every client feels valued, confident, and empowered to embrace
              their natural beauty.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 bg-dark text-primary-foreground px-6 py-3 rounded-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_-5px_var(--gold)] hover:bg-dark/90"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-md row-span-2">
              <img
                src="/images/salon/stylish-work.jpg"
                alt="Stylist at work"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/images/salon/loc-detail.jpg"
                alt="Loc detail"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/images/salon/interior.jpg"
                alt="Salon interior"
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto leading-tight">
              Expert care for every stage of your hair journey
            </h2>
          </div>

          <Carousel opts={{ align: "start", loop: true, dragFree: false }} plugins={[autoplay]} className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((s) => (
                <CarouselItem key={s.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-md overflow-hidden group transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl h-full">
                    <div className="aspect-[4/5] w-full overflow-hidden bg-secondary/40">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        onError={onImgError}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                      <p className="text-gold font-medium">{s.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-dark text-primary-foreground px-7 py-3.5 rounded-md hover:bg-dark/90 hover:scale-[1.03] transition-all"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Transformations */}
      <BeforeAfterShowcase />

      {/* Testimonials */}
      <section className="bg-dark text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-5xl">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-primary-foreground/10 rounded-md p-8 hover:border-gold/50 transition"
              >
                <p className="font-serif italic text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-gold">{t.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why — premium cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Why Choose Trendylocs</p>
          <h2 className="text-3xl md:text-5xl mb-4">A premium experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Every visit is crafted around your hair, your time, and your comfort.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/40 animate-fade-in"
            >
              <div className="inline-flex h-14 w-14 rounded-xl bg-gold/15 items-center justify-center mb-5 group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                <Icon className="h-6 w-6 text-gold group-hover:text-gold-foreground transition-colors" />
              </div>
              <h3 className="text-xl mb-2 font-semibold">{title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{desc}</p>
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
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:border-gold"
            />
            <button className="bg-dark text-primary-foreground px-6 rounded-md hover:bg-dark/90">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
