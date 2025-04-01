
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { CategoryFilter } from "@/components/CategoryFilter";
import { products, getProductsByCategory } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Shop() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for category parameter in URL
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    setIsLoading(true);
    
    setTimeout(() => {
      if (categoryParam) {
        setSelectedCategory(categoryParam);
        setFilteredProducts(getProductsByCategory(categoryParam));
      } else {
        setFilteredProducts(products);
      }
      setIsLoading(false);
    }, 500);
  }, [location.search]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsLoading(true);
    
    setTimeout(() => {
      setFilteredProducts(getProductsByCategory(categoryId));
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Shop</h1>
          <Button 
            variant="outline" 
            className="lg:hidden flex items-center gap-2"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block animate-fade-in`}>
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {filteredProducts.length > 0 || isLoading ? (
          <ProductGrid products={filteredProducts} isLoading={isLoading} />
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <h2 className="text-xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">Try changing your filter options.</p>
            <Button 
              variant="outline" 
              onClick={() => handleCategoryChange("all")}
              className="hover:scale-105 transition-transform"
            >
              Show all products
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
