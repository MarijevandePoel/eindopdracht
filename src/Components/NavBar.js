import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>Students</li>
				<li>About Us</li>
			</ul>
		</div>
	);
}

export default NavBar;
