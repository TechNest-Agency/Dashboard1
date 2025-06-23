
const ProductCard = ({ image, title, seller, price, originalPrice, rating, stock, quantity }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 relative shadow-sm">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-medium mb-1 break-words">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">Sold by: <span className="text-blue-600">{seller}</span></p>
          
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex space-x-1">
              {renderStars(rating)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-lg font-semibold">{price}</span>
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            </div>
            
            {stock && (
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs self-start sm:self-auto">In Stock</span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <input 
                type="number" 
                value={quantity} 
                className="w-16 px-2 py-1 bg-gray-50 border border-gray-300 rounded text-gray-900 text-center"
                readOnly
              />
            </div>
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Move To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
