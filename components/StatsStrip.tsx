import Reveal from "@/components/Reveal";

const stats = [
  { label: "Years of Heritage", value: "40+" },
  { label: "Artisan Partners", value: "120+" },
  { label: "Global Markets", value: "28" },
  { label: "Annual Capacity", value: "50k+" }
];

export default function StatsStrip() {
  return (
    <section className="section-padding">
      <div className="glass rounded-3xl p-8 grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <Reveal key={stat.label}>
            <div className="space-y-2">
              <p className="text-3xl font-heading text-luxe-200">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm uppercase tracking-[0.3em]">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
