import React, { useEffect, useState } from "react";
import "./RoomsList.css";

const RoomsList = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		fetch("/rooms")
			.then((res) => res.json())
			.then((room) => setRooms([...room]));
	}, []);

	return (
		<div>
			<h3>Available Rooms list</h3>
		</div>
	);
};

export default RoomsList;
