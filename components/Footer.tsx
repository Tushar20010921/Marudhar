export default function Footer() {
  return (
    <footer className="section-padding py-16 border-t border-white/10 mt-24">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-heading text-xl tracking-[0.2em]">
            MARUDHAR HANDICRAFTS
          </h2>
          <p className="text-white/60 max-w-sm">
            Luxury handcrafted decor and artisanal collections, curated for
            global hospitality, retail, and design partners.
          </p>
        </div>
        <div className="space-y-3 text-white/70">
          <p className="text-sm uppercase tracking-[0.3em] text-luxe-300">
            Showroom
          </p>
          <p>[Add address placeholder]</p>
          <p>[Add contact details]</p>
        </div>
        <div className="space-y-3 text-white/70">
          <p className="text-sm uppercase tracking-[0.3em] text-luxe-300">
            Export Desk
          </p>
          <p>[Add export email]</p>
          <p>[Add bulk order hotline]</p>
        </div>
      </div>
      <p className="text-xs text-white/40 mt-10">
        © 2026 Marudhar Handicrafts. All rights reserved.
      </p>
    </footer>
  );
}
