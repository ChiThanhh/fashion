// components/ProductItem.jsx
import React from 'react';


const ProductItem = ({ image, name, price, originalPrice, isNew }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="mt-2">
          {originalPrice ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 line-through">{originalPrice}</span>
              <span className="text-red-500 font-bold">{price}</span>
            </div>
          ) : (
            <span className="text-black font-semibold">{price}</span>
          )}
        </div>
        {isNew && (
          <span className="inline-block mt-2 bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
            Mới
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
