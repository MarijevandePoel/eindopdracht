import React from "react";
import { ReactDOM, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { averageCourse, getAllCourses } from "../data/filters";

const Chart = () => {
	const [chart, setChart] = useState("");
	useEffect(() => {
		setChart(averageCourse);
	}, [averageCourse]);

	let baseChart = {};
};
export default Chart;
