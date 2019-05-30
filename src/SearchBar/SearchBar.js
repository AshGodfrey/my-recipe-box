import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './SearchBar.css'
import {RecipeArray} from '../RecipeSquares/RecipeSquares'
import ApiContext from '../ApiContext'
import RecipeSquares from '../RecipeSquares/RecipeSquares'


class SearchBar extends React.Component{ 
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}
	static contextType= ApiContext

	updateSearch(event){
		this.setState({search: event.target.value.substr(0,20)});
	}
	render(){
		let filteredRecipes = this.context.recipes.filter(
			(recipe) => {
				return recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
			);
		return(
			<div className="wrap">
				<h1 classNameName="community-h1">Community Recipes</h1>
				   <div className="search">
				   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
				      <input type="text" 
					      className="searchTerm" 
					      value={this.state.search}
					      onChange={this.updateSearch.bind(this)}
					    />
				      <button type="submit" className="searchButton">
				        <i className="fa fa-search"></i>
				     </button>
				   </div>
				   
			</div>
		)
	}
}

export default SearchBar;