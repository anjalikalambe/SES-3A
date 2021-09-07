import React from "react";
import "./FindRoom.css";
import findRoom from "../../../Assets/MeetingRoomAssets/findRoom.png";
import search from "../../../Assets/MeetingRoomAssets/search.png";
import RoomFound from "./RoomFound/RoomFound";

const FindRoom = () => {
	return (
		<div className="findRoom__section">
			<div className="findRoom__header">
				<img src={findRoom} alt="" />
				<h3>Find a room</h3>
			</div>
			<div className="findRoom__search">
				<img src={search} alt="" />
				<h5>Search</h5>
			</div>
			<div className="roomsFound__section">
				<span>Meet people who share similar interests to you.</span>
				<RoomFound />
			</div>
		</div>
	);
};

export default FindRoom;
