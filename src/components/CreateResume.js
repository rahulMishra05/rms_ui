import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import '../css/CreateResume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/pslogo.jpg'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isValue } from "react-calendar/dist/umd/shared/propTypes";



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
        // console.log(index)
        // console.log("Clone worked")
        // console.log(index);
        // console.log(oldResume)
        // console.log(oldResume.resumeId)
        // console.log(oldResume)

        var oldResume = result[index];
        oldResume.resumeId = 0;
        axios.post('https://localhost:7258/api/Resume/', oldResume);

    }

    const onPreviewPage = () => {
        navigate('./previewresume')
        console.log("Zamba Again!!")
    }

    const previewResume = (index) => {
        console.log(index);
        // document.querySelector('.aboutMeMain').innerHTML = "Hello Moto";

        // var currentResumeCertificationId = currentResumeCertificationName = "";   
        // var currentResumeId = currentResumeTitle = currentResumeStatus = "";     

        var currentResume = result[index];
        // console.log(currentResume.aboutMes[0].mainDescription)

        // VALUES OF RESUME TABLE
        var currentResumeId = currentResume.resumeId;
        var currentResumeTitle = currentResume.resumeTitle;
        var currentResumeStatus = currentResume.resumeStatus;
        var currentResumeCreationDate = currentResume.creationDate;
        var currentResumeUpdationDate = currentResume.updationDate;

        // (currentResumeTitle) ? currentResumeTitle : "";
        // {currentResumeId && (document.querySelector(".currentResumeId").innerHTML = currentResumeId)}
        


        // document.querySelector(".currentResumeId").innerHTML = currentResumeId

        //VALUES OF SKILLS TABLE
        // if(currentResume.skillList && currentResume.skillList.length > 0){
        //     var currentResumeSkillName = currentResume.skillList[0].skillName;
        //     var currentResumeCategory = currentResume.skillList[0].category;
        // }
        // else{
        //     var currentResumeSkillName = "";
        //     var currentResumeCategory = "";
        // }

        // VALUE OF ABOUT_ME TABLE
        // if(currentResume.aboutMes && currentResume.aboutMes.length >0){
        //     var currentResumeMainDescription = currentResume.aboutMes[0].mainDescription;
        //     var currentResumeKeyPoints = currentResume.aboutMes[0].keyPoints;

        //     // document.querySelector(".aboutMeMain").innerHTML = currentResumeMainDescription;
        // }
        // else{
        //     var currentResumeMainDescription = "";
        //     var currentResumeKeyPoints = "";
        // }


        // VALUE OF ACHIEVEMENTS TABLE
        // if(currentResume.achievements && currentResume.achievements.length > 0){
        //     var currentResumeAchievements = currentResume.achievements[0].achievementName;
        // }
        // else{
        //     var currentResumeAchievements = "";
        // }


        // VALUE OF EDUCATION_DETAILS TABLE 
        // if(currentResume.educationDetails & currentResume.educationDetails.length > 0){
        //     var currentResumeEducationDetailsId = currentResume.educationDetails[0].educationDetailsId;
        //     var currentResumeCourseName = currentResume.educationDetails[0].courseName;
        //     var currentResumeStream = currentResume.educationDetails[0].stream;
        //     var currentResumeInstitutionName = currentResume.educationDetails[0].institutionName;
        //     var currentResumePassingYear = currentResume.educationDetails[0].passingYear;
        //     var currentResumeMarks = currentResume.educationDetails[0].marks;
        //     var currentResumeUniversity = currentResume.educationDetails[0].university;
        // }
        // else{
        //     var currentResumeEducationDetailsId = "";
        //     var currentResumeCourseName = "";
        //     var currentResumeStream = "";
        //     var currentResumeInstitutionName = "";
        //     var currentResumePassingYear = "";
        //     var currentResumeMarks = "";
        //     var currentResumeUniversity = "";
        // }


        // VALUE OF MEMBERSHIP TABLE
        // if(currentResume.memberships && currentResume.memberships.length > 0){
        //     var currentResumeMembershipName = currentResume.memberships[0].membershipName;
        // }
        // else{
        //     var currentResumeMembershipName = "";
        // }

        // VALUE OF MY_DETAILS TABLE
        // if(currentResume.myDetails && currentResume.myDetails.length > 0){
        //     var currentResumeProfilePicture = currentResume.myDetails[0].profilePicture;
        //     var currentResumeTotalExperience = currentResume.myDetails[0].totalExp;
        //     var currentResumeUserName = currentResume.myDetails[0].userName;
        //     var currentResumeRole = currentResume.myDetails[0].role;
        // }    
        // else{
        //     var currentResumeProfilePicture = "";
        //     var currentResumeTotalExperience = "";
        //     var currentResumeUserName = "";
        //     var currentResumeRole = "";
        // }

        // VALUE OF WORK_EXPERIENCE TABLE
        // if(currentResume.workExperienceDomains && currentResume.workExperienceDomains.length > 0){
        //     var currentResumeClientDescription = currentResume.workExperienceDomains[0].clientDescription;
        //     var currentResumeCountry = currentResume.workExperienceDomains[0].country;
        //     var currentResumeProjectName = currentResume.workExperienceDomains[0].projectName;
        //     var currentResumeProjectRole = currentResume.workExperienceDomains[0].projectRole;
        //     var currentResumeStartDate = currentResume.workExperienceDomains[0].startDate;
        //     var currentResumeEndDate = currentResume.workExperienceDomains[0].endDate;
        //     var currentResumeBusinessSolution = currentResume.workExperienceDomains[0].businessSolution;
        //     var currentResumeTechnologyStack = currentResume.workExperienceDomains[0].technologyStack;
        //     var currentResumeProjectResponsibilities = currentResume.workExperienceDomains[0].projectResponsibilities;
        // }
        // else{
        //     var currentResumeClientDescription = "";
        //     var currentResumeCountry = "";
        //     var currentResumeProjectName = "";
        //     var currentResumeProjectRole = "";
        //     var currentResumeStartDate = "";
        //     var currentResumeEndDate = currentResume.workExperienceDomains[0].endDate;
        //     var currentResumeBusinessSolution = "";
        //     var currentResumeTechnologyStack = "";
        //     var currentResumeProjectResponsibilities = "";
        // }

        // VALUE OF CERTIFICATION TABLE
        // if(currentResume.certifications && currentResume.certifications.length > 0 ){
        //     var currentResumeCertificationId = currentResume.certifications[0].certificationId;
        //     var currentResumeCertificationName = currentResume.certifications[0].certificationName;
        // }
        // else{
        //     var currentResumeCertificationId = "";
        //     var currentResumeCertificationName = "";
        // }


        // // VALUE OF TRAINING TABLE
        // if(currentResume.trainings && currentResume.trainings.length > 0){
        //     var currentResumeTrainingId = currentResume.trainings[0].trainingId;
        //     var currentResumeTrainingName = currentResume.trainings[0].trainingname;
        // }
        // else{
        //     var currentResumeTrainingId = "";
        //     var currentResumeTrainingName = "";
        // }


        // // VALUE OF REVIEWS TABLE
        // if(currentResume.reviews && currentResume.reviews.length > 0){
        //     var currentResumeUserId = currentResume.reviews[0].userId;
        //     var currentResumeUserName = currentResume.reviews[0].userName;
        //     var currentResumeReviewId = currentResume.reviews[0].reviewId;
        //     var currentResumeResumeId = currentResume.reviews[0].resumeId;
        //     var currentResumeReviewComment = currentResume.reviews[0].reviewComment;
        //     var currentResumeReviewerId = currentResume.reviews[0].reviewerId;
        // }
        // else{
        //     var currentResumeUserId = "";
        //     var currentResumeUserName = "";
        //     var currentResumeReviewId = "";
        //     var currentResumeResumeId = "";
        //     var currentResumeReviewComment = "";
        //     var currentResumeReviewerId = "";
        // }

        // console.log(currentResumeStartDate)
        console.log("Zamba");

        // document.querySelector(".aboutMeMain").innerHTML = currentResumeMainDescription

        

        
        
    }


    const shareResume = (index) => {
        // console.log("Resume Share")

        var oldResume = result[index];
        var oldResumeId = oldResume.resumeId;
        var oldResumeTitle = oldResume.resumeTitle;
        // oldResume.resumeStatus = "Review"
        var newStatus = {
            resumeId: oldResumeId,
            resumeTitle: oldResumeTitle,
            resumeStatus: "Review",
            creationDate: "2022-04-13T06:33:42.151Z",
            updationDate: "2022-04-13T06:33:42.151Z",
        }
        console.log(newStatus)
        axios.put(`https://localhost:7258/api/Resume/${oldResume.resumeId}`, newStatus)
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

    // console.log(result);

    // console.log(result[9]);
    // console.log(result[9].myDetails.getData())
    // console.log(result[83].myDetails.every(isValue))
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
                                <div className="resume" onClick={() => {previewResume(index); onPreviewPage();}}>
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
                                        <div className="reviewShelf">{items.resumeStatus}</div>
                                        <div className="resumeNameShelf">
                                            <p className="resumeName">{items.resumeTitle}</p>
                                            {/* <p className="resumeOptions">&#8278;</p> */}
                                            <div className="dropdownButton">
                                                <button id="resumeOptions" >&#8278;</button>
                                                <div id="optionsDiv">
                                                    <ul>
                                                        <li onClick={editResume}>Edit</li>
                                                        <li><a href="" onClick={() => cloneResume(index)}>Clone</a></li>
                                                        <li><a href="" onClick={() => shareResume(index)}>Share</a></li>
                                                        <li onClick={exportResume}>Export</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="finalBottom">
                                            <p>PSI Resume {items.resumeTitle} {items.myDetails.map((footerUserName) => (footerUserName.userName))}</p>
                                        </div>
                                    </div>



                                    <Link to="previewresume" target="_blank" />
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
