
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/contexts/CartContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-shop-blue">
          VibrantShop
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-shop-blue transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-foreground hover:text-shop-blue transition-colors">
            Shop
          </Link>
          <Link to="/categories" className="text-foreground hover:text-shop-blue transition-colors">
            Categories
          </Link>
          <Link to="/about" className="text-foreground hover:text-shop-blue transition-colors">
            About
          </Link>
        </nav>

        {/* Right Side Items */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <ThemeToggle />
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-shop-blue text-white rounded-full text-xs font-medium w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
