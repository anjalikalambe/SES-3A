import React, { useState, useEffect } from "react";
import openRoomIcon from "../../../../Assets/MeetingRoomAssets/openRoomIcon.png";
import personIcon from "../../../../Assets/MeetingRoomAssets/personIcon.png";
import joinIcon from "../../../../Assets/MeetingRoomAssets/joinIcon.png";

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
							<div className="roomName__box">
								<p>{room.roomName}</p>
							</div>

							<div className="participantAmount">
								<img className="personIcon" src={personIcon} />
								<p>{room.members}</p>
							</div>
							<div className="roomStatus">
								<p>{room.joinStatus ? "Open" : "Closed"}</p>
							</div>
							<div className="openRoomStatus">
								{room.participants.map((participant) => {
									return (
										<img
											className="participant__img"
											src={participant.profileurl}
										/>
									);
								})}
							</div>

							<div className="joinRoom__button">
								<h5>Join Room</h5>
								<img src={joinIcon} alt="" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OpenRooms;
