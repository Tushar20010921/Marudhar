import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Linkedin
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Showroom",
  description:
    "Connect with Marudhar Handicrafts — schedule a showroom visit, reach our export desk, or enquire via WhatsApp."
};

const WHATSAPP_NUMBER = "919876543210"; // Replace with real number
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Marudhar Handicrafts! I'm interested in your luxury bag collections. Please share more details."
);

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="section-padding">
        <SectionHeader
          eyebrow="Contact & Showroom"
          title="Connect With Our Export Studio"
          description="Whether you're a first-time buyer, a returning trade partner, or a designer looking for bespoke commissions — our team is here for you."
        />
      </section>

      {/* Main grid */}
      <section className="section-padding">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Form */}
          <Reveal>
            <div className="glass rounded-3xl p-8 border border-white/[0.06]">
              <h3 className="font-heading text-2xl mb-2">Send a Message</h3>
              <p className="text-white/50 text-sm mb-8">
                We respond to all enquiries within one business day.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          {/* Contact info */}
          <div className="space-y-5">
            <Reveal>
              <div className="glass rounded-3xl p-6 border border-white/[0.06] space-y-5">
                <h3 className="font-heading text-xl text-luxe-200">
                  Showroom & Export Studio
                </h3>

                <div className="space-y-4 text-sm text-white/65">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-4 h-4 text-luxe-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>Marudhar Handicrafts, Jodhpur</p>
                      <p className="text-white/40 text-xs mt-0.5">
                        Old City Artisan Quarter, Rajasthan 342001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Phone className="w-4 h-4 text-luxe-400 flex-shrink-0" />
                    <a
                      href="tel:+919876543210"
                      className="hover:text-luxe-300 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Mail className="w-4 h-4 text-luxe-400 flex-shrink-0" />
                    <a
                      href="mailto:export@marudharhandicrafts.com"
                      className="hover:text-luxe-300 transition-colors"
                    >
                      export@marudharhandicrafts.com
                    </a>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="w-4 h-4 text-luxe-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>Mon – Sat: 10:00 AM – 6:00 PM IST</p>
                      <p className="text-white/40 text-xs">Showroom visits by appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp CTA */}
            <Reveal delay={0.1}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-3xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:bg-green-500/5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-green-300 transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    Instant response for trade enquiries
                  </p>
                </div>
                <span className="ml-auto text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            </Reveal>

            {/* Social */}
            <Reveal delay={0.2}>
              <div className="glass rounded-3xl p-6 border border-white/[0.06] space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-luxe-300">
                  Follow Our Craft
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/70 hover:text-white hover:border-luxe-400/30 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/70 hover:text-white hover:border-luxe-400/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-padding">
        <Reveal>
          <div className="glass rounded-3xl overflow-hidden border border-white/[0.06]">
            <div className="h-72 flex items-center justify-center bg-neutral-900/50 relative">
              <div className="text-center space-y-3">
                <MapPin className="w-10 h-10 text-luxe-400 mx-auto" />
                <p className="font-heading text-xl text-white/60">
                  Marudhar Handicrafts Showroom
                </p>
                <p className="text-white/40 text-sm">
                  Old City Artisan Quarter, Jodhpur, Rajasthan
                </p>
                <a
                  href="https://maps.google.com/?q=Jodhpur+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-luxe-400/20 text-luxe-300 text-sm hover:bg-luxe-400/30 transition-colors mt-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(179,155,115,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(179,155,115,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

