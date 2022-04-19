import { useState } from "react";
import { useForm } from "react-hook-form";
import '../resumeBuilder.css'
import '../../css/MyDetails.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios, {setTerm} from "axios";
 import { useNavigate } from "react-router-dom";

export default function MyDetails(props) {
  // console.log(props.formfields)
  const { register, handleSubmit,formState:{errors} } = useForm();
  // const [data, setData] = useState("");
 const navigate = useNavigate();
   const nextPage = () => {
   navigate("/aboutme");
 }

  const deleteContent = () =>{
    document.querySelector("div.labelInput input[name='name']").value = "";
    document.querySelector("div.labelInput input[name='role']").value = "";
    document.querySelector("div.labelInput input[name='experience']").value = "";
  }

  const customFunction = (d) => {
    sessionStorage.setItem("mydetails", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('mydetails'))
    console.log(sessionStorage.key(0))
    // console.log(data)
    const name = data.name;
    const exp = data.experience;
    const roles = data.role;
    document.querySelector(".nameHead").innerHTML = name;
    document.querySelector(".expLabel").innerHTML = exp+" Years";
    document.querySelector(".roleLabel").innerHTML = roles;

    const dateTime = new Date();

    const todayDate = JSON.stringify(new Date());
    const updateDate = JSON.stringify(new Date());

    axios.post('https://localhost:7258/api/Resume', {

      resumeId: 0,
      resumeTitle: "Date Test",

      resumeStatus: "Draft",

      creationDate: "2022-04-13T06:33:42.15",
      updationDate: "2022-04-13T06:33:42.15",

      myDetails: [
        {
          profilePicture: "",
          totalExp: d.experience,
          userName: d.name,
          userRole: d.role
        }
      ]
    })

      .then(res => {
        // console.log(res);
        sessionStorage.setItem("resumeId", res.data['resumeId']);
        sessionStorage.setItem("resumeStatus", res.data['resumeStatus']);

      })

    // setTerm(5);
  }

  return (
    <>
      <div className="detailsSection">
        <form onSubmit={handleSubmit((data) => customFunction(data))} id="formMyDetails">
          <div className="topSectionMyDetails">
            <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={deleteContent}/>
            <input className="buttons" type="submit" name="mydetails" value="Save" />
            <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
          </div>
          <div className="bottomSection">
            <div className="circle"></div>

            <form>
            <div className="labelInput">
              <label className="labelMyDetails" for="name">Name:</label>
              <input {...register("name",{required:true,maxLength:{value:20,message:"Only 20 Charcters are allowed"}
            ,pattern:{value:(/^[A-Za-z ]+$/),message:"Alphabets are allowed"}})} placeholder="Your name: Characters Only!" name="name" id="name" className="inputs" />
            </div>
            </form>
            {errors.name && <small className="Validation">{errors.name.message}</small>}
            




            <div className="labelInput">

              <label className="labelMyDetails" for="role">Role:</label>

              <input {...register("role")} className="inputs" name="role" id="name" placeholder="Enter role" />

            </div>

            <form>
            <div className="labelInput">
              <label className="labelMyDetails" for="experience">Experience:</label>
              <input {...register("experience",{required:true,maxLength:{value:2,message:"Maximum 2 digits"},
             pattern:{value:/^[0-9]*$/,message:"Only numbers are allowed"}
               })}
           placeholder="Experience: 2 Numeric Digits Only!" name="experience" id="experience" className="inputs" />
            </div>

            </form>
            {errors.experience && <small className="Validation">{errors.experience.message}</small>}
            

            
            </div>
            </form>
            </div>
        
        
          
      </>
  );
}


// <div className="allform">
//   <form onSubmit={handleSubmit((data) => customFunction(data))}>
//     <div className="labelinput">
//       <label className="label" for="name">Name:</label>
//       <input className="input" {...register("name")} placeholder="Your name" name="name" id="name" />
//     </div>
//     <div className="labelinput">
//       <label className="label" for="role">Role:</label>
//       <select className="select" name="role" id="role" {...register("role")} multiple>
//       <option value="">Add Role</option>
//       <option value="business analyst">Business Analyst</option>
//       <option value="developer">Developer</option>
//       <option value="designer">Designer</option>
//       <option value="qa">QA</option>
//       </select>
//     </div>
//     <div className="labelinput">
//       <label className="label" for="experience">Experience:</label>
//       <input className="input" {...register("experience")} placeholder="Total Experience" name="experience" id="experience" />
//     </div>
//     <input className="save" type="submit" name="mydetails" value="Save" />
//   </form>
// </div>