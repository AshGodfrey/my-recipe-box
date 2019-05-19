import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './AboutPage.css';
import Footer from '../Footer/Footer';


class AboutPage extends React.Component{ 
	render(){
		return(
			<div class="about-body">
				<Navbar/>
	    		<div role="main">
			      <header role="banner" class="jumbotron">
			        <h1>My Recipe Box</h1>
			        <h2>Share recipes with friends</h2>
			      </header>
			      <section class="about-section">
			        <header>
			            <h3>A Better Way to Food Blog</h3>
			        </header>
			        <p>Quickly upload and share your recipes with friends.</p>
			      </section>
			       <section class="about-section">
			        <header>
			            <h3>See Recipe Details</h3>
			        </header>
			        	<p>See a meal that looks good? Click on the photo for more details.</p>
			      </section>
			      <section class="about-section">
			        <header>
			            <h3>Find and Save Recipes</h3>
			        </header>
			        	<p>Browse recipes, and curate your content.</p>
			      </section>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default AboutPage;