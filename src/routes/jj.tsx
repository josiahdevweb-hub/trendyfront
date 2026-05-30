import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trendylocs" },
      {
        name: "description",
        content:
          "Sisterlocks™, Microlocs, Traditional Locs, retightening, styling and more.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    slug: "sisterlocks",
    title: "Sisterlocks™",
    price: "From £350",
    time: "8–12 hours",
    desc: "Precision micro locs created using a specialized tool and technique. Perfect for those seeking a versatile, low-manipulation protective style.",
    img: "/images/styles/sisterlocks.jpg",
    features: [
      "Initial consultation included",
      "Precision parting and installation",
      "Aftercare kit and instructions",
      "Follow-up appointment guidance",
      "Lifetime installation warranty",
    ],
    tag: "Signature",
  },
  {
    slug: "microlocs",
    title: "Microlocs",
    price: "From £280",
    time: "6–10 hours",
    desc: "Small, uniform locs installed using coiling, braiding, or interlocking. Offers styling flexibility with manageability.",
    img: "/images/Gallery/Microlocs1.jpeg",
    features: [
      "Consultation to determine best method",
      "Professional installation",
      "Styling recommendations",
      "Maintenance schedule planning",
      "Product recommendations",
    ],
    tag: "Popular",
  },
  {
    slug: "traditional-locs",
    title: "Traditional Locs",
    price: "From £180",
    time: "4–8 hours",
    desc: "Classic dreadlocks created through various methods including two-strand twists, coils, or freeform. A timeless protective style.",
    img: "/images/styles/traditional-locs.jpg",
    features: [
      "Multiple installation methods available",
      "Customized parting pattern",
      "Natural or cultivated options",
      "Maintenance guidance",
      "Growth tracking",
    ],
    tag: "Timeless",
  },
  {
    slug: "retightening",
    title: "Retightening",
    price: "From £85",
    time: "2–4 hours",
    desc: "Essential maintenance service to keep your locs neat, healthy, and mature properly. Recommended every 4–6 weeks.",
    img: "/images/styles/retightening.jpg",
    features: [
      "Root maintenance",
      "Scalp cleansing and treatment",
      "Loc health assessment",
      "Styling included",
      "Next appointment scheduling",
    ],
    tag: "Maintenance",
  },
  {
    slug: "starter-locs",
    title: "Starter Locs",
    price: "From £150",
    time: "3–6 hours",
    desc: "Begin your loc journey with professional starter locs using your preferred method. Includes full consultation.",
    img: "/images/styles/mature-locs.jpg",
    features: [
      "In-depth consultation",
      "Method selection guidance",
      "Professional installation",
      "Starter care package",
      "Educational resources",
    ],
    tag: "New Journey",
  },
  {
    slug: "loc-styling",
    title: "Loc Styling",
    price: "From £45",
    time: "1–2 hours",
    desc: "Creative styling services for special occasions or everyday wear. From updos to intricate designs.",
    img: "/images/styles/styling.jpg",
    features: [
      "Consultation on desired style",
      "Professional styling",
      "Loc-safe accessories",
      "Style longevity tips",
      "Photo-ready finish",
    ],
    tag: "Creative",
  },
  {
    slug: "loc-colour",
    title: "Loc Colour",
    price: "From £120",
    time: "3–5 hours",
    desc: "Safe, professional colour services for locs. From subtle highlights to bold transformations.",
    img: "/images/styles/color.jpg",
    features: [
      "Colour consultation",
      "Strand testing",
      "Professional application",
      "Deep conditioning treatment",
      "Colour maintenance guidance",
    ],
    tag: "Transform",
  },
  {
    slug: "consultation",
    title: "Consultation",
    price: "Free",
    time: "30–45 min",
    desc: "Personalised one-on-one consultation to discuss your hair goals, assess your hair, and create a care plan.",
    img: "/images/styles/consultation.jpg",
    features: [
      "Hair and scalp assessment",
      "Goal discussion",
      "Method recommendations",
      "Timeline and pricing",
      "Question and answer session",
    ],
    tag: "Start Here",
  },
];

function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .services-page {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
        }

        /* Hero */
        .svc-hero {
          background-color: #0d0d0b;
          padding: 100px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .svc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,160,100,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .svc-hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #c4a064;
          margin-bottom: 20px;
        }
        .svc-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1;
          letter-spacing: -0.01em;
          margin-bottom: 28px;
        }
        .svc-hero-title em {
          font-style: italic;
          color: #c4a064;
        }
        .svc-hero-sub {
          font-size: 14px;
          color: rgba(245,240,232,0.45);
          letter-spacing: 0.08em;
          max-width: 400px;
          margin: 0 auto;
        }

        /* Grid layout */
        .svc-grid-section {
          padding: 100px 40px;
          background: #faf8f4;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Bento-style grid: alternating large + small */
        .svc-bento {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }

        /* Every card */
        .svc-card {
          position: relative;
          overflow: hidden;
          background: #fff;
          cursor: pointer;
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.04);
        }
        .svc-card:hover .svc-card-overlay {
          opacity: 1;
        }
        .svc-card:hover .svc-card-features {
          transform: translateY(0);
          opacity: 1;
        }

        /* Large hero cards: first and second span full row on alternating pattern */
        .svc-card--large {
          grid-column: span 1;
        }
        .svc-card--large .svc-card-img-wrap {
          aspect-ratio: 3/4;
        }
        .svc-card--small .svc-card-img-wrap {
          aspect-ratio: 4/5;
        }

        /* Wide accent card */
        .svc-card--wide {
          grid-column: span 2;
        }
        .svc-card--wide .svc-card-img-wrap {
          aspect-ratio: 21/9;
        }

        .svc-card-img-wrap {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .svc-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
          background: #1a1a18;
        }
        .svc-card-img-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a18 0%, #2a2720 50%, #1a1a18 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          color: rgba(196,160,100,0.2);
          letter-spacing: 0.1em;
        }

        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,13,11,0.85) 0%, rgba(13,13,11,0.2) 50%, transparent 100%);
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }

        .svc-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px 28px;
          z-index: 2;
        }

        .svc-card-tag {
          font-size: 9px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c4a064;
          margin-bottom: 8px;
          display: block;
        }

        .svc-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .svc-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .svc-card-price {
          font-size: 13px;
          color: #c4a064;
          font-weight: 400;
          letter-spacing: 0.05em;
        }
        .svc-card-time {
          font-size: 11px;
          color: rgba(245,240,232,0.45);
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.05em;
        }

        /* Hover reveal features */
        .svc-card-features {
          margin-top: 16px;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.35s ease;
        }
        .svc-card-desc {
          font-size: 12px;
          color: rgba(245,240,232,0.65);
          line-height: 1.7;
          margin-bottom: 16px;
          max-width: 340px;
        }
        .svc-card-book {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c4a064;
          text-decoration: none;
          border-bottom: 1px solid rgba(196,160,100,0.4);
          padding-bottom: 2px;
          transition: gap 0.2s ease, border-color 0.2s ease;
        }
        .svc-card-book:hover {
          gap: 12px;
          border-color: #c4a064;
        }

        /* Pricing strip */
        .svc-pricing {
          background: #0d0d0b;
          padding: 80px 40px;
        }
        .svc-pricing-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .svc-pricing-left h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .svc-pricing-left h2 em {
          font-style: italic;
          color: #c4a064;
        }
        .svc-pricing-left p {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.3);
          margin-top: 12px;
        }
        .svc-pricing-right ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .svc-pricing-right li {
          font-size: 13px;
          color: rgba(245,240,232,0.55);
          line-height: 1.9;
          padding-left: 18px;
          position: relative;
          letter-spacing: 0.03em;
        }
        .svc-pricing-right li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #c4a064;
          font-size: 10px;
        }

        /* CTA */
        .svc-cta {
          background: #f5f0e8;
          padding: 120px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .svc-cta::before {
          content: 'BOOK';
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(100px, 20vw, 240px);
          font-weight: 300;
          color: rgba(13,13,11,0.04);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.05em;
        }
        .svc-cta-label {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c4a064;
          margin-bottom: 20px;
        }
        .svc-cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 7vw, 88px);
          font-weight: 300;
          color: #0d0d0b;
          line-height: 1;
          margin-bottom: 32px;
        }
        .svc-cta h2 em {
          font-style: italic;
        }
        .svc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0d0d0b;
          color: #f5f0e8;
          padding: 16px 40px;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s ease, gap 0.2s ease;
        }
        .svc-cta-btn:hover {
          background: #c4a064;
          gap: 18px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .svc-bento {
            grid-template-columns: 1fr;
          }
          .svc-card--wide {
            grid-column: span 1;
          }
          .svc-card--wide .svc-card-img-wrap {
            aspect-ratio: 3/4;
          }
          .svc-pricing-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .svc-grid-section {
            padding: 60px 20px;
          }
        }
      `}</style>

      <div className="services-page">
        {/* Hero */}
        <section className="svc-hero">
          <p className="svc-hero-eyebrow">Trendylocs · London</p>
          <h1 className="svc-hero-title">
            Our <em>Services</em>
          </h1>
          <p className="svc-hero-sub">
            Expert care for every stage of your natural hair journey
          </p>
        </section>

        {/* Service Cards — Bento Grid */}
        <div style={{ background: "#faf8f4", padding: "80px 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
            <div className="svc-bento">
              {services.map((s, i) => {
                // Layout pattern: 0,1 normal | 2 wide | 3,4 normal | 5 wide | 6,7 normal
                const isWide = i === 2 || i === 5;
                const cardClass = isWide
                  ? "svc-card svc-card--wide"
                  : "svc-card svc-card--large";

                return (
                  <div key={s.slug} className={cardClass}>
                    <div className="svc-card-img-wrap">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const next = e.currentTarget.nextElementSibling as HTMLElement;
                          if (next) next.style.display = "flex";
                        }}
                        className="svc-card-img"
                      />
                      <div
                        className="svc-card-img-placeholder"
                        style={{ display: "none", position: "absolute", inset: 0 }}
                      >
                        {s.title[0]}
                      </div>
                    </div>
                    <div className="svc-card-overlay" />
                    <div className="svc-card-body">
                      <span className="svc-card-tag">{s.tag}</span>
                      <h3 className="svc-card-title">{s.title}</h3>
                      <div className="svc-card-meta">
                        <span className="svc-card-price">{s.price}</span>
                        <span className="svc-card-time">
                          <Clock size={10} />
                          {s.time}
                        </span>
                      </div>
                      <div className="svc-card-features">
                        <p className="svc-card-desc">{s.desc}</p>
                        <Link
                          to="/book"
                          search={{ service: s.slug }}
                          className="svc-card-book"
                        >
                          Book Now <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <section className="svc-pricing">
          <div className="svc-pricing-inner">
            <div className="svc-pricing-left">
              <h2>
                Honest,<br />
                <em>Transparent</em><br />
                Pricing
              </h2>
              <p>No hidden fees. Ever.</p>
            </div>
            <div className="svc-pricing-right">
              <ul>
                <li>All prices are starting rates; final quote given at consultation</li>
                <li>Prices vary by hair length, density, and complexity</li>
                <li>Payment plans available for installation services</li>
                <li>First-time clients receive a complimentary consultation</li>
                <li>We believe in clear, upfront pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="svc-cta">
          <p className="svc-cta-label">Begin your journey</p>
          <h2>
            Ready to<br />
            <em>Get Started?</em>
          </h2>
          <Link
            to="/book"
            search={{ service: "consultation" }}
            className="svc-cta-btn"
          >
            Book Free Consultation <ArrowRight size={14} />
          </Link>
        </section>
      </div>
    </>
  );
}

