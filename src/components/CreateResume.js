import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../css/CreateResume.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlusCircle} from '@fortawesome/free-solid-svg-icons'

import axios from "axios";
const CreateResume = () => {
    return (
        <>
            <div className="header">
                <div className="left">
                    <div className="psLogo"><img src="src\images\pslogo.jpg" alt="" /></div>
                    <h1 >Resumes Management System</h1>
                </div>
                <div className="search">
                    <input type="text" name="searchResume" placeholder="search"></input>
                </div>
                <div className="profile">
                    <div className="image">
                        <img src=" " alt=" "></img>
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
                    <FontAwesomeIcon className="icon" icon={faPlusCircle}/>
                    <h2>Create New</h2>
                </div>

            </div>
        </>
    )
}
export default CreateResume;
