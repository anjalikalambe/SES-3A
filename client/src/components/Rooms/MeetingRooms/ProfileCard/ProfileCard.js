import React, { useEffect } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ userInfo }) => {
	useEffect(() => {
		console.log(userInfo);
	}, []);

	return (
		<div className="profilecard">
			<img src={userInfo.profileurl} alt="" />
			<h3>
				Logged in as: {userInfo.firstname} {userInfo.lastname}
			</h3>
			<p>ID: {userInfo.id}</p>
			<p>
				Current Room:{" "}
				{userInfo.meetingRoom ? userInfo.meetingRoom : "None"}
			</p>
		</div>
	);
};

export default ProfileCard;
