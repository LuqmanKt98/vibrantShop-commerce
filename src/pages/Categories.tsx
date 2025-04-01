
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/LazyImage";
import { Skeleton } from "@/components/ui/skeleton"; 
import { products } from "@/data/products";

// Get unique categories
const categories = Array.from(new Set(products.map(product => product.category)));

export default function Categories() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Get a representative product image for each category
  const getCategoryImage = (category: string) => {
    const product = products.find(p => p.category === category);
    return product ? product.image : '';
  };

  // Get product count for each category
  const getCategoryCount = (category: string) => {
    return products.filter(p => p.category === category).length;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-lg overflow-hidden">
                <Skeleton className="aspect-[3/2] w-full" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category} 
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/2] overflow-hidden relative group">
                  <LazyImage
                    src={getCategoryImage(category)}
                    alt={category}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 capitalize">{category}</h2>
                  <p className="text-muted-foreground mb-4">{getCategoryCount(category)} products</p>
                  <Button 
                    onClick={() => navigate(`/shop?category=${category}`)}
                    className="w-full bg-shop-blue hover:bg-shop-blue/90 hover:scale-105 transition-transform"
                  >
                    Browse {category}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
