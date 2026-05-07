"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FilterSidebar from "@/components/collection/FilterSidebar";
import ProductGrid from "@/components/collection/ProductGrid";
import products from "@/data/products";

type FilterState = {
  category: string;
  material: string;
  exportOnly: boolean;
};

export default function CollectionPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: "All",
    material: "All",
    exportOnly: false
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.category !== "All" && p.category !== filters.category)
        return false;
      if (filters.material !== "All" && p.material !== filters.material)
        return false;
      if (filters.exportOnly && !p.exportReady) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="section-padding mb-10">
        <SectionHeader
          eyebrow="The Collection"
          title="Luxury Bags Crafted for Premium Markets"
          description="Explore our full range of artisan bags — available for sampling, customization, and bulk export worldwide."
        />
        <div className="flex items-center justify-between mt-6">
          <p className="text-white/50 text-sm">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/70 hover:text-white md:hidden"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </section>

      {/* Mobile filter */}
      {sidebarOpen && (
        <div className="section-padding mb-6 md:hidden">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </div>
      )}

      {/* Layout */}
      <section className="section-padding">
        <div className="flex gap-8 items-start">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-60 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>
    </div>
  );
}

