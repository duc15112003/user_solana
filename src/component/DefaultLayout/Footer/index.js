// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 position-relative">
            <div className="container-fluid">
                <div className="row">
                    {/* About Section */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h1 className="text-white mb-3 fw-bold"><span className="text-danger">Feedback</span>Rewards
                        </h1>
                        <p className="mb-4">
                            Chúng tôi cung cấp nền tảng để nhận phản hồi và nhận phần thưởng một cách dễ dàng và hiệu
                            quả.
                        </p>
                        <div className="d-flex flex-column mb-4">
                            <p className="mb-2"><FaPhone className="me-2 text-primary"/> 0966-980-532</p>
                            <p><FaEnvelope className="me-2 text-primary"/> phamminhduc15112003dilinh@gmail.com</p>
                        </div>
                        <div className="d-flex justify-content-start">
                            <a href="#" className="text-light me-3 fs-4 hover-icon"><FaFacebookF/></a>
                            <a href="#" className="text-light me-3 fs-4 hover-icon"><FaTwitter/></a>
                            <a href="#" className="text-light fs-4 hover-icon"><FaInstagram/></a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h2 className="text-white mb-3">Liên Kết Nhanh</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none hover-text">Dịch Vụ</a></li>
                            <li><a href="#" className="text-light text-decoration-none hover-text">Đội Ngũ</a></li>
                            <li><a href="#" className="text-light text-decoration-none hover-text">Liên Hệ</a></li>
                            <li><a href="#" className="text-light text-decoration-none hover-text">Về Chúng Tôi</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12 mb-4 d-flex flex-column align-items-start">
                        <h2 className="text-white mb-4">Liên Hệ Chúng Tôi</h2>
                        <form action="#" method="post" className="bg-dark p-4 rounded shadow-sm w-100">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email của bạn..."
                                    required
                                />
                            </div>
                            <div className="mb-3">
                            <textarea
                                rows="4"
                                name="message"
                                className="form-control"
                                placeholder="Tin nhắn của bạn..."
                                required
                            ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                <FaEnvelope className="me-2"/> Gửi
                            </button>
                        </form>
                    </div>


                </div>
            </div>

            <div className="text-center py-3 bg-dark text-light border-top border-secondary position-relative mt-4">
                © 2024 FeedbackRewards. Được thiết kế bởi Pham Minh Duc
            </div>
        </footer>
    );
};

export default Footer;
