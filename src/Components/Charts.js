import React from "react";
import { ReactDOM, useState, useEffect } from "react";
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

export default function Chart() {
	const [chart, setChart] = useState("");
	const [title, setTitle] = useState("");
	useEffect(() => {
		setChart(chartdata);
	}, []);
	const chartdata = sort25();

	return (
		<div>
			<div>
				<h2>
					Chart for all Students and assignments <span>{title}</span>
				</h2>
			</div>
			<button
				className="button"
				onClick={() => {
					setChart(sort25());
					setTitle("first Module");
				}}
			>
				first Module
			</button>
			<button
				className="button"
				onClick={() => {
					setChart(sortNice());
					setTitle("with the highest nice score");
				}}
			>
				Nice score
			</button>
			<button
				className="button"
				onClick={() => {
					setChart(sortDiff());
					setTitle("with the highest difficult score");
				}}
			>
				Difficult score
			</button>
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
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="assignment" fontSize={8} />
				<YAxis type="number" domain={[0, 5]} />
				<Tooltip />
				<Legend />
				<Bar dataKey="difficult" radius={8} barSize={20} fill="#8884d8" />
				<Bar dataKey="nice" radius={8} barSize={20} fill="#82ca9d" />
			</BarChart>
		</div>
	);
}
