import React, { useEffect, useState } from "react";
import "./MeetingRooms.css";
import ProfileCard from "./ProfileCard/ProfileCard";

const MeetingRooms = () => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		setCurrentUser({
			id: 123,
			firstname: "Abdul",
			lastname: "Abbou",
			profileurl:
				"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
			meetingRoom: null,
		});
	}, []);

	useEffect(() => {
		fetch("/users")
			.then((res) => res.json())
			.then((user) => setUsers([...user]));
	}, []);

	useEffect(() => {
		fetch("/rooms")
			.then((res) => res.json())
			.then((room) => setRooms([...room]));
	}, []);

	console.log(rooms);

	return (
		<div className="meetingRooms">
			<div className="header">
				<h1>Meeting Room</h1>
			</div>
			<div className="main">
				<ProfileCard userInfo={currentUser} />
			</div>
		</div>
	);
};

// {users &&
//     users.map(({ firstname, lastname, location, id }) => {
//         return <p>{firstname}</p>;
//     })}

export default MeetingRooms;
