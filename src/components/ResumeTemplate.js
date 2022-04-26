import { reference } from '@popperjs/core'
import React,{useRef} from 'react'
import '../css/Template.css'
import {useReactToPrint}   from "react-to-print";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";



 function Template() {
// 	const componentRef=useRef();
// const handlePrint=useReactToPrint({content:()=> componentRef.current},
// {copyStyles:true},{onBeforeGetContent:()=> this.copyStyles});
	// const arr = Array.from(sessionStorage.mydetails)  ;;;ref={componentRef}
	

	function makePDF(){
		const divToDisplay = document.querySelector('.template');
		html2canvas(divToDisplay).then(function(canvas){
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

	

	return (
		<div >
		<section className="template" >
			
		<div className="userInfoDiv">
			<div className="circleProfile">
          <input className="buttons" type="button" name="mydetails" value="pdf" onClick={makePDF} ></input>
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
				<div className="educationDiv">
				
				<p className="specializationText"></p>
				<p className="instituteText"></p>
				<p className='university'></p>
				<p className="yearText"></p>
				<p className="marksText"></p>
				</div>
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
		</div>
	)
}
export default Template