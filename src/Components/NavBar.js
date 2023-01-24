import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
	return (
		<>
			<nav className="navBar">
				<Link className="navBarLink" to="/">
					Home
				</Link>

				<Link className="navBarLink" to="/StudentProfile">
					{" "}
					Students{" "}
				</Link>
			</nav>
			<Outlet />
		</>
	);
}

export default NavBar;
