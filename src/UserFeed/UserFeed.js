import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class UserFeed extends React.Component{ 
	render(){
		return(
			<main>
				<Navbar />
			</main>		)
	}
}

export default UserFeed;