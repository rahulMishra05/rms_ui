import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas ,faCoffee,faPenToSquare,faShareFromSquare,faFloppyDisk, faDownload, faEllipsisVertical, faCircleInfo, faGears, faBriefcase, faGraduationCap, faTrophy, faIdCard, faCircleNodes} from '@fortawesome/free-solid-svg-icons'
// import DetailsIcon from '@mui/icons-material/Details';
// import InfoIcon from '@mui/icons-material/Info';
// import StarIcon from '@mui/icons-material/Star';
// import WorkIcon from '@mui/icons-material/Work';
// import SchoolIcon from '@mui/icons-material/School';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import CardMembershipIcon from '@mui/icons-material/CardMembership';
import '../css/Sidebar.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf"


function Sidebar(props) {
	const navigate = useNavigate();
	const BackPage = () => {
  	navigate("/");
	}

	const generatePDF=()=>{
		var doc=new jsPDF("p","pt","a4");
		
		doc.html(document.querySelector(".template"),
		{ margin:[0,50,0,0],
		  callback:function(pdf){
			var pageCount=doc.internal.getNumberOfPages();
			while (pageCount>3)
			{
				pdf.deletePage(pageCount);
				pageCount=pageCount-1;
			}
			window.alert("Downloaded");
		  pdf.save("MyResume.pdf");
		}
	  }
	  );
	 } 

	return (
		
		
		<aside className="sidebar">

			<div className='row'>
				<FaArrowCircleLeft className='backArrow col-sm-2' onClick={BackPage} />
				<h1 className="projectName col-sm-8">Resume Builder</h1>
			</div>

			<div className="fonts">
			<button className="iconbuttons"><FontAwesomeIcon className="edit"  icon={faPenToSquare}/></button>
			<button className='iconbuttons'><FontAwesomeIcon className="share" icon={faShareFromSquare}/></button>
			<button className='iconbuttons'><FontAwesomeIcon className="clone" icon={faFloppyDisk}/></button>
			<button className='iconbuttons' onClick={generatePDF}><FontAwesomeIcon className="download" icon={faDownload}/></button>
			<button className='iconbuttons'><FontAwesomeIcon className="menu" icon={faEllipsisVertical}/></button>
			
			
			</div>
			
			<ul className="listMenu">

			
			<Link to="mydetails">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faIdCard}/>
						<p className="listItem">My Details</p>
					
				</div>
			</Link>
			<Link to="aboutme">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faCircleInfo}/>
						<p className="listItem">About Me </p>
					
				</div>
			</Link>
			<Link to="workexp">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faBriefcase}/>
						<p className="listItem">Work Experience</p>
					
				</div>
			</Link>
			<Link to="skills">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faGears}/>
						<p className="listItem">Skills & Proficiencies</p>
					
				</div>
			</Link>
			
			<Link to="education">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faGraduationCap}/>
						<p className="listItem">Educational Background</p>
					
				</div>
			</Link>
			<Link to="certificationtraining">
				<div className="menuDiv">
					<FontAwesomeIcon className="icon" icon={faTrophy}/>
					<p className="listItem">Certification & Training</p>
				</div>
			</Link>
			<Link to="achievementmembership">
				<div className="menuDiv">
					<FontAwesomeIcon className="icon" icon={faCircleNodes}/>

					<p className="listItem">Achievements & Memberships</p>

				</div>
			</Link>
			</ul>

			<div className='lastItems'>
				<div className='lastModified'>
					<p>Last Modified</p>
					<p>DD/MM/YYYY HH:MM</p>
				</div>

				<div className='reviewer'>
					<p>Reviewer</p>
					<p>Rahul Mishra <span></span></p>
				</div>
				
				<div className='status'>
					<p>Status</p>
					<p className='reviewStatus'>Draft</p>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
