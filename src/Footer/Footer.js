import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './Footer.css'

class AboutPage extends React.Component{ 
	render(){
		return(
			<footer role="content-info">
			<p>Created by Victoria (Tori) Godfrey</p>
			<div className="footer-links">
				<a href="https://github.com/inertiawhoosh">Github</a>
				<a href="https://www.linkedin.com/in/victoria-godfrey/">LinkedIn</a>
			</div>
			</footer>
		)
	}
}

export default AboutPage;