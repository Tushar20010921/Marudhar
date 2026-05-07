import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function B2BExportsPage() {
  return (
    <div className="space-y-20">
      <section className="section-padding">
        <SectionHeader
          eyebrow="B2B & Export Portal"
          title="Strategic Partner for Premium & Bulk Buyers"
          description="Dedicated sourcing, sampling, and white-glove export coordination for luxury retail, hospitality, and design studios."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            "Dedicated account managers and production transparency",
            "Premium packaging, certification, and compliance support",
            "Custom finishes, private labeling, and volume pricing",
            "Global logistics partnerships with real-time tracking"
          ].map((item) => (
            <Reveal key={item}>
              <div className="glass rounded-2xl p-6">
                <p className="text-lg text-white/80">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl">Export Workflow</h2>
            <p className="text-white/70">
              Provide a guided overview of your export workflow here. Highlight
              sampling timelines, quality assurance, and compliance.
            </p>
            <ul className="space-y-4 text-white/70">
              {[
                "1. Inquiry & curated proposal",
                "2. Sampling & approvals",
                "3. Production scheduling",
                "4. Quality assurance & packaging",
                "5. Logistics, documentation, and delivery"
              ].map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="text-luxe-300">◆</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-8 space-y-6">
            <h3 className="font-heading text-2xl">Request Trade Access</h3>
            <p className="text-white/70">
              Placeholder for a B2B enquiry form or contact integration.
            </p>
            <div className="space-y-3">
              <div className="h-12 rounded-xl bg-white/10" />
              <div className="h-12 rounded-xl bg-white/10" />
              <div className="h-12 rounded-xl bg-white/10" />
              <button className="w-full py-3 rounded-full bg-luxe-400 text-neutral-950 font-semibold">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
