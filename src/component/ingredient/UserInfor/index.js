import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPencil, BiLogOut } from 'react-icons/bi';

const UserInfor = () => {
    return (
        <div className="container-xl mt-4 mb-4">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <div className="card shadow-lg border-light rounded-3 p-3">
                        <div className="card-body d-flex flex-column align-items-center text-center">
                            <div className="position-relative mb-3">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                    alt="User Avatar"
                                    className="img-fluid rounded-circle border border-3 border-primary"
                                    style={{ width: '150px', height: '150px', objectFit: 'cover', transition: 'transform 0.3s' }}
                                />
                                <div className="position-absolute bottom-0 end-0 p-2">
                                    <label htmlFor="file-upload" className="btn btn-primary btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center border-0" style={{ transition: 'background-color 0.3s' }}>
                                        <BiPencil size={20} />
                                    </label>
                                    <input id="file-upload" className="d-none" type="file"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-3 fs-5 fw-bold text-primary">Nhan123</p>
                            <ul className="nav nav-pills flex-column mb-3">
                                {['Thông tin người dùng', 'Bài đăng của bạn', 'Đã tham gia khảo sát', 'Thông báo', 'Cài đặt'].map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <a className={`nav-link ${index === 0 ? 'active' : ''}`} data-bs-toggle="pill" href={`#menu${index + 1}`}>
                                            <i className={`bi ${['people-fill', 'stickies-fill', 'heart-fill', 'bell-fill', 'gear-fill'][index]} me-2`}></i>{item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <a className="btn btn-danger w-100 d-flex align-items-center justify-content-center py-2 shadow-sm border-0" href="#">
                                <BiLogOut size={20} /> <span className="ms-2">Đăng xuất</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <div className="tab-content">
                        <div id="menu1" className="tab-pane fade show active">
                            <h2 className="mb-4 fs-3 fw-bold text-primary">Thông tin người dùng</h2>
                            <div className="mb-4">
                                <h5 className="mb-3 fs-4 fw-semibold">Thông tin cơ bản</h5>
                                <form>
                                    <div className="row">
                                        {['Họ', 'Tên', 'Ngày sinh', 'Số điện thoại', 'Địa chỉ', 'Email'].map((placeholder, index) => (
                                            <div key={index} className={`col-md-${index < 4 ? '6' : '12'} mb-3`}>
                                                <div className="form-floating">
                                                    <input type={index === 2 ? 'date' : (index === 5 ? 'email' : 'text')} className="form-control" id={`input${index}`} placeholder={placeholder}/>
                                                    <label htmlFor={`input${index}`}>{placeholder}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">Xác nhận</button>
                                </form>
                            </div>
                            <div>
                                <h5 className="mb-3 fs-4 fw-semibold">Đổi mật khẩu</h5>
                                <form>
                                    <div className="row">
                                        {['Mật khẩu cũ', 'Mật khẩu mới', 'Xác nhận lại mật khẩu'].map((placeholder, index) => (
                                            <div key={index} className="col-md-6 mb-3">
                                                <div className="form-floating">
                                                    <input type="password" className="form-control" id={`password${index}`} placeholder={placeholder}/>
                                                    <label htmlFor={`password${index}`}>{placeholder}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">Đổi mật khẩu</button>
                                </form>
                            </div>
                        </div>
                        <div id="menu5" className="tab-pane fade">
                            <h2 className="mb-4 fs-3 fw-bold text-primary">Cài đặt</h2>
                            <div>
                                <h5 className="mb-3 fs-4 fw-semibold">Thông tin cơ bản</h5>
                                <form>
                                    {['Public key', 'Private key'].map((placeholder, index) => (
                                        <div key={index} className="mb-3">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id={`key${index}`} placeholder={placeholder}/>
                                                <label htmlFor={`key${index}`}>{placeholder}</label>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">Xác nhận</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfor;
