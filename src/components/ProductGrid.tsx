
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="animate-slide-up">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
