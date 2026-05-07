"use client";

import { categories, materials } from "@/data/products";
import { cn } from "@/lib/utils";

type FilterState = {
  category: string;
  material: string;
  exportOnly: boolean;
};

type FilterSidebarProps = {
  filters: FilterState;
  onChange: (f: FilterState) => void;
};

export default function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  return (
    <aside className="glass rounded-3xl p-6 space-y-8 sticky top-32 h-fit">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-luxe-300 mb-4">
          Category
        </p>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange({ ...filters, category: cat })}
              className={cn(
                "block w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-150",
                filters.category === cat
                  ? "bg-luxe-400/20 text-luxe-300 border border-luxe-400/40"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-luxe-300 mb-4">
          Material
        </p>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => onChange({ ...filters, material: mat })}
              className={cn(
                "block w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-150",
                filters.material === mat
                  ? "bg-luxe-400/20 text-luxe-300 border border-luxe-400/40"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() =>
              onChange({ ...filters, exportOnly: !filters.exportOnly })
            }
            className={cn(
              "w-10 h-5 rounded-full relative transition-colors duration-200 cursor-pointer",
              filters.exportOnly ? "bg-luxe-400" : "bg-white/20"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200",
                filters.exportOnly ? "left-5" : "left-0.5"
              )}
            />
          </div>
          <span className="text-sm text-white/70 group-hover:text-white transition-colors">
            Export-Ready Only
          </span>
        </label>
      </div>

      <button
        onClick={() =>
          onChange({ category: "All", material: "All", exportOnly: false })
        }
        className="text-xs text-white/40 hover:text-luxe-300 transition-colors"
      >
        Clear filters
      </button>
    </aside>
  );
}
