import { reference } from '@popperjs/core'
import React, { useRef, useState, useEffect } from 'react'
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
		<div >
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
							<h5 className="resumeHeading">About Me</h5>
							<div className="aboutMeText"><p>{result.aboutMes && result.aboutMes[0].mainDescription}</p></div>
							<p className='subAboutMe'>{result.aboutMes && result.aboutMes[0].keyPoints}</p>
						</div>
						<div className="workHistory">

							<h5 className="resumeHeading">Work History</h5>
							<div style={{ borderTop: '4px solid #73C5E5', marginTop: '-3.5rem', marginLeft: '3.5rem' }}></div>
							<div className="innerWorkHistory" style={{ marginLeft: '50px', marginBottom: '3rem' }}>

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


					</div>
					<div className='section2'>
						<div className="skillDiv">
							<h5 className="resumeHeading">Skills & Proficiencies</h5>
							<p className="skillText">{result.skillList && result.skillList[0].skillName} {result.skillList && result.skillList[0].category}</p>

						</div>
						<div className="educationDiv">

							<h5 className="resumeHeading" style={{ marginTop: '-1.5rem' }}>Educational Background</h5>
							<div style={{ borderTop: '4px solid #73C5E5', marginTop: '-3.5rem', marginLeft: '3.5rem' }}></div>
							<div className="innerEducation" style={{ marginLeft: '50px' }}>

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
					<div className="certificationTrainingDiv">
						<h5 className="resumeHeading">Certification & Training</h5>
						<div className="certificationTrainText"><p></p></div>
						<p className='subCertificationTraining1'></p>
						<p className='subCertificationTraining2'></p>
					</div>

					<div className="achievementMembership">
						<h5 className="resumeHeading">Achievement & Membership</h5>
						<div className="achievement_MembershipText"></div>
						<p className='subAchievementMembership1'></p>
						<p className='subAchievementMembership2'></p>
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}
export default Template