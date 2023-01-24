import NavBar from "./NavBar.js";
import "../styles/header.css";

function Header() {
	return (
		<div id="headerNav">
			<h1>Header</h1>
			{<NavBar />}
		</div>
	);
}

export default Header;
