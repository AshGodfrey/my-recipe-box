import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './RecipeSquares.css';


class RecipeSquares extends React.Component{ 
	render(){
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