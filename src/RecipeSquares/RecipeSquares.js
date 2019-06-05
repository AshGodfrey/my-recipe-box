import React from 'react';
import './RecipeSquares.css';
import ApiContext from '../ApiContext'
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
    return (<div className="cell" key={recipe.id} > 
                <img className="recipe-image" src={recipe.url} alt="this recipe" />
                     <div className="cell-info">
                      <li className="recipe-name">{recipe.name}</li>
                      </div>
            
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
            placeholder="search recipes by title"
            /> 
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      	<div className="container">
        	<div className="grid">
          	{recipes}	
          </div>
      	</div>  
	 		</div>	
	 )
 }
}

export default RecipeSquares;