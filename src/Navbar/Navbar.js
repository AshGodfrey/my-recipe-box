import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import './Navbar.css';
import UserFeed from '../UserFeed/UserFeed';

class Navbar extends React.Component{ 
	render(){
		return(
			<nav role="navigation">
				<div className="logo">
				<Link to={`/`}>
					logo
					</Link></div>
				<div className="links">
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