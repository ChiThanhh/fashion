import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Product = () => {
    // Dữ liệu sản phẩm thời trang, thêm trường discount
    const products = [
        { id: 1, name: 'Áo Khoác Slim Fit', category: 'Quần Áo', brand: 'Zara', price: 129.99, image: 'https://via.placeholder.com/300x400?text=Áo+Khoác', discount: false },
        { id: 2, name: 'Giày Air Max', category: 'Giày Dép', brand: 'Nike', price: 149.99, image: 'https://via.placeholder.com/300x400?text=Giày+Air+Max', discount: true },
        { id: 3, name: 'Túi Xách Da', category: 'Phụ Kiện', brand: 'Gucci', price: 499.99, image: 'https://via.placeholder.com/300x400?text=Túi+Xách', discount: false },
        { id: 4, name: 'Váy Lụa', category: 'Quần Áo', brand: 'H&M', price: 89.99, image: 'https://via.placeholder.com/300x400?text=Váy+Lụa', discount: true },
        { id: 5, name: 'Kính Mát', category: 'Phụ Kiện', brand: 'Ray-Ban', price: 179.99, image: 'https://via.placeholder.com/300x400?text=Kính+Mát', discount: false },
        { id: 6, name: 'Quần Jeans', category: 'Quần Áo', brand: 'Levi\'s', price: 69.99, image: 'https://via.placeholder.com/300x400?text=Quần+Jeans', discount: false },
        { id: 7, name: 'Đồng Hồ Thể Thao', category: 'Phụ Kiện', brand: 'Nike', price: 99.99, image: 'https://via.placeholder.com/300x400?text=Đồng+Hồ', discount: true },
        { id: 8, name: 'Giày Chạy Bộ', category: 'Giày Dép', brand: 'Adidas', price: 119.99, image: 'https://via.placeholder.com/300x400?text=Giày+Chạy+Bộ', discount: false },
        { id: 9, name: 'Áo Thun Basic', category: 'Quần Áo', brand: 'Uniqlo', price: 29.99, image: 'https://via.placeholder.com/300x400?text=Áo+Thun', discount: false },
        { id: 10, name: 'Balo Laptop', category: 'Phụ Kiện', brand: 'Samsonite', price: 89.99, image: 'https://via.placeholder.com/300x400?text=Balo+Laptop', discount: true },
        { id: 11, name: 'Mũ Bucket', category: 'Phụ Kiện', brand: 'H&M', price: 19.99, image: 'https://via.placeholder.com/300x400?text=Mũ+Bucket', discount: false },
        { id: 12, name: 'Giày Tây Da Bò', category: 'Giày Dép', brand: 'Clarks', price: 159.99, image: 'https://via.placeholder.com/300x400?text=Giày+Tây', discount: true },
        { id: 13, name: 'Áo Hoodie Nỉ', category: 'Quần Áo', brand: 'Zara', price: 59.99, image: 'https://via.placeholder.com/300x400?text=Áo+Hoodie', discount: false },
        { id: 14, name: 'Thắt Lưng Da', category: 'Phụ Kiện', brand: 'Gucci', price: 299.99, image: 'https://via.placeholder.com/300x400?text=Thắt+Lưng', discount: false },
        { id: 15, name: 'Giày Sneaker Nữ', category: 'Giày Dép', brand: 'Puma', price: 109.99, image: 'https://via.placeholder.com/300x400?text=Sneaker+Nữ', discount: true },
        { id: 16, name: 'Quần Short Nam', category: 'Quần Áo', brand: 'H&M', price: 39.99, image: 'https://via.placeholder.com/300x400?text=Quần+Short', discount: false },
        { id: 17, name: 'Túi Đeo Chéo', category: 'Phụ Kiện', brand: 'Nike', price: 49.99, image: 'https://via.placeholder.com/300x400?text=Túi+Đeo+Chéo', discount: true },
        { id: 18, name: 'Áo Sơ Mi Trắng', category: 'Quần Áo', brand: 'Uniqlo', price: 39.99, image: 'https://via.placeholder.com/300x400?text=Áo+Sơ+Mi', discount: false },
        { id: 19, name: 'Giày Lười', category: 'Giày Dép', brand: 'Zara', price: 129.99, image: 'https://via.placeholder.com/300x400?text=Giày+Lười', discount: false },
        { id: 20, name: 'Găng Tay Len', category: 'Phụ Kiện', brand: 'Uniqlo', price: 14.99, image: 'https://via.placeholder.com/300x400?text=Găng+Tay', discount: true }
    ];
    

    const categories = ['Tất Cả', 'Quần Áo', 'Giày Dép', 'Phụ Kiện'];
    const brands = ['Tất Cả', 'Zara', 'Nike', 'Gucci', 'H&M', 'Ray-Ban', 'Levi\'s', 'Adidas'];

    // Quản lý trạng thái
    const [selectedCategory, setSelectedCategory] = useState('Tất Cả');
    const [selectedBrand, setSelectedBrand] = useState('Tất Cả');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    // Logic lọc sản phẩm
    const filteredProducts = products.filter(product => {
        const inCategory = selectedCategory === 'Tất Cả' || product.category === selectedCategory;
        const inBrand = selectedBrand === 'Tất Cả' || product.brand === selectedBrand;
        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        return inCategory && inBrand && inPriceRange;
    });

    // Logic phân trang
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Hàm cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            {/* Banner đầu trang */}
            <div className="relative bg-black text-white  mb-8">
                <div data-aos="zoom-in" data-aos-delay="100">
                    <img
                        src="https://pos.nvncdn.com/8073c5-83109/bn/20250211_PVRxquTd.gif"
                        alt="Banner Thời Trang"
                        className="w-full h-48 object-cover opacity-40"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl font-semibold tracking-tight">Bộ Sưu Tập Thời Trang</h1>
                    <p data-aos="fade-down" data-aos-delay="500" className="text-sm mt-2">Khám phá phong cách dẫn đầu xu hướng</p>
                </div>
            </div>

            <div className="container mx-auto px-14 py-6">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Thanh bên */}
                    <div className="w-full md:w-1/4 bg-white p-4 rounded-md shadow-sm">
                        <h2 data-aos="fade-right" data-aos-delay="100" className="text-lg font-medium text-black mb-3 flex items-center">

                            Bộ Lọc
                        </h2>

                        {/* Lọc danh mục */}
                        <div data-aos="fade-right" data-aos-delay="200" className="mb-4">
                            <h3 className="text-base font-medium text-gray-800 mb-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                                Danh Mục
                            </h3>
                            {categories.map(category => (
                                <div key={category} className="flex items-center mb-1">
                                    <input
                                        type="radio"
                                        id={category}
                                        name="category"
                                        checked={selectedCategory === category}
                                        onChange={() => setSelectedCategory(category)}
                                        className="mr-1.5 accent-black"
                                    />
                                    <label htmlFor={category} className="text-sm text-gray-600">{category}</label>
                                </div>
                            ))}
                        </div>

                        {/* Lọc thương hiệu */}
                        <div data-aos="fade-right" data-aos-delay="300" className="mb-4">
                            <h3 className="text-base font-medium text-gray-800 mb-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10m-10 10h10m-7-7v7"></path>
                                </svg>
                                Thương Hiệu
                            </h3>
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="w-full p-1.5 border border-gray-300 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-black"
                            >
                                {brands.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* Lọc khoảng giá */}
                        <div data-aos="fade-right" data-aos-delay="400" className="mb-4">
                            <h3 className="text-base font-medium text-gray-800 mb-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                                </svg>
                                Khoảng Giá
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                    className="w-1/2 p-1.5 border border-gray-300 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-black"
                                    placeholder="Tối thiểu"
                                />
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                    className="w-1/2 p-1.5 border border-gray-300 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-black"
                                    placeholder="Tối đa"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lưới sản phẩm */}
                    <div className="w-full md:w-3/4 ml-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {currentProducts.map((product, index) => (
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
                                                className="flex-1  t flex items-center justify-center gap-2 bg-gray-200 text-black py-1.5 text-xs rounded-md hover:bg-gray-300 transition-colors"
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
                            ))}
                        </div>

                        {/* Phân trang */}
                        <div className="flex justify-center mt-4">
                            <nav className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => paginate(page)}
                                        className={`px-3 py-1 rounded-md text-sm ${currentPage === page ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nút quay lại đầu trang */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </button>
        </div>
    );
};

export default Product;