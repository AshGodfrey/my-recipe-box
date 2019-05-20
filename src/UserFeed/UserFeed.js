import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import UserDetails from '../UserDetails/UserDetails';
import RecipeSquares from '../RecipeSquares/RecipeSquares';
import SearchBar from '../SearchBar/SearchBar';
import './UserFeed.css';

class UserFeed extends React.Component{ 
	render(){
		return(
			<main>
				<Navbar />
				<SearchBar />
				<RecipeSquares />
				<Footer />
			</main>		)
	}
}

export default UserFeed;