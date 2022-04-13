import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/AboutMe.css'

function AboutMe() {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const customFunction = (d) => {
    sessionStorage.setItem("aboutme", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('aboutme'))
    // console.log(sessionStorage.key(0))
    // console.log(data)
    const aboutMe = data.about;
    const subAboutMe = data.points;
    document.querySelector(".aboutMeText").innerHTML = aboutMe;
    document.querySelector(".subaboutme").innerHTML = subAboutMe;
  }

  // const addBulletPoint = () => {
  //   const inp = document.createElement("input");
  //   inp.setAttribute('type', 'text');
  //   inp.setAttribute('name', 'points[]');
  //   inp.setAttribute('placeholder', 'Write in bulleted list');
  //   inp.setAttribute('object', '{...register(about)}');
  //   document.querySelector(".bulletPoints").appendChild(inp);
  // }


	return (
    <div className="aboutParentDiv">
      <form onChange={handleSubmit((data) => customFunction(data))} className="formAbout">
      <div className="topSectionAboutMe">
        <input className="buttons" type="button" name="mydetails" value="Cancel" />
        <input className="buttons" type="submit" name="mydetails" value="Save" />
        <input className="buttons" type="button" name="mydetails" value="->" />
      </div>
         
          <div className="textareaDiv">
            <label className="labelAbout" for="aboutme">About Me:</label>
            <textarea {...register('about')} name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10" className="textField"></textarea> 
          </div>
          <div className="bulletPoints">
            <label className="labelAbout" for="subaboutme"></label>
            <div className="subPoints">
              <input {...register('points')} type="text" name="points" placeholder="Additional information..." className="textField" />
              <input className="buttons" type="button" name="mydetails" value="+" />
            </div>
          </div>   
      </form>
    </div>
  );
}

export default AboutMe