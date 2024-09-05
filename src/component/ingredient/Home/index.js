import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Chào mừng đến với Phản hồi Trả thưởng</h1>
                    <p>Phản hồi của bạn rất quan trọng. Nhận phần thưởng khi chia sẻ ý kiến của bạn!</p>
                    <a href="/about" className="btn">Tìm hiểu thêm</a>
                </div>
            </section>
            <section className="introduction">
                <h2>Giới thiệu</h2>
                <p>Tại Phản hồi Trả thưởng, chúng tôi trân trọng ý kiến của bạn. Chia sẻ quan điểm của bạn và nhận được các phần thưởng hấp dẫn.</p>
            </section>
            <section className="services">
                <h2>Dịch vụ của chúng tôi</h2>
                <div className="service-cards">
                    <div className="service">
                        <img src="https://th.bing.com/th/id/OIP.qkJAVGZg8xBhmk6IW9K6IQAAAA?rs=1&pid=ImgDetMain" alt="Tham gia Khảo sát" />
                        <h3>Tham gia Khảo sát</h3>
                        <p>Tham gia các khảo sát của chúng tôi và cung cấp phản hồi quý giá để giúp chúng tôi cải thiện dịch vụ và sản phẩm.</p>
                    </div>
                    <div className="service">
                        <img src="https://th.bing.com/th/id/OIP.TeGGqrcqEb2tvltbaLQ8igHaE8?rs=1&pid=ImgDetMain" alt="Thử nghiệm Sản phẩm" />
                        <h3>Thử nghiệm Sản phẩm</h3>
                        <p>Trở thành người đầu tiên thử nghiệm sản phẩm mới và chia sẻ đánh giá chân thực của bạn.</p>
                    </div>
                    <div className="service">
                        <img src="https://aboutdereham.org/wp-content/uploads/2018/05/Community_499x334.jpg" alt="Tham gia Cộng đồng" />
                        <h3>Tham gia Cộng đồng</h3>
                        <p>Tham gia thảo luận cộng đồng và nhận phần thưởng cho sự tham gia tích cực của bạn.</p>
                    </div>
                </div>
            </section>
            <section className="how-it-works">
                <h2>Cách thức hoạt động</h2>
                <div className="steps">
                    <div className="step">
                        <img src="https://th.bing.com/th/id/OIP.fL7ee3NkGVZRBsDfZEZP_QHaFo?w=893&h=680&rs=1&pid=ImgDetMain" alt="Step 1" />
                        <h3>1. Đăng ký</h3>
                        <p>Tạo tài khoản và tham gia cộng đồng của chúng tôi.</p>
                    </div>
                    <div className="step">
                        <img src="https://vinaresearch.net/application/templates/default/default/images/og.png" alt="Step 2" />
                        <h3>2. Tham gia</h3>
                        <p>Tham gia các khảo sát, thử nghiệm sản phẩm, và các hoạt động cộng đồng.</p>
                    </div>
                    <div className="step">
                        <img src="https://timvanphong.com.vn/wp-content/uploads/2021/09/muc-luong-co-ban-2021-van-duoc-giu-nguyen-giong-nhu-2020.jpg" alt="Step 3" />
                        <h3>3. Nhận Phần thưởng</h3>
                        <p>Kiếm điểm và đổi chúng lấy các phần thưởng hấp dẫn.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
