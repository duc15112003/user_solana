import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClipboardCheck, FaWallet } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

const IdeaUser = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href="ideas/details" className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                alt="photo"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        className="rounded-circle me-2"
                                        alt="user-avatar"
                                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                    />
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="fw-bold">NhanDu123</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">HOME DESIGN CONSULTATION SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem cupiditate
                                    dolorum ea error est, eum, fugit hic laboriosam mollitia optio pariatur perferendis
                                    quas quibusdam sed sequi tempore voluptatibus! Accusamus aspernatur autem culpa
                                    cupiditate debitis dolore exercitationem facere id labore molestiae nemo officia
                                    perspiciatis quaerat qui ratione tempora, tempore ullam, unde veritatis,
                                    voluptatibus. Ea, excepturi facere ipsum molestiae mollitia neque obcaecati quidem
                                    ratione reiciendis unde! Consequatur exercitationem, expedita id incidunt iste iusto
                                    minus modi nobis nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                    voluptate? At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                    libero obcaecati quod repellat voluptatem.
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">50/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">20000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Lặp lại khối trên cho các phần còn lại */}
            </div>
        </div>
    );
};

export default IdeaUser;
