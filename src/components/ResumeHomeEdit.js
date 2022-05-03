import React, {useState} from 'react'
import $ from 'jquery'
import Popper from '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import SidebarEdit from './ResumeSidebarEdit'
import {Outlet} from 'react-router-dom'
import Template from './ResumeTemplate'
import './resumeBuilder.css'
import { propTypes } from 'react-bootstrap/esm/Image'
import {useParams} from 'react-router-dom';
function HomeEdit(props) {
	const {id} = useParams();
	return (
		<div className="resumeBuilder">
			<SidebarEdit id={id}/>
			<main className="mainsection editPage" >	{<Outlet />}</main>
			<Template />
		</div>
	)
}

export default HomeEdit