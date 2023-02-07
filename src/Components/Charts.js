import React from "react";
import { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	//Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

import { sort25, sortDiff, sortNice } from "../data/filters";
import "../styles/charts.css";
export default function Chart() {
	const [chart, setChart] = useState([""]);
	const [title, setTitle] = useState("");
	let chartdata = sort25();
	useEffect(() => {
		setChart(chartdata);
	}, [chartdata]);

	return (
		<div className="chartBasis">
			<div>
				<h2>
					Chart for all Students and assignments <span>{title}</span>
				</h2>
			</div>

			<div></div>
			<BarChart
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
				<Bar dataKey="difficult" radius={8} barSize={20} fill="#8884d8" />
				<Bar dataKey="nice" radius={8} barSize={20} fill="#82ca9d" />
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="assignment" fontSize={8} />
				<YAxis type="number" domain={[0, 6]} />
				<Tooltip />
				<Legend />
			</BarChart>
			<button
				className="button"
				onClick={() => {
					console.log(sortNice());
					setChart(sortNice());
					setTitle("with the highest nice score");
				}}
			>
				Nice score
			</button>
			<button
				className="button"
				onClick={() => {
					console.log(sortDiff());
					setChart(sortDiff());
					setTitle("with the highest difficult score");
				}}
			>
				Difficult score
			</button>
		</div>
	);
}
