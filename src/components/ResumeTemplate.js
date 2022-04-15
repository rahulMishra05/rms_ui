import React from 'react'
import '../css/Template.css'

function Template() {
	// const arr = Array.from(sessionStorage.mydetails)
	return (
		<section className="template">
		<div className="userInfoDiv">
			<div className="circleProfile"></div>
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
			</div>
			<div className="skillsDiv">
				<h5 className="resumeHeadings">Skills & Proficiencies</h5>
				<p className="skillsText"></p>
			</div>
			<div className="educationalDiv">
				<h5 className="resumeHeadings">Educational Background</h5>
				<p className="educationText"></p>
			</div>
			<div className="certificationDiv">
				<h5 className="resumeHeadings">Certification & Training</h5>
				<p className="certificationText"></p>
			</div>
			
			<div className="membershipDiv">
				<h5 className="resumeHeadings">Achievements & Memberships</h5>
				<p className="membershipText"></p>
			</div>
		</div>
		</section>
	)
}
export default Template