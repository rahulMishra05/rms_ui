import React from 'react'
import { useState, useEffect } from "react";
// import Calendar from 'react-calendar'
import { useForm,useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar'
// import TextField from '@material-ui/core/TextField';
import '../../css/WorkExp.css'
import axios from 'axios';
export default function WorkExp(props) {
  // console.log(props.formfields)
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState("");

  // const deleteContent = () => {
  //   document.querySelector("div.labelInputWorkExp input[name='client']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='country']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='project']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='businessSolution']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='projectRes']").value = "";
  // }

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/home/skills");
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
    

    

      let workData=[];
      for(var i=0;i<data.test.length;i++){
        if(data.test[i].tilldate==today)
        {
          data.test[i].enddate=today;
          //document.querySelector('.durationText').innerHTML = data.test[i].startdate.slice(0, 7) + " - " + data.test[i].tilldate;
        }
       else if (data.test[i].startdate === data.test[i].enddate) {
          window.alert("Start date and end date are same");
          continue;
        }
        else if (data.test[i].startdate > data.test[i].enddate) {
          window.alert("Start and End date conflicts");
          continue;
        }

        
          document.querySelector('.workHistoryDiv .innerWorkHistoryDiv').innerHTML+='<div className="innerWorkDiv"><div className="client_country d-flex"><p className="clientText">Client:' + data.test[i].client + '</p><p className="countryText">&nbsp; &#127988;' + data.test[i].country+'  </p></div><p className="projectText">Project:  '+ data.test[i].project+ '</p><p className="roleText">Role: '+ data.test[i].role +'</p><p className="durationText">'+ data.test[i].startdate.slice(0, 10) + ' to ' + data.test[i].enddate.slice(0, 10) + '</p><p className="businessSolutionText">Business Solution:' +  data.test[i].businessSolution + '</p><p className="technologyText">&#8226;'+ data.test[i].technology + '</p><p className="projectResText">'+  data.test[i].projectRes + '</p></div>'
          workData.push(
            {
            
              clientDescription: data.test[i].client,
              country:data.test[i].country,
              projectName: data.test[i].project,
              projectRole: data.test[i].designation,
              startDate: "2022-04-22T08:11:06.418Z",
              endDate: "2022-04-22T08:11:06.418Z",
              businessSolution: data.test[i].businessSolution,
              technologyStack: data.test[i].tech,
              projectResponsibilities: data.test[i].projectRes
            }
          )
     }
  
     const addWorkExp = (e) => {
      e.preventDefault();
      const allowedNodeNames = ['INPUT', 'TEXTAREA','SELECT'];
      const workExpDiv = e.target.previousElementSibling.children[0].cloneNode(true);
      Array.from(workExpDiv.children).forEach((current, index) => {
        if(current.nodeName === 'DIV'){
          Array.from(current.children).forEach((current) => {
            if(allowedNodeNames.includes(current.nodeName))
              current.value = '';
          })
        }				
      })		
      e.target.previousElementSibling.appendChild(workExpDiv);
    }

    

    var rIdWork = sessionStorage.getItem('resumeId');
    var rStatusWork = sessionStorage.getItem('resumeStatus');
    var WorkObj = {
      resumeId: rIdWork,
      resumeTitle: "Resume My",
      resumeStatus: rStatusWork,
      creationDate: "2022-04-13T06:33:42.151Z",
      updationDate: "2022-04-13T06:33:42.151Z",
      workExperience: workData
  }
  console.log(WorkObj);
  axios.put(`https://localhost:7258/api/Resume/${rIdWork}`,WorkObj);
}

  const [result, getData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7258/api/DesignationMaster/GetActiveDesignation', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => getData(res))
  }, []);

  const [project, getProject] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7258/api/ProjectMaster/GetActiveProjects', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => getProject(res))
  }, []);

  const [tech, getTech] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7258/api/TechSatckMaster', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => getTech(res))
  }, []);
  console.log(tech);
  const [techval, getTechval] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7258/api/TechStackValues/GetActiveTechs', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => getTechval(res))
  }, []);

  const { register, control, reset, handleSubmit,formState: { errors } } = useForm({

    defaultValues: {
      test: [{ client: "", country: "" , project:"", role:"",startdate:"",
      enddate:"", tilldate:"", businessSolution:"", technology:"", projectRes:"" 
    }]
    }
    });
      
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  
  var today = new Date().toISOString().slice(0, 10);

  const [count, setCount]=useState(0);
  return (
    <>
    <form onSubmit={handleSubmit((data) => customFunction(data))} id="formWorkExp">

      <div className="WorkExp">
          <div className="topSection">
          <input className="buttons" type="button"  value="Cancel" onClick={() => {
							reset();
						}}/>            
            <input className="buttons" type="submit" name="mydetails" value="Save" />

            <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />

          </div>
          {fields.map((singlework, index) => {
            return (
            <div className="FormFeilds">


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="ClientDesc">Client Description:</label>
                <input {...register(`test.${index}.client`, { maxLength: { value: 40, 
                message: "Only 40 characters are allowed" } })}
                  placeholder="Client Description"  id="clientDesc" className="inputsWorkExp" />
              </div>
              {errors.client && <small className="Validation_we">{errors.client.message}</small>}

              <form>
                <div className="labelInputWorkExp">
                  <label className="labelWorkExp" for="Country">Country:</label>
                  <input {...register(`test.${index}.country`, {
                    maxLength: { value: 3, message: "Only 3 characters are allowed" },
                    pattern: { value: /^[A-Z]+$/, message: "Capital alphabets are allowed" }
                  })} placeholder="Country : First 3 Alphabets (All Caps) !"  id="country" className="inputsWorkExp" />
                </div>
              </form>
              {errors.country && <small className="Validation_we">{errors.country.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="Project">Project Name:</label>
                <div className="projectDropDown">
                  <select id="project"  {...register(`test.${index}.project`, { maxLength: { value: 40, message: "40 Characters are allowed" } })} >
                    <option value="">Select Project</option>
                    {
                      project.map(items => {
                        return (
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
                  <select  id="designation" {...register(`test.${index}.role`)}>
                    <option value="">Select Designation</option>
                    {
                      result.map(items => {
                        return (
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
                  <span className="duration_start"><input className="ds"{...register(`test.${index}.startdate`)} type="date"  /></span>

                  <span className="duration_end"><input className="de"{...register(`test.${index}.enddate`)} type="date"  /></span>

                  <span className='td'>
                    <input type='checkbox' id="tds"  value={today} {...register(`test.${index}.tilldate`)} ></input>
                    <label for='tds'>till date</label>

                  </span>

                </div>



              </div>




              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="">Business Solution:</label>
                <input {...register(`test.${index}.businessSolution`, { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Business Solution"  id="businessSolution" className="inputsWorkExp" />
              </div>
              {errors.businessSoulution && <small className="Validation_we">{errors.businessSoulution.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="role">Technology</label>
                <div className="techDropDown" >
                  <select name="tech" id="tech" {...register(`test.${index}.technology`)}> 
                    <option value="">Select Technology</option>
                    {
                      techval.map(items => {
                        return (
                          <option>{items.valueName}</option>
                        );
                      })
                    }


                  </select>
                </div>
              </div>
              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="">Project Responsibilities:</label>
                <input {...register(`test.${index}.projectRes`, { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Project Responsibilities"  id="Responsibilities" className="inputsWorkExp" />
              </div>
              {errors.projectRes && <small className="Validation_we">{errors.projectRes.message}</small>}
              
              <a href="" className="deleteButton" type="button" onClick={(e) => {e.preventDefault(); 
                      remove(index);
                      setCount(count-1);
                      }}> Delete </a>


              {/* <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: '0.2rem',
                borderColor: '#000000',
                border: '1rem',
                marginRight: '60px'
              }} /> */}

              

            </div>
          );

          })}
          </div>
          {
              // fields.length - 1 === index && fields.length < 3 
              count<2 &&
              <div>
                  
  
                  <a href="" className="button2 addMorebtn" onClick={(e) => {
                    e.preventDefault();
                    append(); 
                    setCount(count+1);
                    }}>&#43; Add More Work Exp</a>
  
              </div>

             


              
            }
        </form>
      
    </>

  );
}

