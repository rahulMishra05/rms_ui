import React from 'react'
import { useState } from "react";
// import Calendar from 'react-calendar'
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Calendar from 'react-calendar'
// import TextField from '@material-ui/core/TextField';
import '../../css/WorkExp.css'
	export default function WorkExp(props) {
  // console.log(props.formfields)
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/education");
}

  const customFunction = (d) => {
    sessionStorage.setItem("workexp", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('workexp'))
    console.log(sessionStorage.key(0))
    console.log(data)
    const clientName = data.client;
    const country = data.country;
    const project = data.project;
    const role = data.role;
    const businessSoulution = data.businessSoulution;
    const technology = data.technology;
    const projectRes = data.projectRes;
    const Startdate=data.startdate;
    const Enddate=data.enddate;

    document.querySelector('.clientText').innerHTML = clientName;
    document.querySelector('.countryText').innerHTML = country;
    document.querySelector('.projectText').innerHTML = project;
    document.querySelector('.roleText').innerHTML = role;
    document.querySelector('.businessSolutionText').innerHTML = businessSoulution;
    document.querySelector('.technologyText').innerHTML = technology;
    document.querySelector('.projectResText').innerHTML = projectRes;
    document.querySelector('.durationText').innerHTML = Startdate +" to "+ Enddate;


  }

	return (
	 <>
    <div className="WorkExp">
    <form onSubmit={handleSubmit((data) => customFunction(data))} id="formWorkExp">
      <div className="topSection">
        <input className="buttons" type="button" name="mydetails" value="Cancel" />
        <input className="buttons" type="submit" name="mydetails" value="Save" />
        <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage}/>
      </div>
      <div className="FormFeilds">
        

          <div className="labelInputWorkExp">
            <label className="labelWorkExp" for="ClientDesc">Client Description:</label>
            <input {...register("client")} placeholder="Client Description" name="client" id="clientDesc" className="inputsWorkExp"/>
          </div>
          <div className="labelInputWorkExp">
            <label className="labelWorkExp" for="Country">Country:</label>
            <input {...register("country")} placeholder="Country" name="country" id="country" className="inputsWorkExp"/>
          </div>
          <div className="labelInputWorkExp">
            <label className="labelWorkExp" for="Project">Project Name:</label>
            <input {...register("project")} placeholder="Project Name" name="project" id="projectName" className="inputsWorkExp"/>
          </div>
          <div className="labelInputWorkExp">
          <label className="labelWorkExp" for="role">Role:</label>
          <select  className="inputsWorkExp" name="role" id="role" {...register("role")} multiple>
            <option value="">Select...</option>
            <option value="business analyst">Business Analyst</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="qa">QA</option>
          </select>
          </div>

          <div className="labelInputWorkExp">
            <label className="labelWorkExp">Duration:</label>
            <div className="duration">
            <span className="duration_start"><input className="fifth"{...register("startdate")} type="date" name="startdate[]" /></span>
            <p>to</p>
            <span className="duration_end"><input className="fifth"{...register("enddate")} type="date" name="enddate[]" /></span>
            </div>
          </div>

          {/* <Calendar /> */}
          
          <div className="labelInputWorkExp">
            <label className="labelWorkExp" for="">Business Solution:</label>
            <input {...register("businessSoulution")} placeholder="Business Solution" name="businessSoulution" id="businessSolution" className="inputsWorkExp"/>
          </div>
          <div className="labelInputWorkExp">
          <label className="labelWorkExp" for="role">Technology</label>
          <select  className="inputsWorkExp" name="technology" id="technology" {...register("technology")} multiple>
            <option value="">Select...</option>
            <option value="python">Python</option>
            <option value="Java">java</option>
            <option value="React">React</option>
            <option value="sql">SQL</option>
          </select>
          </div>
           <div className="labelInputWorkExp">
            <label className="labelWorkExp" for="">Project Responsibilities:</label>
            <input {...register("projectRes")} placeholder="Project Responsibilities" name="projectRes" id="Responsibilities" className="inputsWorkExp"/>
          </div>
          
          <hr  style={{
              color: '#000000',
              backgroundColor: '#000000',
              height: '0.2rem',
              borderColor : '#000000',
              border: '1rem',
              marginRight: '60px'
          }}/>

          <div className="footer">
            <input className="button2" type="button" name="WorkExp" value="Add Work Experience" />
         </div>
         
        
        </div>
        </form>
    </div>
    </>

  );
}
		
