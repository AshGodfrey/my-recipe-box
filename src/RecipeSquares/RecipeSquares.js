import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './RecipeSquares.css';
import ApiContext from '../ApiContext'
import Popup from '../Popup/Popup'

class RecipeSquares extends React.Component{ 
  static contextType= ApiContext

constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  recipeHTML(recipe){
    var recipeLink = "/recipe/" + recipe.id
    return (<div className="cell"  onClick={this.togglePopup.bind(this)}> 
              
                <img className="recipe-image" src={recipe.url}/>
                     <div className="cell-info">
                        <li className="recipe-name">{recipe.name}</li>
                      </div>
                      {this.state.showPopup ? 
                <Popup
                  text={
                    <div className="recipe-text">
                      <h1 className="recipe-name">{recipe.name}</h1>
                      <h2>Ingredients</h2>
                      <p>{recipe.ingredients}</p>
                      <h2>Instructions</h2>
                      <p>{recipe.instructions}</p>
                      <h2>Notes</h2>
                      <p>{recipe.notes}</p>
                    </div>
                  }
                  closePopup={this.togglePopup.bind(this)}
                />
                : null
              }
            
            </div>
    );
  }


	render(){
    var recipeArray = this.context.recipes;
    var recipes = recipeArray.map((recipe) => this.recipeHTML(recipe))
		return(
			<main className="squares-main">
            <h1>My Recipes</h1>
      			<div className="container">
        			<div className="grid">
          			{recipes}	
              </div>
      			</div>
            
	 		</main>	
	 )
 }
}

export default RecipeSquares;