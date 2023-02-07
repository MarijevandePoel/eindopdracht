import React from "react";
import Footer from "./Footer";

import Chart from "./Charts";

import StudentBar from "./StudentBar";
import "../styles/home.css";

const Home = () => {
	return (
		<div className="home">
			<h2 className="homeTitle">Click on a student to get their chart.</h2>
			<StudentBar />

			<div className="barChartbasis">
				<Chart />
			</div>
			<div className="space"></div>
			<Footer />
		</div>
	);
};

export default Home;
