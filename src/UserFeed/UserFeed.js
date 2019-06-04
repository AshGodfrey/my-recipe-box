import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeSquares from '../RecipeSquares/RecipeSquares';
import './UserFeed.css';

class UserFeed extends React.Component{ 
	render(){
		return(
			<main>
				<Navbar />
				<RecipeSquares />
				<Footer />
			</main>		)
	}
}

export default UserFeed;