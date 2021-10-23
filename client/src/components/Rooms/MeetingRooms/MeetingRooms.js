import React, { useEffect, useState } from "react";
import "./MeetingRooms.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import RoomsList from "./RoomsList/RoomsList";
import roomsIcon from "../../../assets/MeetingRoomAssets/RoomsIcons.png";
import OpenRooms from "./OpenRooms/OpenRooms";
import FindRoom from "../FindRoom/FindRoom";
import Sidebar from "../../../components/Sidebar"


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
		<>
		<Sidebar />
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
		</>
	);
};

export default MeetingRooms;
