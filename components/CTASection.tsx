import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section className="section-padding pb-24">
      <div className="relative overflow-hidden rounded-[32px] p-10 md:p-16 luxe-gradient">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-luxe-200">
                Partner With Us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl">
                Curate Bespoke Craft Collections for Your Clients
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/80">
                Share your sourcing brief and we will craft a tailored proposal
                with sampling, production, and export support.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold">
                Request Proposal
              </button>
              <button className="px-6 py-3 rounded-full border border-white/20 text-white">
                Download Lookbook
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
