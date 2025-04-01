
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Check, Star, ChevronLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { LazyImage } from "@/components/LazyImage";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const product = id ? getProductById(id) : undefined;
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (!product && !isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/shop")}>
            Continue Shopping
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <Button 
          variant="ghost" 
          className="mb-4 flex items-center hover:translate-x-[-4px] transition-transform"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-muted rounded-lg overflow-hidden">
            {isLoading ? (
              <Skeleton className="aspect-square w-full" />
            ) : (
              <LazyImage
                src={product!.image}
                alt={product!.name}
                className="object-cover"
              />
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-8 w-2/3" />
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-4" />
                  ))}
                </div>
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-20 w-full" />
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 capitalize">{product!.category}</p>
                  <h1 className="text-3xl font-bold mb-2">{product!.name}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product!.rating || 0)
                              ? "fill-shop-amber text-shop-amber"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product!.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
                    </span>
                  </div>
                  <p className="text-2xl font-bold mb-4">${product!.price.toFixed(2)}</p>
                  <p className="text-muted-foreground">{product!.description}</p>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center border rounded-md mr-4">
                    <button
                      className="px-3 py-2 text-muted-foreground hover:bg-muted transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-3 py-2">{quantity}</span>
                    <button
                      className="px-3 py-2 text-muted-foreground hover:bg-muted transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  {product!.inStock ? (
                    <span className="flex items-center text-shop-emerald text-sm">
                      <Check className="h-4 w-4 mr-1" /> In Stock
                    </span>
                  ) : (
                    <span className="text-destructive text-sm">Out of Stock</span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-shop-blue hover:bg-shop-blue/90 flex-1 hover:scale-105 transition-transform"
                    onClick={() => {
                      for (let i = 0; i < quantity; i++) {
                        addToCart(product!);
                      }
                    }}
                    disabled={!product!.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-muted/50 transition-colors"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Made with premium materials</li>
                    <li>Ethically sourced components</li>
                    <li>Free shipping on orders over $50</li>
                    <li>30-day return policy</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <div 
                  key={relatedProduct.id} 
                  className="product-card animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <LazyImage
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground mb-1">{relatedProduct.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">${relatedProduct.price.toFixed(2)}</p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full hover:scale-105 transition-transform"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
