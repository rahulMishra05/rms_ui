import React from 'react'
import ReactDOM from 'react-dom'
import ResumeHome from './components/ResumeHome'
import MyDetails from './components/formFields/MyDetails'
import AboutMe from './components/formFields/AboutMe'
import Education from './components/formFields/Education'
import Skills from './components/formFields/Skills'
import WorkExp from './components/formFields/WorkExp'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ReactDOM.render(<Layout2Home />, document.querySelector("#root"));
ReactDOM.render(
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<ResumeHome />}>
          <Route path="mydetails" element={<MyDetails />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="workexp" element={<WorkExp />} />
          <Route path="education" element={<Education />} />
           {/* <Route path="mydetails" element={<MyDetails />} /> */}
          {/* <Route path="mydetails" element={<MyDetails />} /> */}
        </Route>
   </Routes>
    

  </BrowserRouter>,
  
  document.getElementById('root')
);