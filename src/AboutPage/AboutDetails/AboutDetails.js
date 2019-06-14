import React from 'react';
import './AboutDetails.css'

class AboutDetails extends React.Component{ 
	render(){
		return(
			<div className="about-details-wrapper">
				<div className="features-title">
					<h3>Features</h3>
					<div className="line"></div>
				</div>
				<div className='some-page-wrapper'>
					<div className='row'>
				    	<div className='column'>
				      		<div className='column-card'>
				        		<h4>Find Recipes</h4>
				        		<p>Click on "Feed" to browse our feed of user-submitted recipes and find your next meal now!</p>
				      		</div>
				    	</div>
				    	<div className='column'>
				    		<div className='column-card'>
				        		<h4>Share Recipes</h4>
				        		<p>Good food is meant to be shared! Upload your recipe to our community!</p>
				    		</div>
				   		</div>
				   		 <div className='column'>
				    		<div className='column-card'>
				    			<h4>No Blog Needed</h4>
				       			<p>A simpler, food-first, way to blog your recipes. No frills. No Fuss. No unneccesary work for you.</p>
				    		</div>
				    	</div>
					</div> //row wrapper
				</div> //some page wrapper
			</div> //about wrapper
				  
		)
	}
}

export default AboutDetails;
