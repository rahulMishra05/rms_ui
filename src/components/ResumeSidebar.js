import React from 'react'
import {Link} from 'react-router-dom'
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
				<FaArrowCircleLeft className='backArrow col-sm-3'/>
				<h1 className="projectName col-sm-8">Resume Builder</h1>
			</div>
			
			
			<ul className="listMenu">

			
				
				<div className="menuDiv">
					{/* <span className="icon"><DetailsIcon /></span> */}
					<li className="listItem"><Link to="mydetails">My Details</Link></li>
				</div>
				<div className="menuDiv">
					{/* <span className="icon"><InfoIcon /></span> */}
					<li className="listItem"><Link to="aboutme">About Me</Link></li>
				</div>
				<div className="menuDiv">
					{/* <span className="icon"><StarIcon /></span> */}
					<li className="listItem"><Link to="skills">Skills & Proficiencies</Link></li>
				</div>
				<div className="menuDiv">
					{/* <span className="icon"><WorkIcon /></span> */}
					<li className="listItem"><Link to="workexp">Work Experience</Link></li>
				</div>
				<div className="menuDiv">
					{/* <span className="icon"><SchoolIcon /></span> */}
					<li className="listItem"><Link to="education">Educational Background</Link></li>
				</div>
				<div className="menuDiv">
					{/* <span className="icon"><EmojiEventsIcon /></span> */}
					<li className="listItem"><Link to="">Achievements</Link></li>
				</div>
				<div className="menuDiv">
					{/* <span className="icon"><CardMembershipIcon /></span> */}
					<li className="listItem"><Link to="">Memberships</Link></li>
				</div>
			</ul>
		</aside>
	)
}

export default Sidebar
