import React from 'react'
import { useState, useEffect } from "react";
// import Calendar from 'react-calendar'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar'
// import TextField from '@material-ui/core/TextField';
import '../../css/WorkExp.css'
export default function WorkExp(props) {
  // console.log(props.formfields)
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState("");

  const deleteContent = () =>{
    document.querySelector("div.labelInputWorkExp input[name='client']").value = "";
    document.querySelector("div.labelInputWorkExp input[name='country']").value = "";
    document.querySelector("div.labelInputWorkExp input[name='project']").value = "";
    document.querySelector("div.labelInputWorkExp input[name='businessSolution']").value = "";
    document.querySelector("div.labelInputWorkExp input[name='projectRes']").value = "";
  }

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/skills");
  }
  const [workList, setworkList] = useState([{ work: "" }]);

  const handleServiceAdd = () => {
    setworkList([...workList, { work: "" }]);
  };

  const customFunction = (d) => {
    sessionStorage.setItem("workexp", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('workexp'))
    console.log(sessionStorage.key(0))
    console.log(data)
    const clientName = data.client;
    const country = data.country;
    const project = data.project;
    const role = data.designation;
    const businessSoulution = data.businessSoulution;
    const technology = data.technology;
    const projectRes = data.projectRes;
    const Startdate = data.startdate;
    const Enddate = data.enddate;
    const td=data.tilldate;

    if(td=="till date")
    {
      document.querySelector('.durationText').innerHTML = Startdate.slice(0, 7) + " - " + td;
    }
   else if (Startdate === Enddate) {
      window.alert("Start date and end date are same");
    }
    else if (Startdate > Enddate) {
      window.alert("Start and End date conflicts");
    }
    else {
      document.querySelector('.durationText').innerHTML = Startdate.slice(0, 7) + " to " + Enddate.slice(0, 7);
    }

    document.querySelector('.clientText').innerHTML = clientName;
    document.querySelector('.countryText').innerHTML = country;
    document.querySelector('.projectText').innerHTML = project;
    document.querySelector('.roleText').innerHTML = role;
    document.querySelector('.businessSolutionText').innerHTML = businessSoulution;
    document.querySelector('.technologyText').innerHTML = technology;
    document.querySelector('.projectResText').innerHTML = projectRes;
    }

    const [result, getData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7258/api/DesignationMaster/GetActiveDesignation', {
      method:'GET',
      headers:{
        'content-type':'application/json',
      }
    }).then(res =>res.json())
    .then(res => getData(res))
  },[]);

  const[project,getProject] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7258/api/ProjectMaster', {
      method:'GET',
      headers:{
        'content-type':'application/json',
      }
    }).then(res =>res.json())
    .then(res => getProject(res))
  },[]);
  return (
    <>
      <div className="WorkExp">
        <form onSubmit={handleSubmit((data) => customFunction(data))} id="formWorkExp">
          <div className="topSection">
            <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={deleteContent}/>
            <input className="buttons" type="submit" name="mydetails" value="Save" />

            <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />

          </div>
          {workList.map((singlework, index) => (
            <div className="FormFeilds">


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="ClientDesc">Client Description:</label>
                <input {...register("client", { maxLength: { value: 40, message: "Only 40 characters are allowed" } })}
                  placeholder="Client Description" name="client" id="clientDesc" className="inputsWorkExp" />
              </div>
              {errors.client && <small className="Validation_we">{errors.client.message}</small>}

              <form>
                <div className="labelInputWorkExp">
                  <label className="labelWorkExp" for="Country">Country:</label>
                  <input {...register("country", {
                    maxLength: { value: 3, message: "Only 3 characters are allowed" },
                    pattern: { value: /^[A-Z]+$/, message: "Capital alphabets are allowed" }
                  })} placeholder="Country" name="country" id="country" className="inputsWorkExp" />
                </div>
              </form>
              {errors.country && <small className="Validation_we">{errors.country.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="Project">Project Name:</label>
                <div className="projectDropDown">
                  <select  name="project" id="project" {...register("project")}>
                  <option value="">Select Project</option>
                    {  
                      project.map(items => {
                        return(
                            <option>{items.projectName}</option>
                          
                          
                        );
                      })
                    }           
                  </select>
              </div>
              </div>
              {errors.project && <small className="Validation_we">{errors.project.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="role">Designation:</label>
                <div className="designationDropDown">
                  <select  name="designation" id="designation" {...register("designation")}>
                  <option value="">Select Designation</option>
                    {  
                      result.map(items => {
                        return(
                            <option>{items.designationName}</option>
                          
                          
                        );
                      })
                    }           
                  </select>
              </div>
              </div>

              <div className="labelInputWorkExp">
                <label className="labelWorkExp">Duration:</label>
                <div className="duration">
                  <span className="duration_start"><input className="ds"{...register("startdate")} type="date" name="startdate" /></span>
                  
                  <span className="duration_end"><input className="de"{...register("enddate")} type="date" name="enddate" /></span>

                  <span className='td'>
                <input type='checkbox'  id="tds" name="tilldate"  value='till date' {...register("tilldate")} ></input>
                  <label for='tds'>till date</label>
                  
                </span>

                </div>
                
                    

              </div>
              

             

              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="">Business Solution:</label>
                <input {...register("businessSoulution", { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Business Solution" name="businessSolution" id="businessSolution" className="inputsWorkExp" />
              </div>
              {errors.businessSoulution && <small className="Validation_we">{errors.businessSoulution.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="role">Technology</label>
                <select className="inputsWorkExp" name="technology" id="technology" {...register("technology")} multiple>
                  <option value="">Select...</option>
                  <option value="python">Python</option>
                  <option value="Java">java</option>
                  <option value="React">React</option>
                  <option value="sql">SQL</option>
                </select>
              </div>
              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="">Project Responsibilities:</label>
                <input {...register("projectRes", { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Project Responsibilities" name="projectRes" id="Responsibilities" className="inputsWorkExp" />
              </div>
              {errors.projectRes && <small className="Validation_we">{errors.projectRes.message}</small>}



              <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: '0.2rem',
                borderColor: '#000000',
                border: '1rem',
                marginRight: '60px'
              }} />

              {
                workList.length - 1 === index && workList.length < 3 &&

                <div className="footer">
                  <input className="button2" type="submit" name="WorkExp"
                    value="Add Work Experience"
                    onClick={handleServiceAdd} />
                </div>
              }

            </div>
          ))}

        </form>
      </div>
    </>

  );
}

