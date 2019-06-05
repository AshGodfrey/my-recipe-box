import React from 'react';
import Navbar from '../Navbar/Navbar';
import './AboutPage.css';
import Footer from '../Footer/Footer';
import Jumbotron from './Jumbotron/Jumbotron'
import AboutDetails from './AboutDetails/AboutDetails'


class AboutPage extends React.Component{ 
	render(){
		return(
			<div className="about-body">
				<Navbar/>
	    		<div role="main" className="relative">
	    			<Jumbotron />
	    			<AboutDetails />
	    		
				</div>
				<Footer/>
			</div>
		)
	}
}

export default AboutPage;