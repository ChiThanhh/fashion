import React, { useState } from 'react';
import { postContact } from '../service/contactService';
import toast from 'react-hot-toast';
import validator from "validator";

const Contact = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validate()) {
            toast.error("Vui lòng kiểm tra lại thông tin!");
            return;
        }
    
        const loadingToast = toast.loading("Đang gửi liên hệ...");
        try {
            await postContact(contact);
            toast.dismiss(loadingToast);
            toast.success("Gửi liên hệ thành công!");
            setContact({ name: "", email: "", message: "" });
            setErrors({});
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("Gửi liên hệ thất bại. Vui lòng thử lại!");
        }
    };
    

    const validate = () => {
        const newErrors = {};
    
        if (validator.isEmpty(contact.name || "")) {
            newErrors.name = "Vui lòng nhập họ tên";
        }
    
        if (!validator.isEmail(contact.email || "")) {
            newErrors.email = "Email không hợp lệ";
        }
    
        if (validator.isEmpty(contact.message || "")) {
            newErrors.message = "Vui lòng nhập tin nhắn";
        }
    
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen ">
            <div className="relative bg-black text-white  mb-8">
                <div data-aos="zoom-in" data-aos-delay="100">
                    <img
                        src="https://pos.nvncdn.com/8073c5-83109/bn/20240523_1aDv406Y.gif"
                        alt="Banner Thời Trang"
                        className="w-full h-48 object-cover opacity-30"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl font-semibold tracking-tight">Liên hệ với chúng tôi</h1>
                    <p data-aos="fade-down" data-aos-delay="500" className="text-white mb-12 text-center">
                        Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi qua biểu mẫu dưới đây hoặc thông tin liên lạc bên cạnh.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto py-10 px-4 md:px-20">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Form liên hệ */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label data-aos="fade-left" data-aos-delay="100" className={`block text-sm font-medium ${errors.name ? 'text-red-600' : 'text-gray-700'}`}>Họ và tên</label>
                            <div data-aos="fade-left" data-aos-delay="200">
                                <input type="text" className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300`} placeholder="Nhập họ tên..." name="name" value={contact.name} onChange={handleChange} />
                                {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                            </div>
                        </div>
                        <div>
                            <label data-aos="fade-left" data-aos-delay="300" className={`block text-sm font-medium ${errors.email ? 'text-red-600' : 'text-gray-700'}`}>Email</label>
                            <div data-aos="fade-left" data-aos-delay="400">
                                <input type="email" className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300`} placeholder="Nhập email..." name="email" value={contact.email} onChange={handleChange} />
                                {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                            </div>
                        </div>
                        <div>
                            <label data-aos="fade-left" data-aos-delay="500" className={`block text-sm font-medium ${errors.message ? 'text-red-600' : 'text-gray-700'}`}>Tin nhắn</label>
                            <div data-aos="fade-left" data-aos-delay="600">
                                <textarea className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 h-32 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300`} placeholder="Nhập nội dung..." name="message" value={contact.message} onChange={handleChange}></textarea>
                                {errors.message && <p className="text-red-600 text-xs">{errors.message}</p>}
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="700">
                            <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                                Gửi
                            </button>
                        </div>
                    </form>

                    {/* Thông tin liên hệ */}
                    <div className="space-y-6">
                        <div>
                            <h2 data-aos="fade-up" data-aos-delay="100" className="text-xl font-semibold text-black mb-2">Thông tin liên hệ</h2>
                            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-700">Cửa hàng ABC</p>
                            <p data-aos="fade-up" data-aos-delay="300" className="text-gray-700">123 Đường ABC, Quận 1, TP.HCM</p>
                            <p data-aos="fade-up" data-aos-delay="400" className="text-gray-700">Email: contact@example.com</p>
                            <p data-aos="fade-up" data-aos-delay="500" className="text-gray-700">Hotline: 0909 999 999</p>
                        </div>
                        <div>
                            <h2 data-aos="fade-right" data-aos-delay="600" className="text-xl font-semibold text-black mb-2">Bản đồ</h2>
                            <iframe
                                data-aos="fade-right" data-aos-delay="800"
                                className="w-full h-64  rounded-lg"
                                src="https://maps.google.com/maps?q=ho%20chi%20minh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
