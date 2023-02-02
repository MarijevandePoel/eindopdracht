import React, { useState, useEffect } from "react";
import data from "../data/wincmockdata.json";
import { getAllData, groupedBy, sortNice } from "../data/filters";
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

let wincData = data;

export default function StudentChart({ name }) {
	const chartdata = groupedBy(wincData, "name");
	useEffect(() => console.log(chartdata));
	useEffect(() => console.log(sortNice()));
	return (
		<div>
			<div>
				<h2>
					Chart of Student <span>{name}</span>
				</h2>
				<button>datalog</button>
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
