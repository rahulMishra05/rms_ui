import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/CertificationTraining.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css' 

function CertificationTraining() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/AchievementMembership");
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
      alert("you can enter max 3 certificates");
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
      alert("you can enter max 3 training");
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
    const subcertificationtraining = [];
    addpoint.forEach((e) => {
      subcertificationtraining.push(e.value);
    })


    const something = subcertificationtraining.map((current, index) => {

      return `<li key={index}>${current}</li>`;

    })
    sessionStorage.setItem("aboutme", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('aboutme'))

    const certificationTraining = data.about;
    const subCertificationTraining = data.points;
    // document.querySelector(".certificationTrainingText").innerHTML = certificationTraining;
    document.querySelector(".subcertificationtraining").innerHTML = `<ul>${something.join("")}</ul>`;

    var keyList = something.toString();
    console.log(d.points);
    

    // axios.put(`https://localhost:7258/api/Resume/${rIdAbout}`, {
      
    //   resumeId: rIdAbout,
    //   resumeTitle: "Resume My",
    //   resumeStatus: rStatusAbout,
    //   creationDate: "2022-04-13T06:33:42.151Z",
    //   updationDate: "2022-04-13T06:33:42.151Z",

    //   aboutMes: [
    //     {
    //       mainDescription: d.about,
    //       keyPoints: d.points
    //     }
    //   ]
    // })
  }
  return (
    <div className="certificationParentDiv">

      <form onSubmit={handleSubmit((data) => customFunction(data))} className="formCertification">
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

          <label className="labelAbout" for="subcertificationtraining">Certificate Name:</label>

          <div>
            <div className="wordExpDiv">
              <div className="subPoints">

                <input {...register('about', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="about" placeholder="Enter Certificate Name..." className="textField1"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />
              </div>
            </div>
          </div>
          <input className="buttons" type="button" onClick={handleServiceAdd} name="mydetails" value="+" />
        </div>
        <div className="bulletPoints">

          <label className="labelAbout" for="subcertificationtraining">Training Name:</label>

          <div>

            <div className="wordExpDiv">
              <div className="subPoints">

                <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Enter Training Name..." className="textField1"
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

export default CertificationTraining