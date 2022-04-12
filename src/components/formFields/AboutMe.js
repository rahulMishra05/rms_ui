import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/AboutMe.css'
import { useNavigate } from "react-router-dom";

function AboutMe() {

  const { register, handleSubmit,formState:{errors} } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/skills");
}

  // const [keyList, setKeyList] = useState([{ key: "" }]);
  
  // const handleServiceAdd =()=> {
  //   setKeyList([...keyList ,{key: ""}]);
  // };

  // const handleServiceChange = (e,index) =>{
  //   const {name,value} = e.target
  //   const list =[...keyList];
  //   list[index][name]=value; 
  //   setKeyList(list);
  // };

  const [keyList, setKeyList] = useState([{ key: "" }]);
  
  const handleServiceAdd =()=> {
    setKeyList([...keyList ,{key: ""}]);
  };

  const handleServiceChange = (e,index) =>{
    const {name,value} = e.target
    const list =[...keyList];
    list[index][name]=value; 
    setKeyList(list);
  };

  const customFunction = (d) => {
    sessionStorage.setItem("aboutme", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('aboutme'))
    console.log(sessionStorage.key(0))
    console.log(data)
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
      <form onSubmit={handleSubmit((data) => customFunction(data))} className="formAbout">
      <div className="topSectionAboutMe">
        <input className="buttons" type="button" name="mydetails" value="Cancel" />
        <input className="buttons" type="submit" name="mydetails" value="Save" />
        <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage}/>
      </div>
         
          <form>
          <div className="textareaDiv">
            <label className="labelAbout" for="aboutme">About Me:</label>
            <textarea {...register('about',{required:true,maxLength:{value:200,message:"Only 200 characters are allowed"}})}
             name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10" className="textField"></textarea> 
          </div>
          </form>
          {errors.about && <small className="Validation_am">{errors.about.message}</small>}

          
          <div className="bulletPoints">
            
            <label className="labelAbout" for="subaboutme"></label>
            {keyList.map((singleKey, index) => (
                
                <div className="subPoints">
                  <input {...register('points',{maxLength:{value:50,message:"Only 50 characters are allowed"}})}
                  type="text" name="points" placeholder="Additional information..." className="textField" 
                   value= {singleKey.key}
                   onChange = {(e) => handleServiceChange(e,index)}/>
                  {
                  keyList.length-1 ===index && keyList.length < 5 &&
                 <input className="buttons" type="button" 
                  onClick={handleServiceAdd}
                  name="mydetails" value="+" />
                  }
                  </div>
                  
                  
                
                
                
            ))
                };
          </div>
          
           
      </form>
    </div>
  );
}

export default AboutMe