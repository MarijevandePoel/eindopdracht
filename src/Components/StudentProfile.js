import React from "react";
import { useParams } from "react-router-dom";
import getStudent from "../data/filters";
import "../styles/studentProfile.css";
import { useState, useEffect } from "react";

function StudentProfile() {
	const { id } = useParams();

	const [student, setStudent] = useState("");

	useEffect(() => {
		setStudent(getStudent(id));
	}, [id]);

	useEffect(() => {
		console.log(student);
	}, [student]);

	return <> {student !== undefined && { student }}</>;
}

export default StudentProfile;
