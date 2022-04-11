import React, {useState} from 'react'
import $ from 'jquery'
import Popper from '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './ResumeSidebar'
import {Outlet} from 'react-router-dom'
import Template from './ResumeTemplate'
import './resumeBuilder.css'

function Home() {
	
	return (
		<div className="resumeBuilder">
			<Sidebar />
			<main className="mainsection" >	{<Outlet />}</main>
			<Template />
		</div>
	)
}

export default Home