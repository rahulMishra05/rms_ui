import { useState , useEffect } from "react";
import { useForm } from "react-hook-form";
import '../components/resumeBuilder.css'
import '../css/MyDetails.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios, { setTerm } from "axios";
import SidebarEdit from '../components/ResumeSidebarEdit'
import '../components/resumeBuilder.css'
import Template from '../components/ResumeTemplate'
// import Dropdown from 'react-bootstrap/Dropdown';
// import Popper from "popper";

import { useNavigate, useParams } from "react-router-dom";

export default function MyDetails(props) {
  // console.log(props.formfields)
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState("");

  const navigate = useNavigate();
  const nextPage = () => {
    navigate(`/home/aboutme/Edit/${id}`);
  }
  const {id} =useParams();
  const deleteContent = () => {
    document.querySelector("div.labelInput input[name='name']").value = "";
    document.querySelector("div.labelInput input[name='role']").value = "";
    document.querySelector("div.labelInput input[name='experience']").value = "";
  }

  const customFunction = (d) => {
    sessionStorage.setItem("mydetails", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('mydetails'))
    console.log(sessionStorage.key(0))
   
    const name = data.name;
    const exp = data.experience;
    const roles = data.role;
    document.querySelector(".nameHead").innerHTML = name;
    document.querySelector(".expLabel").innerHTML = exp + " Years";
    document.querySelector(".roleLabel").innerHTML = roles;
    document.querySelector(".circleProfile img").setAttribute("src", imagePath);
    console.log(imagePath)
    const dateTime = new Date();

    const todayDate = JSON.stringify(new Date());
    const updateDate = JSON.stringify(new Date());

    axios.put(`https://localhost:44396/api/Resumes/${id}`, {

      resumeId: 0,
      resumeTitle: "Date Test",

      resumeStatus: "Draft",

      creationDate: "2022-04-13T06:33:42.15",
      updationDate: "2022-04-13T06:33:42.15",

      myDetails: [
        {
          userdetailsId: d.detailsId,
          profilePicture: imagePath.split(',')[1],
          totalExp: d.experience,
          userName: d.name,
          role: d.role
        }
      ]
    })
      .then(res => {
      
        sessionStorage.setItem("resumeId", res.data['resumeId']);
        sessionStorage.setItem("resumeStatus", res.data['resumeStatus']);

      })
  }
  const roleList = [];
  const [result, getData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:44396/api/RoleMaster/GetActiveRoles' , {
      method:'GET',
      headers:{
        'content-type':'application/json',
      }
    }).then(res =>res.json())
    .then(res => getData(res))
  },[]);

const [imagePath, setImagePath]=useState('default_image.jpg');

 let imageHandler = async (e) => {
    const file = e.target.files[0];
    console.log(e.target.files)
    let base64 = await convertBase64(file);
    sessionStorage["fileBase64"] = base64;
    setImagePath(base64);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);//convert the image to base64 similar to long text
      fileReader.onload = () => {
        resolve(fileReader.result);//if succeeded then gives the value of base64.
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  let photo ;
  let photo_database;
  if( sessionStorage.getItem("fileBase64")){
    photo=sessionStorage.getItem("fileBase64");
    photo_database = photo.split(',')[1];}
  const [editData,setEditData]=useState([]);
  useEffect(()=>{
  axios.get(`https://localhost:44396/api/Resumes/${id}`). then((res)=>setEditData(res.data))
},[])
    
  return (
    <>
    
     {/* <SidebarEdit id={id}/>  */}
      <div className="detailsSection">
        <form onSubmit={handleSubmit((data) => customFunction(data))} id="formMyDetails">
          <div className="topSectionMyDetails">
            <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={deleteContent} />
            <input className="buttons" type="submit" name="mydetails" value="Save" />
            <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
          </div>
          <div className="bottomSection">
            <label htmlFor="insert-image">
                <div className="profileImage">
    
                  <img src={imagePath} id="imageId" name="imageName" className="resumeImage" />
                </div>
                <input type="file" id="insert-image"  className="insert-image-input" accept="image/*" onChange={imageHandler} 
                defaultValue={editData.myDetails ? editData.myDetails[0].profilePicture:null}  />
              </label>
              <input type="hidden" {...register("detailsId"
                )}  name="detailsId" id="detailsId" className="inputs" value={editData.myDetails ? editData.myDetails[0].userdetailsId:0}/>
            <form>
              <div className="labelInput">
                <label className="labelMyDetails" for="name">Name:</label>
                <input {...register("name", {
                  required: true, maxLength: { value: 20, message: "Only 20 Charcters are allowed" }
                  , pattern: { value: (/^[A-Za-z ]+$/), message: "Alphabets are allowed" }
                })} placeholder="Your name: Characters Only!" name="name" id="name" className="inputs" defaultValue={editData.myDetails ? editData.myDetails[0].userName:null} />
              </div>
            </form>
            {errors.name && <small className="Validation">{errors.name.message}</small>}


            <div className="labelInput">

              <label className="labelMyDetails" for="role">Role:</label>

              <div className="role_dropdown">
                  <select  name="role" id="role" {...register("role")}>
                  <option value=""selected disabled hidden>{editData.myDetails ? editData.myDetails[0].role:"select Role"} </option>
                    {  
                      result.map(items => {
                        return(
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
                  placeholder="Experience: 2 Numeric Digits Only!" name="experience" id="experience" className="inputs" defaultValue={editData.myDetails ? editData.myDetails[0].totalExp:null}  />
              </div>

            </form>
            {errors.experience && <small className="Validation">{errors.experience.message}</small>}



          </div>
        </form>

      </div>

     
    </>
  );
}


