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
    navigate("/home/AchievementMembership");
  }

  const [keyList, setKeyList] = useState([{ key: "" }]);

  
  var count=0;
  const handleServiceAdd = (e) => {
    
    if(count<2)
    {
    e.preventDefault();
    const achievementMembershipDiv = e.target.parentElement.previousElementSibling.children[0].cloneNode(true);

    achievementMembershipDiv.children[0].children[0].value = "";

    e.target.parentElement.previousElementSibling.appendChild(achievementMembershipDiv)
    count++;
    }
    else
    {
      alert("You can enter max 3 Training");
    }
  };
  const handleServiceRemove = (e) => {
    
    if(count>=0)
    {
    e.preventDefault();
    const achievementMembershipDiv = e.target.parentElement.previousElementSibling;

    //achievementMembershipDiv.children[0].children[0].value = "";

    achievementMembershipDiv.removeChild(achievementMembershipDiv.lastElementChild);
    count--;
    }
    else
    {
      alert(" You can't remove this.One Training is compulsory");
    }
  };
  var count1=0;
  const handleServiceAdd1 = (e) => {
    
    if(count1<2)
    {
    e.preventDefault();
    const achievementMembershipDiv = e.target.parentElement.previousElementSibling.children[0].cloneNode(true);

    achievementMembershipDiv.children[0].children[0].value = "";

    e.target.parentElement.previousElementSibling.appendChild(achievementMembershipDiv)
    count1++;
    }
    else
    {
      alert("You can enter max 3 Training");
    }
  };
  const handleServiceRemove1 = (e) => {
    
    if(count1>=0)
    {
    e.preventDefault();
    const achievementMembershipDiv = e.target.parentElement.previousElementSibling;

    //achievementMembershipDiv.children[0].children[0].value = "";

    achievementMembershipDiv.removeChild(achievementMembershipDiv.lastElementChild);
    count1--;
    }
    else
    {
      alert(" You can't remove this.One Training is compulsory");
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
    var rIdCerti = sessionStorage.getItem('resumeId');
    var rStatusCerti = sessionStorage.getItem('resumeStatus');

    const addpoint1 = document.querySelectorAll('.textField1');
    const subcertificationtraining1 = [];
    addpoint1.forEach((e) => {
      subcertificationtraining1.push(e.value);
    })

    const addpoint2 = document.querySelectorAll('.textField2');
    const subcertificationtraining2 = [];
    addpoint2.forEach((e) => {
      subcertificationtraining2.push(e.value);
    })


    const something1 = subcertificationtraining1.map((current, index) => {

      return `<li key={index}>${current}</li>`;

    })

    const something2 = subcertificationtraining2.map((current, index) => {

      return `<li key={index}>${current}</li>`;

    })

    sessionStorage.setItem("subcertificationtraining", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('subcertificationtraining1'))

    // const certificationTraining = data.about;
    // const subCertificationTraining = data.points;
    // document.querySelector(".certificationTrainingText").innerHTML = certificationTraining;
    document.querySelector(".subcertificationtraining1").innerHTML = `<ul>${something1.join("")}</ul>`;
    document.querySelector(".subcertificationtraining2").innerHTML = `<ul>${something2.join("")}</ul>`;

   
    console.log("subcertificationtraining1")
    console.log("subcertificationtraining2")

    var rIdCerti = sessionStorage.getItem('resumeId');
    var rStatusCerti = sessionStorage.getItem('resumeStatus');

    var CertiObj = {
      resumeId: rIdCerti,
      resumeTitle: "Resume My",
      resumeStatus: rStatusCerti,
      creationDate: "2022-04-13T06:33:42.151Z",
      updationDate: "2022-04-13T06:33:42.151Z",

      certifications: [
        {
          certificationId: 0,
          certificationName: subcertificationtraining1.join(",")
        }
      ],
      trainings: [
        {
          trainingId: 0,
          trainingname: subcertificationtraining2.join(",")
        }
      ]
    }

    console.log(CertiObj);
    axios.put(`https://localhost:7258/api/Resume/${rIdCerti}`, CertiObj);
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

          <label className="labelAbout" for="subcertificationtraining1">Certificate Name:</label>

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
          <div>
          <input className="buttons" type="button"  onClick={handleServiceAdd} name="mydetails" value="+" />
          <input className="buttons" type="button" onClick={(e)=>handleServiceRemove(e)} name="mydetails" value="-" />
          </div>
        </div>
        <div className="bulletPoints">

          <label className="labelAbout" for="subcertificationtraining2">Training Name:</label>

          <div>

            <div className="wordExpDiv">
              <div className="subPoints">

                <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Enter Training Name..." className="textField2"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

              </div>
            </div>
          </div>
          <div>
          <input className="buttons" type="button" onClick={handleServiceAdd1} name="mydetails" value="+" />
          <input className="buttons" type="button" onClick={(e)=>handleServiceRemove1(e)} name="mydetails" value="-" />
          </div>
        </div>
        </div>







      </form>
    </div>
  );
}

export default CertificationTraining