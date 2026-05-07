import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="space-y-4 max-w-3xl">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-luxe-300">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl">{title}</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-white/70 text-base sm:text-lg">{description}</p>
      </Reveal>
    </div>
  );
}
