import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import BestsellersCarousel from "@/components/BestsellersCarousel";
import StatsStrip from "@/components/StatsStrip";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Marudhar Handicrafts — premium handcrafted luxury bags from master artisans in Rajasthan. Export-ready for global buyers."
};

const HeroBagCanvas = dynamic(
  () => import("@/components/three/HeroBagCanvas"),
  { ssr: false, loading: () => <div className="h-[420px] sm:h-[540px] rounded-3xl bg-neutral-900/60 animate-pulse" /> }
);

const Globe3D = dynamic(
  () => import("@/components/three/Globe3D"),
  { ssr: false, loading: () => <div className="h-[340px] sm:h-[420px] rounded-3xl bg-neutral-900/60 animate-pulse" /> }
);

const craftFeatures = [
  {
    icon: "◆",
    title: "Heritage Embroidery",
    desc: "Hand-finished zardozi, mirror work, and thread embroidery by master artisans with 30+ years of expertise."
  },
  {
    icon: "◆",
    title: "Premium Materials",
    desc: "Full-grain leather, Kashmiri pashmina, hand-woven silk, and organic cotton — sourced responsibly."
  },
  {
    icon: "◆",
    title: "White-Glove Export",
    desc: "Dedicated export desk with premium packaging, GI certification, and global logistics partnerships."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <Reveal>
              <p className="uppercase tracking-[0.3em] text-luxe-300 text-xs sm:text-sm">
                Heritage Craftsmanship · Global Export
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Marudhar Handicrafts{" "}
                <span className="gold-shimmer-text">Luxury Bags</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/70 text-base sm:text-lg max-w-xl">
                Handcrafted in Rajasthan by master artisans whose families have
                perfected their craft for generations. Zardozi, leather
                carving, mirror work — exported with prestige to the world's
                finest boutiques and buyers.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collection"
                  className="px-6 py-3 rounded-full bg-luxe-400 text-neutral-950 font-semibold shadow-luxe-gold hover:bg-luxe-300 transition-colors"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/b2b-exports"
                  className="px-6 py-3 rounded-full glass text-white/90 hover:border-luxe-400/40 transition-colors"
                >
                  Request Bulk Catalogue
                </Link>
              </div>
            </Reveal>
          </div>
          <HeroBagCanvas />
        </div>
      </section>

      {/* About Craft — parallax-style */}
      <section className="section-padding">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-luxe-300">
                Legacy of Craft
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl leading-snug">
                Where Heritage Meets Luxury
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/70 text-base leading-relaxed">
                Founded in Jodhpur in 1984, Marudhar Handicrafts has grown
                from a single workshop into India's most trusted luxury bag
                export house. Every piece carries centuries of artisan
                knowledge — zardozi goldwork, Kutchi mirror embroidery,
                Kashmiri pashmina weaving — interpreted for contemporary
                global luxury markets.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-white/60 text-sm leading-relaxed">
                Our 120+ artisan partners across Rajasthan, Gujarat, and
                Kashmir produce collections that grace the shelves of
                boutiques in London, showrooms in Dubai, and luxury retail
                chains in New York.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                href="/heritage"
                className="inline-flex items-center gap-2 text-luxe-300 text-sm hover:text-luxe-200 transition-colors"
              >
                Discover our heritage story →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {craftFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-5 flex gap-4 border border-white/[0.06] hover:border-luxe-400/20 transition-all duration-300">
                  <span className="text-luxe-400 text-lg flex-shrink-0 mt-0.5">
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg">{f.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <SectionHeader
          eyebrow="Bestsellers"
          title="Signature Bags Loved by Global Buyers"
          description="Curated highlights from our most-requested lines — ready for sampling, customization, and export."
        />
        <BestsellersCarousel />
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Globe */}
      <section className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-luxe-300">
                Global Footprint
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl">
                Delivered to 28 Countries Worldwide
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/70 text-sm leading-relaxed">
                From our workshops in Rajasthan to boutiques in London, New
                York, Dubai, Tokyo, and beyond — Marudhar bags carry India's
                finest artisan heritage to every corner of the luxury market.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {["🇬🇧 UK", "🇺🇸 USA", "🇦🇪 UAE", "🇫🇷 France", "🇯🇵 Japan", "🇸🇬 Singapore"].map(
                  (c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1 glass rounded-full text-white/70"
                    >
                      {c}
                    </span>
                  )
                )}
                <span className="text-xs px-3 py-1 glass rounded-full text-luxe-300">
                  +22 more
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Globe3D />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
