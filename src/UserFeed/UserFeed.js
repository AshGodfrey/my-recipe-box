import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import UserDetails from '../UserDetails/UserDetails';
import RecipeSquares from '../RecipeSquares/RecipeSquares'
class UserFeed extends React.Component{ 
	render(){
		return(
			<main>
				<Navbar />
				<UserDetails />
				<RecipeSquares />
				<Footer />
			</main>		)
	}
}

export default UserFeed;