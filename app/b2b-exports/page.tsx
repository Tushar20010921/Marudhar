import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/b2b/LeadForm";
import {
  Factory,
  ShieldCheck,
  Package,
  Clock,
  Paintbrush,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B & Export Portal",
  description:
    "Partner with Marudhar Handicrafts for premium luxury bag exports. MOQ, lead times, customization, and quality control for global B2B buyers."
};

const capabilities = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    desc: "6 dedicated workshops across Rajasthan and Gujarat. Transparent production with live order tracking for trade partners."
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "Multi-stage QC: raw material inspection, in-process review, and final export audit by certified QC executives."
  },
  {
    icon: Package,
    title: "Minimum Order Quantities",
    desc: "MOQ from 25 units per SKU for premium lines, 50–200 units for standard export batches. Flexible for pilot orders."
  },
  {
    icon: Clock,
    title: "Lead Times",
    desc: "Standard: 45–60 days. Expedited: 30 days (subject to capacity). Sampling: 14–21 days."
  },
  {
    icon: Paintbrush,
    title: "Customization",
    desc: "Private labeling, custom colorways, bespoke embroidery, hardware finishes, and branded packaging available."
  },
  {
    icon: Globe,
    title: "Export Compliance",
    desc: "GI-certified crafts, REACH-compliant materials, CITES documentation for exotic leathers, and full export documentation."
  }
];

const exportSteps = [
  "Initial enquiry & curated product proposal within 24 hours",
  "Sample approval with physical samples shipped globally",
  "Production scheduling with weekly milestone updates",
  "Multi-stage quality assurance & photographic sign-off",
  "Premium export packaging with brand customization",
  "Logistics, customs documentation & real-time shipment tracking"
];

const markets = [
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇦🇪", name: "UAE & Gulf" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" }
];

export default function B2BExportsPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero header */}
      <section className="section-padding">
        <SectionHeader
          eyebrow="B2B & Export Portal"
          title="Your Strategic Partner for Premium Bag Exports"
          description="Dedicated sourcing, sampling, and white-glove export coordination for luxury retailers, hospitality groups, and design studios worldwide."
        />

        {/* Active markets */}
        <div className="mt-10 flex flex-wrap gap-3">
          {markets.map((m) => (
            <Reveal key={m.name}>
              <span className="glass px-4 py-2 rounded-full text-sm text-white/70 flex items-center gap-2 border border-white/[0.06]">
                <span>{m.flag}</span>
                {m.name}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="section-padding">
        <Reveal>
          <h2 className="font-heading text-3xl mb-10">Our Capabilities</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.08}>
              <div className="glass rounded-3xl p-6 space-y-4 border border-white/[0.06] hover:border-luxe-400/20 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-10 h-10 rounded-xl bg-luxe-400/15 flex items-center justify-center">
                  <cap.icon className="w-5 h-5 text-luxe-400" />
                </div>
                <h3 className="font-heading text-xl">{cap.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workflow + Form */}
      <section className="section-padding">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Export workflow */}
          <div className="space-y-6">
            <Reveal>
              <h2 className="font-heading text-3xl">Export Workflow</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/60 text-sm leading-relaxed">
                From your first enquiry to on-time delivery — our export desk
                manages every step with total transparency.
              </p>
            </Reveal>
            <div className="space-y-4 mt-4">
              {exportSteps.map((step, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <div className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-luxe-400/20 border border-luxe-400/40 flex items-center justify-center flex-shrink-0 text-luxe-300 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-white/70 text-sm pt-0.5">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Quick stats */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { v: "25+", l: "Min. MOQ" },
                  { v: "30d", l: "Express lead" },
                  { v: "100%", l: "QC certified" }
                ].map((s) => (
                  <div key={s.l} className="glass rounded-2xl p-4 text-center">
                    <p className="font-heading text-2xl text-luxe-200">{s.v}</p>
                    <p className="text-xs text-white/50 uppercase tracking-[0.2em] mt-1">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Lead form */}
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8 border border-white/[0.06]">
              <h3 className="font-heading text-2xl mb-2">
                Request Trade Access
              </h3>
              <p className="text-white/50 text-sm mb-8">
                Submit your enquiry and receive a tailored proposal within 24
                hours.
              </p>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

