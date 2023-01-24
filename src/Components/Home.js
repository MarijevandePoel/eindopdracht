import React from "react";
//import { allData } from "../redux/sliceAndDiceSlice";
import {
	// getAllData,
	// getAllStudentData,
	getStudentNames,
	// getAllCourses,
	averageCourse,
} from "../data/filters";
import { useState, useEffect } from "react";

import Chart from "./Charts";
import StudentBar from "./StudentBar";

const Home = () => {
	const [chart, setChart] = useState("");

	const renderData = (event) => {
		event.preventDefault();
		console.log("klik");
		console.log(getStudentNames());
	};

	return (
		<div>
			<StudentBar />
			<button onClick={renderData}>data</button>

			<>
				<h2>plek voor een chart</h2>

				<div id="chart">
					<Chart />
				</div>
			</>
		</div>
	);
};

export default Home;
