import React from "react";

//import { useParams } from "react-router-dom";
import getAllStudentData from "../data/filters";
import "../styles/studentProfile.css";

let profile = getAllStudentData;
console.log(profile());

function StudentProfile() {
	return (
		<div>
			<div className="profile" key={profile.id}>
				<ul>
					<li>
						name: {profile.first_name} {profile.last_name}
					</li>
					<li> birthday: {profile.age} </li>
					<li>email: {profile.email}</li>
					<li>phone: {profile.Phone} </li>
					<img scr={profile.avatar} alt="profilepicture" width="75px"></img>
				</ul>
			</div>

			<div className="studentChart"> ruimte voor een chart</div>
		</div>
	);
}

export default StudentProfile;
