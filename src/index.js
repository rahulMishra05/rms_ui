import React from 'react'
import ReactDOM from 'react-dom'
import ResumeHome from './components/ResumeHome'
import MyDetails from './components/formFields/MyDetails'
import AboutMe from './components/formFields/AboutMe'
import Education from './components/formFields/Education'
import Skills from './components/formFields/Skills'
import WorkExp from './components/formFields/WorkExp'
import AchievementMembership from './components/formFields/AchievementMembership'
import CertificationTraining from './components/formFields/CertificationTraining'
import CreateResume from './components/CreateResume'
import ResumeHomeEdit from './components/ResumeHomeEdit'
import MyDetailsEdit from './Edit/MyDetailsEdit'
import AboutMeEdit from './Edit/AboutMeEdit'
import WorkExpEdit from './Edit/WorkExpEdit'
import SkillEdit from './Edit/SkillEdit'
import AchievementEdit from './Edit/AchievementEdit'
import CertificateEdit from './Edit/CertificateEdit'
import EducationEdit from './Edit/EducationEdit'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreviewResume from './components/PreviewResume'

// ReactDOM.render(<Layout2Home />, document.querySelector("#root"));
ReactDOM.render(
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<CreateResume/>} />
     <Route path='previewresume/:id' element={<PreviewResume/>} />
        <Route path="/home" element={<ResumeHome />}>
          <Route path="mydetails" element={<MyDetails />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="workexp" element={<WorkExp />} />
          <Route path="education" element={<Education />} />
          <Route path="achievementmembership" element={<AchievementMembership />} />
          <Route path="certificationtraining" element={<CertificationTraining />} />
          <Route path="certificationtraining" element={<CertificationTraining />} />

           {/* <Route path="mydetails" element={<MyDetails />} /> */}
          {/* <Route path="mydetails" element={<MyDetails />} /> */}
        </Route>
        
        <Route path="/home/:id" element={<ResumeHomeEdit />}>
          <Route path="mydetails/Edit/:id" element={<MyDetailsEdit />} />
          
          <Route path="aboutme/Edit/:id" element={<AboutMeEdit />} />
          <Route path="workexp/Edit/:id" element={< WorkExpEdit />} />
          <Route path="skills/Edit/:id" element={< SkillEdit />} />
          <Route path="education/Edit/:id" element={< EducationEdit />} />
          <Route path="certificationtraining/Edit/:id" element={< CertificateEdit />} />
          <Route path="achievementmembership/Edit/:id" element={< AchievementEdit />} />
        </Route>
   </Routes>
    

  </BrowserRouter>,
  // <React.StrictMode>
  //   <CreateResume/>
  // </React.StrictMode>,
  
  document.getElementById('root')
);