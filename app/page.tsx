import Hero3D from "@/components/Hero3D";
import SectionHeader from "@/components/SectionHeader";
import BestsellersCarousel from "@/components/BestsellersCarousel";
import StatsStrip from "@/components/StatsStrip";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <Reveal>
              <p className="uppercase tracking-[0.3em] text-luxe-300 text-xs sm:text-sm">
                Luxury Craftsmanship for Global Buyers
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
                MARUDHAR HANDICRAFTS <br /> Timeless Artistry, Exported with
                Prestige
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/70 text-base sm:text-lg max-w-xl">
                Showcase your destination with bespoke artisanal collections.
                Crafted for premium interiors, hospitality, and luxury retail
                partners seeking extraordinary Indian heritage pieces.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full bg-luxe-400 text-neutral-950 font-semibold shadow-luxe">
                  Explore the Collection
                </button>
                <button className="px-6 py-3 rounded-full glass text-white/90">
                  Request Bulk Catalogue
                </button>
              </div>
            </Reveal>
          </div>
          <Hero3D />
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="Legacy of Craft"
          title="Where Heritage Meets Luxury Hospitality"
          description="Each Marudhar piece is sculpted by master artisans using age-old techniques, curated for contemporary premium spaces."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            "Hand-finished brass, wood, and gemstone detailing",
            "Tailored for hospitality, villas, and luxury retail",
            "Dedicated export support with premium packaging"
          ].map((item) => (
            <Reveal key={item}>
              <div className="glass rounded-2xl p-6 h-full">
                <p className="text-lg text-white/80">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="Bestsellers"
          title="Signature Pieces Loved by Global Buyers"
          description="Curated highlights across decor, sculpture, and bespoke gifting."
        />
        <BestsellersCarousel />
      </section>

      <StatsStrip />
      <CTASection />
    </div>
  );
}
