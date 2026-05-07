"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Clock } from "lucide-react";
import type { Artisan } from "@/data/artisans";

type ArtisanCardProps = {
  artisan: Artisan;
  index: number;
};

export default function ArtisanCard({ artisan, index }: ArtisanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-3xl p-6 flex flex-col gap-5 border border-white/[0.06] hover:border-luxe-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe-gold"
    >
      {/* Avatar placeholder */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-luxe-800 to-neutral-800 flex items-center justify-center flex-shrink-0">
          <span className="font-heading text-xl text-luxe-300">
            {artisan.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-heading text-lg leading-tight">{artisan.name}</h3>
          <p className="text-luxe-300 text-xs uppercase tracking-[0.25em] mt-0.5">
            {artisan.craft}
          </p>
        </div>
      </div>

      <p className="text-white/65 text-sm leading-relaxed">{artisan.bio}</p>

      <div className="space-y-2 text-xs text-white/50">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-luxe-400 flex-shrink-0" />
          {artisan.location}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-luxe-400 flex-shrink-0" />
          {artisan.years} years of practice
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-luxe-400 flex-shrink-0" />
          {artisan.specialty}
        </div>
      </div>
    </motion.div>
  );
}
