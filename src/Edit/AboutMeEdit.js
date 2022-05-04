import React, { useState,useRef,useEffect } from "react";
import { useForm } from "react-hook-form";
import '../css/AboutMe.css'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf"
import {useReactToPrint}   from "react-to-print";
import Template from '../components/ResumeTemplate'
import SidebarEdit from "../components/ResumeSidebarEdit";

function AboutMeEdit() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const [textareaError, setTextareaerror] = useState(false);
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/home/workexp");
  }
  const {id}=useParams();

  // const deleteContent = () =>{
  //   document.querySelector("div.textareaDiv textarea[name='about']").value = "";
  //   document.querySelector("div.subPoints input[name='points']").value = "";
  //   }

  const [keyList, setKeyList] = useState([{ key: "" }]);

  // const handleServiceAdd = (e) => {
  //   e.preventDefault();
  //   const aboutMeDiv = e.target.previousElementSibling.children[0].cloneNode(true);

  //   aboutMeDiv.children[0].children[0].value = "";

  //   e.target.previousElementSibling.appendChild(aboutMeDiv)
  // };
//   var count=0;
//   const handleServiceAdd = (e) => {
    
//     if(count<4)
//     {
//     e.preventDefault();
//     const aboutMeDiv = e.target.parentElement.previousElementSibling.children[0].cloneNode(true);

//     aboutMeDiv.children[0].children[0].value = "";

//     e.target.parentElement.previousElementSibling.appendChild(aboutMeDiv)
//     count++;
//     }
//     else
//     {
//       alert("You can enter max 5 Key Points");
//     }
//   };
//   const handleServiceRemove = (e) => {
    
//     if(count>=0)
//     {
//     e.preventDefault();
//     const aboutMeDiv = e.target.parentElement.previousElementSibling;

//     //achievementMembershipDiv.children[0].children[0].value = "";

//     aboutMeDiv.removeChild(aboutMeDiv.lastElementChild);
//     count--;
//     }
//     else
//     {
//       alert(" You can't remove this.One Key Point is compulsory");
//     }
//   };
 
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
      resumeId: id,
      resumeTitle: "Resume My",
      resumeStatus: "draft",
      creationDate: "2022-04-13T06:33:42.151Z",
      updationDate: "2022-04-13T06:33:42.151Z",

      aboutMe: [
        {
         aboutMeId:d.aboutmeId,
          mainDescription: aboutMe,
          keyPoints: subaboutme.join(",")
        }
      ]
    }

    console.log(aboutMeObj);
    axios.put(`https://localhost:44396/api/Resume/${id}`, aboutMeObj);

  }

  const checkCharLength = (e) => {
    if(e.target.value.length == 200)
      setTextareaerror(true);
    else
      setTextareaerror(false);
  }
  const generatePDF=()=>{
  //   var doc=new jsPDF("p","pt","a4");
  //   doc.html(document.querySelector(".template"),
  //   {
  //     callback:function(pdf){
  //       var pageCount=doc.internal.getNumberOfPages();
  //       pdf.deletePage(pageCount);
  //     pdf.save("MyResume.pdf");
  //   }
  // }
  // );
    
    
  }
  // <template ref={componentRef}/>

  
  const [editData,setEditData]=useState([]);
  useEffect(()=>{
  axios.get(`https://localhost:44396/api/Resumes/${id}`). then((res)=>setEditData(res.data))
},[])
// const keypointArray=[];
let keypointArray=editData.aboutMe ? editData.aboutMe[0].keyPoints.split(','):null;
console.log(keypointArray);
console.log(editData.aboutMe)
  return (
      <>
      {/* <SidebarEdit id={id}/> */}
    <div className="aboutParentDiv">
       
      <form onSubmit={handleSubmit((data) => customFunction(data))} className="formAbout">
        <div className="topSectionAboutMe">
          <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={()=>{
            reset();
          }}/>
          <input className="buttons" type="submit" name="mydetails" value="Save" />
          <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
          
        </div>
        <input type='hidden'{...register("aboutmeId"
                )}  name="aboutmeId" id="aboutmeId" className="inputs"
                 value={editData.aboutMe===[] ? editData.aboutMe[0].aboutMeId:0}/>
       

          <div className="textareaDiv">
            <label className="labelAbout" for="aboutme">About Me:</label>
            <textarea {...register('about', { required: true} )}
              name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10" className="textField" 
              onChange={checkCharLength} maxLength="200"
              defaultValue={editData.aboutMe ?editData.aboutMe[0].mainDescription: null}></textarea>
          </div>
        
        {textareaError && <small className="Validation_am">200 characters only</small>}


        <div className="bulletPoints">

          <label className="labelAbout" for="subaboutme"></label>

          <div>

            <div className="wordExpDiv">
            {keypointArray ? keypointArray.map((item)=>{
                
                    if(item===null){
                        return(<div className="subPoints">
               
                        <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                          type="text" name="points" placeholder="Additional information..." 
                          className="textField1" style={{marginLeft:"0px"}} />
                          </div>
                         ) }
                    else{
                        return(<div className="subPoints">
               
                <input {...register('points', { maxLength: { value: 50, message: "Only 50 characters are allowed" } })}
                  type="text" name="points" placeholder="Additional information..." 
                  className="textField1" style={{marginLeft:"0px"}} defaultValue={item}
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
                  type="text" name="points" placeholder="Additional information..." 
                  className="textField1" style={{marginLeft:"0px"}}
                // value={singleKey.key}
                // onChange={(e) => handleServiceChange(e, index)}
                />

              </div> */}
            </div>
          </div>
          <div>
          <input className="buttons" type="button"  name="mydetails" value="+" />
          <input className="buttons" type="button" name="mydetails" value="-" />
          </div>
          
        </div>






      </form>
    </div>
    </>
  );
}

export default AboutMeEdit