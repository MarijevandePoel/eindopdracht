import React from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../data/filters";
import "../styles/studentProfile.css";
import { useEffect } from "react";

import data from "../data/wincmockdata.json";
import { groupedBy } from "../data/filters";
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

function StudentProfile() {
	const chartdata = groupedBy(wincData, "name");
	//const chartdata = sortNice(name);
	useEffect(() => console.log(chartdata));

	const { id } = useParams();

	const student = getStudent(id);
	useEffect(() => console.log(student));

	if (student !== undefined || student === chartdata.name) {
		return (
			<>
				<></>
				<div className="profile">
					<ul>
						{/* <h3> Student profile</h3> */}
						{/* {student !== undefined && ( */}
						<li>
							{student.first_name} {student.last_name}
						</li>
						{/* )} */}
						<li> {student.age}</li>
						<li> {student.email}</li>
						<li> {student.Phone}</li>
					</ul>
					<div className="avatar">
						<img src={student.avatar} width="85px" alt="Profile"></img>{" "}
					</div>
				</div>
				<div></div>
				<div>
					<BarChart
						className="studentChart"
						width={1200}
						height={500}
						data={chartdata[student.first_name]}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="assignment" fontSize={8} />
						<YAxis type="number" domain={[0, 6]} />
						<Tooltip />
						<Legend />
						<Bar dataKey="difficult" radius={8} barSize={20} fill="#8884d8" />
						<Bar dataKey="nice" radius={8} barSize={20} fill="#82ca9d" />
					</BarChart>
				</div>
			</>
		);
	}
}

export default StudentProfile;
