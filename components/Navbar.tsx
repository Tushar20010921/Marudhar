"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "B2B & Export", href: "/b2b-exports" },
  { label: "Heritage", href: "/heritage" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-6 sm:px-10 lg:px-16 pt-5">
        <nav className="glass rounded-full px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-base tracking-[0.2em] text-white hover:text-luxe-300 transition-colors"
          >
            MARUDHAR
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-all duration-150",
                  pathname === link.href
                    ? "text-luxe-300 bg-luxe-400/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex text-xs uppercase tracking-[0.3em] text-luxe-200 hover:text-luxe-100 transition-colors"
            >
              Enquire
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-24 left-6 right-6 glass rounded-3xl p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base transition-colors",
                  pathname === link.href
                    ? "text-luxe-300 bg-luxe-400/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-xs uppercase tracking-[0.3em] text-luxe-200"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

