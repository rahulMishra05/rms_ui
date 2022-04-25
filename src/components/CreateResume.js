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



    const toggleOptions = () => {
        let result = document.querySelector('#optionsDiv');
        result.style.display = "flex";
    }

    const editResume = () => { 
        console.log("Resume Edited")
    }
    const cloneResume = (index) => { 
        console.log(index)
        console.log("Clone worked")
    }
    const shareResume = () => { 
        console.log("Resume Share")
    }
    const exportResume = () => { 
        console.log("Resume Exported")
    }

    const [result, getData] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7258/api/Resume', {

            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => getData(res))
        // .then(res => {
        //     setData()
        // })
    }, []);

    // console.log(result[9]);
    // console.log(result[83].myDetails[0].role)
    // console.log(result[9].myDetails[0].userName);

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
                        result.map((items, index) => {
                            return (
                                <div className="resume">
                                    <div className="top">
                                        <div className="shelf1">
                                            <img src={logo} alt="PSI LOGO" />
                                            <p>PSI Proprietary & Confidential</p>
                                        </div>
                                        <div className="shelf2">
                                            <p><strong>{items.myDetails.map((subUserName) => (subUserName.userName))}</strong></p>
                                            <p>{items.myDetails.map((subRole) => (subRole.role))}</p>



                                        </div>
                                        <div className="shelf3">
                                            <p>{items.aboutMes.map((subAboutMe) => (subAboutMe.mainDescription))}</p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="reviewShelf"> Draft </div>
                                        <div className="resumeNameShelf">
                                            <p className="resumeName">{items.resumeTitle}</p>
                                            {/* <p className="resumeOptions">&#8278;</p> */}
                                            <div className="dropdownButton">
                                                <button id="resumeOptions" >&#8278;</button>
                                                <div id="optionsDiv">
                                                    <ul>
                                                        <li onClick={editResume}>Edit</li>
                                                        <li onClick={cloneResume(items.resumeId)}>Clone</li>
                                                        <li onClick={shareResume}>Share</li>
                                                        <li onClick={exportResume}>Export</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="finalBottom">
                                            <p>PSI Resume {items.resumeTitle} {items.myDetails.map((footerUserName) => (footerUserName.userName))}</p>
                                        </div>
                                    </div>




                                </div>




                            )
                        })
                    }

                </div>



            </div>
        </>
    )
}
export default CreateResume;
