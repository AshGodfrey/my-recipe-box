import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './UserDetails.css'

class UserDetails extends React.Component{ 
	render(){
		return(
		<header>
       		<div id="test">
        		<div class="profile-image">
          			<img class="profile-img" src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
        		</div>
	          	<section class="profile-details">
	            	<div class="item">
	              		<h1>_USERNAME</h1>
	             	
	            	</div>
	            	
	          	</section>
        	</div>
   		 </header>
		)
	}
}

export default UserDetails;