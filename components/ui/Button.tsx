"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const variantStyles: Record<Variant, string> = {
  gold: "bg-luxe-400 text-neutral-950 font-semibold shadow-luxe-gold hover:bg-luxe-300 active:scale-95",
  outline:
    "border border-white/20 text-white/90 hover:border-luxe-400 hover:text-luxe-300 active:scale-95",
  ghost: "text-luxe-200 hover:text-luxe-100 active:scale-95"
};

export default function Button({
  variant = "gold",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
