import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-10 px-4 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Cột 1 */}
                <div>
                    <h2 data-aos="fade-up"  className="text-gray-700 text-lg font-semibold mb-4">Về chúng tôi</h2>
                    <p data-aos="fade-up" data-aos-delay='100' className="text-sm">
                        Chúng tôi cung cấp những sản phẩm chất lượng cao với dịch vụ tận tâm, mang lại trải nghiệm mua sắm tốt nhất cho khách hàng.
                    </p>
                </div>

                {/* Cột 2 */}
                <div>
                    <h2 data-aos="fade-up" data-aos-delay='200' className="text-gray-700 text-lg font-semibold mb-4">Liên kết nhanh</h2>
                    <ul data-aos="fade-up" data-aos-delay='300'  className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Trang chủ</a></li>
                        <li><a href="#" className="hover:underline">Sản phẩm</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Liên hệ</a></li>
                    </ul>
                </div>

                {/* Cột 3 */}
                <div>
                    <h2 data-aos="fade-up" data-aos-delay='400' className="text-gray-700 text-lg font-semibold mb-4">Hỗ trợ khách hàng</h2>
                    <ul data-aos="fade-up" data-aos-delay='500'  className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Hướng dẫn mua hàng</a></li>
                        <li><a href="#" className="hover:underline">Chính sách đổi trả</a></li>
                        <li><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
                        <li><a href="#" className="hover:underline">Điều khoản sử dụng</a></li>
                    </ul>
                </div>

                {/* Cột 4 */}
                <div>
                    <h2 data-aos="fade-up" data-aos-delay='600' className="text-gray-700 text-lg font-semibold mb-4">Theo dõi chúng tôi</h2>
                    <div data-aos="fade-up" data-aos-delay='700'  className="flex space-x-4">
                        <a href="#" className="hover:text-gray-700">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}   
            <div  className="mt-10 text-center text-sm text-gray-700 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} YourCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
