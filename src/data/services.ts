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
    title: "Sisterlocs",
    price: "£100",
    time: "2 hr",
    desc: "Precision-installed Sisterlocks™ — a celebration of natural hair with endless styling versatility.",
    longDesc:
      "Sisterlocks (TM) are small locks made by precision sectioning of hair using a special locking tool. It is a trademarked hair style which was started and patented by Dr. Joanne Cornwell in the United States. Sisterlocks is a celebration of natural hair, freeing you from the numerous hair products created to straighten your hair. Its installation and maintenance is therefore as natural as can be.\n\nIf you are interested in installing Sisterlocks, we will initially invite you to come for a consultation during which we determine your hair type, discuss locking patterns and install samples. We will then book your installation as well as book your first re-tightening session, normally after 4 weeks. Following your sisterlocks installation, we advise on a re-tightening schedule. This is usually after every 4-6 weeks.\n\nWhy Sisterlocks™ ?\n• Freedom / Versatility / Light\n• Endless styling possibilities\n• Thinnest of loose hair looks fuller\n\nDuration: 8 hrs but exact duration is determined during consultation. Cost: Determined during consultation and depends on length of hair.",
    img: "/images/transformations/microlocs-before-after.jpg",
    features: [
      "Initial consultation included",
      "Precision parting and installation",
      "Aftercare kit and instructions",
      "Follow-up appointment guidance",
      "Lifetime installation warranty",
    ],
  },
  {
    slug: "styling",
    title: "Styling",
    price: "£50",
    time: "1 hr",
    desc: "Creative styling for special occasions or everyday wear — from updos to intricate designs.",
    img: "/images/services/hero-ombre-locs.png",
    features: [
      "Consultation to determine best method",
      "Professional installation",
      "Styling recommendations",
      "Maintenance schedule planning",
      "Product recommendations",
    ],
  },
  {
    slug: "maintenance-retightening",
    title: "Maintenance & Retightening",
    price: "£200",
    time: "4 hr 30 min",
    desc: "Full maintenance session — assess your locs and create a tailored care plan.",
    img: "/images/services/traditional-locs.jpg",
    features: [
      "Multiple installation methods available",
      "Customized parting pattern",
      "Natural or cultivated options",
      "Maintenance guidance",
      "Growth tracking",
    ],
  },
  {
    slug: "retightening",
    title: "Retightening",
    price: "£100",
    time: "2 hr 30 min",
    desc: "Essential maintenance to keep your locs neat, healthy and maturing properly. Every 4–6 weeks.",
    img: "/images/services/sisterlocs2.jpg",
    features: [
      "Root maintenance",
      "Scalp cleansing and treatment",
      "Loc health assessment",
      "Styling included",
      "Next appointment scheduling",
    ],
  },
  {
    slug: "locs-establishment",
    title: "Locs Establishment",
    price: "£100",
    time: "8 hr",
    desc: "Begin your loc journey with professional starter locs using your preferred method.",
    img: "/images/services/microlocs2.jpg",
    features: [
      "In-depth consultation",
      "Method selection guidance",
      "Professional installation",
      "Starter care package",
      "Educational resources",
    ],
  },
  {
    slug: "loc-styling",
    title: "Loc Styling",
    price: "£50",
    time: "1 hr",
    desc: "Creative styling for special occasions or everyday wear — from updos to intricate designs.",
    img: "/images/services/microlocs5.jpg",
    features: [
      "Consultation on desired style",
      "Professional styling",
      "Loc-safe accessories",
      "Style longevity tips",
      "Photo-ready finish",
    ],
  },
  {
    slug: "retighten-with-phyllis",
    title: "Retighten With Phyllis",
    price: "£80",
    time: "2 hr 30 min",
    desc: "Safe, professional colour services for locs — from subtle highlights to bold transformations.",
    img: "/images/services/traditionallocs4.jpg",
    features: [
      "Colour consultation",
      "Strand testing",
      "Professional application",
      "Deep conditioning treatment",
      "Colour maintenance guidance",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    price: "£20",
    time: "1 hr",
    desc: "One-on-one consultation to discuss your hair goals, assess your hair and create a care plan.",
    img: "/images/styles/consultation.jpg",
    features: [
      "Hair and scalp assessment",
      "Goal discussion",
      "Method recommendations",
      "Timeline and pricing",
      "Question and answer session",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
