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
			        <h2>Store all your favorite recipes in one place.</h2>
			      </header>
			      <section class="about-section">
			        <header>
			            <h3>A Better Way to Store Your Recipes</h3>
			        </header>
			        <p>Nothing can replace your family's classic recipe cards, but you can keep them safe by uploading them into your digital recipe box. </p>
			      </section>
			       <section class="about-section">
			        <header>
			            <h3>See Recipe Details</h3>
			        </header>
			        	<p>Take a photo of your recipes for visual cateloging and leave notes on your uploaded recipes.</p>
			      </section>
			      <section class="about-section">
			        <header>
			            <h3>Search Your Recipes</h3>
			        </header>
			        	<p>Easily find your recipes by title or time to make.</p>
			      </section>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default AboutPage;