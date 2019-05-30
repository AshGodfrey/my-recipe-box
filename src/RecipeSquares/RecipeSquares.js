import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './RecipeSquares.css';
import ApiContext from '../ApiContext'
import Popup from '../Popup/Popup'
import '../SearchBar/SearchBar.css'

class RecipeSquares extends React.Component{ 
  static contextType= ApiContext

  constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)});
  }

  recipeHTML(recipe){
    var recipeLink = "/recipe/" + recipe.id;
    return (<div class="cell" > 
              <Link to={recipeLink}>
                <img className="recipe-image" src={recipe.url} />
                     <div class="cell-info">
                      <li className="recipe-name">{recipe.name}</li>
                      </div>
              </Link>
            </div>
    );
  }


	render(){
    let filteredRecipes= this.context.recipes.filter(
      (recipe) => {
        return recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    var recipes = filteredRecipes.map((recipe) => this.recipeHTML(recipe))
		return(
			<div className="user-feed">
        <h1 className="community-title">Community Recipes</h1>
        <div className="search">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <input type="text"
            className="searchTerm"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            placeholder="search for recipes"
            /> 
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      	<div class="container">
        	<div class="grid">
          	{recipes}	
          </div>
      	</div>  
	 		</div>	
	 )
 }
}

export default RecipeSquares;