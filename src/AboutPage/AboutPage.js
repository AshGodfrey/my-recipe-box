import React from 'react';
import Navbar from '../Navbar/Navbar';
import './AboutPage.css';
import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron'


class AboutPage extends React.Component{ 
	render(){
		return(
			<div className="about-body">
				<Navbar/>
	    		<div role="main">
	    		<Jumbotron />
			      
			     
			     <div className='some-page-wrapper'>
				  <div className='row'>
				    <div className='column'>
				      <div className='column-card'>
				        <h3>Find Recipes</h3>
				        <p>Click on "Feed" to browse our feed of user-submitted recipes and find your next meal now!</p>
				      </div>
				    </div>
				    <div className='column'>
				      <div className='column-card'>
				        <h3>Share Recipes</h3>
				        <p>Good food is meant to be shared! Upload your recipe to our community!</p>
				      </div>
				    </div>
				    <div className='column'>
				      <div className='column-card'>
				       <h3>No Blog Needed</h3>
				       <p>A simpler, food-first, way to blog your recipes. No frills. No Fuss. No unneccesary work for you.</p>
				      </div>
				    </div>
				  </div>
				</div>
			      
			     </div>
				<Footer/>
			</div>
		)
	}
}

export default AboutPage;