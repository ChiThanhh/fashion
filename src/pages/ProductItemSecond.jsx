// components/ProductItemSecond.js
import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductItemSecond = ({ product, index, handleAddToCart, handleAddToFavorites }) => {
    return (
        <div
            data-aos="zoom-in-down"
            data-aos-delay={100 * index}
            key={product.id}
            className="bg-white rounded-md shadow-sm overflow-hidden group relative"
        >
            {/* Tag giảm giá */}
            {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Giảm Giá
                </span>
            )}

            {/* Hình ảnh và overlay */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                        className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                    </svg>
                </div>
            </div>

            <div className="p-3">
                <h3 className="text-base font-medium text-black tracking-tight">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-sm font-semibold text-red-500">{product.price.toFixed(2)} USD</p>
                <div className="mt-3 flex gap-6">
                    <button
                        onClick={() => handleAddToFavorites(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-black py-1.5 text-xs rounded-md hover:bg-gray-300 transition-colors"
                    >
                        <FaHeart className="w-4 h-4 text-red-400" />
                        Yêu Thích
                    </button>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-1.5 text-xs rounded-md hover:bg-gray-800 transition-colors"
                    >
                        <FaShoppingCart className="w-4 h-4" />
                        Giỏ Hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItemSecond;
