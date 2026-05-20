import { createFileRoute } from "@tanstack/react-router";
import { Star, Truck, Leaf, Heart } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [
    { title: "Shop — Trendylocs" },
    { name: "description", content: "Premium hair care products for healthy, beautiful locs and natural hair." },
  ]}),
  component: Shop,
});

const products = [
  { name: "Loc Growth Oil", cat: "Hair Care", desc: "Nourishing blend of natural oils to promote healthy loc growth", reviews: 127, price: "£24.99", img: "/images/products/growth-oil.jpg" },
  { name: "Moisturizing Shampoo", cat: "Hair Care", desc: "Gentle, sulfate-free shampoo for locs and natural hair", reviews: 94, price: "£18.99", img: "/images/products/shampoo.jpg" },
  { name: "Satin Bonnet", cat: "Accessories", desc: "Premium satin bonnet to protect your locs while sleeping", reviews: 203, price: "£12.99", img: "/images/products/bonnet.jpg" },
  { name: "Loc Retwist Gel", cat: "Hair Care", desc: "Strong hold gel for clean, defined retwists", reviews: 156, price: "£16.99", img: "/images/products/retwist-gel.jpg" },
  { name: "Edge Control", cat: "Hair Care", desc: "Natural edge control for sleek, lasting hold", reviews: 88, price: "£14.99", img: "/images/products/edge-control.jpg" },
  { name: "Satin Pillowcase", cat: "Accessories", desc: "Luxurious satin pillowcase to reduce friction and breakage", reviews: 142, price: "£22.99", img: "/images/products/pillowcase.jpg" },
  { name: "Loc Jewelry Set", cat: "Accessories", desc: "Beautiful gold-tone loc jewelry for special occasions", reviews: 67, price: "£29.99", img: "/images/products/jewelry.jpg" },
  { name: "Hair Care Bundle", cat: "Bundles", desc: "Complete care set: shampoo, oil, and gel", reviews: 231, price: "£54.99", img: "/images/products/bundle.jpg", badge: "Best Value" },
];

function Shop() {
  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Curated Essentials</p>
          <h1 className="text-3xl md:text-4xl mb-3">Shop</h1>
          <p className="text-base text-primary-foreground/70">Premium hair care products for healthy, beautiful locs and natural hair</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.name} className="bg-card rounded-md overflow-hidden group flex flex-col">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" decoding="async" className="w-full h-auto block group-hover:scale-105 transition-transform duration-500" />
                {p.badge && <span className="absolute top-3 left-3 bg-gold text-gold-foreground text-xs px-3 py-1 rounded-full">{p.badge}</span>}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-gold mb-2">{p.cat}</p>
                <h3 className="text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1">{p.desc}</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                  <span className="text-xs text-muted-foreground ml-1">({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">{p.price}</span>
                  <button className="bg-dark text-primary-foreground px-4 py-2 rounded-md text-sm hover:bg-dark/90">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders over £50" },
            { icon: Leaf, title: "Natural Products", desc: "100% natural ingredients" },
            { icon: Heart, title: "30-Day Returns", desc: "Money-back guarantee" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="inline-flex h-14 w-14 rounded-full bg-gold/20 items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
