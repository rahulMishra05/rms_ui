import { useState } from "react";
import { useForm } from "react-hook-form";
import '../resumeBuilder.css'
import '../../css/MyDetails.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios, {setTerm} from "axios";
 import { useNavigate } from "react-router-dom";
export default function MyDetails(props) {
  // console.log(props.formfields)
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
 const navigate = useNavigate();
   const nextPage = () => {
   navigate("/aboutme");
 }

  const customFunction = (d) => {
    sessionStorage.setItem("mydetails", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('mydetails'))
    console.log(sessionStorage.key(0))
    console.log(data)
    const name = data.name;
    const exp = data.experience;
    const roles = data.role;
    document.querySelector(".nameHead").innerHTML = name;
    document.querySelector(".expLabel").innerHTML = exp;
    document.querySelector(".roleLabel").innerHTML = roles;

    axios.post('http://localhost:7258/api/user', {

      userName: d.name,
      userRole: d.role,
      // exp: d.experience,
      // image: d.image,
      // userId: 3
    })

      .then(res => {
        // console.log(res);
        // console.log(res.data);
        sessionStorage.setItem("userId", res.data);

      })

    setTerm(5);
  }

  return (
    <>
      <div className="detailsSection">
        <form onSubmit={handleSubmit((data) => customFunction(data))} id="formMyDetails">
          <div className="topSectionMyDetails">
            <input className="buttons" type="button" name="mydetails" value="Cancel" />
            <input className="buttons" type="submit" name="mydetails" value="Save" />
            <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
          </div>
          <div className="bottomSection">
            <div className="circle"></div>


            <div className="labelInput">
              <label className="labelMyDetails" for="name">Name:</label>
              <input {...register("name")} placeholder="Your name" name="name" id="name" className="inputs" />
            </div>




            <div className="labelInput">

              <label className="labelMyDetails" for="role">Role:</label>

              <input {...register("role")} className="inputs" name="role" id="name" placeholder="Enter role" />

            </div>

            <div className="labelInput">
              <label className="labelMyDetails" for="experience">Experience:</label>
              <input {...register("experience")} placeholder="Total Experience" name="experience" id="experience" className="inputs" />
            </div>
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