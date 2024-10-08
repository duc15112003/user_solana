import React, { useState, useEffect } from "react";
import './idea_details.css'
import ideaService from "../../../service/idea";
import axios from "axios";

const IdeaDetails = () =>{
    const [idea, setIdea] = useState(null);
    const [account, setAccount] = useState();
    const [us, setUs] = useState(localStorage.getItem('us'));
    const [token, setToken] = useState(localStorage.getItem('token'));
    const getIdea = async (id) => {
        try {
          const ideaData = await ideaService.getIdea(id);
          setIdea(ideaData);
          console.log('Fetched idea:', ideaData);
        } catch (error) {
          console.error('Error fetching idea:', error);
        }
      };

    useEffect(() => {
        const pathname = window.location.pathname;
        const id = pathname.split('/').pop(); // Lấy phần tử cuối cùng của mảng
        if (id) {
            getIdea(id);
          } else {
            console.warn('No ID found in URL pathname.');
          }
    }, []);

    const [formData, setFormData] = useState({
        feedback: '',
        createAt: new Date().toISOString(),
        status: 'pending',
        rate: 5,
        account: account || null,
        idea: idea || null
      });

      useEffect(() => {
        const fetchAccount = async () => {
            const accountData = await getAccount();
            setAccount(accountData);
        };
    
        if (us && token) {
            fetchAccount();
        }
    }, [us, token]);

        useEffect(() => {
            const updateFormData = () => {
                setFormData(prevState => ({
                    ...prevState,
                    account: account || null,
                    idea: idea || null,
                    createAt: new Date().toISOString() // Nếu bạn muốn cập nhật thời gian
                }));
            };

            if (idea || account) {
                updateFormData();
            }
        }, [idea, account]);
      
    const getAccount = async() =>{
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/getaccount?username=${us}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.result;
        } catch (error) {
            console.log('Error at getAccount')
        }
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const pushFeedback = async() =>{
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8080/api/feedback/create', formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Đăng thành công");
            window.location.href = '/user/ideas';
        } catch (error) {
            console.log('Error at pushFeedback', error);
        }
    }

  return(
      <div className="idea-details">
          <div className="container-fluid">
                {idea && (
                    <div className="row">
                    <div className="col-xl-9 col-12">
                        <div className="user-info-of-idea d-flex align-items-center">
                            <a href="#">
                                <div className="img-ava-user">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        alt=""/>
                                </div>
                            </a>
                            <a href="#">
                                <span className="m-0 text-black">{idea.accountUsername}</span>
                            </a>
                        </div>
                        <div className="idea-info-details">
                            <h3>Category idea</h3>
                            <h1>{idea.title}</h1>
                            <div className="description-idea">
                                <div className="img-idea-details">
                                    <div className="control-img">
                                        <img
                                            src={idea.image}
                                            alt="Image"/>
                                    </div>
                                </div>
                                <p>{idea.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-12">
                        <div className="idea-feedback-user d-flex flex-column">
                            <div className="col-12">
                                <div className="the-prizes">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-currency-exchange me-2"></i>
                                        <p className="prize-money mb-0">
                                            {idea.awardForOneFeedback} <span className="unit">SOL</span>
                                        </p>
                                    </div>
                                    <span>Prizes</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-feedback">
                                    <textarea id="feedback" onChange={handleChange} placeholder="Enter the feedback" name="feed-back" rows="10">
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="idea-any-details d-flex justify-content-between">
                                    <div className="d-flex flex-column text-start">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-briefcase me-2"></i>
                                            <p className="remaining-feedback">{idea.countFeedback}/100</p>
                                        </div>
                                        <p>Submissions</p>
                                    </div>
                                    <div className="d-flex flex-column text-end">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-stopwatch me-2"></i>
                                            <p className="hours-idea">0h:0m:0s</p>
                                        </div>
                                        <p>Remaining</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="btn-feedback">
                                    <a onClick={pushFeedback}>Send Feedback Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
          </div>
      </div>
  );
};

export default IdeaDetails;