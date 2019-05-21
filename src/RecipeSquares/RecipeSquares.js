import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './RecipeSquares.css';
import ApiContext from '../ApiContext'


class RecipeSquares extends React.Component{ 
  static contextType=ApiContext;

	render(){
    var { activeRecipe } = this.props
		return(
			<main>
      			<div class="container">
        			<div class="grid">
          				<div class="cell"> <Link to={`/recipe`}>
           					 <div class="cell-info">
              					<li>Name of Recipe</li>
                       
           					 </div>
                     </Link>
          				</div>
          				<div class="cell">
            				<div class="cell-info">
              					<li>Name of Recipe</li>
           	 				</div>
         				</div>
          				<div class="cell">
            				<div class="cell-info">
            		  			<li>Name of Recipe</li>
            				</div>
          				</div>
          				<div class="cell">
            				<div class="cell-info">
              					<li>Name of Recipe</li>
            				</div>
          				</div>
          				<div class="cell">
           					<div class="cell-info">
              					<li>Name of Recipe</li>
            				</div>
         				</div>
          				<div class="cell">
            				<div class="cell-info">
              					<li>Name of Recipe</li>
            				</div>
          				</div>
          				<div class="cell">
            				<div class="cell-info">
             					<li>Name of Recipe</li>
           	 				</div>
          				</div>
          				<div class="cell">
            				<div class="cell-info">
              					<li>Name of Recipe</li>
            				</div>
          				</div>
          				<div class="cell">
            				<div class="cell-info">
              					<li>Name of Recipe</li>
            				</div>
          				</div>
      				</div>
      			</div>
	 		</main>	
	 )
 }
}

export default RecipeSquares;