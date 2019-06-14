import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../Images/logo-2.png'

class Navbar extends React.Component{ 
	render(){
		return(
			<nav role="navigation">
				<div className="logo">
					<Link to={`/`}>
						<img src={logo} alt="magnifying glass search icon"/>
						</Link>
					</div>
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