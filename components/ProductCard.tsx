import Image from "next/image";
import React from "react";

export default function ProductCard({ product, addToCart, setSelected }: any) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-yellow-100 hover:shadow-lg transition">
      <div className="aspect-w-4 aspect-h-3">
        <Image src={product.img} alt={product.name} width={400} height={300} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
        <p className="text-yellow-700 font-bold mt-1">₹{product.price.toLocaleString()}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => addToCart(product)} className="flex-1 bg-yellow-700 text-white px-3 py-2 rounded-md">Add to Cart</button>
          <button onClick={() => setSelected(product)} className="px-3 py-2 border border-yellow-700 text-yellow-800 rounded-md">Quick View</button>
        </div>
      </div>
    </article>
  );
}
