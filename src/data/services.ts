export type Service = {
  slug: string;
  title: string;
  price: string;
  time: string;
  desc: string;
  longDesc?: string;
  img: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "sisterlocks",
    title: "Sisterlocks™",
    price: "From £800",
    time: "10 hrs+",
    desc: "Precision-installed Sisterlocks™ — a celebration of natural hair with endless styling versatility.",
    longDesc:
      "Sisterlocks™ are tiny locks created by precision sectioning of hair using a specialist locking tool. The system was founded and trademarked by Dr. Joanne Cornwell in the United States and is one of the most technical loc methods available — which is why it must only be installed by a trained and certified consultant.\n\nSisterlocks™ free you from the products designed to alter your natural texture. Installation and maintenance are as close to natural as hair care can get.\n\nBefore we book your installation we invite you to a consultation where we assess your hair type, discuss locking patterns and install sample locs so you can see exactly how your hair will respond. Your first re-tightening is usually scheduled four weeks after installation, then every four to six weeks after that.\n\nWhy Sisterlocks™?\n• Thinnest hair looks fuller and more voluminous\n• Endless styling possibilities — updos, braids, curls and more\n• Light, free and low-product maintenance\n• No chemicals, no relaxers, no compromise",
    img: "/images/services/sisterlocsfar.jpg",
    features: [
      "Certified Sisterlocks™ consultant",
      "Full consultation before installation",
      "Precision sectioning and locking",
      "Sample locs installed at consultation",
      "First re-tightening guidance included",
    ],
  },
  {
    slug: "microlocs",
    title: "Microlocs",
    price: "From £500",
    time: "10 hrs",
    desc: "Small, uniform locs with great styling flexibility — installed by sectioning and interlocking.",
    longDesc:
      "Microlocs are a modern take on traditional locs, characterised by their small uniform size — typically 6 to 9 mm. They offer far more styling flexibility than larger locs, allowing for braids, updos, curls and even colour treatment once the hair has matured.\n\nInstallation begins with your consultation where we map a parting grid suited to your hair density and scalp health. Each loc is then created by sectioning the hair into tiny strands and interlocking them. Over the following months they mature into clean, uniform locs with a distinct character.\n\nMicrolocs sit between Sisterlocks™ and Traditional Locs in terms of size and maintenance commitment — a good middle ground for clients who want the look of small locs without the full Sisterlocks™ system.\n\nExact cost and duration are confirmed at consultation and depend on hair length and density.",
    img: "/images/services/locsestablishment.jpg",
    features: [
      "Consultation and parting grid design",
      "Precision sectioning and interlocking",
      "Suitable for colour and varied styling",
      "Maintenance schedule guidance",
      "Follow-up appointment included",
    ],
  },
  {
    slug: "traditional-locs",
    title: "Traditional Locs",
    price: "From £300",
    time: "6–8 hrs",
    desc: "Classic locs installed using the interlocking method — low maintenance, timeless and versatile in size.",
    longDesc:
      "Traditional Locs — often called dreadlocks — are the original and most widely recognised loc style. We use the interlocking method with a crochet hook only: no wax, no glue, no chemicals. Just your natural hair, carefully encouraged to loc.\n\nWe install locs in a range of sizes from small to large. The right size for you depends on your hair density, desired look and how much maintenance you want to commit to. All of this is discussed and confirmed at your consultation before anything is started.\n\nFor a clean installation, your hair needs to be at least 6 inches long. Duration varies depending on length and chosen size — typically 6 to 8 hours.\n\nOngoing maintenance includes re-tightening new growth and crocheting any loose hair back into the loc — again using a crochet hook only.\n\nWhy Traditional Locs?\n• One of the most low-maintenance loc styles once established\n• Available in a wide range of sizes\n• Suits almost every hair type and density",
    img: "/images/Gallery/traditionallocs2.jpg",
    features: [
      "Consultation on size and style",
      "Interlocking method — no wax or glue",
      "Available in small to large sizes",
      "Extensions available",
      "Aftercare and maintenance guidance",
    ],
  },
  {
    slug: "retightening",
    title: "Retightening",
    price: "£100",
    time: "2 hr 30 min",
    desc: "Essential maintenance to keep your locs neat, healthy and maturing properly. Every 4–6 weeks.",
    longDesc:
      "Retightening is the core maintenance service that keeps your locs looking crisp and supports them through every stage of maturity. During the session we work systematically through your hair, tightening new growth at the roots so each loc maintains its shape, direction and size without becoming over-stressed.\n\nWe recommend booking every 4 to 6 weeks depending on your hair type and how quickly your roots grow out. Consistent retightening prevents matting between locs, reduces breakage, and ensures your locs continue to mature evenly.",
    img: "/images/services/retighteningfar.jpg",
    features: [
      "Root retightening throughout",
      "Scalp cleansing and health check",
      "Loc integrity assessment",
      "Next appointment scheduling",
    ],
  },
  {
    slug: "maintenance-retightening",
    title: "Maintenance & Retightening",
    price: "£200",
    time: "4 hr 30 min",
    desc: "Full maintenance session combining loc repair and retightening for locs that need extra attention.",
    longDesc:
      "Our Maintenance & Retightening service is a complete care session for clients whose locs need more than a standard retightening. We assess the condition of your scalp and locs, address any thinning, weak spots or over-matured sections, and retighten new growth using the technique that best matches your loc type.\n\nBeyond retightening, the session includes a gentle scalp cleanse, conditioning where appropriate, and a personalised care plan covering washing schedules, products and the ideal interval before your next visit. You leave with locs that feel lighter, look uniform and are set up for the next stage of their journey.",
    img: "/images/services/maintenance and Retightening.jpg",
    features: [
      "Full loc and scalp assessment",
      "Repair of weak or thinning locs",
      "Root retightening throughout",
      "Scalp cleanse and conditioning",
      "Personalised care plan",
    ],
  },
  {
    slug: "styling",
    title: "Styling",
    price: "£50",
    time: "1 hr",
    desc: "Creative styling for special occasions or everyday wear — updos, braided crowns, pinned designs and more.",
    longDesc:
      "Our styling service is designed to make your locs feel fresh, intentional and ready for any occasion. Whether you are preparing for a wedding, a photoshoot, a special event or simply want a refreshed everyday look, we work with the natural texture and length of your locs to create styles that flatter your face and last.\n\nEvery session begins with a short consultation so we understand the look you have in mind and can recommend options that suit your hair density, length and maturity. We use loc-safe products and accessories, and finish with care tips so you can keep the style looking polished for as long as possible.",
    img: "/images/Gallery/styling1.jpg",
    features: [
      "Style consultation included",
      "Occasion-appropriate recommendations",
      "Loc-safe products and accessories",
      "Style longevity tips",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    price: "£20",
    time: "20 min",
    desc: "A focused one-on-one assessment of your hair — we discuss your goals, check your scalp health and map out your loc journey.",
    longDesc:
      "Every new client journey at Trendylocs begins with a consultation. In 20 minutes we cover what matters most: the condition of your hair and scalp, your goals, and the method and size that will serve you best long term.\n\nWhat to expect:\n\nHair & Scalp Analysis:\nWe check your curl pattern, density, length and any history of chemical or heat damage to confirm your hair is ready for locs.\n\nMethod & Size Matching:\nWe recommend a starting method — comb coils, two-strand twists or interlocking — and discuss sizing based on your lifestyle, density and texture.\n\nMaintenance Overview:\nWe walk through the stages your locs will go through and how often you will need to come back in.\n\nCost & Time Estimates:\nYou leave with a clear quote and timeline for installation — no surprises.",
    img: "/images/services/consultation.jpg",
    features: [
      "Hair and scalp assessment",
      "Method and size recommendation",
      "Maintenance schedule overview",
      "Full cost and time estimate",
      "No obligation",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
