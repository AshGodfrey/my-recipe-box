import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




class AboutPage extends React.Component{ 
	render(){
		return(
			<footer>
				<p>Created by Tori Godfrey</p>
				<div className="footer-links">
					<a href="https://github.com/inertiawhoosh" target="_blank" ><FontAwesomeIcon icon={ faGithub} className="social-icon" /></a>
					<a href="https://www.linkedin.com/in/victoria-godfrey/" target="_blank" ><FontAwesomeIcon icon={ faLinkedin} className="social-icon" /></a>
				</div>
			</footer>
		)
	}
}

export default AboutPage;