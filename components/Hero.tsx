import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 via-amber-100 to-yellow-50 py-14">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-900 italic">Adorn Your Love with Elegance</h1>
          <p className="mt-4 text-gray-700 text-lg">Exclusive jewellery for lovers, dreamers, and every beautiful soul. Timeless collections that speak the language of love.</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-700 text-white px-6 py-3 rounded-md shadow-md">Shop Now</button>
            <button className="border border-yellow-700 text-yellow-800 px-6 py-3 rounded-md hover:bg-yellow-700 hover:text-white">View Collections</button>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/image/hero2.jpg" alt="hero" width={500} height={500} className="rounded-lg shadow-lg ring-2 ring-yellow-700" />
        </div>
      </div>
    </section>
  );
}
