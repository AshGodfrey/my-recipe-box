import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './SearchBar.css'



class SearchBar extends React.Component{ 
	render(){
		return(
			<div class="wrap">
			   <div class="search">
			   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
			      <input type="text" class="searchTerm" placeholder="Search Recipes"/>
			      <button type="submit" class="searchButton">
			        <i class="fa fa-search"></i>
			     </button>
			   </div>
			</div>
		)
	}
}

export default SearchBar;