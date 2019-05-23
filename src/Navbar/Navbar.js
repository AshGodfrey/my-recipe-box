import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import './Navbar.css';
import UserFeed from '../UserFeed/UserFeed';
import logo from '../Images/logo-2.png'

class Navbar extends React.Component{ 
	render(){
		return(
			<nav role="navigation">
				<div className="logo">
				<Link to={`/`}>
					<img src={logo}/>
					</Link></div>
				<div className="links">
				<Link to={`/user`} className="nav-link">
					<li>Feed</li>
				</Link>
				<Link to={`/new`} className="nav-link">
					<li>New</li>
				</Link>
				</div>
			</nav>		)
	}
}

export default Navbar;