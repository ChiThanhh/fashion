import React, { useState } from 'react';

const Blog = () => {
    const categories = ['Thời trang', 'Phong cách sống', 'Streetwear', 'Phụ kiện'];
    const posts = [
        // ...6 bài viết cũ ở đây
    
        {
            title: 'Mix & Match phong cách Vintage',
            category: 'Thời trang',
            excerpt: 'Hướng dẫn kết hợp trang phục theo phong cách vintage...',
            date: '2 Tháng 4, 2025',
            image: 'https://source.unsplash.com/400x300/?vintage-fashion'
        },
        {
            title: '10 cách mặc đẹp với áo thun trắng',
            category: 'Thời trang',
            excerpt: 'Áo thun trắng – item cơ bản nhưng cực kỳ linh hoạt...',
            date: '1 Tháng 4, 2025',
            image: 'https://source.unsplash.com/400x300/?white-tshirt'
        },
        {
            title: 'Phối đồ theo tone màu pastel',
            category: 'Thời trang',
            excerpt: 'Nhẹ nhàng và tinh tế với pastel – xu hướng không bao giờ lỗi thời...',
            date: '30 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?pastel-fashion'
        },
        {
            title: 'Giày sneaker không bao giờ lỗi mốt',
            category: 'Streetwear',
            excerpt: 'Sneaker – sự lựa chọn hàng đầu cho mọi phong cách...',
            date: '28 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?sneakers'
        },
        {
            title: 'Top 5 mẫu túi xách hot nhất 2025',
            category: 'Phụ kiện',
            excerpt: 'Cập nhật ngay những mẫu túi đang làm mưa làm gió...',
            date: '26 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?handbag'
        },
        {
            title: 'Phong cách Layering mùa đông',
            category: 'Thời trang',
            excerpt: 'Giữ ấm và vẫn thời trang với kỹ thuật layering...',
            date: '20 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?layering-fashion'
        },
        {
            title: 'Trang phục công sở hiện đại',
            category: 'Thời trang',
            excerpt: 'Phong cách chuyên nghiệp nhưng vẫn cá tính cho dân văn phòng...',
            date: '15 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?office-fashion'
        },
        {
            title: 'Phụ kiện vàng: Sự trở lại mạnh mẽ',
            category: 'Phụ kiện',
            excerpt: 'Trang sức vàng trở lại với diện mạo hiện đại và ấn tượng...',
            date: '10 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?gold-accessories'
        },
        {
            title: 'Áo blazer và cách mix hiện đại',
            category: 'Thời trang',
            excerpt: 'Biến tấu blazer để phù hợp với cả phong cách đường phố và công sở...',
            date: '5 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?blazer-fashion'
        },
        {
            title: 'Trang phục cho chuyến du lịch biển',
            category: 'Phong cách sống',
            excerpt: 'Đừng bỏ lỡ những outfit hoàn hảo cho kỳ nghỉ biển của bạn...',
            date: '1 Tháng 3, 2025',
            image: 'https://source.unsplash.com/400x300/?beachwear'
        },
        {
            title: 'Top 5 Local Brand nổi bật',
            category: 'Streetwear',
            excerpt: 'Các thương hiệu nội địa đang “bùng nổ” trên thị trường...',
            date: '25 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?local-brand'
        },
        {
            title: 'Lựa chọn kính mát phù hợp khuôn mặt',
            category: 'Phụ kiện',
            excerpt: 'Kính mát – không chỉ là phụ kiện mà còn định hình phong cách...',
            date: '22 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?sunglasses'
        },
        {
            title: 'Phong cách Unisex ngày càng phổ biến',
            category: 'Thời trang',
            excerpt: 'Thời trang không giới hạn – khám phá phong cách unisex...',
            date: '20 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?unisex-fashion'
        },
        {
            title: 'Bí quyết mặc đẹp cho người thấp',
            category: 'Thời trang',
            excerpt: 'Tăng chiều cao “ảo” chỉ với một vài mẹo phối đồ...',
            date: '18 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?petite-fashion'
        },
        {
            title: 'Cảm hứng thời trang từ thập niên 90',
            category: 'Thời trang',
            excerpt: 'Phong cách retro trở lại và đang làm mưa làm gió...',
            date: '15 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?90s-fashion'
        },
        {
            title: 'Phối màu trang phục chuẩn không cần chỉnh',
            category: 'Thời trang',
            excerpt: 'Hiểu rõ bánh xe màu sắc để phối đồ cực chuẩn...',
            date: '10 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?color-matching'
        },
        {
            title: 'Tái sử dụng quần áo cũ một cách sáng tạo',
            category: 'Thời trang bền vững',
            excerpt: 'Làm mới tủ đồ của bạn mà không cần mua mới...',
            date: '5 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?recycled-fashion'
        },
        {
            title: 'Thời trang Minimalism – Ít mà chất',
            category: 'Thời trang',
            excerpt: 'Cách ăn mặc tối giản nhưng vẫn đậm cá tính...',
            date: '2 Tháng 2, 2025',
            image: 'https://source.unsplash.com/400x300/?minimalist-fashion'
        },
        {
            title: 'Làm chủ phong cách cá nhân',
            category: 'Phong cách sống',
            excerpt: 'Hành trình khám phá và định hình phong cách riêng...',
            date: '30 Tháng 1, 2025',
            image: 'https://source.unsplash.com/400x300/?personal-style'
        },
        {
            title: 'Tips chọn đồng hồ phù hợp phong cách',
            category: 'Phụ kiện',
            excerpt: 'Đồng hồ không chỉ để xem giờ mà còn thể hiện gu thời trang...',
            date: '25 Tháng 1, 2025',
            image: 'https://source.unsplash.com/400x300/?watches'
        }
    ];
    

    // --- Phân trang ---
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <header className="p-6 text-center">
                <h1 className="text-4xl font-bold">Blog Thời Trang</h1>
                <p className="mt-2 text-lg text-gray-500">Cập nhật xu hướng & phong cách mới nhất</p>
            </header>

            <div className="max-w-7xl mx-auto p-6">
                {/* Danh mục */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Bài viết */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                                <p className="text-sm text-gray-500 mb-2">{post.date} - {post.category}</p>
                                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                                <button className="text-blue-600 hover:underline text-sm">Xem thêm</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Phân trang */}
                <div className="flex justify-center mt-8">
                    <nav className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => paginate(page)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                    currentPage === page
                                        ? 'bg-black text-white'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Blog;
