import React from "react";
import { useSelector, useDispatch } from "react-redux";

const StudentProfile = () => {
	const profile = useSelector((state) => state.profile);
	const dispatch = useDispatch;

	return (
		<div className="profile" key={profile.id}>
			<ul>
				<li>
					name: {profile.first_name} {profile.last_name}
				</li>
				<li> birthday: {profile.age} </li>
				<li>email: {profile.email}</li>
				<li>phone: {profile.Phone} </li>
				<img scr={profile.avatar} alt="profilepicture" />
			</ul>
		</div>
	);
};

export default StudentProfile;
