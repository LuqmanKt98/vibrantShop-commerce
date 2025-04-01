
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (products.length === 0) return;
    
    // Show products one by one with a slight delay for a staggered animation effect
    const showProducts = async () => {
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      
      setVisibleProducts([]);
      
      for (let i = 0; i < products.length; i++) {
        await delay(50); // 50ms delay between each product
        setVisibleProducts(prev => [...prev, products[i]]);
      }
    };
    
    showProducts();
  }, [products]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-muted rounded-lg overflow-hidden">
              <Skeleton className="w-full aspect-square" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between items-center pt-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {visibleProducts.map((product, index) => (
        <div 
          key={product.id} 
          className="animate-fade-in" 
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
