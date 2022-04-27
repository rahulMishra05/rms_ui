import React from 'react'
import '../css/Template.css'

function Template() {
	// const arr = Array.from(sessionStorage.mydetails)
	return (
		<section className="template">
		<div className="userInfoDiv">
			<div className="circleProfile">
				<img></img>
			</div>
			<div className="nameInfo">
				<h1 className="nameHead">PSI Resume</h1>
				<label className="roleLabel" for="name">Software Engineer Trainee</label>
				<div className='experienceHeading'>
					<label>Total Experience: </label>
				<label className="expLabel" for="name"></label>
				</div>
			</div>
		</div>
		<div className="resumeDetailsDiv">
			<div className="aboutMeDiv">
				<h5 className="resumeHeadings">About Me</h5>
				<div className="aboutMeText"><p></p></div>
				<p className='subaboutme'></p>
			</div>
			<div className="workHistoryDiv">
				
				<h5 className="resumeHeadings">Work History</h5>
				<div style={{borderTop:'4px solid #73C5E5', marginTop:'-3.5rem', marginLeft:'3.5rem'}}></div>
				<div className="innerWorkHistoryDiv" style={{marginLeft:'50px', marginBottom:'3rem'}}>

				</div>
				{/* <div className="innerWorkDiv">
					<div className='client_country'>
						<p className="clientText"></p>
						<p className="countryText"></p>
					</div>
					<p className='projectText'></p>
					<p className="roleText"></p>
					<p className="durationText"></p>
					<p className="businessSolutionText"></p>
					<p className="technologyText"></p>
					<p className="projectResText"></p>
				</div> */}
				
				
			</div>
			<div className="skillsDiv">
				<h5 className="resumeHeadings">Skills & Proficiencies</h5>
				<p className="skillsText"></p>
			
			</div>
			<div className="educationalDiv">
				
				<h5 className="resumeHeadings" style={{marginTop:'-1.5rem'}}>Educational Background</h5>
				<div style={{borderTop:'4px solid #73C5E5', marginTop:'-3.5rem', marginLeft:'3.5rem'}}></div>
				<div className="innerEducationDiv" style={{marginLeft:'50px'}}>

				</div>
				{/* <div className="educationDiv">
				    <p className="educationText"></p>
					<p className="specializationText "></p>
					<p className="instituteText "></p>
					<p className="university "></p>
					<p className="yearText "></p>
					<p className="marksText "></p>
				</div> */}
			</div>
			<div className="certificationTrainingDiv">
				<h5 className="resumeHeadings">Certification & Training</h5>
				<div className="certificationTrainingText"><p></p></div>
				<p className='subcertificationtraining1'></p>
				<p className='subcertificationtraining2'></p>
			</div>
			
			<div className="achievementMembershipDiv">
				<h5 className="resumeHeadings">Achievement & Membership</h5>
				<div className="achievementMembershipText"></div>
				<p className='subachievementmembership1'></p>
				<p className='subachievementmembership2'></p>
			</div>
		</div>
		</section>
	)
}
export default Template