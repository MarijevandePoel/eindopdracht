import React from "react";
//import { sort15, sortDiff, sortNice } from "../data/filters";
//import { useState, useEffect } from "react";

import Chart from "./Charts";

import StudentBar from "./StudentBar";
import "../styles/home.css";

const Home = () => {
	return (
		<div className="home">
			<h2>Click on a student to get their chart.</h2>
			<StudentBar />

			<div className="barChartbasis">
				<Chart />
			</div>
		</div>
	);
};

export default Home;
