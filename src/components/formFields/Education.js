import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../../css/Education.css'
import axios from "axios";
function Education() {
	const { register, handleSubmit, reset } = useForm();
	const customFunction = (d) => {
		sessionStorage.setItem("education", JSON.stringify(d))
		const data = JSON.parse(sessionStorage.getItem('education'))
		document.querySelector(".educationText").innerHTML = data.courseName;
		document.querySelector(".specializationText").innerHTML = data.specialization;
		document.querySelector(".instituteText").innerHTML = data.instituteName;
		document.querySelector(".university").innerHTML = data.university;
		document.querySelector(".yearText").innerHTML = data.passingYear;
		document.querySelector(".marksText").innerHTML = data.marks;

		var rIdEdu = sessionStorage.getItem('resumeId');
		var rStatusEdu = sessionStorage.getItem('resumeStatus');

		var EduObj = {
			resumeId: rIdEdu,
			resumeTitle: "Resume My",
			resumeStatus: rStatusEdu,
			creationDate: "2022-04-13T06:33:42.151Z",
			updationDate: "2022-04-13T06:33:42.151Z",

			educationDetails: [
				{
					educationalDetailsId: 0,
					courseName: d.courseName,
					stream: d.specialization,
					institutionName:d.instituteName,
					passingYear:d.passingYear,
					marks: d.marks,
					university: d.university
				}
			]
		}

		console.log(EduObj);
		axios.put(`https://localhost:7258/api/Resume/${rIdEdu}`, EduObj);

	}
	const navigate = useNavigate();
	const nextPage = () => {
		navigate("/aboutme");
	}
	const addMore = (e) => {
		e.preventDefault();
		const allowedNodeNames = ['INPUT', 'TEXTAREA', 'SELECT'];
		const educationDiv = e.target.previousElementSibling.cloneNode(true);
		Array.from(educationDiv.children).forEach((current, index) => {
			if (current.nodeName === 'DIV') {
				Array.from(current.children).forEach((current) => {
					if (allowedNodeNames.includes(current.nodeName))
						current.value = '';
				})
			}
		})
		e.target.previousElementSibling.appendChild(educationDiv);
	}
	return (
		<>
			<div className="education">
				<form onSubmit={handleSubmit((data) => customFunction(data))} id="formEducation">
					<div className="topSection">
						<input className="buttons" type="button" name="education" value="Cancel" onClick={() => {
							reset();
						}} />
						<input className="buttons" type="submit" name="education" value="Save" />
						<input className="buttons" type="button" name="education" value="->" onClick={nextPage} />
					</div>
					<div className="FormFeilds">
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="Course name">Course Name:</label>
							<input {...register("courseName")}
								placeholder="Course Name" name="courseName" id="courseName" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="Specialization">Specialization:</label>
							<input {...register("specialization")}
								placeholder="Specialization" name="specialization" id="specialization" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="instituteName">Institute Name</label>
							<input {...register("instituteName")}
								placeholder="Institute name" name="instituteName" id="instituteName" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
                            <label className="labelEducation" HtmlFor="university">University/Board:</label>
                            <input {...register("university")}
                                placeholder="University/Board" name="university" id="university" className="inputsEducation" />
                        </div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="passingYear">Passing Year:</label>
							<input {...register("passingYear")}
								placeholder="Passing Year" name="passingYear" id="passingYear" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="marks">Marks:</label>
							<input {...register("marks")}
								placeholder="Marks" name="marks" id="marks" className="inputsEducation" />
						</div>
					</div>

					<a href="" className="addMoreWork" onClick={addMore}>Add More</a>

				</form>
			</div>
		</>
	)
}

export default Education;