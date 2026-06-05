import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import sisterlocksAsset from "@/assets/transformations/sisterlocks.png.asset.json";
import microlocsAsset from "@/assets/transformations/microlocs.png.asset.json";
import traditionalAsset from "@/assets/transformations/traditional.png.asset.json";

type Transformation = {
  title: string;
  note: string;
  style: string;
  duration: string;
  maintenance: string;
  before: string;
  after: string;
  single?: boolean;
};

const transformations: Transformation[] = [
  {
    title: "Sisterlocks™ Installation",
    note: "Natural hair transformed into precision Sisterlocks™",
    style: "Sisterlocks™",
    duration: "8–10 hours",
    maintenance: "Every 4–6 weeks",
    before: sisterlocksAsset.url,
    after: sisterlocksAsset.url,
    single: true,
  },
  {
    title: "Microlocs Journey",
    note: "From loose coils to defined, uniform microlocs",
    style: "Microlocs",
    duration: "6–8 hours",
    maintenance: "Every 5 – 7 weeks",
    before: microlocsAsset.url,
    after: microlocsAsset.url,
    single: true,
  },
  {
    title: "Traditional Locs Transformation",
    note: "From natural coils to long, healthy traditional locs",
    style: "Traditional Locs",
    duration: "8–10 hours",
    maintenance: "Every 6 – 8 weeks",
    before: traditionalAsset.url,
    after: traditionalAsset.url,
    single: true,
  },
];

export default function BeforeAfterShowcase() {
  return (
    <section className="bg-secondary/40 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Before &amp; After</p>
          <h2 className="text-3xl md:text-5xl mb-4">Real transformations, real results</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Drag the slider to reveal the journey from start to finish.
          </p>
        </div>

        {/* Featured draggable comparisons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {transformations.map((t, i) => (
            <article
              key={t.title}
              style={{ animationDelay: `${i * 120}ms` }}
              className="animate-fade-in bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {t.single ? (
                  <img
                    src={t.before}
                    alt={`${t.title} before and after`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <ReactCompareSlider
                      itemOne={
                        <ReactCompareSliderImage
                          src={t.before}
                          alt={`${t.title} before`}
                          loading="lazy"
                          style={{ objectFit: "cover" }}
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          src={t.after}
                          alt={`${t.title} after`}
                          loading="lazy"
                          style={{ objectFit: "cover" }}
                        />
                      }
                      className="h-full w-full"
                    />
                    <span className="pointer-events-none absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] uppercase tracking-[0.2em]">
                      Before
                    </span>
                    <span className="pointer-events-none absolute top-3 right-3 px-3 py-1 rounded-full bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.2em]">
                      After
                    </span>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.note}</p>
                <dl className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <dt className="uppercase tracking-wider text-[10px] text-gold mb-0.5">Style</dt>
                    <dd>{t.style}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wider text-[10px] text-gold mb-0.5">Duration</dt>
                    <dd>{t.duration}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wider text-[10px] text-gold mb-0.5">Upkeep</dt>
                    <dd>{t.maintenance}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>


        <div className="text-center mt-14">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-dark text-primary-foreground px-7 py-3.5 rounded-md hover:bg-dark/90 hover:scale-[1.03] transition-all"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
