import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




class AboutPage extends React.Component{ 
	render(){
		return(

			<footer role="content-info">
			<p>Created by Tori Godfrey</p>
			<div className="footer-links">
				<a href="https://github.com/inertiawhoosh"><FontAwesomeIcon icon={ faGithub} className="social-icon" /></a>
				<a href="https://www.linkedin.com/in/victoria-godfrey/"><FontAwesomeIcon icon={ faLinkedin} className="social-icon" /></a>
			</div>
			</footer>
		)
	}
}

export default AboutPage;