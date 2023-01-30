import React, { useState, useEffect } from "react";
import { getAllData } from "../data/filters";
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

export default function StudentChart() {
	const [student, setStudent] = useState("");
	const [title, setTitle] = useState("");
	const chartdata = getAllData;
	useEffect(() => {
		setTitle(setStudent(student.name));
	}, [student.name]);

	return (
		<div>
			<div>
				<h2>
					Chart of Student <span>{title}</span>
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
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="assingment" fontSize={8} />
				<YAxis type="number" domain={[0, 5]} />
				<Tooltip />
				<Legend />
				<Bar dataKey="difficult" radius={8} barSize={20} fill="#8884d8" />
				<Bar dataKey="nice" radius={8} barSize={20} fill="#82ca9d" />
			</BarChart>
		</div>
	);
}
