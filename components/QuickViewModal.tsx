import Image from "next/image";

export default function QuickViewModal({ selected, setSelected, addToCart }: any) {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl">
        <div className="p-4 flex justify-between items-center border-b border-yellow-200">
          <h3 className="font-semibold text-lg">{selected.name}</h3>
          <button onClick={() => setSelected(null)} className="text-gray-500">Close</button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={selected.img} alt="" width={400} height={400} className="rounded-lg w-full h-80 object-cover ring-1 ring-yellow-200" />
          <div>
            <p className="text-yellow-800 font-bold text-2xl">₹{selected.price.toLocaleString()}</p>
            <p className="mt-4 text-gray-600">A jewellery piece designed with passion and love. Perfect for gifting or treasuring forever.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => { addToCart(selected); setSelected(null); }} className="bg-yellow-700 text-white px-4 py-2 rounded-md">Add to Cart</button>
              <button className="border border-yellow-700 text-yellow-800 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
