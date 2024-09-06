import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';
import {AuthContext} from "../../../AuthContext";

const Header = () => {
    const {logout} = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('')
    useEffect(() => {
       if(localStorage.getItem('token')){
           setIsLoggedIn(true);
           setUsername(localStorage.getItem('us'));
       }else{
           setIsLoggedIn(false);
       }
    });

    const clickLogout = () =>{
        logout();
        setIsLoggedIn(false);
    }
    
    // Giả sử người dùng đã đăng nhập
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-light py-3">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="contact-info">
                        <span>Email: phamminhduc15112003dilinh@gmail.com</span>
                        <span className="ms-3">Phone: +84 0966 980 532</span>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="text-dark me-2"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-dark me-2"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-dark me-2"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src='https://th.bing.com/th/id/OIG1.wEiQ5THKygtqn1KBn0W5?w=1024&h=1024&rs=1&pid=ImgDetMain'
                             alt="Brand Logo" className="me-3" style={{width: '50px', height: '50px'}}/>
                        <h1 className="mb-0">FeedbackRewards</h1>
                    </div>
                    <nav className={`navbar navbar-expand-lg navbar-light ${isMenuOpen ? 'show' : ''}`}>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav me-auto">
                                {!isLoggedIn ? (
                                    <>
                                        <li className="nav-item"><a className="nav-link" href="/">Trang chủ</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Trang</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Về chúng tôi</a></li>
                                        <li className="nav-item"><a className="nav-link" href="http://localhost:3000/user/ideas">Khảo sát</a></li>
                                        <li className="nav-item"><a className="nav-link" href="http://localhost:3000/user/login">Đăng nhập</a></li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item"><a className="nav-link" href="/">Trang chủ</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Trang</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Về chúng tôi</a></li>
                                        <li className="nav-item"><a className="nav-link" href="http://localhost:3000/user/ideas">Khảo sát</a></li>
                                        <li className="nav-item dropdown position-relative">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="user-menu"
                                                role="button"
                                                onClick={toggleMenu}
                                            >
                                                <FaUser className="me-2"/> {username}
                                            </a>
                                            <ul className={`dropdown-menu ${isMenuOpen ? 'show' : ''} dropdown-menu-end position-absolute`}
                                                aria-labelledby="user-menu">
                                                <li><a className="dropdown-item" href="http://localhost:3000/user/infor">Thông tin người dùng</a></li>
                                                <li><a className="dropdown-item" href="#">Cài đặt</a></li>
                                                <li><a onClick={clickLogout} className="dropdown-item" href="#">Đăng xuất</a></li>
                                            </ul>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <style jsx>{`
                .dropdown-menu {
                    min-width: 150px;
                }
                .dropdown-menu-end {
                    right: 0;
                    left: auto;
                }
                @media (max-width: 768px) {
                    .dropdown-menu {
                        max-width: 100%;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
