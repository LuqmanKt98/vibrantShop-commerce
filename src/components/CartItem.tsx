
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartItem as CartItemType } from "@/types/product";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-sm font-medium ml-4">${(product.price * quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{product.category}</p>
        
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            
            <span className="w-8 text-center text-sm">{quantity}</span>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-destructive"
            onClick={() => removeFromCart(product.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
