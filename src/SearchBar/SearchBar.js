import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './SearchBar.css'



class SearchBar extends React.Component{ 
	
	render(){
		return(
			<div className="wrap">
			   <div className="search">
			   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
			      <input 
			      	type="text" 
			      	className="searchTerm" 
			      	placeholder="Search Recipes"
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