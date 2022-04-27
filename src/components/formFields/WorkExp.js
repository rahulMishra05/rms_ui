import React from 'react'
import { useState } from "react";
// import Calendar from 'react-calendar'
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../../css/Template.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar'
// import TextField from '@material-ui/core/TextField';
import '../../css/WorkExp.css'
export default function WorkExp(props) {

  // console.log(props.formfields)
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState("");
  

  // const deleteContent = () =>{
  //   document.querySelector("div.labelInputWorkExp input[name='client']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='country']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='project']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='businessSolution']").value = "";
  //   document.querySelector("div.labelInputWorkExp input[name='projectRes']").value = "";
  // }

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/skills");
  }
  const [workList, setworkList] = useState([{ work: "" }]);

  const handleServiceAdd = () => {
    setworkList([...workList, { work: "" }]);
  };

  

  const customFunction = (d) => {
    // const projectRespString = document.querySelectorAll('.inputsWorkExp');
		// const projectRespList = [];
		// projectRespString.forEach((ele) => {
		// 	projectRespList.push(ele.value);
		// });
    // console.log(d);
    sessionStorage.setItem("workexp", JSON.stringify(d))
    // console.log(sessionStorage.getItem("workexp"));
    const data = JSON.parse(sessionStorage.getItem('workexp'))
    // console.log(sessionStorage.key(0))
    console.log(data)
    
    // const clientName = data.test[i].client;
    // // console.log(clientName);
    // const country = data.test[i].country;
    // const project = data.project;
    // const role = data.role;
    // const businessSolution = data.businessSolution;
    // const technology = data.technology;
    // const projectRes = data.projectRes;
    // const Startdate = data.startdate;
    // const Enddate = data.enddate;
    // const td=data.tilldate;
    
    // console.log(Startdate);
  //   if(data.test[i].tilldate=="tilldate")
  //   {
  //     document.querySelector('.durationText').innerHTML = data.startdate.slice(0, 7) + " - " + data.tilldate;
  //   }
  //  else if (data.startdate === data.enddate) {
  //     window.alert("Start date and end date are same");
  //   }
  //   else if (data.startdate > data.enddate) {
  //     window.alert("Start and End date conflicts");
  //   }
  //   else {
  //     document.querySelector('.durationText').innerHTML = data.startdate.slice(0, 7) + " to " + data.enddate.slice(0, 7);
  //   }
    // let workData=[];
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

        // else {
        //   document.querySelector('.durationText').innerHTML = data.test[i].startdate.slice(0, 7) + " to " + data.test[i].enddate.slice(0, 7);
        // }
          // document.querySelector('.clientText').innerHTML += "Client: "+ data.test[i].client + " &nbsp; &nbsp; &nbsp;";         
          // document.querySelector('.countryText').innerHTML += "&nbsp; &#127988; "+ data.test[i].country ;      
          // document.querySelector('.projectText').innerHTML += "Project: " + data.test[i].project ;         
          // document.querySelector('.roleText').innerHTML += "Role: "+ data.test[i].role ;          
          // document.querySelector('.businessSolutionText').innerHTML +="Business Solution: "+  data.test[i].businessSolution ;          
          // document.querySelector('.technologyText').innerHTML += "&#8226;"+ data.test[i].technology ;
          // document.querySelector('.projectResText').innerHTML +=""+  data.test[i].projectRes ;
          document.querySelector('.workHistoryDiv .innerWorkHistoryDiv').innerHTML+='<div className="innerWorkDiv"><div className="client_country d-flex"><p className="clientText">Client:' + data.test[i].client + '</p><p className="countryText">&nbsp; &#127988;' + data.test[i].country+'  </p></div><p className="projectText">Project:  '+ data.test[i].project+ '</p><p className="roleText">Role: '+ data.test[i].role +'</p><p className="durationText">'+ data.test[i].startdate.slice(0, 10) + ' to ' + data.test[i].enddate.slice(0, 10) + '</p><p className="businessSolutionText">Business Solution:' +  data.test[i].businessSolution + '</p><p className="technologyText">&#8226;'+ data.test[i].technology + '</p><p className="projectResText">'+  data.test[i].projectRes + '</p></div>'
          // document.querySelector('.workHistoryDiv').style.textAlign="center";
          // workData.push(
          //   {

          //   }
          // )
     }
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

    const [count, setCount]=useState(0);
    var today = new Date().toISOString().slice(0, 10);

  return (
    <>
    <form onSubmit={handleSubmit((data) => customFunction(data))} id="formWorkExp">
      <div className="WorkExp">
        
          <div className="topSection">
            <input className="buttons" type="button"  value="Cancel" onClick={() => {
							reset();
						}}/>
            <input className="buttons" type="submit"  value="Save" />
            
            <input className="buttons" type="button"  value="->" onClick={nextPage} />

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
                  })} placeholder="Country" id="country" className="inputsWorkExp" />
                </div>
              </form>
              {errors.country && <small className="Validation_we">{errors.country.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="Project">Project Name:</label>
                <input {...register(`test.${index}.project`, { maxLength: { value: 40, message: "40 Characters are allowed" } })} placeholder="Project Name" id="projectName" className="inputsWorkExp" />
              </div>
              {errors.project && <small className="Validation_we">{errors.project.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="role">Role:</label>
                <select className="inputsWorkExp"  id="role" {...register(`test.${index}.role`)} multiple>
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
                  <span className="duration_start"><input className="ds"{...register(`test.${index}.startdate`)} type="date"  /></span>
                  
                  <span className="duration_end"><input className="de"{...register(`test.${index}.enddate`)} type="date"  /></span>

                  <span className='td'>
                <input type='checkbox'  id="tds" name="tilldate"  value={today} {...register(`test.${index}.tilldate`)} ></input>
                  <label for='tds'>till date</label>
                  
                </span>
                </div>
                
              </div>
              
              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="">Business Solution:</label>
                <textarea {...register(`test.${index}.businessSolution`, { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Business Solution"  id="businessSolution" className="inputsWorkExp" />
              </div>
              {errors.businessSolution && <small className="Validation_we">{errors.businessSolution.message}</small>}


              <div className="labelInputWorkExp">
                <label className="labelWorkExp" for="role">Technology</label>
                <select className="inputsWorkExp"  id="technology" {...register(`test.${index}.technology`)} multiple>
                  <option value="">Select...</option>
                  <option value="python">Python</option>
                  <option value="Java">java</option>
                  <option value="React">React</option>
                  <option value="sql">SQL</option>
                </select>
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
              <div >
                  
  
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







// // console.log(props.formfields)
// const { register, handleSubmit, formState: { errors } } = useForm();
// // const [data, setData] = useState("");


// const deleteContent = () =>{
//   document.querySelector("div.labelInputWorkExp input[name='client']").value = "";
//   document.querySelector("div.labelInputWorkExp input[name='country']").value = "";
//   document.querySelector("div.labelInputWorkExp input[name='project']").value = "";
//   document.querySelector("div.labelInputWorkExp input[name='businessSolution']").value = "";
//   document.querySelector("div.labelInputWorkExp input[name='projectRes']").value = "";
// }

// const navigate = useNavigate();
// const nextPage = () => {
//   navigate("/skills");
// }
// const [workList, setworkList] = useState([{ work: "" }]);

// const handleServiceAdd = () => {
//   setworkList([...workList, { work: "" }]);
// };



// const customFunction = (d) => {
//   // const projectRespString = document.querySelectorAll('.inputsWorkExp');
//   // const projectRespList = [];
//   // projectRespString.forEach((ele) => {
//   // 	projectRespList.push(ele.value);
//   // });

//   sessionStorage.setItem("workexp", JSON.stringify(d))
//   const data = JSON.parse(sessionStorage.getItem('workexp'))
//   // console.log(sessionStorage.key(0))
//   // console.log(data)
//   const clientName = data.client;
//   const country = data.country;
//   const project = data.project;
//   const role = data.role;
//   const businessSoulution = data.businessSoulution;
//   const technology = data.technology;
//   const projectRes = data.projectRes;
//   const Startdate = data.startdate;
//   const Enddate = data.enddate;
//   const td=data.tilldate;

//   if(td=="till date")
//   {
//     document.querySelector('.durationText').innerHTML = Startdate.slice(0, 7) + " - " + td;
//   }
//  else if (Startdate === Enddate) {
//     window.alert("Start date and end date are same");
//   }
//   else if (Startdate > Enddate) {
//     window.alert("Start and End date conflicts");
//   }
//   else {
//     document.querySelector('.durationText').innerHTML = Startdate.slice(0, 7) + " to " + Enddate.slice(0, 7);
//   }

//   document.querySelector('.clientText').innerHTML = "Client: "+ clientName + " &nbsp; &nbsp; &nbsp;";
//   document.querySelector('.countryText').innerHTML = "&nbsp; &#127988 "+ country;
//   document.querySelector('.projectText').innerHTML = "Project: " + project;
//   document.querySelector('.roleText').innerHTML = "Role: "+ role;
//   document.querySelector('.businessSolutionText').innerHTML ="Business Solution: "+  businessSoulution;
//   document.querySelector('.technologyText').innerHTML = "&#8226;"+ technology;
//   document.querySelector('.projectResText').innerHTML =""+  projectRes;
//   }
  
//   const addWorkExp = (e) => {
//     e.preventDefault();
//     const allowedNodeNames = ['INPUT', 'TEXTAREA','SELECT'];
//     const workExpDiv = e.target.previousElementSibling.children[0].cloneNode(true);
//     Array.from(workExpDiv.children).forEach((current, index) => {
//       if(current.nodeName === 'DIV'){
//         Array.from(current.children).forEach((current) => {
//           if(allowedNodeNames.includes(current.nodeName))
//             current.value = '';
//         })
//       }				
//     })		
//     e.target.previousElementSibling.appendChild(workExpDiv);
//   }

// // return (
// //   <>
// //   <form onSubmit={handleSubmit((data) => customFunction(data))} id="formWorkExp">
// //     <div className="WorkExp">
      
// //         <div className="topSection">
// //           <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={deleteContent}/>
// //           <input className="buttons" type="submit" name="mydetails" value="Save" />
          
// //           <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />

// //         </div>
// //         {workList.map((singlework, index) => (
// //           <div className="FormFeilds">


// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp" for="ClientDesc">Client Description:</label>
// //               <input {...register("client", { maxLength: { value: 40, message: "Only 40 characters are allowed" } })}
// //                 placeholder="Client Description" name="client" id="clientDesc" className="inputsWorkExp" />
// //             </div>
// //             {errors.client && <small className="Validation_we">{errors.client.message}</small>}

// //             <form>
// //               <div className="labelInputWorkExp">
// //                 <label className="labelWorkExp" for="Country">Country:</label>
// //                 <input {...register("country", {
// //                   maxLength: { value: 3, message: "Only 3 characters are allowed" },
// //                   pattern: { value: /^[A-Z]+$/, message: "Capital alphabets are allowed" }
// //                 })} placeholder="Country" name="country" id="country" className="inputsWorkExp" />
// //               </div>
// //             </form>
// //             {errors.country && <small className="Validation_we">{errors.country.message}</small>}


// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp" for="Project">Project Name:</label>
// //               <input {...register("project", { maxLength: { value: 40, message: "40 Characters are allowed" } })} placeholder="Project Name" name="project" id="projectName" className="inputsWorkExp" />
// //             </div>
// //             {errors.project && <small className="Validation_we">{errors.project.message}</small>}


// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp" for="role">Role:</label>
// //               <select className="inputsWorkExp" name="role" id="role" {...register("role")} multiple>
// //                 <option value="">Select...</option>
// //                 <option value="business analyst">Business Analyst</option>
// //                 <option value="developer">Developer</option>
// //                 <option value="designer">Designer</option>
// //                 <option value="qa">QA</option>
// //               </select>
// //             </div>

// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp">Duration:</label>
// //               <div className="duration">
// //                 <span className="duration_start"><input className="ds"{...register("startdate")} type="date" name="startdate" /></span>
                
// //                 <span className="duration_end"><input className="de"{...register("enddate")} type="date" name="enddate" /></span>

// //                 <span className='td'>
// //               <input type='checkbox'  id="tds" name="tilldate"  value='till date' {...register("tilldate")} ></input>
// //                 <label for='tds'>till date</label>
                
// //               </span>
// //               </div>
              
// //             </div>
            
// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp" for="">Business Solution:</label>
// //               <input {...register("businessSoulution", { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Business Solution" name="businessSolution" id="businessSolution" className="inputsWorkExp" />
// //             </div>
// //             {errors.businessSoulution && <small className="Validation_we">{errors.businessSoulution.message}</small>}


// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp" for="role">Technology</label>
// //               <select className="inputsWorkExp" name="technology" id="technology" {...register("technology")} multiple>
// //                 <option value="">Select...</option>
// //                 <option value="python">Python</option>
// //                 <option value="Java">java</option>
// //                 <option value="React">React</option>
// //                 <option value="sql">SQL</option>
// //               </select>
// //             </div>
// //             <div className="labelInputWorkExp">
// //               <label className="labelWorkExp" for="">Project Responsibilities:</label>
// //               <input {...register("projectRes", { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Project Responsibilities" name="projectRes" id="Responsibilities" className="inputsWorkExp" />
// //             </div>
// //             {errors.projectRes && <small className="Validation_we">{errors.projectRes.message}</small>}



// //             {/* <hr style={{
// //               color: '#000000',
// //               backgroundColor: '#000000',
// //               height: '0.2rem',
// //               borderColor: '#000000',
// //               border: '1rem',
// //               marginRight: '60px'
// //             }} /> */}

// //           {
// //             workList.length - 1 === index && workList.length < 3 &&
            
// //             <a href="" className="button2" onClick = {addWorkExp}>&#43; Add More Work Exp</a>
// //             // <div className="footer">
// //             //   <input className="button2" type="submit" name="WorkExp"
// //             //     value="Add Work Experience"
// //             //     onClick = {addWorkExp}
// //             //     />
// //             // </div>
// //             // onClick={handleServiceAdd} 
// //           }

            
// //           </div>

          

// //         ))}
// //       </div>
      

// //     </form>
    
// //   </>

//  );







// import React from 'react'
// import { useState } from "react";
// // import Calendar from 'react-calendar'
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Calendar from 'react-calendar'
// // import TextField from '@material-ui/core/TextField';
// import '../../css/WorkExp.css'
// export default function WorkExp(props) {
//   // console.log(props.formfields)
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   // const [data, setData] = useState("");
  

//   const deleteContent = () =>{
//     document.querySelector("div.labelInputWorkExp input[name='client']").value = "";
//     document.querySelector("div.labelInputWorkExp input[name='country']").value = "";
//     document.querySelector("div.labelInputWorkExp input[name='project']").value = "";
//     document.querySelector("div.labelInputWorkExp input[name='businessSolution']").value = "";
//     document.querySelector("div.labelInputWorkExp input[name='projectRes']").value = "";
//   }

//   const navigate = useNavigate();
//   const nextPage = () => {
//     navigate("/skills");
//   }
//   const [workList, setworkList] = useState([{ work: "" }]);

//   const handleServiceAdd = () => {
//     setworkList([...workList, { work: "" }]);
//   };

//   const addWorkExp = (e) => {
// 		e.preventDefault();
// 		const allowedNodeNames = ['INPUT', 'TEXTAREA','SELECT'];
// 		const workExpDiv = e.target.previousElementSibling.children[0].cloneNode(true);
// 		Array.from(workExpDiv.children).forEach((current, index) => {
// 			if(current.nodeName === 'DIV'){
// 				Array.from(current.children).forEach((current) => {
// 					if(allowedNodeNames.includes(current.nodeName))
// 						current.value = '';
// 				})
// 			}				
// 		})		
// 		e.target.previousElementSibling.appendChild(workExpDiv);
// 	}

//   const customFunction = (d) => {
//     sessionStorage.setItem("workexp", JSON.stringify(d))
//     const data = JSON.parse(sessionStorage.getItem('workexp'))
//     console.log(sessionStorage.key(0))
//     console.log(data)
//     const clientName = data.client;
//     const country = data.country;
//     const project = data.project;
//     const role = data.role;
//     const businessSoulution = data.businessSoulution;
//     const technology = data.technology;
//     const projectRes = data.projectRes;
//     const Startdate = data.startdate;
//     const Enddate = data.enddate;
//     const td=data.tilldate;

//     if(td=="till date")
//     {
//       document.querySelector('.durationText').innerHTML = Startdate.slice(0, 7) + " - " + td;
//     }
//    else if (Startdate === Enddate) {
//       window.alert("Start date and end date are same");
//     }
//     else if (Startdate > Enddate) {
//       window.alert("Start and End date conflicts");
//     }
//     else {
//       document.querySelector('.durationText').innerHTML = Startdate.slice(0, 7) + " to " + Enddate.slice(0, 7);
//     }

//     document.querySelector('.clientText').innerHTML = clientName;
//     document.querySelector('.countryText').innerHTML = country;
//     document.querySelector('.projectText').innerHTML = project;
//     document.querySelector('.roleText').innerHTML = role;
//     document.querySelector('.businessSolutionText').innerHTML = businessSoulution;
//     document.querySelector('.technologyText').innerHTML = technology;
//     document.querySelector('.projectResText').innerHTML = projectRes;
//     }


//   return (
//     <>
//       <div className="WorkExp">
//         <form onSubmit={handleSubmit((data) => customFunction(data))} id="formWorkExp">
//           <div className="topSection">
//             <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={deleteContent}/>
//             <input className="buttons" type="submit" name="mydetails" value="Save" />
            
//             <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />

//           </div>
//           {workList.map((singlework, index) => (
//             <div className="FormFeilds">


//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp" for="ClientDesc">Client Description:</label>
//                 <input {...register("client", { maxLength: { value: 40, message: "Only 40 characters are allowed" } })}
//                   placeholder="Client Description" name="client" id="clientDesc" className="inputsWorkExp" />
//               </div>
//               {errors.client && <small className="Validation_we">{errors.client.message}</small>}

//               <form>
//                 <div className="labelInputWorkExp">
//                   <label className="labelWorkExp" for="Country">Country:</label>
//                   <input {...register("country", {
//                     maxLength: { value: 3, message: "Only 3 characters are allowed" },
//                     pattern: { value: /^[A-Z]+$/, message: "Capital alphabets are allowed" }
//                   })} placeholder="Country" name="country" id="country" className="inputsWorkExp" />
//                 </div>
//               </form>
//               {errors.country && <small className="Validation_we">{errors.country.message}</small>}


//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp" for="Project">Project Name:</label>
//                 <input {...register("project", { maxLength: { value: 40, message: "40 Characters are allowed" } })} placeholder="Project Name" name="project" id="projectName" className="inputsWorkExp" />
//               </div>
//               {errors.project && <small className="Validation_we">{errors.project.message}</small>}


//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp" for="role">Role:</label>
//                 <select className="inputsWorkExp" name="role" id="role" {...register("role")} multiple>
//                   <option value="">Select...</option>
//                   <option value="business analyst">Business Analyst</option>
//                   <option value="developer">Developer</option>
//                   <option value="designer">Designer</option>
//                   <option value="qa">QA</option>
//                 </select>
//               </div>

//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp">Duration:</label>
//                 <div className="duration">
//                   <span className="duration_start"><input className="ds"{...register("startdate")} type="date" name="startdate" /></span>
                  
//                   <span className="duration_end"><input className="de"{...register("enddate")} type="date" name="enddate" /></span>

//                   <span className='td'>
//                 <input type='checkbox'  id="tds" name="tilldate"  value='till date' {...register("tilldate")} ></input>
//                   <label for='tds'>till date</label>
                  
//                 </span>

//                 </div>
                
                    

//               </div>
              

             

//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp" for="">Business Solution:</label>
//                 <input {...register("businessSoulution", { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Business Solution" name="businessSolution" id="businessSolution" className="inputsWorkExp" />
//               </div>
//               {errors.businessSoulution && <small className="Validation_we">{errors.businessSoulution.message}</small>}


//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp" for="role">Technology</label>
//                 <select className="inputsWorkExp" name="technology" id="technology" {...register("technology")} multiple>
//                   <option value="">Select...</option>
//                   <option value="python">Python</option>
//                   <option value="Java">java</option>
//                   <option value="React">React</option>
//                   <option value="sql">SQL</option>
//                 </select>
//               </div>
//               <div className="labelInputWorkExp">
//                 <label className="labelWorkExp" for="">Project Responsibilities:</label>
//                 <input {...register("projectRes", { maxLength: { value: 100, message: "100 Characters are allowed" } })} placeholder="Project Responsibilities" name="projectRes" id="Responsibilities" className="inputsWorkExp" />
//               </div>
//               {errors.projectRes && <small className="Validation_we">{errors.projectRes.message}</small>}



//               <hr style={{
//                 color: '#000000',
//                 backgroundColor: '#000000',
//                 height: '0.2rem',
//                 borderColor: '#000000',
//                 border: '1rem',
//                 marginRight: '60px'
//               }} />

//               {
//                 workList.length - 1 === index && workList.length < 3 &&

//                 <div className="footer">
//                   <input className="button2" type="submit" name="WorkExp"
//                     value="Add Work Experience"
//                     onClick={handleServiceAdd} />
//                 </div>
//               }

//             </div>
//           ))}

//         </form>
//       </div>
//     </>

//   );
// }














