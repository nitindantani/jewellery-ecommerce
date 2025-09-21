export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-50 border-t border-yellow-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-bold italic text-yellow-800">Jewellery Lover</h4>
          <p className="mt-2 text-[#3E2723]">Jewels crafted for lovers, celebrations, and cherished memories. Free shipping on orders over ₹699.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Customer Care</h4>
          <ul className="space-y-1 text-[#3E2723]">
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Subscribe</h4>
          <p className="text-[#3E2723] mb-2 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
            <button className="bg-[#D4AF37] hover:bg-[#C49E32] text-[#3E2723] px-4 py-2 rounded-r-lg font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#3E2723] mt-8">© {new Date().getFullYear()} Jewellery Lover. All rights reserved.</div>
    </footer>
  );
}
