import { reference } from '@popperjs/core'
import React, { useRef, useState, useEffect, Component } from 'react'
import '../css/PreviewResume.css'
import { useReactToPrint } from "react-to-print";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { useParams } from 'react-router-dom';



function Template() {

	// CODE TO GET RESUME ID
	const params = useParams();
	// console.log(params)


	sessionStorage.setItem("resumeId", JSON.stringify(params));
	const resumeId = JSON.parse(sessionStorage.getItem("resumeId"));
	const id = resumeId.id;
	console.log(id)



	// 	const componentRef=useRef();
	// const handlePrint=useReactToPrint({content:()=> componentRef.current},
	// {copyStyles:true},{onBeforeGetContent:()=> this.copyStyles});
	// const arr = Array.from(sessionStorage.mydetails)  ;;;ref={componentRef}


	function makePDF() {
		const divToDisplay = document.querySelector('.template');
		html2canvas(divToDisplay).then(function (canvas) {
			var imgData = canvas.toDataURL('image/png');

			var imgWidth = 210;
			var pageHeight = 295;
			var imgHeight = canvas.height * imgWidth / canvas.width;
			var heightLeft = imgHeight;
			var doc = new jsPDF('p', 'mm');
			var position = 20; // give some top padding to first page

			doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
			heightLeft -= pageHeight;

			while (heightLeft >= 0) {
				position += heightLeft - imgHeight; // top padding for other pages
				doc.addPage();
				doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;
			}
			var pageCount = doc.internal.getNumberOfPages();
			while (pageCount > 3) {
				doc.deletePage(pageCount);
				pageCount = pageCount - 1;
			}



			// html2canvas(divToDisplay).then(function(canvas) {
			// 	window.alert("Downloaded..");

			// 	const HTMLContent_Height=document.querySelector(".template").offsetHeight;
			// 	console.log("html_height"+HTMLContent_Height);
			// 	const pdf = new jsPDF();
			// 	const divImage = canvas.toDataURL("image/png");
			// 	const width= pdf.internal.pageSize.getWidth();
			// 	console.log("width"+width);

			// 	const imgProps= pdf.getImageProperties(divImage);
			// 	const pdfWidth = pdf.internal.pageSize.getWidth();

			// 	const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			// 	console.log("pdf_height"+pdfHeight);


			// 	const totalPDFPages=(Math.ceil((HTMLContent_Height)/pdfHeight));
			// 	console.log("Total_pages"+totalPDFPages);



			// 	// const pdf = new jsPDF();
			// 	for (var i = 1; i <= totalPDFPages; i++) {

			// 		pdf.addImage(divImage, 'JPG', 0, (-HTMLContent_Height*i),width,pdfHeight)
			// 		pdf.addPage();

			// 	}
			// pdf.addImage(divImage, 'PNG', 0, 0);





			doc.save("Resume.pdf");

		})
	}

	const [result, getData] = useState([]);

	useEffect(() => {
		fetch(`https://localhost:7258/api/Resume/${id}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			}
		}).then(res => res.json())
			.then(res => getData(res))
	}, []);

	console.log(result)
	// console.log(result.myDetails[0].userName)
	// console.log(result.resumeTitle && result.resumeTitle)
	// console.log(result.aboutMes[0])

	// const ourResume = JSON.parse(result);
	// console.log(ourResume)

	// let result1 = Array.from(result)

	

	return (
		<div className='completeResume'>
			<section className="previewResume" >
			
							<div className="userInfo">
					<div className="imageProfile">
						{/* <input className="buttons" type="button" name="mydetails" value="pdf" onClick={makePDF} ></input> */}
						<img></img>
					</div>
					<div className="userNameInfo">
						<h1 className="userNameHead">{result.myDetails && result.myDetails[0].userName}</h1>
						<label className="userRole" for="name">{result.myDetails && result.myDetails[0].role}</label>
						<div className='experienceHead'>
							<label>Total Experience: </label>
							<label className="experienceLabel" for="name">{result.myDetails && result.myDetails[0].totalExp}</label>
						</div>
					</div>
				</div>
				<div className="resumeDetails">
					<div className='section1'>
						<div className="aboutMe">
							<h3 className="resumeHeading">About Me</h3>
							<div className="aboutMeText"><p>{result.aboutMes && result.aboutMes[0].mainDescription}</p></div>
							<ul className='subAboutMe'>
								<li>{result.aboutMes && result.aboutMes[0].keyPoints}</li>
							</ul>
							{/* <p className='subAboutMe'>{result.aboutMes && result.aboutMes[0].keyPoints}</p> */}
						</div>
						<div className="workHistory">

							<h3 className="resumeHeading">Work History</h3>
							<div style={{ borderTop: '4px solid #73C5E5', marginTop: '-3.5rem', marginLeft: '3.5rem' }}></div>
							{/* <div className="innerWorkHistory" style={{ marginLeft: '50px', marginBottom: '3rem' }}> */}
								<div className='workHistoryContent'>
								<div className='clientMainHeading'>
								<p className='clientDescription'><strong>Client:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].clientDescription}</p>
								<p className='country'>&nbsp; &#127988; {result.workExperienceDomains && result.workExperienceDomains[0].country}</p>
								</div>
								<p className='projectName1'><strong>Project:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].projectName}</p>
								<p className='projectRole'><strong>Role:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].projectRole}</p>
								<div className='dates'>
								<p className='startDate'><strong>Start:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].startDate.split("", 10)}</p>
								<p className='endDate'><strong>End:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].endDate.split("", 10)}</p>
								</div>
								<p className='businessSolution'><strong>Business Solution:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].businessSolution}</p>
								<p className='technologyStack'><strong>Technology Stack:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].technologyStack}</p>
								<p className='projectResponsibilities'><strong>Project Responsibilities:</strong> {result.workExperienceDomains && result.workExperienceDomains[0].projectResponsibilities}</p>
								</div>
							{/* </div> */}
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


					</div>
					<div className='section2'>
						<div className="skillDiv">
							<h3 className="resumeHeading">Skills & Proficiencies</h3>
							<p className="skillText">{result.skillList && result.skillList[0].skillName} {result.skillList && result.skillList[0].category}</p>

						</div>
						<div className="educationDiv">

							<h3 className="resumeHeading" style={{ marginTop: '-1.5rem' }}>Educational Background</h3>
							<div style={{ borderTop: '4px solid #73C5E5', marginTop: '-3.5rem', marginLeft: '3.5rem' }}></div>
							{/* <div className="innerEducation" style={{ marginLeft: '50px' }}>

							</div> */}
							<div className='educationDivContent'>
								<p className='courseName1'><strong>Course:</strong> {result.educationDetails && result.educationDetails[0].courseName}</p>
								<p className='stream1'><strong>Stream:</strong> {result.educationDetails && result.educationDetails[0].stream}</p>
								<p className='institutionName1'><strong>Institute:</strong> {result.educationDetails && result.educationDetails[0].institutionName}</p>
								<p className='passingYear1'><strong>Passing Year:</strong> {result.educationDetails && result.educationDetails[0].passingYear}</p>
								<p className='marks1'><strong>Marks:</strong> {result.educationDetails && result.educationDetails[0].marks}</p>
								<p className='university1'><strong>University:</strong> {result.educationDetails && result.educationDetails[0].university}</p>
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
					</div>
					<div className='section3'>
					<div className="certificationTrainingDiv1">
						<h3 className="resumeHeading">Certification & Training</h3>
						<div className="certificationTrainText"><p></p></div>
						<p className='subCertificationTraining1'>{result.certifications && result.certifications[0].certificationName}</p>
						<p className='subCertificationTraining2'>{result.trainings && result.trainings[0].trainingname}</p>
					</div>

					<div className="achievementMembership">
						<h3 className="resumeHeading">Achievement & Membership</h3>
						<div className="achievement_MembershipText"></div>
						<p className='subAchievementMembership1'>{result.achievements && result.achievements[0].achievementName}</p>
						<p className='subAchievementMembership2'>{result.memberships && result.memberships[0].membershipName}</p>
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Template