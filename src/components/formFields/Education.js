import React from 'react';
import { useState } from "react";
import { useForm,useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../../css/Education.css'
import axios from "axios";
function Education() {
	// const { register, handleSubmit, reset } = useForm();
	const customFunction = (d) => {
		sessionStorage.setItem("education", JSON.stringify(d))
		const data = JSON.parse(sessionStorage.getItem('education'))
		let educationData=[];
		// document.querySelector(".educationText").innerHTML = data.courseName;
		// document.querySelector(".specializationText").innerHTML = data.specialization;
		// document.querySelector(".instituteText").innerHTML = data.instituteName;
		// document.querySelector(".university").innerHTML = data.university;
		// document.querySelector(".yearText").innerHTML = data.passingYear;
		// document.querySelector(".marksText").innerHTML = data.marks;
		for(var i=0;i<data.test.length;i++){
            document.querySelector('.educationalDiv .innerEducationDiv').innerHTML+='<div className="educationDiv"><p className="educationText"> Course: '+ data.test[i].courseName+'&nbsp;&nbsp;</p><p className="specializationText ">Specialization: '+data.test[i].specialization+'&nbsp;&nbsp;</p><p className="instituteText ">Institute: ' + data.test[i].instituteName+'&nbsp;&nbsp;</p><p className="university "> University: '+ data.test[i].university +'&nbsp;&nbsp;</p><p className="yearText "> Passing Year: '+ data.test[i].passingYear+'&nbsp;&nbsp;</p><p className="marksText "> Marks Scored:' + data.test[i].marks+'&nbsp;&nbsp</p></div>'
			// document.querySelector('.educationalDiv').style.borderBottom="1px red solid";
			educationData.push(
				{
					educationalDetailsId: 0,
					courseName: data.test[i].courseName,
					stream: data.test[i].specialization,
					institutionName: data.test[i].instituteName,
					passingYear: data.test[i].passingYear,
					marks: data.test[i].marks,
					university: data.test[i].university
				}
			)

		}
		var rIdEdu = sessionStorage.getItem('resumeId');
		var rStatusEdu = sessionStorage.getItem('resumeStatus');

		var EduObj = {
			resumeId: rIdEdu,
			resumeTitle: "Resume My",
			resumeStatus: rStatusEdu,
			creationDate: "2022-04-13T06:33:42.151Z",
			updationDate: "2022-04-13T06:33:42.151Z",

			educationDetails: educationData
		}

		console.log(EduObj);
		axios.put(`https://localhost:7258/api/Resume/${rIdEdu}`, EduObj);

	}
	const navigate = useNavigate();

   const nextPage = () => {
   navigate("/home/certificationtraining");
   }
//  const addMore = (e) => {
// 	e.preventDefault();
// 	const allowedNodeNames = ['INPUT', 'TEXTAREA','SELECT'];
// 	const educationDiv = e.target.previousElementSibling.cloneNode(true);
// 	Array.from(educationDiv.children).forEach((current, index) => {
// 		if(current.nodeName === 'DIV'){
// 			Array.from(current.children).forEach((current) => {
// 				if(allowedNodeNames.includes(current.nodeName))
// 					current.value = '';
// 			})
// 		}				
// 	})		
// 	e.target.previousElementSibling.appendChild(educationDiv);
// }

	const { register, control, reset, handleSubmit } = useForm({

		defaultValues: {
		test: [{ courseName: "", specialization: "" , instituteName:"", university:"",passingYear:"",
		marks:""
		}]
		}
	});
	
	const { fields, append, remove } = useFieldArray({
		control,
		name: "test"
	});
	const [count, setCount]=useState(0);

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
					{fields.map((current,index) => {
					 return (
					<div className="FormFeilds">
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="Course name">Course Name:</label>
							<input {...register(`test.${index}.courseName`)}
								placeholder="Course Name"  id="courseName" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="Specialization">Specialization:</label>
							<input {...register(`test.${index}.specialization`)}
								placeholder="Specialization"  id="specialization" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="instituteName">Institute Name</label>
							<input {...register(`test.${index}.instituteName`)}
								placeholder="Institute name"  id="instituteName" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
                            <label className="labelEducation" HtmlFor="university">University/Board:</label>
                            <input {...register(`test.${index}.university`)}
                                placeholder="University/Board"  id="university" className="inputsEducation" />
                        </div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="passingYear">Passing Year:</label>
							<input {...register(`test.${index}.passingYear`)}
								placeholder="Passing Year" id="passingYear" className="inputsEducation" />
						</div>
						<div className="labelInputEducation">
							<label className="labelEducation" HtmlFor="marks">Marks:</label>
							<input {...register(`test.${index}.marks`)}
								placeholder="Marks" id="marks" className="inputsEducation" />
						</div>
						<a href="" className="deleteButton" type="button" onClick={(e) => {e.preventDefault(); 
										remove(index);
										setCount(count-1);}}> Delete </a>
					</div>
					);
				})}
				
				{
					count<2 &&
                           <a href="" className="addMoreEducation" onClick={(e) => {
							e.preventDefault();
							append();
							setCount(count+1);}}>Add More Education</a>
				}

                 
				</form>
			</div>
		</>
	)
}

export default Education;