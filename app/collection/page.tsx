import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function CollectionPage() {
  return (
    <div className="space-y-16">
      <section className="section-padding">
        <SectionHeader
          eyebrow="The Collection"
          title="Luxury Craftworks Designed for Premium Spaces"
          description="Explore curated lines in decor, furniture accents, sculpture, and bespoke gifting for bulk buyers."
        />
      </section>

      <section className="section-padding">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Reveal key={`collection-${index}`}>
              <div className="glass rounded-3xl p-6 min-h-[240px] flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-luxe-300">
                    Collection {index + 1}
                  </p>
                  <h3 className="font-heading text-2xl mt-3">
                    Placeholder Collection Name
                  </h3>
                  <p className="text-white/70 mt-3">
                    Add a curated description for this collection segment,
                    highlighting hero materials and export readiness.
                  </p>
                </div>
                <button className="mt-6 text-sm text-immersive-200">View Range →</button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
