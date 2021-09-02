import React, { useState, useEffect } from "react";
import openRoomIcon from "../../../../Assets/MeetingRoomAssets/openRoomIcon.png";
import "./OpenRooms.css";

const OpenRooms = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		fetch("/rooms")
			.then((res) => res.json())
			.then((room) => setRooms([...room]));
	}, []);
	return (
		<div className="openRooms__section">
			<div className="openRooms__header">
				<img src={openRoomIcon} alt="" />
				<h3>Open Rooms</h3>
			</div>
			<div className="openRooms__roomList">
				{rooms.map((room) => {
					return (
						<div className="room__info">
							<p>{room.meetingID}</p>
							<p>{room.members}</p>
							<p>{room.joinStatus}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OpenRooms;
