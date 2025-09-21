"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import Footer from "@/components/Footer";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
};

const sampleProducts: Product[] = [
  { id: 1, name: "Rose Gold Heart Pendant", price: 2499, img: "/image/rosegold.jpg", category: "Necklaces" },
  { id: 2, name: "Classic Diamond Studs", price: 4999, img: "/image/studs.jpg", category: "Earrings" },
  { id: 3, name: "Pearl Bracelet", price: 1999, img: "/image/bracelet.jpg", category: "Bracelets" },
  { id: 4, name: "Antique Ring", price: 3499, img: "/image/ring.jpeg", category: "Rings" },
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];
  const filtered = sampleProducts.filter(
    (p) => (activeCategory === "All" || p.category === activeCategory) &&
           (!query || p.name.toLowerCase().includes(query.toLowerCase()))
  );

  const addToCart = (product: Product) => setCart([...cart, product]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-amber-50 to-white text-gray-900 font-serif">
      <Navbar cartCount={cart.length} setQuery={setQuery} />
      <Hero />
      <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} setSelected={setSelected} />
        ))}
      </main>
      <QuickViewModal selected={selected} setSelected={setSelected} addToCart={addToCart} />
      <Footer />
    </div>
  );
}
