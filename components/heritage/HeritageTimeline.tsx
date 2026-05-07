"use client";

import { motion } from "framer-motion";
import type { TimelineEvent } from "@/data/timeline";

type TimelineProps = {
  events: TimelineEvent[];
};

export default function HeritageTimeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-luxe-400 via-luxe-600 to-transparent" />

      <div className="space-y-12">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative flex items-start gap-6 sm:gap-0 ${
                isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Year bubble */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-luxe-400 flex items-center justify-center text-neutral-950 font-semibold text-xs sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1.5">
                ◆
              </div>

              {/* Content — left or right side */}
              <div
                className={`sm:w-[calc(50%-40px)] pl-4 sm:pl-0 ${
                  isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                }`}
              >
                <p className="text-luxe-300 text-xs uppercase tracking-[0.3em] mb-1">
                  {event.year}
                </p>
                <h3 className="font-heading text-xl text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Empty side spacer */}
              <div className="hidden sm:block sm:w-[calc(50%-40px)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
