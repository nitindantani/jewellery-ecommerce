import React from "react";

export default function Navbar({ cartCount, setQuery }: any) {
  return (
    <header className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-extrabold text-yellow-800 tracking-wide italic">Jewellery Lover</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a className="hover:text-yellow-700 cursor-pointer">Home</a>
            <a className="hover:text-yellow-700 cursor-pointer">Shop</a>
            <a className="hover:text-yellow-700 cursor-pointer">Collections</a>
            <a className="hover:text-yellow-700 cursor-pointer">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your love for jewels..."
              className="border rounded-md px-3 py-2 w-64 shadow-sm"
            />
          </div>
          <button className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-yellow-800 text-white rounded-full text-xs px-1">{cartCount}</span>
          </button>
          <button className="px-3 py-2 text-sm rounded-md border border-yellow-700 text-yellow-800 hover:bg-yellow-700 hover:text-white">Login</button>
        </div>
      </div>
    </header>
  );
}
