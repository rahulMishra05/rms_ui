import React from 'react';
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../../css/Education.css'
import axios from "axios";

function Education() {


	// const { register, control, handleSubmit } = useForm({

	// 	defaultValues: {
	// 	  test: [{ firstName: "", lastName: "" }]
	// 	}
	//   });

	//   const {fields,append,remove} = useFieldArray({
	// 	control,
	// 	name: "test"
	//   });

	//   const onSubmit = (data) => console.log("data", data);
	
	//   return (
	// 	<form onSubmit={handleSubmit(onSubmit)}>
	// 		{fields.map((item, index) => {
	// 		  return (
	// 			<div className="labelText" key={item.id}>
	// 			  <div className='labelInputEducation'>
	// 			  <label className="labelEducation" htmlFor="Course name">Course Name:</label>
	// 			  <input type="text" {...register(`test.${index}.courseName`) } autoFocus
	// 			  placeholder="Course Name" id="courseName" className='inputsEducation' />
	// 			  </div>
				  
	// 			  <input type="text" {...register(`test.${index}.lastName`)} /> <br/> 

	// 			  <input type="radio" {...register(`test.${index}.favLanguage`)} value="HTML" />
	// 			  <label>HTML</label> <br/>

	// 			  <input type="radio" {...register(`test.${index}.favLanguage`)} value="CSS" />
	// 			  <label>CSS</label> <br/>

	// 			  <input type="radio" {...register(`test.${index}.favLanguage`)} value="JavaScript" />
	// 			  <label>JavaScript</label> <br/>


	// 			  <button type="button" onClick={() => remove(index)}> Delete </button>
	// 			</div>
	// 		  );

	// 		})}

	// 	  <section>
	// 		<button type="button" onClick={() => {append();}}> Append </button>
	// 	  </section>
	// 	  <input type="submit" />
	// 	</form>
	//   );




	const customFunction = (d) => {
		sessionStorage.setItem("education", JSON.stringify(d))
		const data = JSON.parse(sessionStorage.getItem('education'))
		let educationData=[];
		for(var i=0;i<data.test.length;i++){
			document.querySelector(".educationText").innerHTML += data.test[i].courseName+"&nbsp;&nbsp;";
			document.querySelector(".specializationText").innerHTML += data.test[i].specialization+"&nbsp;&nbsp;";
			document.querySelector(".instituteText").innerHTML += data.test[i].instituteName+"&nbsp;&nbsp;";
			document.querySelector(".university").innerHTML += data.test[i].university+"&nbsp;&nbsp;";
			document.querySelector(".yearText").innerHTML += data.test[i].passingYear+"&nbsp;&nbsp;";
			document.querySelector(".marksText").innerHTML += data.test[i].marks+"&nbsp;&nbsp;";
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
		console.log("data",d.test);

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
		navigate("/certificationtraining");
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
										<label className="labelEducation" htmlFor="Course name">Course Name:</label>
										<input {...register(`test.${index}.courseName`)}
											placeholder="Course Name"  id="courseName" className="inputsEducation" />
									</div>
									<div className="labelInputEducation">
										<label className="labelEducation" htmlFor="Specialization">Specialization:</label>
										<input {...register(`test.${index}.specialization`)}
											placeholder="Specialization" id="specialization" className="inputsEducation" />
									</div>
									<div className="labelInputEducation">
										<label className="labelEducation" htmlFor="instituteName">Institute Name</label>
										<input {...register(`test.${index}.instituteName`)}
											placeholder="Institute name"  id="instituteName" className="inputsEducation" />
									</div>
									<div className="labelInputEducation">
										<label className="labelEducation" htmlFor="university">University/Board:</label>
										<input {...register(`test.${index}.university`)}
											placeholder="University/Board"  id="university" className="inputsEducation" />
									</div>
									<div className="labelInputEducation">
										<label className="labelEducation" htmlFor="passingYear">Passing Year:</label>
										<input {...register(`test.${index}.passingYear`)}
											placeholder="Passing Year"  id="passingYear" className="inputsEducation" />
									</div>
									<div className="labelInputEducation">
										<label className="labelEducation" htmlFor="marks">Marks:</label>
										<input {...register(`test.${index}.marks`)}
											placeholder="Marks"  id="marks" className="inputsEducation" />
									</div>
									<a href="" className="deleteButton" type="button" onClick={(e) => {e.preventDefault(); 
										remove(index)}}> Delete </a>
								</div>

						);
					})}
					<a href="" className="addMoreEducation" onClick={(e) => {
									e.preventDefault();
									append();}}>Add More Education</a>
						
				</form>
			</div>
		</>
	)
}

export default Education;











// function Education() {

// 	const { register, handleSubmit, reset,control } = useForm();
// 	const customFunction = (d) => {
// 		sessionStorage.setItem("education", JSON.stringify(d))
// 		const data = JSON.parse(sessionStorage.getItem('education'))
// 		document.querySelector(".educationText").innerHTML = data.courseName;
// 		document.querySelector(".specializationText").innerHTML = data.specialization;
// 		document.querySelector(".instituteText").innerHTML = data.instituteName;
// 		document.querySelector(".university").innerHTML = data.university;
// 		document.querySelector(".yearText").innerHTML = data.passingYear;
// 		document.querySelector(".marksText").innerHTML = data.marks;

// 		var rIdEdu = sessionStorage.getItem('resumeId');
// 		var rStatusEdu = sessionStorage.getItem('resumeStatus');

// 		var EduObj = {
// 			resumeId: rIdEdu,
// 			resumeTitle: "Resume My",
// 			resumeStatus: rStatusEdu,
// 			creationDate: "2022-04-13T06:33:42.151Z",
// 			updationDate: "2022-04-13T06:33:42.151Z",

// 			educationDetails: [
// 				{
// 					educationalDetailsId: 0,
// 					courseName: d.courseName,
// 					stream: d.specialization,
// 					institutionName:d.instituteName,
// 					passingYear:d.passingYear,
// 					marks: d.marks,
// 					university: d.university
// 				}
// 			]
// 		}

// 		console.log(EduObj);
// 		axios.put(`https://localhost:7258/api/Resume/${rIdEdu}`, EduObj);

// 	}
// 	const navigate = useNavigate();

//    const nextPage = () => {
//    navigate("/certificationtraining");
//    }
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

// 	const c="danger";
// 	return (
// 		<>
// 			<div className="education">
// 				<form onSubmit={handleSubmit((data) => customFunction(data))} id="formEducation">
// 				  {/* fields.map()return( */}
// 					<div className="topSection">
// 						<input className="buttons" type="button" name="education" value="Cancel" onClick={() => {
// 							reset();
// 						}} />
// 						<input className="buttons" type="submit" name="education" value="Save" />
// 						<input className="buttons" type="button" name="education" value="->" onClick={nextPage} />
// 					</div>
// 					<div className="FormFeilds">
// 						<div className="labelInputEducation">
// 							<label className="labelEducation" htmlFor="Course name">Course Name:</label>
// 							<input {...register("courseName")}
// 								placeholder="Course Name" name="courseName" id="courseName" className="inputsEducation" />
// 						</div>
// 						<div className="labelInputEducation">
// 							<label className="labelEducation" htmlFor="Specialization">Specialization:</label>
// 							<input {...register("specialization")}
// 								placeholder="Specialization" name="specialization" id="specialization" className="inputsEducation" />
// 						</div>
// 						<div className="labelInputEducation">
// 							<label className="labelEducation" htmlFor="instituteName">Institute Name</label>
// 							<input {...register("instituteName")}
// 								placeholder="Institute name" name="instituteName" id="instituteName" className="inputsEducation" />
// 						</div>
// 						<div className="labelInputEducation">
//                             <label className="labelEducation" htmlFor="university">University/Board:</label>
//                             <input {...register("university")}
//                                 placeholder="University/Board" name="university" id="university" className="inputsEducation" />
//                         </div>
// 						<div className="labelInputEducation">
// 							<label className="labelEducation" htmlFor="passingYear">Passing Year:</label>
// 							<input {...register("passingYear")}
// 								placeholder="Passing Year" name="passingYear" id="passingYear" className="inputsEducation" />
// 						</div>
// 						<div className="labelInputEducation">
// 							<label className="labelEducation" htmlFor="marks">Marks:</label>
// 							<input {...register("marks")}
// 								placeholder="Marks" name="marks" id="marks" className="inputsEducation" />
// 						</div>
// 						{/* <button type="button" onClick={() => remove(index)}> Delete </button> */}
// 					</div>

// 					<a href="" className="addMoreWork" onClick={addMore}>Add More</a>
//                  )
// 				</form>
// 			</div>
// 		</>
// 	)
// }
