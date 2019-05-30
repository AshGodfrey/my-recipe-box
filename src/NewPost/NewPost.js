import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './NewPost.css';
import ApiContext from '../ApiContext'
import config from '../config'


class NewPost extends React.Component{ 
	handleChange(event) {
		this.setState({value:event.target.value});
	}

	static contextType = ApiContext;

	handleSubmit = e => {
		e.preventDefault()

		const newRecipe = {
			name: e.target['recipe-name'].value,
			url: e.target['img-url'].value,
			ingredients: e.target['recipe-ingredients'].value,
			instructions: e.target['recipe-instructions'].value,
			notes: e.target['recipe-notes'].value,
			cooking_speed: e.target['recipe-time'].value,
		}

      fetch(`${config.API_ENDPOINT}/recipes`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newRecipe),
      })
        .then(res => {
          if (!res.ok)
           return res.json().then(e => Promise.reject(e))
        	return res.json()
        })
        .then(newRecipe => {
          this.context.addRecipe(newRecipe)
          this.props.history.push(`/user`)
        })
        .catch(error => {
          console.error({ error })
        })
	}
	render(){
		return(
			<div>
				<Navbar />
				<main className="body"> 
					<header>
					<h1>New Recipe</h1>
					</header>

					<form onSubmit={this.handleSubmit}id="new-post">
						<div className="form-section">
            				<label htmlFor="recipe-name">Recipe Name:</label>
           					<input type="text" name="recipe-name" placeholder="Cornish Game Hen with Tarragon" required/>
           				</div>
           				<div className="form-section">
            				<label htmlFor="img-url">500 x 500 Image URL:</label>
           					<input type="text" name="img-url" placeholder="http://imgur.com" required/>
           				</div>
           				<div className="form-section">
            				<label htmlFor="recipe-ingredients">Recipe Ingredients: </label>
            				<textarea name="recipe-ingredients" rows="10"   required></textarea>
          				</div>
          				<div className="form-section">
            				<label htmlFor="recipe-instructions">Recipe Instructions: </label>
            				<textarea name="recipe-instructions" rows="15"   required></textarea>
          				</div>
          				<div className="form-section">
            				<label htmlFor="recipe-notes">Recipe Notes: </label>
            				<textarea name="recipe-notes" rows="5"   required></textarea>
          				</div>
          				<div className="form-section">
			            	<p>Recipe Time:</p>


			            	<input type="radio" name="recipe-time" value="slow" className="recipe-time-radio"/>
			            	<label htmlFor="recipe-time">Takes under 45 minutes.</label><br/>
			            	

			            	<input type="radio" name="recipe-time" value="slow" className="recipe-time-radio"/>
			            	<label htmlFor="recipe-time">Takes between 45 minutes and 2 hours</label><br/>
			            	
			            	
			            	
			            	<input type="radio" name="recipe-time" value="slow" className="recipe-time-radio"/>
			            	<label htmlFor="recipe-time">Takes over 2 hours.</label><br/>
			            	

			         

			            	<div className="button">
			            	 	<button className="new-button" type="submit">Save and Post</button>
			            	</div>
			            </div>
					</form>

				</main>
				<Footer />
			</div>		)
	}
}

export default NewPost;