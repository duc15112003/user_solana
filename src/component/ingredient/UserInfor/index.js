import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPencil, BiLogOut } from 'react-icons/bi';
import axios from "axios";


const UserInfor = () => {
    const [userdetail, setUserdetail] = useState([]);
    const us = localStorage.getItem("us")
    const token = localStorage.getItem("token")
    const [feedbacks,setFeedback] = useState([])
    const fetchFeedback = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/user/feedback/get?username=${us}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFeedback(response.data.result); // Dữ liệu từ API
            setLoading(false);
        } catch (error) {
            setError('Có lỗi xảy ra khi tải dữ liệu.');
            setLoading(false);
        }
    };
    const [ideas, setIdeas] = useState([]);
    const [formData, setFormData] = useState({
        id:'',
        firstname: '',
        lastname: '',
        birthday: '',
        phoneNumber: '',
        address: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchIdeas = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/user/idea/get?username=${us}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIdeas(response.data.result); // Dữ liệu từ API
            setLoading(false);
        } catch (error) {
            setError('Có lỗi xảy ra khi tải dữ liệu.');
            setLoading(false);
        }
    };
    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/profile?username=${us}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.code === 200) {
                // Cập nhật dữ liệu từ API vào formData
                setFormData({
                    firstname: response.data.result.firstname || '',
                    lastname: response.data.result.lastname || '',
                    birthday: response.data.result.birthday || '',
                    phoneNumber: response.data.result.phoneNumber || '',
                    address: response.data.result.address || '',
                    email: ''  // Nếu email không có trong API, có thể để trống hoặc loại bỏ trường này
                });
            } else {
                alert("Lỗi user");
            }
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    };

    // useEffect(() => {
    //     fetchUser();
    //     fetchIdeas();
    //     fetchFeedback();
    // }, []);

    // Hàm xử lý thay đổi dữ liệu của form
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    return (
        <div className="container-fluid mt-4 mb-4">
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
                            <p className="mt-2 mb-3 fs-5 fw-bold text-primary">{us}</p>
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
                                                    <input
                                                        type={index === 2 ? 'date' : (index === 5 ? 'email' : 'text')}
                                                        className="form-control"
                                                        id={index === 0 ? 'lastname' : (index === 1 ? 'firstname' : (index === 2 ? 'birthday' : (index === 3 ? 'phoneNumber' : (index === 4 ? 'address' : 'email'))))}
                                                        placeholder={placeholder}
                                                        value={formData[index === 0 ? 'lastname' : (index === 1 ? 'firstname' : (index === 2 ? 'birthday' : (index === 3 ? 'phoneNumber' : (index === 4 ? 'address' : 'email'))))]}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor={index === 0 ? 'lastname' : (index === 1 ? 'firstname' : (index === 2 ? 'birthday' : (index === 3 ? 'phoneNumber' : (index === 4 ? 'address' : 'email'))))}>
                                                        {placeholder}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">Xác nhận
                                    </button>
                                </form>
                            </div>
                            <div>
                                <h5 className="mb-3 fs-4 fw-semibold">Đổi mật khẩu</h5>
                                <form>
                                    <div className="row">
                                        {['Mật khẩu cũ', 'Mật khẩu mới', 'Xác nhận lại mật khẩu'].map((placeholder, index) => (
                                            <div key={index} className="col-md-6 mb-3">
                                                <div className="form-floating">
                                                    <input type="password" className="form-control"
                                                           id={`password${index}`} placeholder={placeholder}/>
                                                    <label htmlFor={`password${index}`}>{placeholder}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">Đổi mật khẩu
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            <h2 className="mb-4 fs-3 fw-bold text-primary">Ý tưởng đã đăng</h2>
                            <div className="table-responsive" style={{fontFamily: "'Montserrat', sans-serif"}}>
                                <table className="table table-bordered table-hover table-striped align-middle">
                                    <thead className="table-info">
                                    <tr className="text-center">
                                        <th>ID</th>
                                        <th>Tiêu đề</th>
                                        <th>Mô tả</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày tạo</th>
                                        <th>Ngày cập nhật</th>
                                        <th>Ngày kết thúc</th>
                                        <th>Số lượng phản hồi</th>
                                        <th>Phần thưởng cho một phản hồi</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {ideas.map((idea, index) => (
                                        <tr
                                            key={idea.id}
                                            className={`table-${index % 2 === 0 ? 'primary' : 'light'} animate__animated animate__fadeIn`}
                                            style={{transition: 'all 0.3s ease-in-out'}}
                                        >
                                            <td className="text-center fw-bold">{idea.id}</td>
                                            <td>
                                                <i className="bi bi-lightbulb-fill text-warning me-2"></i>
                                                {idea.title}
                                            </td>
                                            <td>{idea.description}</td>
                                            <td className="text-center">
                        <span className={`badge bg-${idea.status === 'active' ? 'success' : 'danger'}`}>
                            {idea.status === 'active' ? 'Đang hoạt động' : 'Không hoạt động'}
                        </span>
                                            </td>
                                            <td className="text-center">{new Date(idea.createdAt).toLocaleDateString()}</td>
                                            <td className="text-center">{new Date(idea.updateAt).toLocaleDateString()}</td>
                                            <td className="text-center">{new Date(idea.endAt).toLocaleDateString()}</td>
                                            <td className="text-center">
                                                <i className="bi bi-chat-left-text-fill text-primary me-2"></i>
                                                {idea.countFeedback}
                                            </td>
                                            <td className="text-center">
                                                <i className="bi bi-cash-coin text-success me-2"></i>
                                                {idea.awardForOneFeedback}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="menu3" className="tab-pane fade">
                            <h2 className="mb-4 fs-3 fw-bold text-primary">Phản hồi đã đăng</h2>
                            <div className="table-responsive" style={{fontFamily: "'Montserrat', sans-serif"}}>
                                <table className="table table-bordered table-hover table-striped align-middle">
                                    <thead className="table-info">
                                    <tr className="text-center">
                                        <th>ID</th>
                                        <th>Phản hồi</th>
                                        <th>Ngày tạo</th>
                                        <th>Trạng thái</th>
                                        <th>Đánh giá</th>
                                        <th>Tên người dùng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {feedbacks.map((feedback, index) => (
                                        <tr
                                            key={feedback.id}
                                            className={`table-${index % 2 === 0 ? 'primary' : 'light'} animate__animated animate__fadeIn`}
                                            style={{transition: 'all 0.3s ease-in-out'}}
                                        >
                                            <td className="text-center fw-bold">{feedback.id}</td>
                                            <td>
                                                <i className="bi bi-chat-left-text-fill text-primary me-2"></i>
                                                {feedback.feedback}
                                            </td>
                                            <td className="text-center">{new Date(feedback.createAt).toLocaleDateString()}</td>
                                            <td className="text-center">
                        <span className={`badge bg-${feedback.status === 'pending' ? 'warning' : 'success'}`}>
                            {feedback.status === 'pending' ? 'Chờ xử lý' : 'Hoàn thành'}
                        </span>
                                            </td>
                                            <td className="text-center">
                                                <i className="bi bi-star-fill text-warning me-2"></i>
                                                {feedback.rate}
                                            </td>
                                            <td className="text-center">{feedback.account}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
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
                                                <input type="text" className="form-control" id={`key${index}`}
                                                       placeholder={placeholder}/>
                                                <label htmlFor={`key${index}`}>{placeholder}</label>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">Xác nhận
                                    </button>
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
