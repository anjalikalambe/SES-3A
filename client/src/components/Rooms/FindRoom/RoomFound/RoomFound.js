import React from "react";
import "./RoomFound.css";

const RoomFound = () => {
	return (
		<div className="roomFound__section">
			<div className="roomFound__header">
				<h5>We have found the following room for you:</h5>
			</div>
			<div className="roomFound__matches">
				<div className="match">
					<div className="match__profile">
						<img src="" alt="" />
					</div>
					<div className="match__age">
						<p>27</p>
					</div>

					<div className="match__location">
						<p>Sydney, Australia</p>
					</div>
					<div className="match__interest">
						<p>Hiking</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomFound;
