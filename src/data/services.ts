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
    slug: "Dreadlocs",
    title: "Dreadlocs",
    price: "To be determined",
    time: "5 - 6 hrs",
    desc: "Precision-installed Sisterlocks™ — a celebration of natural hair with endless styling versatility.",
    longDesc:
      "We install dreadlocks of varying sizes from small to large using interlocking method. The cost will depend on the size of locks you would like and the length of your hair. The price can be confirmed during your consultation.\nTo install new dreadlocks takes on average 5-6 hours depending on the length, the desired size of your dreads and if you are adding extensions.\nHow long should your hair be to install dreadlocks? Due to the size of the locks, the hair should be at least 6 inches.\nWe only use a crotchet hook to maintain your dreadlocks. We do not use any products , chemicals , wax or glue.\nMaintenance\nOur traditional locks maintenance services include re-tightening the new growth, crocheting loose hair using a crotchet hook\nWhy dreadlocks?\n•Low maintenance\n•Variety of sizes\n•Hip",
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
    longDesc:
      "Our styling service is designed to make your locs feel fresh, intentional and ready for any occasion. Whether you are preparing for a wedding, a photoshoot, or simply want a refreshed everyday look, our stylists work with the natural texture and length of your hair to create looks that flatter your face and last.\n\nEvery session begins with a short consultation so we can understand the style you have in mind and recommend options that suit your hair density, length and maturity. We use loc-safe products and accessories, and finish with care tips so you can keep the style looking polished for as long as possible.",
    img: "/images/services/hero-bantu-knots.png",
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
    longDesc:
      "Our Maintenance & Retightening service is a complete care session designed for clients who want their locs to stay healthy, neat and well-shaped over the long term. We carefully assess the condition of your scalp and locs, address any thinning or weak spots, and retighten new growth using the technique that best matches your loc type.\n\nBeyond retightening, the session includes a gentle scalp cleanse, conditioning where appropriate, and a personalised care plan that covers washing schedules, products and the ideal interval before your next visit. You leave with locs that feel lighter, look uniform, and are set up for the next stage of their journey.",
    img: "/images/services/retightening.jpg",
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
    longDesc:
      "Retightening is the core maintenance service that keeps your locs looking crisp and supports them through every stage of maturity. During the session we work systematically through your hair, tightening new growth at the roots so each loc maintains its shape, direction and size without becoming over-stressed.\n\nWe recommend booking a retightening session every 4 to 6 weeks depending on your hair type and how quickly your roots grow out. Consistent retightening prevents matting between locs, reduces breakage, and ensures your locs continue to mature evenly over the months and years.",
    img: "/images/services/retightening.jpg",
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
    longDesc:
      "Locs Establishment is the starting point of your loc journey. We begin with an in-depth consultation to understand your goals, assess your hair type and density, and recommend the installation method that will give you the best long-term results — whether that is two-strand twists, comb coils, interlocking or another technique suited to your texture.\n\nThe installation itself is done with precision parting and careful tension so your locs start uniform and balanced. You leave with a starter care package, written aftercare instructions, and a clear schedule for your first few maintenance visits so the early weeks of your loc journey feel guided rather than uncertain.",
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
    longDesc:
      "Loc Styling transforms your existing locs into a look that feels intentional and event-ready. From elegant updos and braided crowns to intricate barrel rolls and pinned designs, our stylists shape your locs into styles that flatter your face and showcase the texture you have grown.\n\nEach styling session starts with a short discussion about the occasion and the look you want. We use loc-safe accessories and finishing techniques designed to hold without damaging your roots, and we share simple tips for taking the style down so your locs stay healthy after the event.",
    img: "/images/services/hero-microlocs-top.png",
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
    longDesc:
      "Retighten With Phyllis is a dedicated maintenance session with one of our senior stylists, combining a precise retightening with optional safe colour services. Phyllis brings years of experience working with locs of every maturity, and tailors each session to the unique pattern and condition of your hair.\nIf you are adding colour, we start with a strand test and a full consultation so you understand how the colour will behave on your locs. The service includes a deep conditioning treatment and a clear plan for maintaining both the colour and the integrity of your locs between visits.",
    img: "/images/services/retightening.jpg",
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
    longDesc:
      "We offer consultation to assess your hair texture, density, and scalp health to design a tailored loc journey. Typically lasting 15 – 30 minutes, it is essential to determining the best locs method, size, cost, and maintenance schedule for your hair.\nWhat to Expect During a Consultation\n\nHair & Scalp Analysis:\nWe will check your curl pattern, density, length, and history of chemical or heat damage to ensure your hair is healthy enough for locs.\n\nMethod & Size Matching: \nWe will recommend a starting method (e.g.comb coils, two-strand twists, or interlocking) and discuss sizing to fit your lifestyle, hair density and hair texture.\n\nMaintenance:\nWe will discuss the locs stages, care routines, and how often you will need retightening.\n\nCost & Time Estimates:\nA full quote and time estimate for installation will be provided.",
    img: "/images/services/consultation.jpg",
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
