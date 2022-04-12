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


function Sidebar(props) {
	return (
		
		<aside className="sidebar">

			<div className='row'>
				<FaArrowCircleLeft className='backArrow col-sm-2'/>
				<h1 className="projectName col-sm-8">Resume Builder</h1>
			</div>

			<div className="fonts">
			<FontAwesomeIcon className="edit"  icon={faPenToSquare}/>
			<FontAwesomeIcon className="share" icon={faShareFromSquare}/>
			<FontAwesomeIcon className="clone" icon={faFloppyDisk}/>
			<FontAwesomeIcon className="download" icon={faDownload}/>
			<FontAwesomeIcon className="menu" icon={faEllipsisVertical}/>
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
			<Link to="skills">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faGears}/>
						<p className="listItem">Skills & Proficiencies</p>
					
				</div>
			</Link>
			<Link to="workexp">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faBriefcase}/>
						<p className="listItem">Work Experience</p>
					
				</div>
			</Link>
			<Link to="education">
				<div className="menuDiv">
					
						<FontAwesomeIcon className="icon" icon={faGraduationCap}/>
						<p className="listItem">Educational Background</p>
					
				</div>
			</Link>
			<Link to="">
				<div className="menuDiv">
					<FontAwesomeIcon className="icon" icon={faTrophy}/>
					<p className="listItem">Achievements</p>
				</div>
			</Link>
			<Link to="">
				<div className="menuDiv">
					<FontAwesomeIcon className="icon" icon={faCircleNodes}/>
					<p className="listItem">Memberships</p>
				</div>
			</Link>
			</ul>
		</aside>
	)
}

export default Sidebar
