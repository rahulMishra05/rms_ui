import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import '../resumeBuilder.css'
import '../../css/MyDetails.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios, { setTerm } from "axios";
// import Dropdown from 'react-bootstrap/Dropdown';
// import Popper from "popper";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import logo from '../../images/green-tick.gif';
import { faBridgeLock } from "@fortawesome/free-solid-svg-icons";

export default function MyDetails(props) {
  // console.log(props.formfields)
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/aboutme");
  }

  const deleteContent = () => {
    document.querySelector("div.labelInput input[name='name']").value = "";
    document.querySelector("div.labelInput input[name='role']").value = "";
    document.querySelector("div.labelInput input[name='experience']").value = "";
  }
  
  var responseStatus;

  const customFunction = (d) => {
    sessionStorage.setItem("mydetails", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('mydetails'))
    console.log(sessionStorage.key(0))
    // console.log(data)
    const name = data.name;
    const exp = data.experience;
    const roles = data.role;
    document.querySelector(".nameHead").innerHTML = name;
    document.querySelector(".expLabel").innerHTML = exp + " Years";
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
          role: d.role
        }
      ]
    })
      .then(res => {
        // console.log(res)
        sessionStorage.setItem("resumeId", res.data['resumeId']);
        sessionStorage.setItem("resumeStatus", res.data['resumeStatus']);

        if (res.status == 200) {
          saveSuccess();
        }
        else {
          saveError();
        }
      })
  }

  const saveSuccess = () => {
    // console.log("Yes! it worked.....");
    // alert("Saved!!")
    let result = document.querySelector('.greenTick');
    
    result.style.display = "flex";
  }

  const saveError = () => {

  }
  const roleList = [];
  // const getRoles = (r) => {
  //   const axios = require('axios');

  //   axios.get('https://localhost:7258/api/RoleMaster/GetActiveRoles').then(res => {roleList.push(res.data.roleName) });

  // }
  // console.log(roleList);

  const [result, getData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7258/api/RoleMaster/GetActiveRoles', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => getData(res))
  }, []);



  return (
    <>
      <div className="detailsSection">
        <form onSubmit={handleSubmit((data) => customFunction(data))} id="formMyDetails">
          <div className="topSectionMyDetails">
            <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={deleteContent} />
            <input className="buttons" type="submit" name="mydetails" value="Save" />
            <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
          </div>
          <div className="bottomSection">
            <div className="circle"></div>

            <form>
              <div className="labelInput">
                <label className="labelMyDetails" for="name">Name:</label>
                <input {...register("name", {
                  required: true, maxLength: { value: 20, message: "Only 20 Charcters are allowed" }
                  , pattern: { value: (/^[A-Za-z ]+$/), message: "Alphabets are allowed" }
                })} placeholder="Your name: Characters Only!" name="name" id="name" className="inputs" />
              </div>
            </form>
            {errors.name && <small className="Validation">{errors.name.message}</small>}


            <div className="labelInput">

              <label className="labelMyDetails" for="role">Role:</label>

              <div className="role_dropdown">
                <select name="role" id="role" {...register("role")}>
                  <option value="">Select Role</option>
                  {
                    result.map(items => {
                      return (
                        <option>{items.roleName}</option>


                      );
                    })
                  }
                </select>
              </div>
            </div>
            <form>
              <div className="labelInput">
                <label className="labelMyDetails" for="experience">Experience:</label>
                <input {...register("experience", {
                  required: true, maxLength: { value: 2, message: "Maximum 2 digits" },
                  pattern: { value: /^[0-9]*$/, message: "Only numbers are allowed" }
                })}
                  placeholder="Experience: 2 Numeric Digits Only!" name="experience" id="experience" className="inputs" />
              </div>

            </form>
            {errors.experience && <small className="Validation">{errors.experience.message}</small>}



          </div>
        </form>

      </div>


      {/*  Save Animation */  }

      <div className="greenTick">
      <img src={logo} alt="loading..." />
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