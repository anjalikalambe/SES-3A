import React from "react";
import "./RoomFound.css";

import RoomFoundMatch from "./RoomFoundMatch";

const RoomFound = () => {
	return (
		<div className="roomFound__section">
			<div className="roomFound__header">
				<h5>We have found the following room for you:</h5>
				<RoomFoundMatch />
				<RoomFoundMatch />
				<RoomFoundMatch />
			</div>
			<div className="roomFound__joinBtn">
				<h5>Join Room</h5>
			</div>
		</div>
	);
};

export default RoomFound;
