
import { Facebook, Instagram, Twitter, YouTube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card mt-12 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VibrantShop</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing you the best products with a focus on quality, design, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-shop-blue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-shop-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-shop-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-shop-blue transition-colors">
                <YouTube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-shop-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on new products and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-shop-blue"
              />
              <button className="bg-shop-blue text-white px-4 py-2 rounded-r-md hover:bg-shop-blue/90 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VibrantShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
