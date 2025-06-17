
import { ProductCard } from "./ProductCard";

export const ShoppingCart = () => {
  const products = [
    {
      image: "/4032.webp",
      title: "Google - Google Home - White",
      seller: "Google",
      price: "$299",
      originalPrice: "$359",
      rating: 4,
      stock: true,
      quantity: 1
    },
    {
      image: "/apple-iphone-15-pink-official-image_1.webp", 
      title: "Apple iPhone 11 (64GB, Black)",
      seller: "Apple",
      price: "$899",
      originalPrice: "$999",
      rating: 4,
      stock: true,
      quantity: 1
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">My Shopping Bag (2 Items)</h2>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <button className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2">
        <span>Add more products from wishlist</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};
