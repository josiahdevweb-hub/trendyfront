import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  { title: "Sisterlocks Installation", desc: "Fresh sisterlocks with precision parting", cat: "Sisterlocks", img: "https://images.unsplash.com/photo-1653263171083-71aad2fc6dfb?w=900&q=80" },
  { title: "Microlocs Transformation", desc: "Beautiful microlocs after 6 months", cat: "Microlocs", img: "https://images.unsplash.com/photo-1653263176001-c38579e250df?w=900&q=80" },
  { title: "Traditional Locs", desc: "Mature locs with healthy shine", cat: "Traditional Locs", img: "https://images.unsplash.com/photo-1653263171267-1cf1776f04d2?w=900&q=80" },
  { title: "Elegant Updo", desc: "Special occasion loc styling", cat: "Styling", img: "https://images.unsplash.com/photo-1653263169788-9332cdbf07f5?w=900&q=80" },
  { title: "Sisterlocks Styling", desc: "Versatile sisterlocks everyday wear", cat: "Sisterlocks", img: "https://images.unsplash.com/photo-1653263169989-f696b66fedd7?w=900&q=80" },
  { title: "Microlocs Journey", desc: "1-year microlocs growth progress", cat: "Microlocs", img: "https://images.unsplash.com/photo-1653263169791-d1b35abd8f89?w=900&q=80" },
  { title: "Freeform Locs", desc: "Natural freeform organic texture", cat: "Traditional Locs", img: "https://images.unsplash.com/photo-1653263170120-573922b5b820?w=900&q=80" },
  { title: "Half-Up Style", desc: "Casual half-up loc styling", cat: "Styling", img: "https://images.unsplash.com/photo-1653263171094-0ca6b47047ac?w=900&q=80" },
  { title: "Mature Sisterlocks", desc: "3-year sisterlocks beautiful texture", cat: "Sisterlocks", img: "https://images.unsplash.com/photo-1653263171082-73c98f40edd1?w=900&q=80" },
  { title: "Long Locs", desc: "Long, healthy traditional locs", cat: "Traditional Locs", img: "https://images.unsplash.com/photo-1653263169792-ee58037099c5?w=900&q=80" },
  { title: "Salon Interior", desc: "Our luxury salon space", cat: "Styling", img: "https://images.unsplash.com/photo-1653263169791-d1b35abd8f89?w=900&q=80" },
];
const cats = ["All", "Sisterlocks", "Microlocs", "Traditional Locs", "Styling"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <>
      <section className="bg-dark text-primary-foreground py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl mb-6">Our Gallery</h1>
          <p className="text-lg text-primary-foreground/70">
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

        {/* Masonry via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
          {filtered.map((i, idx) => (
            <figure
              key={i.title}
              className="mb-4 sm:mb-5 break-inside-avoid group cursor-pointer"
              onClick={() => setOpen(idx)}
            >
              <div className="overflow-hidden rounded-md shadow-sm">
                <img
                  src={i.img}
                  alt={i.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="pt-3">
                <h3 className="text-base">{i.title}</h3>
                <p className="text-xs text-muted-foreground">{i.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
          {open !== null && (
            <div className="relative">
              <img
                src={filtered[open].img}
                alt={filtered[open].title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-md"
              />
              <div className="text-center text-white pt-4">
                <p className="font-serif text-xl">{filtered[open].title}</p>
                <p className="text-sm text-white/70">{filtered[open].desc}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
