import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import './Navbar.css';
import UserFeed from '../UserFeed/UserFeed';

class Navbar extends React.Component{ 
	render(){
		return(
			<nav role="navigation">
				<div class="logo">logo</div>
				<div class="links">
				<Link to={`/user`}>
					My Feed
				</Link>
				<Link to={`/new`}>
					Create Post
				</Link>
				</div>
			</nav>		)
	}
}

export default Navbar;