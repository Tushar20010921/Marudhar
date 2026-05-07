import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "B2B & Export", href: "/b2b-exports" },
  { label: "Heritage", href: "/heritage" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="mx-auto section-padding">
        <div className="glass rounded-full px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-lg tracking-[0.2em]">
            MARUDHAR
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.3em] text-luxe-200"
          >
            Enquire
          </Link>
        </div>
      </nav>
    </header>
  );
}
