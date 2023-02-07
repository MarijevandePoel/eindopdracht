import NavBar from "./NavBar.js";
import "../styles/header.css";

function Header() {
	return (
		<div id="headerNav">
			<h2>Student Dashboard</h2>
			{<NavBar />}
		</div>
	);
}

export default Header;
