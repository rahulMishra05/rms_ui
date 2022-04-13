import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/AboutMe.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AboutMe() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/skills");
  }

  const [keyList, setKeyList] = useState([{ key: "" }]);

  const handleServiceAdd = (e) => {
    e.preventDefault();
    const aboutMeDiv = e.target.previousElementSibling.children[0].cloneNode(true);

    aboutMeDiv.children[0].children[0].value = "";

    e.target.previousElementSibling.appendChild(aboutMeDiv)
  };

  const customFunction = (d) => {
    var resumeObject = sessionStorage.getItem("resume");
    // alert(resumeObject["ResumeId"]);
    // alert(resumeObject["ResumeStatus"]);
    // console.log(resumeObject.resumeId);
    // console.log(resumeObject.resumeStatus);
    // console.log(sessionStorage.getItem('resumeId'));
    // console.log(sessionStorage.getItem('resumeStatus'));
    var rIdAbout = sessionStorage.getItem('resumeId');
    var rStatusAbout = sessionStorage.getItem('resumeStatus');
    const addpoint = document.querySelectorAll('.textField1');
    const subaboutme = [];
    addpoint.forEach((e) => {
      subaboutme.push(e.value);
    })


    const something = subaboutme.map((current, index) => {

      return `<li key={index}>${current}</li>`;

    })
    sessionStorage.setItem("aboutme", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('aboutme'))
    const aboutMe = data.about;
    const subAboutMe = data.points;
    document.querySelector(".aboutMeText").innerHTML = aboutMe;
    document.querySelector(".subaboutme").innerHTML = `<ul>${something.join("")}</ul>`;

    var keyList = something.toString();
    console.log(keyList);

    axios.put(`https://localhost:7258/api/Resume/${rIdAbout}`, {
      
      resumeId: rIdAbout,
      resumeTitle: "Resume My",
      resumeStatus: rStatusAbout,
      creationDate: "2022-04-13T06:33:42.151Z",
      updationDate: "2022-04-13T06:33:42.151Z",

      aboutMes: [
        {
          mainDescription: d.about,
          keyPoints: d.keyList
        }
      ]
    })
  }
  return (
    <div className="aboutParentDiv">
      <form onSubmit={handleSubmit((data) => customFunction(data))} className="formAbout">
        <div className="topSectionAboutMe">
          <input className="buttons" type="button" name="mydetails" value="Cancel" />
          <input className="buttons" type="submit" name="mydetails" value="Save" />
          <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
        </div>

        <form>
          <div className="textareaDiv">
            <label className="labelAbout" for="aboutme">About Me:</label>
            <textarea {...register('about', { required: true, maxLength: { value: 200, message: "Only 200 characters are allowed" } })}
              name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10" className="textField"></textarea>
          </div>
        </form>
        {errors.about && <small className="Validation_am">{errors.about.message}</small>}


        <div className="bulletPoints">

          <label className="labelAbout" for="subaboutme"></label>

          <div>

            <div className="wordExpDiv">
              <div className="subPoints">

                <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Additional information..." className="textField1"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

              </div>
            </div>
          </div>
          <input className="buttons" type="button" onClick={handleServiceAdd} name="mydetails" value="+" />
        </div>






      </form>
    </div>
  );
}

export default AboutMe