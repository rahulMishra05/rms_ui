import React,{useRef} from 'react'
import '../css/PreviewResume.css'


 function PreviewResume() {
// 	const componentRef=useRef();
// const handlePrint=useReactToPrint({content:()=> componentRef.current},
// {copyStyles:true},{onBeforeGetContent:()=> this.copyStyles});
	// const arr = Array.from(sessionStorage.mydetails)  ;;;ref={componentRef}


	

	return (
		<div >
		<section className="preview" >
			
		<div className="userInfoDiv">
			<div className="circleProfile">
          {/* <input className="buttons" type="button" name="mydetails" value="pdf" onClick={makePDF} ></input> */}
				<img></img>
			</div>
			<div className="nameInfo">
				<h1 className="nameHead">PSI Resume</h1>
				<label className="roleLabel" for="name">Software Engineer Trainee</label>
				<div className='experienceHeading'>
					<label className='total'>Total Experience: </label>
				<label className="expLabel" for="name"></label>
				</div>
			</div>
		</div>

		<div className='resumeDetails'>
			<div className='aboutMe'>
				<h5 className='sectionHeading'>About Me</h5>
				<div className='aboutMeMain'><p></p></div>
				<p className='subAboutMe'></p>
			</div>
		</div>
		
		</section>
		</div>
	)
}
export default PreviewResume