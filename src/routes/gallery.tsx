import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Trendylocs" },
    { name: "description", content: "Explore our portfolio of beautiful transformations and styling work." },
  ]}),
  component: Gallery,
});

const items = [
  { title: "Sisterlocks Installation", desc: "Fresh sisterlocks installation with precision parting", cat: "Sisterlocks", img: "https://images.unsplash.com/photo-1653263171083-71aad2fc6dfb?w=800&q=80" },
  { title: "Microlocs Transformation", desc: "Beautiful microlocs after 6 months of growth", cat: "Microlocs", img: "https://images.unsplash.com/photo-1653263176001-c38579e250df?w=800&q=80" },
  { title: "Traditional Locs", desc: "Mature traditional locs with healthy shine", cat: "Traditional Locs", img: "https://images.unsplash.com/photo-1653263171267-1cf1776f04d2?w=800&q=80" },
  { title: "Elegant Updo", desc: "Special occasion loc updo styling", cat: "Styling", img: "https://images.unsplash.com/photo-1653263169788-9332cdbf07f5?w=800&q=80" },
  { title: "Sisterlocks Styling", desc: "Versatile sisterlocks styled for everyday wear", cat: "Sisterlocks", img: "https://images.unsplash.com/photo-1653263169989-f696b66fedd7?w=800&q=80" },
  { title: "Microlocs Journey", desc: "1-year microlocs growth progress", cat: "Microlocs", img: "https://images.unsplash.com/photo-1653263169791-d1b35abd8f89?w=800&q=80" },
  { title: "Freeform Locs", desc: "Natural freeform locs with organic texture", cat: "Traditional Locs", img: "https://images.unsplash.com/photo-1653263170120-573922b5b820?w=800&q=80" },
  { title: "Half-Up Style", desc: "Casual half-up loc styling", cat: "Styling", img: "https://images.unsplash.com/photo-1653263171094-0ca6b47047ac?w=800&q=80" },
  { title: "Mature Sisterlocks", desc: "3-year sisterlocks with beautiful texture", cat: "Sisterlocks", img: "https://images.unsplash.com/photo-1653263171082-73c98f40edd1?w=800&q=80" },
  { title: "Long Locs", desc: "Long, healthy traditional locs", cat: "Traditional Locs", img: "https://images.unsplash.com/photo-1653263169792-ee58037099c5?w=800&q=80" },
];
const cats = ["All", "Sisterlocks", "Microlocs", "Traditional Locs", "Styling"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? items : items.filter(i => i.cat === cat);
  return (
    <>
      <section className="bg-dark text-primary-foreground py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl mb-6">Our Gallery</h1>
          <p className="text-lg text-primary-foreground/70">Explore our portfolio of beautiful transformations and styling work</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 rounded-full text-sm border transition-colors ${cat === c ? "bg-dark text-primary-foreground border-dark" : "border-border hover:border-gold"}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(i => (
            <figure key={i.title} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-md mb-3">
                <img src={i.img} alt={i.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg">{i.title}</h3>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl mb-4">Ready for Your Transformation?</h2>
          <p className="text-muted-foreground mb-8">Book your consultation today and let's create your dream locs</p>
          <Link to="/contact" className="inline-flex bg-dark text-primary-foreground px-8 py-3.5 rounded-md hover:bg-dark/90">Book Consultation</Link>
        </div>
      </section>
    </>
  );
}
