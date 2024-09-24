import React, { useState } from 'react';
// import './Fogetpassword.css';

function FogetPassword() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(2);
    };

    return (
            <div className="container">
                    <div className="forgot-password-container">
                        <form id="forgotPasswordForm" action="#">
                            <h1>Quên Mật Khẩu</h1>
                            {step === 1 && (
                                <div id="step1">
                                    <input type="email" placeholder="Email" required/>
                                    <button type="button" onClick={nextStep}>Gửi mã</button>
                                </div>
                            )}
                            {step === 2 && (
                                <div id="step2">
                                    <input type="text" placeholder="Mã xác nhận" required/>
                                    <input type="text" placeholder="Mã xác nhận" required/>
                                    <input type="password" placeholder="Mật khẩu mới" required/>
                                    <input type="password" placeholder="Xác nhận mật khẩu" required/>
                                    <button type="submit">Đặt lại mật khẩu</button>
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="forgot-password-image-container">
                        <img src="https://th.bing.com/th/id/OIP.qkJAVGZg8xBhmk6IW9K6IQAAAA?rs=1&pid=ImgDetMain"
                             alt="ảnh"/>
                    </div>
            </div>
    );
}

export default FogetPassword;
