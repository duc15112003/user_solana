import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClipboardCheck, FaWallet } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import ideaService from "../../../service/idea";

const IdeaUser = () => {
    const [allIdeas, setAllIdeas] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(null);
    const [pageAtCurrent, setPageAtCurrent] = useState(0)
    const getAllIdeas = async(page, size) =>{
        const ideas = await ideaService.getAllIdeas(page, size);
        setAllIdeas(ideas.content);
        setPageAtCurrent(ideas.page.number);
    }
    const getTotalPageNumber = async() =>{
        const page = await ideaService.getPageAndNumberOfPages();
        setNumberOfPages(page.totalPages);
    }


    useEffect(() => {
       getAllIdeas(pageAtCurrent, 5);
       getTotalPageNumber();
    }, [pageAtCurrent])


    const page_right = () =>{
        if(pageAtCurrent + 1 < numberOfPages){
            setPageAtCurrent(pageAtCurrent + 1);
        }
    }

    const page_left = () =>{
        if(pageAtCurrent > 0){
            setPageAtCurrent(pageAtCurrent - 1);
        }
    }    


    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {allIdeas.map((idea, index) => (
                    <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card shadow border-0 rounded-3">
                        <a href={`ideas/details/${idea.id}`} className="text-decoration-none">
                            <img
                                className="card-img-top img-fluid rounded-top"
                                src={idea.image}
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
                                        <span className="fw-bold">{idea.accountUsername}</span>
                                    </a>
                                </div>
                                <h5 className="card-title text-primary">{idea.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">CATEGORY IDEA</h6>
                                <p className="card-text">
                                    {idea.description}
                                </p>
                                <div className="d-flex align-items-center">
                                    <a href="ideas/details" className="btn btn-primary me-3">
                                        Conduct This Survey
                                    </a>
                                    <div className="d-flex align-items-center ms-3">
                                        <div className="d-flex align-items-center me-3">
                                            <FaClipboardCheck size={20} className="text-success"/>
                                            <span className="ms-2">{idea.countFeedback}/100</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaWallet size={20} className="text-warning"/>
                                            <span className="ms-2">{idea.awardForOneFeedback}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                ))}
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">
                        <button className="me-2" onClick={page_left}><i class="bi bi-caret-left-fill"></i></button>
                            {pageAtCurrent+1}/{numberOfPages}
                        <button className="ms-2" onClick={page_right}><i class="bi bi-caret-right-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaUser;
