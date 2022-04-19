import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/AchievementMembership.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css' 

function AchievementMembership() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/MyDetails");
  }

  const [keyList, setKeyList] = useState([{ key: "" }]);
  

  
  var count=0;
  const handleServiceAdd = (e) => {
    
    if(count<2)
    {
    e.preventDefault();
    const achievementMembershipDiv = e.target.previousElementSibling.children[0].cloneNode(true);

    achievementMembershipDiv.children[0].children[0].value = "";

    e.target.previousElementSibling.appendChild(achievementMembershipDiv)
    count++;
    }
    else
    {
      alert("you can enter max 3 Achievements");
    }
  };
  var count1=0;
  const handleServiceAdd1 = (e) => {
    
    if(count1<2)
    {
    e.preventDefault();
    const achievementMembershipDiv = e.target.previousElementSibling.children[0].cloneNode(true);

    achievementMembershipDiv.children[0].children[0].value = "";

    e.target.previousElementSibling.appendChild(achievementMembershipDiv)
    count1++;
    }
    else
    {
      alert("you can enter max 3 Memberships");
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
    

    const addpoint1 = document.querySelectorAll('.textField1');
    const subachievementmembership1 = [];
    addpoint1.forEach((e) => {
      subachievementmembership1.push(e.value);
    })

    const addpoint2 = document.querySelectorAll('.textField2');
    const subachievementmembership2 = [];
    addpoint2.forEach((e) => {
      subachievementmembership2.push(e.value);
    })


    const something1 = subachievementmembership1.map((current, index) => {

      return `<li key={index}>${current}</li>`;

    })

    
    const something2 = subachievementmembership2.map((current, index) => {

      return `<li key={index}>${current}</li>`;

    })
    // sessionStorage.setItem("achievementmembership", JSON.stringify(d))
    // const data = JSON.parse(sessionStorage.getItem('achievementmembership'))

    // const achievementMembership = data.achievement;
    // const subAchievementMembership = data.points;
    //document.querySelector(".achievementMembershipText").innerHTML = achievementMembership;
    document.querySelector(".subachievementmembership1").innerHTML = `<ul>${something1.join("")}</ul>`;
    document.querySelector(".subachievementmembership2").innerHTML = `<ul>${something2.join("")}</ul>`;

    var rIdAchi = sessionStorage.getItem('resumeId');
    var rStatusAchi = sessionStorage.getItem('resumeStatus');

    var ArchObj = {
      resumeId: rIdAchi,
      resumeTitle: "Resume My",
      resumeStatus: rStatusAchi,
      creationDate: "2022-04-13T06:33:42.151Z",
      updationDate: "2022-04-13T06:33:42.151Z",

      achivements: [
        {
          achievementName:subachievementmembership1.join(",")
        }
      ],
      memberships: [
        {
          membershipName: subachievementmembership2.join(",")
        }
      ]
    }

    console.log(ArchObj);
    axios.put(`https://localhost:7258/api/Resume/${rIdAchi}`, ArchObj);
  }
  return (
    <div className="achievementParentDiv">

      <form onSubmit={handleSubmit((data) => customFunction(data))} className="formAchievement">
        <div className="topSectionAboutMe">
          <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={()=>{
            reset();
          }}/>
          <input className="buttons" type="submit" name="mydetails" value="Save" />
          <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
        </div>

        {/* <form>

          <div className="textareaDiv">
            <label className="labelAbout" for="certificationtraining">Certification & Training:</label>
            <textarea {...register('about', { required: true, maxLength: { value: 200, message: "Only 200 characters are allowed" } })}
              name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10" className="textField"></textarea>
          </div>
        </form>
        {errors.about && <small className="Validation_am">{errors.about.message}</small>} */}
    
        <div className="bothDiv">
        <div className="bulletPoints row">

          <label className="labelAbout" for="subachievementmembership1">Achievements Name:</label>

          <div>
            <div className="wordExpDiv">
              <div className="subPoints">

                <input {...register('achievement', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="about" placeholder="Enter Achievements Name..." className="textField1"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />
              </div>
            </div>
          </div>
          <input className="buttons" type="button" onClick={handleServiceAdd} name="mydetails" value="+" />
        </div>
        <div className="bulletPoints row">

          <label className="labelAbout" for="subachievementmembership2">Memberships Name:</label>

          <div>

            <div className="wordExpDiv">
              <div className="subPoints">

                <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Enter Memberships Name..." className="textField2"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

              </div>
            </div>
          </div>
          <input className="buttons" type="button" onClick={handleServiceAdd1} name="mydetails" value="+" />
        </div>
        </div>







      </form>
    </div>
  );
}

export default AchievementMembership