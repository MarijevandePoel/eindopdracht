import React from "react";
import { useParams } from "react-router-dom";
import { getStudent, groupedBy } from "../data/filters";
import "../styles/studentProfile.css";
//import { useState, useEffect } from "react";
import StudentChart from "./StudentChart";

function StudentProfile() {
	const { id } = useParams();

	const student = getStudent(id);

	// useEffect(() => {
	// 	console.log(student);
	// }, [student]);

	return (
		<>
			<>
				<h2> Profile</h2>
			</>
			<div className="profile">
				<ul>
					{student !== undefined && (
						<li>
							{student.first_name} {student.last_name}
						</li>
					)}
					<li> {student.age}</li>
					<li> {student.email}</li>
					<li> {student.Phone}</li>
				</ul>
				<div className="avatar">
					<img src={student.avatar} width="85px" alt="Profile"></img>{" "}
				</div>
			</div>
			<StudentChart {...student} />
		</>
	);
}

export default StudentProfile;
