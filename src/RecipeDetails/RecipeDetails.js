import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import './RecipeDetails.css'
import UserFeed from '../UserFeed/UserFeed';
import Navbar from '../Navbar/Navbar'
import ApiContext from '../ApiContext';
import config from '../config';
import PropType from 'prop-types'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


class RecipeDetails extends React.Component {
	static contextType= ApiContext;

	constructor(props){
    super(props);
    };

    timeToCook({time}) {
    	if({time} == "medium" ){
    		return (
    			<p>test</p>)
    	}
    }

	render(){
		let currentRecipe = this.context.recipes.find(recipe => recipe.id == this.props.match.params.activeRecipeId)

		return(
		<div id="recipe-details-container">
			<div id="recipe-details">
				<div id="back-link">
					<Link to="/user">
						<button><FontAwesomeIcon icon={ faArrowLeft} className="back-arrow"/></button>
					</Link>
				</div>
				<h1>{currentRecipe.name}</h1>
				<div className="line"></div>
				<img src={currentRecipe.url} id="details-img" />
				<div id="recipe-specifics">
					<h2>Recipe Ingredients</h2>
					<p className="recipe-text">
						{currentRecipe.ingredients}
					</p>
					<h2>Recipe Instructions</h2>
					<p className="recipe-text">
						{currentRecipe.instructions}
					</p>
					<h2>Recipe Time</h2>
					<p className="recipe-text">
						{currentRecipe.cooking_speed}
					</p>
				</div>
			</div>
			<Footer />
		</div>
		)
	}
}

export default RecipeDetails;