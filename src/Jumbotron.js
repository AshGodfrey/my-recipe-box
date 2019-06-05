import React from 'react';
import './Jumbotron.css'

class Jumbotron extends React.Component{ 
	render(){
		return(
			<header role="banner" className="jumbotron">
			    <div className="jumbotron-image-div">
			      	<img src="https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="jumbotron-image" />
			     </div>
			        <div className="jumbotron-text">
			        	<h1>Recipe Box</h1>
			        	<h2>Find breakfast, lunch, dinner
			        	<br/>
			        	<div className="fast">fast.</div></h2>
			        </div>
			</header>
		)
	}
}

export default Jumbotron;

