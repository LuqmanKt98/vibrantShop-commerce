
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Modern Minimal Chair",
    description: "Sleek, comfortable chair with a modern design that complements any space.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "furniture",
    rating: 4.8,
    inStock: true
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    description: "Eco-friendly t-shirt made from 100% organic cotton. Soft and breathable.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "clothing",
    rating: 4.5,
    inStock: true
  },
  {
    id: "3",
    name: "Ceramic Coffee Mug",
    description: "Handcrafted ceramic mug perfect for your morning coffee or afternoon tea.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1577937927133-61d09c5a4c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    category: "kitchenware",
    rating: 4.7,
    inStock: true
  },
  {
    id: "4",
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with crystal clear audio quality.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    category: "electronics",
    rating: 4.9,
    inStock: true
  },
  {
    id: "5",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and a sleek design.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1052&q=80",
    category: "accessories",
    rating: 4.6,
    inStock: true
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated bottle that keeps your drinks hot or cold for hours.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "kitchenware",
    rating: 4.7,
    inStock: true
  },
  {
    id: "7",
    name: "Smart Fitness Tracker",
    description: "Track your steps, heart rate, and sleep with this sleek fitness wearable.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e95fd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1052&q=80",
    category: "electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: "8",
    name: "Scented Soy Candle",
    description: "Hand-poured soy candle with natural essential oils for a calming atmosphere.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "home",
    rating: 4.8,
    inStock: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "furniture", name: "Furniture" },
  { id: "clothing", name: "Clothing" },
  { id: "kitchenware", name: "Kitchenware" },
  { id: "electronics", name: "Electronics" },
  { id: "accessories", name: "Accessories" },
  { id: "home", name: "Home" }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === "all") return products;
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
