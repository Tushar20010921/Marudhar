"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag, Package } from "lucide-react";
import type { Product } from "@/data/products";
import Reveal from "@/components/Reveal";
import dynamic from "next/dynamic";

const ProductViewer = dynamic(
  () => import("@/components/three/ProductViewer"),
  { ssr: false, loading: () => <div className="w-full h-48 rounded-2xl bg-neutral-900/50 animate-pulse" /> }
);

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const [show3D, setShow3D] = useState(false);

  return (
    <Reveal>
      <div className="glass rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-luxe-400/20 hover:-translate-y-1 hover:shadow-luxe-gold border border-white/[0.06]">
        {/* Visual area */}
        <AnimatePresence mode="wait">
          {show3D ? (
            <motion.div
              key="3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductViewer productId={product.id} />
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-48 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center"
            >
              <ShoppingBag className="w-10 h-10 text-luxe-400/40" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="text-xs uppercase tracking-[0.3em] text-luxe-300">
              {product.tag}
            </span>
            {product.exportReady && (
              <span className="flex items-center gap-1 text-[10px] text-green-400/80 border border-green-400/20 rounded-full px-2 py-0.5">
                <Package className="w-3 h-3" />
                Export Ready
              </span>
            )}
          </div>

          <h3 className="font-heading text-xl mt-1">{product.title}</h3>
          <p className="text-white/60 text-sm mt-2 flex-1">{product.subtitle}</p>

          <div className="mt-3 flex gap-2 text-xs text-white/40">
            <span className="border border-white/10 rounded-full px-2 py-0.5">
              {product.category}
            </span>
            <span className="border border-white/10 rounded-full px-2 py-0.5">
              MOQ: {product.moq}
            </span>
          </div>

          <p className="text-luxe-200 font-semibold text-sm mt-3">
            {product.price}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => setShow3D(!show3D)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-luxe-400/30 text-luxe-300 text-xs hover:bg-luxe-400/10 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              {show3D ? "Hide 3D" : "View in 3D"}
            </button>
            <button className="flex-1 py-2 rounded-full bg-luxe-400/10 text-luxe-200 text-xs hover:bg-luxe-400/20 transition-colors text-center">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
        <ShoppingBag className="w-12 h-12 text-white/20 mb-4" />
        <p className="text-white/40">No products match your filters.</p>
        <p className="text-white/30 text-sm mt-1">Try adjusting your selection.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
