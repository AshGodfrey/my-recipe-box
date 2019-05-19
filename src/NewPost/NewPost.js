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
            				<label for="recipe-summary">Recipe Summary: </label>
            				<textarea name="recipe-summary" rows="15"   required></textarea>
          				</div>
          				<div class="form-section">
			            	<p>Recipe Difficulty:</p>

			            	<label for="recipe-difficulty">
			            	<input type="radio" name="recipe-difficulty" value="1" class="recipe-difficutly-radio"/>
			         

			              	<span>Beginner</span>
			              	<div class="difficulty">Can be made or prepared by someone with minimal cooking skills. </div>
			            	</label>

			            	<label for="recipe-difficulty">
			            	<input type="radio" name="recipe-difficulty" value="1" class="recipe-difficutly-radio"/>
			            	

			              	<span>Intermediate</span>
			              	<div class="difficulty">Can be made by the typical hobby chef, may require several pans or specialized equipment.  </div>
			            	</label>

			            	<label for="recipe-difficulty">
			            	<input type="radio" name="recipe-difficulty" value="1" class="recipe-difficutly-radio"/>
			            	

			              	<span>Advanced</span>
			              	<div class="difficulty">Can be made by enthusiastic and skilled home chefs. Recipes will likely require special techniques or equipment.  </div>
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