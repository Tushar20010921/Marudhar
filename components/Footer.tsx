import Link from "next/link";
import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Marudhar Handicrafts! I'm interested in your luxury bag collections."
);

export default function Footer() {
  return (
    <footer className="section-padding py-16 border-t border-white/10 mt-24">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="font-heading text-xl tracking-[0.2em] gold-shimmer-text">
            MARUDHAR
          </h2>
          <p className="font-heading text-xs tracking-[0.25em] text-luxe-400">
            HANDICRAFTS
          </p>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed mt-3">
            Premium handcrafted luxury bags from master artisans in Rajasthan.
            Export-ready for global buyers since 1984.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/50 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/50 hover:text-luxe-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/50 hover:text-luxe-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-luxe-300 mb-4">
            Navigate
          </p>
          {[
            { label: "Home", href: "/" },
            { label: "Collection", href: "/collection" },
            { label: "B2B & Export", href: "/b2b-exports" },
            { label: "Heritage", href: "/heritage" },
            { label: "Contact", href: "/contact" }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/60 text-sm hover:text-luxe-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Showroom */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-luxe-300 mb-4">
            Showroom
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            Old City Artisan Quarter
            <br />
            Jodhpur, Rajasthan 342001
            <br />
            India
          </p>
          <p className="text-white/50 text-xs mt-3">
            Mon – Sat: 10am – 6pm IST
          </p>
        </div>

        {/* Export desk */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-luxe-300 mb-4">
            Export Desk
          </p>
          <a
            href="mailto:export@marudharhandicrafts.com"
            className="flex items-center gap-2 text-white/55 text-sm hover:text-luxe-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-luxe-400 flex-shrink-0" />
            export@marudharhandicrafts.com
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/55 text-sm hover:text-green-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            WhatsApp Trade Line
          </a>
          <p className="text-white/35 text-xs mt-3">
            MOQ from 25 units · 45-day lead time
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-white/[0.06]">
        <p className="text-xs text-white/30">
          © 2025 Marudhar Handicrafts. All rights reserved.
        </p>
        <p className="text-xs text-white/20">
          Handcrafted in Rajasthan, India ◆ GI Certified Artisan Products
        </p>
      </div>
    </footer>
  );
}

