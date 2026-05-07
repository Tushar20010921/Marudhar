import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import HeritageTimeline from "@/components/heritage/HeritageTimeline";
import ArtisanCard from "@/components/heritage/ArtisanCard";
import timeline from "@/data/timeline";
import artisans from "@/data/artisans";

export const metadata: Metadata = {
  title: "Heritage & Artisans",
  description:
    "Four decades of luxury bag craftsmanship. Meet the master artisans behind Marudhar Handicrafts and explore our heritage story."
};

export default function HeritagePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="section-padding">
        <SectionHeader
          eyebrow="Heritage & Artisans"
          title="Forty Years of Artisan Excellence"
          description="Since 1984, Marudhar Handicrafts has been the custodian of India's most celebrated bag-making traditions — connecting master artisans with the world's finest luxury buyers."
        />
      </section>

      {/* Heritage intro */}
      <section className="section-padding">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <Reveal>
            <div className="space-y-5">
              <h2 className="font-heading text-3xl leading-snug">
                Born in the Workshops of Jodhpur
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                In 1984, in a narrow lane of Jodhpur's old city, our founder
                Shyam Lal began stitching leather bags with a team of three
                artisans. The bags found their way to a Delhi boutique, then
                to a London buyer — and Marudhar's global story began.
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                Today, four decades on, our 120+ artisan partners span
                Rajasthan, Gujarat, and Kashmir. Each brings a living
                heritage — zardozi goldwork, Kutchi mirror embroidery, Kashmiri
                pashmina weaving, vegetable-tanned leather carving — techniques
                passed down through generations, now reaching markets in 28
                countries.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8 space-y-6 border border-white/[0.06]">
              <h3 className="font-heading text-xl text-luxe-200">
                The Marudhar Promise
              </h3>
              {[
                "Every piece handcrafted — no mass production",
                "Fair wages and direct artisan partnerships",
                "GI-certified techniques preserved for future generations",
                "100% natural dyes and responsibly sourced materials",
                "Artisan names and stories shared with every export order"
              ].map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-luxe-400 mt-0.5">◆</span>
                  <p className="text-white/65 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <Reveal>
          <h2 className="font-heading text-3xl mb-3">Our Journey</h2>
          <p className="text-white/50 text-sm mb-14 max-w-2xl">
            From a single workshop in Jodhpur to a global luxury export house
            — four decades of milestones.
          </p>
        </Reveal>
        <HeritageTimeline events={timeline} />
      </section>

      {/* Artisan spotlight */}
      <section className="section-padding">
        <Reveal>
          <h2 className="font-heading text-3xl mb-2">
            The Artisans Behind the Craft
          </h2>
          <p className="text-white/50 text-sm mb-10 max-w-2xl">
            Meet the master craftspeople whose lifetimes of expertise are
            embedded in every Marudhar bag.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artisans.map((artisan, i) => (
            <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

