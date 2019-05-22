import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './RecipeSquares.css';
import ApiContext from '../ApiContext'


class RecipeSquares extends React.Component{ 
  static contextType= ApiContext

  recipeHTML(recipe){
    var recipeLink = "/recipe/" + recipe.id
    return (<div class="cell"> 
              <Link to={recipeLink}>
                <img className="recipe-image" src={recipe.url}/>
                     <div class="cell-info">
                        <li className="recipe-name">{recipe.name}</li>
                      </div>
              </Link>
            </div>
    );
  }


	render(){
    var recipeArray = this.context.recipes;
    var recipes = recipeArray.map((recipe) => this.recipeHTML(recipe))
		return(
			<main>
      			<div class="container">
        			<div class="grid">
          			{recipes}	
              </div>
      			</div>
	 		</main>	
	 )
 }
}

export default RecipeSquares;