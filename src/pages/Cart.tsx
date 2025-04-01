
import { Link } from "react-router-dom";
import { ShoppingCart, PackageCheck, CreditCard, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { items, total, clearCart } = useCart();

  const shippingPrice = total > 50 ? 0 : 4.99;
  const taxRate = 0.07; // 7% tax
  const taxAmount = total * taxRate;
  const orderTotal = total + shippingPrice + taxAmount;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold">Cart Items ({items.length})</h2>
                  <Button variant="ghost" size="sm" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shippingPrice === 0 
                        ? "Free" 
                        : `$${shippingPrice.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg pt-2">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-shop-blue hover:bg-shop-blue/90">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Checkout
                </Button>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <PackageCheck className="h-4 w-4 mr-2" />
                    <span>30-day easy returns</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/shop" className="text-shop-blue hover:text-shop-blue/80 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-lg p-12 shadow-sm text-center">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="bg-shop-blue hover:bg-shop-blue/90">
              <Link to="/shop">
                Start Shopping
              </Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
