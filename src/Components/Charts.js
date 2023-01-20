import React from "react";
import { useSelector } from "react-redux";

const Chart = () => {
	const allCourses = useSelector((state) => state);

	return allCourses;
};

export default Chart;

// const allData = data;
// console.log(allData);

// const assignment = allData.map((a) => a.assignment);
// console.log(assignment);

// const allStudents = allData.map((a) => a.name);

// let students = [...new Set(allStudents)];
// console.log(students);

// const nice = allData.map((a) => a.nice);
// const totalNice = nice.reduce((prev, curr) => prev + curr, 0);
// const averageNice = () => totalNice / assignment.lenght || 0;
// console.log(averageNice);

// const difficult = allData.map((a) => a.difficult);
// const totalDifficult = difficult.reduce((prev, curr) => prev + curr, 0);
// const averageDifficult = () => totalDifficult / assignment.length || 0;
// console.log(averageDifficult);

// let options = {
// 	chart: {
// 		type: "line",
// 	},
// 	series: [
// 		{
// 			name: "sales",
// 			data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
// 		},
// 	],
// 	xaxis: {
// 		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
// 	},
// };

// let chart = new ApexCharts(document.querySelector("#chart"), options);

// chart.render(chart);

// export default chart;
