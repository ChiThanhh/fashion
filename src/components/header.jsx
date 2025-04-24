import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SlHeart, SlBag, SlMagnifier, SlUser } from 'react-icons/sl';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger and close icons

const Header = () => {
  const wishlistCount = 2;
  const cartCount = 5;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 bg-white shadow-md md:px-8 lg:px-16">
      {/* Logo */}
      <div
        data-aos="flip-left"
        data-aos-delay="200"
        className="text-xl font-bold tracking-wide text-gray-800 md:text-2xl"
      >
        PEANUT
      </div>

      {/* Hamburger Menu (Visible on Mobile) */}
      <button
        data-aos="fade-left"
        className="md:hidden text-2xl text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 gap-4 md:gap-6 text-gray-700 font-medium text-sm z-10 `}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
          {[
            'New in',
            'Sản phẩm',
            'Lookbook',
            'Blog',
            'Liên hệ',
            'Cửa hàng',
          ].map((item, index) => (
            <li
              key={item}
              data-aos="fade-left"
              data-aos-delay={100 * index}
              className="group relative cursor-pointer transition-colors uppercase hover:text-black"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="hidden md:flex gap-5 text-xl text-gray-600">
        <div
          data-aos="fade-up"
          className="relative hover:text-black cursor-pointer transition-colors"
        >
          <SlHeart />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-400 text-white rounded-full px-1.5">
              {wishlistCount}
            </span>
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative hover:text-black cursor-pointer transition-colors"
        >
          <SlBag />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-400 text-white rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="hover:text-black cursor-pointer transition-colors"
        >
          <SlUser />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="hover:text-black cursor-pointer transition-colors"
        >
          <SlMagnifier />
        </div>
      </div>
    </header>
  );
};

export default Header;