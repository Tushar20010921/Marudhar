import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className,
  hover = false
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl",
        hover &&
          "transition-all duration-300 hover:border-luxe-400/30 hover:shadow-luxe-gold hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
