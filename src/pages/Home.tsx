
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star, BadgePercent, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 4);

const Hero = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-shop-blue/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Shop <span className="text-shop-blue">Smarter</span>,<br />
              Live <span className="text-shop-emerald">Better</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md animate-fade-in">
              Discover our handpicked collection of high-quality products that enhance your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/shop" className="btn-primary inline-flex items-center justify-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              <Link to="/categories" className="btn-secondary inline-flex items-center justify-center">
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern interior with products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-lg shadow-lg animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-shop-amber text-shop-amber" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9 out of 5</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Based on 2,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-10 w-10 text-shop-blue" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50"
    },
    {
      icon: <BadgePercent className="h-10 w-10 text-shop-emerald" />,
      title: "Special Discounts",
      description: "Member-exclusive deals and offers"
    },
    {
      icon: <Star className="h-10 w-10 text-shop-amber" />,
      title: "Quality Guarantee",
      description: "All products meet our quality standards"
    }
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-sm flex items-start space-x-4">
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link to="/shop" className="text-shop-blue hover:underline">
            View All
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    {
      name: "Furniture",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      url: "/categories?id=furniture"
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
      url: "/categories?id=electronics"
    },
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1614676471928-2ebd94e2e2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      url: "/categories?id=clothing"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-shop-blue/5 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.url}
              className="relative overflow-hidden rounded-lg group aspect-video"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-white text-xl font-medium p-6">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          Subscribe to get special offers, free giveaways, and product launches.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border rounded-md flex-grow focus:outline-none focus:ring-1 focus:ring-shop-blue"
          />
          <button className="btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <FeaturedProducts />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
