import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import '../css/CreateResume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/pslogo.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateResume = () => {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/home");
    }

    const [result, getData] = useState([]);

const toggleOptions = () => {
    let result = document.querySelector('.optionsDiv');
    result.style.display = "flex";
}

const editResume = () => {}
const cloneResume = () => {}
const shareResume = () => {}
const exportResume = () => {}

useEffect(() => {
fetch('https://localhost:7258/api/Resume', {

method:'GET',
headers:{
'content-type':'application/json',
}
}).then(res =>res.json())
.then(res => getData(res))
},[]);

    return (
        <>
            <div className="header">
                <div className="left">
                    <div className="psLogo"><img src={logo} alt="" /></div>
                    <h1 >Resumes Management System</h1>
                </div>
                <div className="search">
                    <input type="text" name="searchResume" placeholder="search"></input>
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                </div>
                <div className="profile">
                    <div className="image">
                        <img src={logo} alt=" "></img>
                    </div>
                    <div>
                        <div className="userName">Virendra Singh</div>
                        <div class="notification">
                            <p>Notifications</p>
                            <p className="notificationCount">2</p>
                        </div>
                        <div className="signout">Sign-out</div>

                    </div>
                </div>


            </div>
            <div className="section">
                <div className="create">
                    <FontAwesomeIcon className="icon" icon={faPlusCircle} onClick={nextPage} />
                    <h5>Create New</h5>
                </div>

                <div className="resumeHeading"><h3>My Resumes</h3></div>
                <div className="createdResumes">
                    {
                        result.map(current => {
                            return (
                                <div className="resume">
                                    <div className="top">
                                        <div className="shelf1">
                                            <img src={logo} alt="PSI LOGO" />
                                            <p>PSI Proprietary & Confidential</p>
                                        </div>
                                        <div className="shelf2">
                                            <p><strong>{current.role}</strong></p>
                                            <p>{current.role}</p>



                                        </div>
                                        <div className="shelf3">
                                            <p>{current.aboutme}</p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="reviewShelf"> Draft </div>
                                        <div className="resumeNameShelf">
                                            <p className="resumeName">{current.resumeTitle}</p>
                                            {/* <p className="resumeOptions">&#8278;</p> */}
                                            <button className="resumeOptions" onClick={toggleOptions}>&#8278;</button>
                                        </div>



                                        <div className="finalBottom">
                                            <p>PSI Resume {current.designation}</p>
                                        </div>
                                    </div>




                                </div>




                            )
                        })
                    }
                    <div className="optionsDiv">
                    <ul>
                        <li onClick={editResume}>Edit</li>
                        <li onClick={cloneResume}>Clone</li>
                        <li onClick={shareResume}>Share</li>
                        <li onClick={exportResume}>Export</li>
                    </ul>
                </div>
                </div>
                

            </div>
        </>
    )
}
export default CreateResume;
