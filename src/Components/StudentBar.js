import React from "react";

import { Outlet, Link } from "react-router-dom";

import getStudentNames from "../data/filters";
import "../styles/studentbar.css";

function StudentBar() {
	const allStudents = getStudentNames();

	return (
		<>
			<nav className="studentBar">
				{allStudents.map((student) => (
					<Link
						className="studentLink"
						to={`/studentprofile/${student.first_name} `}
						key={student.id}
					>
						{student.first_name}
					</Link>
				))}
			</nav>
			<Outlet />
		</>
	);
}

export default StudentBar;
