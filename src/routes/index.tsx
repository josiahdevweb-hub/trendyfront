import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Gem, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";

export const Route = createFileRoute("/")({ component: Home });

const heroPoster = "https://images.unsplash.com/photo-1653263176001-c38579e250df?w=1920&q=85";

const services = [
  {
    title: "Sisterlocks",
    price: "From £350",
    desc: "Precision micro locs for a versatile, manageable style",
    img: "https://images.unsplash.com/photo-1653263171083-71aad2fc6dfb?w=800&q=80",
  },
  {
    title: "Microlocs",
    price: "From £280",
    desc: "Small, uniform locs perfect for styling flexibility",
    img: "https://images.unsplash.com/photo-1653263176001-c38579e250df?w=800&q=80",
  },
  {
    title: "Traditional Locs",
    price: "From £180",
    desc: "Classic freeform or cultivated dreadlocks",
    img: "https://images.unsplash.com/photo-1653263171267-1cf1776f04d2?w=800&q=80",
  },
  {
    title: "Retightening",
    price: "From £85",
    desc: "Maintenance for healthy, neat locs",
    img: "https://images.unsplash.com/photo-1653263169788-9332cdbf07f5?w=800&q=80",
  },
  {
    title: "Loc Styling",
    price: "From £120",
    desc: "Special occasion updos and creative styling",
    img: "https://images.unsplash.com/photo-1653263169989-f696b66fedd7?w=600&q=80",
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

const premiumCards = [
  {
    icon: Users,
    title: "Expert Stylists",
    desc: "Certified loc specialists with years of dedicated expertise in every technique.",
  },
  {
    icon: Gem,
    title: "Premium Loc Care Products",
    desc: "Salon-grade, natural formulations that nourish, protect, and elevate your hair.",
  },
  {
    icon: Sparkles,
    title: "Personalized Hair Experience",
    desc: "Bespoke consultations and treatments tailored to your unique hair journey.",
  },
];

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  useEffect(() => {
    setMounted(true);
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const el = whyRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero with local video */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
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
                src="https://images.unsplash.com/photo-1653263176001-c38579e250df?w=700&q=85"
                alt="Stylist at work"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1653263171083-71aad2fc6dfb?w=500&q=85"
                alt="Loc detail"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1653263169989-f696b66fedd7?w=500&q=85"
                alt="Salon interior"
                loading="lazy"
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


          <Carousel
            opts={{ align: "start", loop: true, dragFree: false }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((s) => (
                <CarouselItem key={s.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-md overflow-hidden group transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl h-full">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

      {/* Why — premium 3-card showcase */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Why Choose Trendylocs</p>
            <h2 className="text-4xl md:text-5xl mb-5 font-serif">A premium experience</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-light text-lg leading-relaxed">
              Every visit is crafted around your hair, your time, and your comfort.
            </p>
          </div>

          <div ref={whyRef} className="grid md:grid-cols-3 gap-8">
            {premiumCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`group transition-all duration-700 ease-out hover:-translate-y-2.5 hover:scale-[1.03] ${
                    whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative rounded-[20px] p-[1px] bg-gradient-to-br from-gold/30 via-border/40 to-gold/20 transition-all duration-500 group-hover:from-gold/50 group-hover:via-gold/30 group-hover:to-gold/40 group-hover:shadow-[0_0_50px_-15px_rgba(200,160,80,0.25)]">
                    <div className="relative h-full rounded-[19px] bg-gradient-to-br from-card/95 via-card/80 to-card/60 backdrop-blur-2xl p-8 md:p-10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative mb-6 inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-gold/15 to-transparent items-center justify-center border border-gold/10 group-hover:from-gold/25 group-hover:border-gold/20 transition-all duration-500">
                        <Icon className="h-7 w-7 text-gold" />
                      </div>

                      <h3 className="relative text-xl md:text-2xl mb-3 font-semibold tracking-tight">
                        {card.title}
                      </h3>
                      <p className="relative text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
