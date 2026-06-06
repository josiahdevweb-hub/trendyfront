import { Link, Outlet } from "@tanstack/react-router";
import { PageLoader } from "@/components/PageLoader";
import { RouteTransitionLoader } from "@/components/RouteTransitionLoader";
import { useSmartImages } from "@/hooks/use-smart-images";
import {
  CalendarCheck,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Scissors,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/trendylocs-logo-global.png.asset.json";

function TopBar() {
  return (
    <div className="hidden md:block bg-dark text-primary-foreground/80 border-b border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-[11px] tracking-wide">
        <div className="flex items-center gap-5">
          <a href="tel:+44123456789" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3 w-3 text-gold" />
            <span>+447838328131</span>
          </a>
          <a
            href="mailto:info@trendylocs.com"
            className="hidden lg:flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Mail className="h-3 w-3 text-gold" />
            <span>gina@trendylocs.com</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" />
            <span>Main location: 41 Cross Street. Sale. M33 7FT. Manchester</span>
          </span>
          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" />
            <span> 415 Pollard Street East. Pollard Yard. M40 7QX. Unit 105</span>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-gold" />
            <span>Mon - Fri · 9:30am–5:30pm</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/trendylocs_uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold transition-colors"
            >
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
    <header className="sticky top-0 z-40 bg-dark text-primary-foreground border-b border-primary-foreground/10 shadow-sm">
      <TopBar />
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" aria-label="Trendylocs — home" className="flex items-center gap-2.5 group min-w-0">
          <img
            src={logo.url}
            alt="Trendylocs logo"
            width={64}
            height={64}
            className="h-11 w-11 md:h-16 md:w-16 object-contain transition-transform group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-sm md:text-base font-medium tracking-[0.16em] text-primary-foreground/90 truncate">
              TRENDYLOCS
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-gold/80 md:hidden">Manchester</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-primary-foreground/75 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold border-b-2 border-gold pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-primary-foreground">
          <a
            href="https://wa.me/447838328131"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Trendylocs"
            className="hidden sm:inline-flex hover:text-gold transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Link to="/book" aria-label="Book appointment" className="md:hidden hover:text-gold transition-colors">
            <CalendarCheck className="h-5 w-5" />
          </Link>
          <Link
            to="/book"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground px-5 py-2.5 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            <Scissors className="h-4 w-4" /> Book Appointment
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-primary-foreground/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-dark px-6 py-4 flex flex-col gap-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-sm py-1 text-primary-foreground/80 hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-3 pt-4 border-t border-primary-foreground/10 flex flex-col gap-2 text-xs text-primary-foreground/60">
            <a href="tel:+44123456789" className="flex items-center gap-2 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" />
              <span>+447838328131</span>
            </a>
            <a href="mailto:info@trendylocs.com" className="flex items-center gap-2 hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" />
              <span>gina@trendylocs.com</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span> 41 Cross Street. Sale. M33 7FT. Manchester</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" />
              <span>Mon – Fri · 9:30am – 5:30pm</span>
            </span>
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
            <img
              src={logo.url}
              alt="Trendylocs logo"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 object-contain"
            />
            <div className="text-base font-medium tracking-[0.16em] text-primary-foreground/90">TRENDYLOCS</div>
          </div>

          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Manchester's premier natural hair and locs salon. Celebrating the beauty of natural hair.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="hover:text-gold">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-gold">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {nav.slice(1, 5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Sisterlocks™</li>
            <li>Microlocs</li>
            <li>Traditional Locs</li>
            <li>Retightening</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li> 41 Cross Street. Sale. M33 7FT. Manchester</li>
            <li>
              <a href="tel:+447838328131" className="hover:text-gold">
                +447838328131
              </a>
            </li>
            <li>
              <a href="mailto:gina@trendylocs.com" className="hover:text-gold">
                gina@trendylocs.com
              </a>
            </li>
            <li>Mon – Fri: 9:30am – 5:30pm</li>
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
      <Link
        to="/book"
        className="block w-full text-center bg-gold text-gold-foreground py-3 rounded-md text-sm font-medium hover:opacity-90"
      >
        Book Appointment
      </Link>
    </div>
  );
}

export function Layout() {
  useSmartImages();
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <RouteTransitionLoader />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
