import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Trendylocs" },
      { name: "description", content: "Get in touch with Trendylocs in Manchester to book or ask a question." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Say Hello</p>
          <h1 className="text-3xl md:text-4xl mb-3">Get In Touch</h1>
          <p className="text-base text-primary-foreground/70">
            We'd love to hear from you. Reach out to book an appointment or ask any questions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: MapPin, title: "Location", lines: ["41 Cross Street. Sale. M33 7FT. Manchester"] },
              { icon: Phone, title: "Phone", lines: ["+44 7 983 818 010"] },
              { icon: Mail, title: "Email", lines: ["gina@trendylocs.com"] },
              { icon: Clock, title: "Hours", lines: ["Mon – Fri: 9:30am – 5:30pm", "Sat – Fri: Closed"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="bg-card border border-border rounded-md p-6">
                <Icon className="h-5 w-5 text-gold mb-3" />
                <h3 className="text-lg mb-1">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-md p-8">
            <h3 className="text-2xl mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:border-gold text-sm"
              >
                <Instagram className="h-4 w-4" /> @trendylocs
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:border-gold text-sm"
              >
                <Facebook className="h-4 w-4" /> Trendylocs
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:border-gold text-sm"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <h4 className="text-lg mb-2">Book Online</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Use our Setmore booking system to schedule your appointment 24/7
            </p>
            <Link
              to="/book"
              className="inline-flex bg-gold text-gold-foreground px-6 py-2.5 rounded-md text-sm hover:opacity-90"
            >
              Book Now
            </Link>
          </div>
        </div>

        <form className="bg-card border border-border rounded-md p-8 space-y-5">
          <h2 className="text-3xl mb-2">Send Us a Message</h2>
          <div>
            <label className="block text-sm mb-2">Full Name *</label>
            <input
              required
              className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email Address *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Phone Number</label>
            <input className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm mb-2">Service Interested In</label>
            <select className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold">
              <option>Select a service</option>
              <option>Sisterlocks™</option>
              <option>Microlocs</option>
              <option>Traditional Locs</option>
              <option>Retightening</option>
              <option>Styling</option>
              <option>Free Consultation</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold"
            />
          </div>
          <button type="submit" className="w-full bg-dark text-primary-foreground py-3 rounded-md hover:bg-dark/90">
            Send Message
          </button>
        </form>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl mb-4">Visit Our Salon</h2>
            <p className="text-muted-foreground mb-6">
              41 Cross Street, Sale, M33 7FT, Manchester, United Kingdom
            </p>
            <div className="aspect-video overflow-hidden rounded-md border border-border">
              <iframe
                title="Trendylocs salon location — 41 Cross Street, Sale, M33 7FT, Manchester"
                src="https://www.google.com/maps?q=41+Cross+Street,+Sale,+M33+7FT,+Manchester,+United+Kingdom&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=41+Cross+Street,+Sale,+M33+7FT,+Manchester,+United+Kingdom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gold hover:underline"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">Check out our FAQ page for answers to common questions.</p>
            <Link
              to="/faq"
              className="self-start bg-dark text-primary-foreground px-7 py-3 rounded-md hover:bg-dark/90"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
