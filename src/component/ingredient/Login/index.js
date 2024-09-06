import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContext} from "../../../AuthContext";
import LoginService from "../../../service/login";

const LoginForm = () => {
    //Đặt biến này thông qua cái AuthContext
    const { isLoggedIn, login} = useContext(AuthContext);

    //Tạo một biến dạng mảng để lưu username và password
    const [variable, setVariable] = useState({
        username: '',
        password: ''
    })

    //Dùng useEffect khi giá trị trong [] thay đổi thì nó sẽ thực thi
    useEffect(() => {
        if (isLoggedIn) {
            setTimeout(() => {
                window.location.href = '/';
            }, 2000); // Chờ 2 giây trước khi chuyển hướng
        }
    }, [isLoggedIn]);

    //Hàm này để cập nhật giá trị username mỗi khi nhập
    const handleUsernameChange = (e) => {
        const { value } = e.target;

        //Cái preState này là đại diện cho một đối tượng có giá trị cũ, còn cái ...preState là cái sao chép những thuộc tính của đối tượng cũ,
        // cụ thể khi mình cập nhật thuộc tính username thì cái password nó là giá trị cũ được giữ nguyên, còn giá trị mới ở đây chính là username
        setVariable(prevState => ({
            ...prevState,
            username: value
        }));
    };

    //Hàm này để cập nhật giá trị password mỗi khi nhập
    const handlePasswordChange = (e) => {
        const { value } = e.target;

        //Cái preState này là đại diện cho một đối tượng có giá trị cũ, còn cái ...preState là cái sao chép những thuộc tính của đối tượng cũ,
        // cụ thể khi mình cập nhật thuộc tính password thì cái username nó là giá trị cũ được giữ nguyên, còn giá trị mới ở đây chính là password
        setVariable(prevState => ({
            ...prevState,
            password: value
        }));
    };

    //Còn này là cái hàm login chính thức nè, nhân giá trị username và password từ biến mảng variable
    const handleLogin = async (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện
        try {
            // Gọi hàm login với đối tượng chứa thông tin đăng nhập
            await LoginService.LoginProcess(variable.username, variable.password);
            login();
        } catch (error) {
            setTimeout(() => {
                alert('Tài khoản hoặc mật khẩu sai')
            }, 2000); // Chờ 2 giây trước khi ẩn thông báo
            console.error('Login failed:', error);
        }
    };


    return (
        <div>
            <div
                className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-gradient-primary">
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-3">
                            <div className="card-header bg-primary text-white text-center py-4">
                                <h2 className="card-title mb-0">Welcome Back</h2>
                                <p className="mb-0">Please log in to experience the available features.</p>
                            </div>
                            <div className="card-body p-5">
                                <form onSubmit={handleLogin}>
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={handleUsernameChange} className="form-control"
                                               id="floatingInput" placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" onChange={handlePasswordChange} className="form-control"
                                               id="floatingPassword" placeholder="Password"/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="rememberMe"/>
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
                                </form>
                                <div className="text-center mt-4">
                                    <p className="text-muted mb-0">or login with</p>
                                    <div className="d-flex justify-content-center gap-2 mt-3">
                                        <button className="btn btn-outline-primary rounded-circle"
                                                style={{width: '50px', height: '50px'}}>
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button className="btn btn-outline-danger rounded-circle"
                                                style={{width: '50px', height: '50px'}}>
                                            <i className="fab fa-google"></i>
                                        </button>
                                        <button className="btn btn-outline-dark rounded-circle"
                                                style={{width: '50px', height: '50px'}}>
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light text-center py-3">
                                <span>Don't have an account? </span>
                                <a href="/user/register" className="text-decoration-none">Sign up now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
