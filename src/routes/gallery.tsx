import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Trendylocs" },
      {
        name: "description",
        content:
          "Explore our portfolio of beautiful transformations and styling work.",
      },
    ],
  }),
  component: Gallery,
});

const items = [
  { title: "Sisterlocks™ Installation", desc: "Fresh Sisterlocks™ with precision parting", cat: "Sisterlocks™", img: "/images/styles/sisterlocks.jpg" },
  { title: "Microlocs Transformation", desc: "Beautiful microlocs after 6 months", cat: "Microlocs", img: "/images/Gallery/Microlocs1.jpeg" },
  { title: "Traditional Locs", desc: "Mature locs with healthy shine", cat: "Traditional Locs", img: "/images/styles/traditional-locs.jpg" },
  { title: "Elegant Updo", desc: "Special occasion loc styling", cat: "Styling", img: "/images/styles/styling.jpg" },
  { title: "Sisterlocks™ Styling", desc: "Versatile Sisterlocks™ everyday wear", cat: "Sisterlocks™", img: "/images/styles/sisterlocks.jpg" },
  { title: "Microlocs Journey", desc: "1-year microlocs growth progress", cat: "Microlocs", img: "/images/styles/microlocs.jpg" },
  { title: "Freeform Locs", desc: "Natural freeform organic texture", cat: "Traditional Locs", img: "/images/styles/traditional-locs.jpg" },
  { title: "Half-Up Style", desc: "Casual half-up loc styling", cat: "Styling", img: "/images/styles/updo.jpg" },
  { title: "Mature Sisterlocks™", desc: "3-year Sisterlocks™ beautiful texture", cat: "Sisterlocks™", img: "/images/styles/mature-locs.jpg" },
  { title: "Long Locs", desc: "Long, healthy traditional locs", cat: "Traditional Locs", img: "/images/styles/long-locs.jpg" },
  { title: "Salon Interior", desc: "Our luxury salon space", cat: "Styling", img: "/images/salon/interior.jpg" },
];
const cats = ["All", "Sisterlocks™", "Microlocs", "Traditional Locs", "Styling"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Portfolio</p>
          <h1 className="text-3xl md:text-4xl mb-3">Our Gallery</h1>
          <p className="text-base text-primary-foreground/70">
            Explore our portfolio of beautiful transformations and styling work
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm border transition-colors ${
                cat === c
                  ? "bg-dark text-primary-foreground border-dark"
                  : "border-border hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry via CSS columns — denser, smaller tiles */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 [column-fill:_balance]">
          {filtered.map((i, idx) => (
            <figure
              key={i.title}
              className="mb-3 sm:mb-4 break-inside-avoid group cursor-zoom-in"
              onClick={() => setOpen(idx)}
            >
              <div className="overflow-hidden rounded-md shadow-sm relative">
                <img
                  src={i.img}
                  alt={i.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <figcaption className="pt-2">
                <h3 className="text-sm">{i.title}</h3>
                <p className="text-[11px] text-muted-foreground">{i.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {open !== null && (
        <Lightbox
          items={filtered}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((o) => (o === null ? o : (o - 1 + filtered.length) % filtered.length))}
          onNext={() => setOpen((o) => (o === null ? o : (o + 1) % filtered.length))}
        />
      )}

      <section className="bg-secondary/40 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl mb-4">Ready for Your Transformation?</h2>
          <p className="text-muted-foreground mb-8">
            Book your consultation today and let's create your dream locs
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-dark text-primary-foreground px-8 py-3.5 rounded-md hover:bg-dark/90"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: { title: string; desc: string; img: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const item = items[index];
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div
        className="relative w-full h-full flex flex-col items-center justify-center px-4 py-16 md:py-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.img}
          alt={item.title}
          className="max-w-full max-h-[calc(100vh-9rem)] object-contain rounded-md shadow-2xl"
        />
        <div className="text-center text-white pt-5">
          <p className="font-serif text-xl md:text-2xl">{item.title}</p>
          <p className="text-sm text-white/70 mt-1">{item.desc}</p>
          <p className="text-[11px] text-white/40 mt-2">{index + 1} / {items.length}</p>
        </div>
      </div>
    </div>
  );
}
