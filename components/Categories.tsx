import React from "react";

export default function Categories({ categories, activeCategory, setActiveCategory }: any) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-yellow-900 italic">Explore by Category</h2>
      <div className="flex gap-3 flex-wrap">
        {categories.map((c: string) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-5 py-2 rounded-full border ${activeCategory === c ? 'bg-yellow-700 text-white' : 'bg-white text-yellow-800 border-yellow-700 hover:bg-yellow-50'}`}
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
