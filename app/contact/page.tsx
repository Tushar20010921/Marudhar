import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="section-padding">
        <SectionHeader
          eyebrow="Contact & Showroom"
          title="Connect With Our Export Studio"
          description="Share your procurement needs and schedule a showroom visit or virtual walkthrough."
        />
      </section>

      <section className="section-padding">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Reveal>
            <div className="glass rounded-3xl p-8 space-y-6">
              <h3 className="font-heading text-2xl">Showroom Details</h3>
              <p className="text-white/70">
                Placeholder for address, hours, and appointment scheduling.
              </p>
              <div className="space-y-3 text-white/70">
                <p>Address: [Add showroom address]</p>
                <p>Phone: [Add phone number]</p>
                <p>Email: [Add email address]</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass rounded-3xl p-8 space-y-6">
              <h3 className="font-heading text-2xl">Enquiry Form</h3>
              <div className="space-y-4">
                <div className="h-12 rounded-xl bg-white/10" />
                <div className="h-12 rounded-xl bg-white/10" />
                <div className="h-24 rounded-xl bg-white/10" />
                <button className="w-full py-3 rounded-full bg-luxe-400 text-neutral-950 font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
