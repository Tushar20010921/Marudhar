import bestsellers from "@/data/bestsellers";
import Reveal from "@/components/Reveal";

export default function BestsellersCarousel() {
  return (
    <div className="mt-10 overflow-x-auto">
      <div className="flex gap-6 min-w-max pb-4">
        {bestsellers.map((item) => (
          <Reveal key={item.title}>
            <div className="glass rounded-3xl p-6 w-[260px] sm:w-[300px]">
              <div className="h-32 rounded-2xl bg-white/10" />
              <h3 className="font-heading text-xl mt-4">{item.title}</h3>
              <p className="text-white/70 text-sm mt-2">{item.subtitle}</p>
              <p className="text-luxe-200 text-xs uppercase tracking-[0.3em] mt-4">
                {item.tag}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
