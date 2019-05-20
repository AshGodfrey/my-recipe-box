import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './NewPost.css';


class NewPost extends React.Component{ 
	render(){
		return(
			<div>
				<Navbar />
				<main class="body"> 
					<header>
					<h1>New Recipe</h1>
					</header>

					<form id="new-post">
						<div class="form-section">
            				<label for="recipe-name">Recipe Name:</label>
           					<input type="text" name="recipe-name" placeholder="Cornish Game Hen with Tarragon" required/>
           				</div>
           				<div class="form-section">
            				<label for="img-url">Image URL:</label>
           					<input type="text" name="img-url" placeholder="http://imgur.com" required/>
           				</div>
           				<div class="form-section">
            				<label for="recipe-ingredients">Recipe Ingredients: </label>
            				<textarea name="recipe-ingredients" rows="10"   required></textarea>
          				</div>
          				<div class="form-section">
            				<label for="recipe-instructions">Recipe Instructions: </label>
            				<textarea name="recipe-instructions" rows="15"   required></textarea>
          				</div>
          				<div class="form-section">
            				<label for="recipe-notes">Recipe Notes: </label>
            				<textarea name="recipe-notes" rows="5"   required></textarea>
          				</div>
          				<div class="form-section">
			            	<p>Recipe Time:</p>

			            	<label for="recipe-time">
			            	<input type="radio" name="recipe-time" value="1" class="recipe-time-radio"/>
			         

			              	
			              	<div class="time">Can be made in under 45 minutes. </div>
			            	</label>

			            	<label for="recipe-time">
			            	<input type="radio" name="recipe-time" value="1" class="recipe-difficutly-radio"/>
			            	

			              	
			              	<div class="time">Can be made between 45 minutes and 1.5 hours.  </div>
			            	</label>

			            	<label for="recipe-time">
			            	<input type="radio" name="recipe-time" value="1" class="recipe-difficutly-radio"/>
			            	

			             
			              	<div class="time">Takes over 2 hours.</div>
			            	</label>

			            	<div class="button">
			            	 	<button class="new-button">Save and Post</button>
			            	</div>
			            </div>
					</form>

				</main>
				<Footer />
			</div>		)
	}
}

export default NewPost;