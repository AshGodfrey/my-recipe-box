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
    return (<div class="cell"  onClick={this.togglePopup.bind(this)}> 
              
                <img className="recipe-image" src={recipe.url}/>
                     <div class="cell-info">
                      <li className="recipe-name">{recipe.name}</li>
                      </div>
                      {this.state.showPopup ? 
                      <Popup
                        text={
                          <div className="recipe-text">
                            <h1 className="recipe-name">{recipe.name}</h1>
                            <h2>Ingredients</h2>
                            <p><pre>{recipe.ingredients}</pre></p>
                            <h2>Instructions</h2>
                            <p><pre>{recipe.instructions}</pre></p>
                            <h2>Notes</h2>
                            <p><pre>{recipe.notes}</pre></p>
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