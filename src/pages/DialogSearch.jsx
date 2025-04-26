import React from 'react';
import { FaSearch } from 'react-icons/fa';

const DialogSearch = ({ isOpen, onClose }) => {
    const popularSearches = ['Áo thun', 'Quần jean', 'Váy nữ', 'Sneakers', 'Túi xách','Áo Jean','Áo khoác'];

    const suggestedProducts = [
        {
            name: 'Áo thun basic trắng',
            price: '199.000đ',
            image: 'https://cotton4u.vn/files/product/thumab/400/2025/04/23/51bd03904cbe8d90983e31e81714d480.webp',
        },
        {
            name: 'Quần jean rách gối',
            price: '399.000đ',
            image: 'https://cotton4u.vn/files/product/thumab/400/2025/04/23/cbdfb2c062793f8d0241c3b641c0dd4c.webp',
        },
        {
            name: 'Váy xòe công sở',
            price: '299.000đ',
            image: 'https://cotton4u.vn/files/product/thumab/400/2024/04/12/9ac9a5dddc905e2cc9bd258c264416d6.webp',
        },
    ];

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

            {/* Slide panel */}
            <div
                className={`absolute top-0 right-0 h-full w-full max-w-lg bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Tìm kiếm sản phẩm</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black text-3xl cursor-pointer">&times;</button>
                </div>

                {/* Thanh tìm kiếm */}
                <div className="p-4">
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-gray-400">
                            <FaSearch /> 
                        </span>
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm thời trang..."
                            className="w-full pl-10 pr-24 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out"
                        />
                        <button className="absolute right-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-200 hover:text-black hover:border hover:border-black transition-colors duration-500 ease-in-out cursor-pointer">
                            Tìm
                        </button>
                    </div>
                </div>

                {/* Tìm kiếm nhiều nhất */}
                <div className="px-4 pb-2">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Tìm kiếm nhiều nhất</h3>
                    <div className="flex flex-wrap gap-2">
                        {popularSearches.map((item, idx) => (
                            <span
                                key={idx}
                                className="bg-gray-100 text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Gợi ý sản phẩm */}
                <div className="px-4 pt-4">
                    <h3 className="text-lg font-semibold text-gray-600 mb-4">Gợi ý sản phẩm</h3>
                    <ul className="space-y-4">
                        {suggestedProducts.map((product, idx) => (
                            <li key={idx} className="flex items-center gap-4 border-b pb-3 cursor-pointer">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-20 h-22 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{product.name}</p>
                                    <p className="text-red-500 font-semibold">{product.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DialogSearch;
