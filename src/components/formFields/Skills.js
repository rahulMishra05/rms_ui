import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import '../../css/Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {fa-search} from "@fortawesome/free-solid-svg-icons";
function Skills() {

    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/home/education");
    }

    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState("");



    const customFunction = (d) => {
        // var data1 = sessionStorage.getItem('mydetails');
        // console.log(d.name);
        // console.log(d);
        sessionStorage.setItem("skills", JSON.stringify(d))
        const data = JSON.parse(sessionStorage.getItem('skills'))
        // console.log(sessionStorage.key(0))
        // console.log(data)
        const skills = data.skill;
        console.log(skills)
        let finalSkill = [];
        skills.forEach((skill) => {
            let temp = skill.split("::");
            temp.forEach((current) => {
                finalSkill.push("<li>"+current+"</li>");
            })
        })

        let skillList = [];
        skills.forEach((current) => {
            const temp = current.split("::");
            let x= {};
            x.category = temp[1];
            x.skillName = temp[0];
            skillList.push(x)
        })
        
        // console.log(JSON.stringify(skillList))

        // console.log(skillList)
        
        document.querySelector(".skillsText").innerHTML = finalSkill.join("");

        var rIdSkill = sessionStorage.getItem('resumeId');
        var rStatusSkills = sessionStorage.getItem('resumeStatus');

        axios.put(`https://localhost:7258/api/Resume/${rIdSkill}`, {
            resumeId: rIdSkill,
            resumeTitle: "Resume My",
            resumeStatus: rStatusSkills,
            creationDate: "2022-04-13T13:51:34.029Z",
            updationDate: "2022-04-13T13:51:34.029Z",

            skillList: skillList
        })
    }

    const [result, getData] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7258/api/SkillsMaster/GetActiveSkill', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => getData(res))
    }, []);

    // console.log(result)

    return (

        <div className="ParentList">
            <form className="rightSideVisibility" class onSubmit={handleSubmit((data) => customFunction(data))}>

                <div className="topSectionSkills">
                    <input className="buttons" type="button" name="mydetails" value="Cancel" onClick={() => {
                        reset();
                    }} />
                    <input className="buttons" type="submit" name="mydetails" value="Save" />
                    <input className="buttons" type="button" name="mydetails" value="->" onClick={nextPage} />
                </div>

                <div className="skillsList">
                    <div className="label">
                        <label>Skills & <br />Proficiencies</label>
                    </div>
                    <div className="SpanParent">
                        <span className="plus">+</span>
                    </div>


                </div>
                <div className="search">
                    <input placeholder="Search" name="search" id="search" />

                </div>

                <table border="1" className="skillTable table table-bordered">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Category</th>
                            <th>Skill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map(items => {
                                
                                return (
                            <tr key={0}>
                                <td><input {...register('skill')} type="checkbox" name='skill' value={items.skillName+"::"+items.skillCategory} /></td>
                                <td>{items.skillCategory}</td>
                                <td>{items.skillName}</td>
                                
                            </tr>
                            );
                            })
                        }
                    </tbody>
                </table>

                {/* <input type="submit" name="skills" value="Save" /> */}
            </form>
        </div>
    )
}



export default Skills