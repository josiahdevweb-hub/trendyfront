import { Link, Outlet } from "@tanstack/react-router";
import { ShoppingBag, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/trendylocs-logo.png";

function TopBar() {
  return (
    <div className="hidden md:block bg-dark text-primary-foreground/80 border-b border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-[11px] tracking-wide">
        <div className="flex items-center gap-5">
          <a href="tel:+44123456789" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3 w-3 text-gold" /> +44 123 456 789
          </a>
          <a href="mailto:info@trendylocs.com" className="hidden lg:flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail className="h-3 w-3 text-gold" /> info@trendylocs.com
          </a>
          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" /> Manchester, UK
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-gold" /> Tue–Sat · 9am–7pm
          </span>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/trendylocs" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-gold transition-colors">
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/shop", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <TopBar />
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" aria-label="Trendylocs — home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Trendylocs logo"
            width={56}
            height={56}
            className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline font-serif text-base md:text-lg tracking-[0.28em] text-foreground">
            TRENDYLOCS
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground border-b-2 border-gold pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+44123456789" aria-label="Call Trendylocs" className="md:hidden text-foreground/80 hover:text-gold transition-colors">
            <Phone className="h-5 w-5" />
          </a>
          <button className="relative" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gold text-[10px] flex items-center justify-center text-gold-foreground">0</span>
          </button>
          <Link to="/book" className="hidden md:inline-flex bg-dark text-primary-foreground px-5 py-2.5 rounded-md text-sm hover:bg-dark/90 transition-colors">
            Book Appointment
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="space-y-1.5"><span className="block w-5 h-px bg-foreground"/><span className="block w-5 h-px bg-foreground"/></div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm py-1">{n.label}</Link>
          ))}
          <div className="mt-3 pt-4 border-t border-border flex flex-col gap-2 text-xs text-muted-foreground">
            <a href="tel:+44123456789" className="flex items-center gap-2 hover:text-gold"><Phone className="h-3.5 w-3.5 text-gold" /> +44 123 456 789</a>
            <a href="mailto:info@trendylocs.com" className="flex items-center gap-2 hover:text-gold"><Mail className="h-3.5 w-3.5 text-gold" /> info@trendylocs.com</a>
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> Manchester, UK</span>
            <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> Tue–Sat · 9am–7pm</span>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Trendylocs logo" width={48} height={48} loading="lazy" className="h-12 w-12 object-contain" />
            <div className="font-serif text-lg tracking-[0.28em]">TRENDYLOCS</div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Manchester's premier natural hair and locs salon. Celebrating the beauty of textured hair.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5"/></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook className="h-5 w-5"/></a>
            <a href="#" aria-label="WhatsApp" className="hover:text-gold"><MessageCircle className="h-5 w-5"/></a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {nav.slice(1, 5).map(n => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Sisterlocks</li><li>Microlocs</li><li>Traditional Locs</li><li>Retightening</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Manchester, UK</li>
            <li><a href="tel:+44123456789" className="hover:text-gold">+44 123 456 789</a></li>
            <li><a href="mailto:info@trendylocs.com" className="hover:text-gold">info@trendylocs.com</a></li>
            <li>Tue–Sat: 9am–7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Trendylocs. All rights reserved.
      </div>
    </footer>
  );
}

function MobileBookBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border px-4 py-3">
      <Link to="/book" className="block w-full text-center bg-gold text-gold-foreground py-3 rounded-md text-sm font-medium hover:opacity-90">
        Book Appointment
      </Link>
    </div>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0"><Outlet /></main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}
