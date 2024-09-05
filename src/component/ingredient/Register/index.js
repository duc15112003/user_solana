import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        birthday: "",
        phone_number: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="card shadow-lg border-0 rounded-lg">
                            <div className="card-header text-center bg-primary text-white">
                                <h3 className="fw-bold">Welcome to FeedbackReward</h3>
                                <h3 className="fw-bold fs-6">Sign up to enjoy the best services from our website</h3>
                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    required
                                                />
                                                <label htmlFor="firstname">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    value={formData.lastname}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                                <label htmlFor="lastname">Last Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="name@example.com"
                                                required
                                            />
                                            <label htmlFor="email">Email address</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Username"
                                                required
                                            />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="********"
                                                required
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="date"
                                                        name="birthday"
                                                        value={formData.birthday}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="Birthday"
                                                        required
                                                    />
                                                    <label htmlFor="birthday">Birthday</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="tel"
                                                        name="phone_number"
                                                        value={formData.phone_number}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="+1234567890"
                                                    />
                                                    <label htmlFor="phone_number">Phone Number</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary btn-block py-2">
                                                Register
                                            </button>
                                        </div>
                                </form>
                            </div>
                            <div className="card-footer text-center text-muted">
                                Already have an account? <a href="http://localhost:3000/user/login" className="text-decoration-none">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
