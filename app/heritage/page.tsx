import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function HeritagePage() {
  return (
    <div className="space-y-16">
      <section className="section-padding">
        <SectionHeader
          eyebrow="Heritage & Artisans"
          title="Celebrating Master Artisanship"
          description="Share the story of the Marudhar legacy, artisan communities, and craft lineage."
        />
      </section>

      <section className="section-padding">
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Reveal key={`heritage-${index}`}>
              <div className="glass rounded-3xl p-6 min-h-[220px]">
                <p className="text-sm uppercase tracking-[0.3em] text-luxe-300">
                  Story {index + 1}
                </p>
                <h3 className="font-heading text-2xl mt-3">
                  Placeholder Heritage Story
                </h3>
                <p className="text-white/70 mt-3">
                  Add narratives about artisans, legacy workshops, and sustainable
                  craft practices.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
