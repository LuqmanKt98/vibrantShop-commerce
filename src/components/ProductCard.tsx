
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/LazyImage";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Lazy Loading */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <LazyImage 
          src={product.image} 
          alt={product.name}
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-1">
          <span className="text-xs text-muted-foreground">{product.category}</span>
          <div className="ml-auto flex items-center">
            <Star className="h-3 w-3 fill-shop-amber text-shop-amber" />
            <span className="ml-1 text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="block mb-1 group">
          <h3 className="font-medium text-foreground group-hover:text-shop-blue transition-colors">{product.name}</h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
          <Button 
            onClick={() => addToCart(product)} 
            className="bg-shop-blue hover:bg-shop-blue/90 transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
