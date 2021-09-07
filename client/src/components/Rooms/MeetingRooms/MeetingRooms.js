import React, { useEffect, useState } from "react";
import "./MeetingRooms.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import RoomsList from "./RoomsList/RoomsList";
import roomsIcon from "../../../Assets/MeetingRoomAssets/RoomsIcons.png";
import OpenRooms from "./OpenRooms/OpenRooms";
import FindRoom from "../FindRoom/FindRoom";

const MeetingRooms = () => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState({});

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

	return (
		<div className="meetingRooms">
			<div className="header">
				<img src={roomsIcon} alt="" />
				<h1>Rooms</h1>
			</div>
			<div className="meetingRooms__main">
				<OpenRooms />
				<FindRoom />
			</div>
		</div>
	);
};

// {users &&
//     users.map(({ firstname, lastname, location, id }) => {
//         return <p>{firstname}</p>;
//     })}

export default MeetingRooms;
