import React, { useState } from "react";
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
        navigate("/");
    }

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
                    <FontAwesomeIcon className="icon" icon={faPlusCircle} onClick={nextPage}/>
                    <h5>Create New</h5>
                </div>

            </div>
        </>
    )
}
export default CreateResume;
