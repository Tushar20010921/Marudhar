import bestsellers from "@/data/bestsellers";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function BestsellersCarousel() {
  return (
    <div className="mt-10 overflow-x-auto -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
      <div className="flex gap-6 min-w-max pb-4">
        {bestsellers.map((item) => (
          <Reveal key={item.title}>
            <div className="glass rounded-3xl p-6 w-[260px] sm:w-[300px] flex flex-col gap-4 border border-white/[0.06] hover:border-luxe-400/20 transition-all duration-300 hover:-translate-y-1">
              <div className="h-36 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-luxe-400/50" />
              </div>
              <div>
                <p className="text-luxe-200 text-xs uppercase tracking-[0.3em] mb-2">
                  {item.tag}
                </p>
                <h3 className="font-heading text-xl">{item.title}</h3>
                <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
              </div>
              <Link
                href="/collection"
                className="text-xs text-luxe-300 hover:text-luxe-200 transition-colors mt-auto"
              >
                View in Collection →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
