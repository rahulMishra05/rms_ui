import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/AboutMe.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AboutMe() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const [textareaError, setTextareaerror] = useState(false);
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/workexp");
  }

  const deleteContent = () =>{
    document.querySelector("div.textareaDiv textarea[name='about']").value = "";
    document.querySelector("div.subPoints input[name='points']").value = "";
    }

  const [keyList, setKeyList] = useState([{ key: "" }]);

  // const handleServiceAdd = (e) => {
  //   e.preventDefault();
  //   const aboutMeDiv = e.target.previousElementSibling.children[0].cloneNode(true);

  //   aboutMeDiv.children[0].children[0].value = "";

  //   e.target.previousElementSibling.appendChild(aboutMeDiv)
  // };

  var count=0;
  const handleServiceAdd = (e) => {
    
    if(count<4)
    {
    e.preventDefault();
    const aboutMeDiv = e.target.previousElementSibling.children[0].cloneNode(true);

    aboutMeDiv.children[0].children[0].value = "";

    e.target.previousElementSibling.appendChild(aboutMeDiv)
    count++;
    }
    else
    {
      alert("you can enter max 5 achievements");
    }
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
   
    
    var aboutMeObj = {
      resumeId: rIdAbout,
      resumeTitle: "Resume My",
      resumeStatus: rStatusAbout,
      creationDate: "2022-04-13T06:33:42.151Z",
      updationDate: "2022-04-13T06:33:42.151Z",

      aboutMe: [
        {
          MainDescription: aboutMe,
          KeyPoints: subaboutme.join(",")
        }
      ]
    }

    console.log(aboutMeObj);
    axios.put(`https://localhost:7258/api/Resume/${rIdAbout}`, aboutMeObj);

  }

  const checkCharLength = (e) => {
    if(e.target.value.length == 200)
      setTextareaerror(true);
    else
      setTextareaerror(false);
  }

  return (
    <div className="aboutParentDiv">

      <form onSubmit={handleSubmit((data) => customFunction(data))} className="formAbout">
        <div className="topSectionAboutMe">
          <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={()=>{
            reset();
          }}/>
          <input className="buttons" type="submit" name="mydetails" value="Save" />
          <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
        </div>

       

          <div className="textareaDiv">
            <label className="labelAbout" for="aboutme">About Me:</label>
            <textarea {...register('about', { required: true} )}
              name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10" className="textField" onChange={checkCharLength} maxLength="200"></textarea>
          </div>
        
        {textareaError && <small className="Validation_am">200 characters only</small>}


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