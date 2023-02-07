import React from "react";
//import { useState, useEffect } from "react";
import {
	LineChart,
	Line,
	//Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

import { getAllData } from "../data/filters";
import "../styles/charts.css";
export default function Chart() {
	let chartdata = getAllData();
	return (
		<div className="chartNice">
			<div></div>
			<LineChart
				width={1200}
				height={500}
				data={chartdata}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<Line
					type="monotone"
					dataKey="nice"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>

				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="assignment" fontSize={8} />
				<YAxis type="number" domain={[0, 6]} />
				<Tooltip />
				<Legend />
			</LineChart>
		</div>
	);
}
