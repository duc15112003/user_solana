import React from "react";
import './idea_details.css'

const IdeaDetails = () =>{
  return(
      <div className="idea-details">
          <div className="container-fluid">
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
                                <span className="m-0 text-black">NhanDu123</span>
                            </a>
                        </div>
                        <div className="idea-info-details">
                            <h3>Category idea</h3>
                            <h1>HOME DESIGN CONSULTATION SERVICES hihdoHDOJDOWJNDOAdlkdnlklkwmld</h1>
                            <div className="description-idea">
                                <div className="img-idea-details">
                                    <div className="control-img">
                                        <img
                                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                            alt=""/>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                                    aspernatur aut culpa delectus dignissimos, doloribus impedit labore,
                                    magnam minima placeat tenetur unde! A alias aliquam aliquid asperiores
                                    atque, consectetur culpa cumque debitis dolore doloribus ea eaque earum
                                    eligendi enim esse eveniet ex facere fuga fugiat libero magnam magni mollitia
                                    natus nostrum omnis porro provident quibusdam quo quod sapiente sequi sunt
                                    temporibus totam ut velit veritatis vero! Ad aperiam error ipsa nesciunt
                                    nulla quia similique vel veritatis, vitae? Aut autem cum dolores eligendi
                                    expedita impedit inventore iste iusto, minima modi mollitia officia, optio
                                    porro quia quo quod saepe sint unde veniam voluptas? Accusantium at aut consectetur
                                    enim facere illo molestiae neque odio odit pariatur, recusandae reiciendis rerum
                                    sapiente temporibus ullam unde, veritatis. Amet consectetur debitis deleniti
                                    deserunt laboriosam magnam neque officiis quas quibusdam veritatis. Eos error,
                                    fugiat fugit minima minus nemo possimus quaerat! Asperiores consequuntur debitis
                                    dolorem error fugit incidunt iusto libero, maxime natus nesciunt obcaecati odio
                                    odit optio perferendis porro recusandae sit soluta sunt tempora unde, vel veritatis,
                                    voluptates. Eos ex necessitatibus perferendis sequi voluptatibus. A ab ad architecto
                                    aspernatur dolor dolorem, dolorum ducimus eligendi eveniet expedita harum illum
                                    modi,
                                    mollitia nobis nostrum officia repellat, similique vel! Beatae quam, qui!</p>
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
                                            1000 <span className="unit">SOL</span>
                                        </p>
                                    </div>
                                    <span>Prizes</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-feedback">
                                    <textarea placeholder="Enter the feedback" name="feed-back" rows="10">
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="idea-any-details d-flex justify-content-between">
                                    <div className="d-flex flex-column text-start">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-briefcase me-2"></i>
                                            <p className="remaining-feedback">15/100</p>
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
                                    <a href="">Send Feedback Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  );
};

export default IdeaDetails;