import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import './RecipeDetails.css'
import UserFeed from '../UserFeed/UserFeed';
import Navbar from '../Navbar/Navbar'

class RecipeDetails extends React.Component{ 
	render(){
		return(
			 <main class="background-details">
			 	
		    	<div class="flex-container">
		    		<div class="flex-item">
		    			<div class="top-box outline">
		    				<div class="top-img"><img class="profile-img" src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
		    				</div>
		    				<div class="username">Username_</div>
		    			</div>
		    		</div>
		    		<div class="recipe-details">
		    		<div class="flex-item">
		    			<div class="photo-flex">
		    			<img class="recipe-image" src="https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-500x500.jpg" />
		    		</div>
		    		</div>
		    		<div class="flex-item recipe-info">
		    			<h1>Delicious Food</h1>
		    			<div class="difficulty">
		    				<h2>Difficulty:</h2>
		    				<p>Beginner</p>
		    			</div>
		    			<div class="details">
		    				<h2>Recipe Details:</h2>
		    				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		    			</div>
		    		</div>
		    	
			    	</div>
		    	<div class="flex-item outline"></div>
		    	</div>
		    </main>	)
	}
}

export default RecipeDetails;