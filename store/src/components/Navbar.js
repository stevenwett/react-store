import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className="nav-wrapper">
			<div className="container">
				<ul>
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/product-line">Product Line</NavLink></li>
					<li><NavLink to="/options">Options</NavLink></li>
					<li><NavLink to="/order">Order</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Navbar);
