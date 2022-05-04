import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import '../css/AchievementMembership.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 

function AchievementMembership() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/home/MyDetails");
  }

  const [keyList, setKeyList] = useState([{ key: "" }]);
  
  const {id}=useParams();
  
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
      resumeId: id,
      resumeTitle: "Resume My",
      resumeStatus: "draft",
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
    axios.put(`https://localhost:44396/api/Resumes/${id}`, ArchObj);
  }
  const [editData,setEditData]=useState([]);
  useEffect(()=>{
  axios.get(`https://localhost:44396/api/Resumes/${id}`). then((res)=>setEditData(res.data))
},[])
let achievementArray = editData.achivements?editData.achivements[0].achievementName.split(","):null;
let membershipArray = editData.memberships?editData.memberships[0].membershipName.split(","):null;
console.log(achievementArray);
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
            {achievementArray ? achievementArray.map((item)=>{
                
                if(item===null){
                    return(<div className="subPoints">
           
           <input {...register('achievement', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="about" placeholder="Enter Achievements Name..." className="textField1"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />
                      </div>
                     ) }
                else{
                    return(<div className="subPoints">
           
           <input {...register('achievement', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="about" placeholder="Enter Achievements Name..." className="textField1"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

          </div>
                    )}
            
        }):
        null
        }

              {/* <div className="subPoints">

                <input {...register('achievement', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="about" placeholder="Enter Achievements Name..." className="textField1"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />
              </div> */}
            </div>
          </div>
          <div>
          <input className="buttons" type="button" onClick={handleServiceAdd} name="mydetails" value="+" />
          <input className="buttons" type="button" onClick={handleServiceRemove} name="mydetails" value="-" />
          </div>
        </div>
        <div className="bulletPoints row">

          <label className="labelAbout" for="subachievementmembership2">Memberships Name:</label>

          <div>

            <div className="wordExpDiv">
            {membershipArray ? membershipArray.map((item)=>{
                
                if(item===null){
                    return(<div className="subPoints">
           
           <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Enter Memberships Name..." className="textField2"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

              
                      </div>
                     ) }
                else{
                    return(<div className="subPoints">
           
           <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Enter Memberships Name..." className="textField2"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

             

          </div>
                    )}
            
        }):
        null
        }
              {/* <div className="subPoints">

                <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Enter Memberships Name..." className="textField2"
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

              </div> */}
            </div>
          </div>
          <div>
          <input className="buttons" type="button" onClick={handleServiceAdd1} name="mydetails" value="+" />
          <input className="buttons" type="button" onClick={handleServiceRemove1} name="mydetails" value="-" />
          </div>
        </div>
        </div>







      </form>
    </div>
  );
}

export default AchievementMembership