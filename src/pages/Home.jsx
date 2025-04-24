import React, { useEffect, useState } from 'react';
import slider1 from '../assets/home/cv-sale-hc.jpg';
import slider2 from '../assets/home/cv-1504_1.jpg';
import slider3 from '../assets/home/20250218_XVDd0CTz.jpg';

const products = [
    { id: 1, name: "Áo Thun Nam", price: "199.000đ", image: "https://cotton4u.vn/files/product/thumab/400/2025/04/23/51bd03904cbe8d90983e31e81714d480.webp", isNew: true },
    { id: 2, name: "Quần Jeans Nữ", price: "299.000đ", image: "https://cotton4u.vn/files/product/thumab/400/2025/04/23/378c182580a762778041c118102cfaea.webp", isNew: false },
    { id: 3, name: "Áo Sơ Mi Nam", price: "399.000đ", image: "https://cotton4u.vn/files/product/thumab/400/2025/04/23/9f311302ec01aa2d0fd91f88bf64247c.webp", isNew: true },
    { id: 4, name: "Váy Nữ", price: "499.000đ", image: "https://cotton4u.vn/files/product/thumab/400/2025/04/23/cbdfb2c062793f8d0241c3b641c0dd4c.webp", isNew: false },
];

const popularProducts = [
    { id: 5, name: "Áo Khoác Dạ", price: "599.000đ", image: "https://cotton4u.vn/files/product/thumab/400/2024/10/04/8beb9d1761b6ff1c47ec82c4fc116f98.jpg" },
];

const discountProduct = {
    id: 6,
    name: "Áo Len Giảm Giá", price: "149.000đ", image: "https://cotton4u.vn/files/product/thumab/400/2024/04/12/9ac9a5dddc905e2cc9bd258c264416d6.webp",
};

const posts = [
    { id: 1, title: "Xu hướng thời trang hè 2025", image: "https://cotton4u.vn/files/news/2025/04/24/f3691a2362ad7219b7c27b71adb62626.webp" },
    { id: 2, title: "Cách phối đồ thanh lịch", image: "https://cotton4u.vn/files/product/thumab/400/2023/06/13/834fbc4965bd4b1c05699e11fe1aa4a8.webp" },
    { id: 3, title: "Top phụ kiện không thể thiếu", image: "https://cotton4u.vn/files/product/thumab/400/2023/05/29/55a652ad490038d509e674fe9ba588c3.webp" },
];

const Home = () => {
    const images = [slider1, slider2, slider3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(3600); // 1 giờ giảm giá

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Countdown logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    return (
        <div>
            {/* Slider */}
            <div data-aos="zoom-in-right" data-aos-duration="1400">
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 md:px-8">
            <h1
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            >
              Bộ sưu tập mới nhất
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
            >
              Khám phá những xu hướng thời trang hàng đầu năm nay
            </p>
            <div data-aos="fade-up" data-aos-delay="700">
              <button
                className="px-4 py-2 sm:px-6 sm:py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
              >
                Xem ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

            {/* Sản phẩm mới */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 data-aos="fade-right"
                    className="text-2xl font-semibold mb-6">Sản phẩm mới nhất</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.filter(p => p.isNew).map((item) => (
                        <div data-aos="fade-up" key={item.id} className="bg-white shadow rounded-lg overflow-hidden group">
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-red-500">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" className="flex justify-center mt-6">
                    <button  className="px-6 py-2 bg-gray-100 text-sm text-black font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 transition duration-300">
                        Xem thêm
                    </button>
                </div>
            </div>
            {/* Sản phẩm tìm kiếm nhiều nhất */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div data-aos="fade-right" className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Sản phẩm được tìm kiếm nhiều</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {popularProducts.map((item) => (
                        <div data-aos="fade-up" key={item.id} className="bg-white shadow rounded-lg overflow-hidden group">
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-red-500">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" className="flex justify-center mt-6">
                    <button  className="px-6 py-2 bg-gray-100 text-sm text-black font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 transition duration-300">
                        Xem thêm
                    </button>
                </div>
            </div>
            {/* Sản phẩm đang giảm giá */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div data-aos="fade-right" className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Sản phẩm đang giảm giá</h2>
                    <span className="text-red-600 font-bold">Kết thúc sau: {formatTime(timeLeft)}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((item) => (
                        <div data-aos="fade-up" key={item.id} className="bg-white shadow rounded-lg overflow-hidden group relative">
                            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">Giảm giá</span>
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-red-500">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" className="flex justify-center mt-6">
                    <button  className="px-6 py-2 bg-gray-100 text-sm text-black font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 transition duration-300">
                        Xem thêm
                    </button>
                </div>
            </div>
            {/* Sản phẩm giảm giá duy nhất */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 data-aos="fade-right" className="text-2xl font-semibold mb-6">Khuyến mãi trong thời gian có hạn</h2>
                <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col sm:flex-row">
                    <img data-aos="fade-right" data-aos-delay='100' src={discountProduct.image} alt={discountProduct.name} className="w-full sm:w-1/2 h-64 object-cover" />
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h3 data-aos="fade-left" data-aos-delay='100' className="text-xl font-bold">{discountProduct.name}</h3>
                            <p data-aos="fade-left" data-aos-delay='300' className="text-red-600 text-lg mb-4">{discountProduct.price}</p>
                        </div>
                        <p data-aos="fade-left" data-aos-delay='400' className="text-sm text-gray-600">Kết thúc sau: {formatTime(timeLeft)}</p>
                    </div>
                </div>
            </div>
            {/* 3 bài viết mới nhất */}
            <div className="max-w-7xl border border-gray-200 rounded-lg shadow-sm mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 data-aos="fade-right" className="text-2xl font-semibold">Bài viết mới nhất</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div data-aos="fade-up" key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" className="flex justify-center mt-6">
                    <button  className="px-6 py-2 bg-gray-100 text-sm text-black font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 transition duration-300">
                        Xem tất cả
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;