import React from "react";
import "./RoomInfo.css";
import joinIcon from "../../../../../Assets/MeetingRoomAssets/joinIcon.png";

const RoomInfo = ({ roomInfo }) => {
	return (
		<div className="roomInfo__section">
			<div className="roomInfo__section-top">
				<div className="roomInfo__name">
					<h4>{roomInfo.roomName}</h4>
				</div>
				<div className="roomInfo__information">
					<div className="roomInfo__roomGenders">
						<p>Genders here</p>
					</div>
					<div className="roomInfo__matches">
						<p>10 people match your interests.</p>
					</div>
				</div>
				<div className="roomInfo__topMatches">
					<p>Top Matches</p>
					{roomInfo.participants.map((participant) => {
						return (
							<img
								className="participantImg"
								src={participant.profileurl}
							/>
						);
					})}
				</div>
			</div>
			<div className="roomInfoJoin__button">
				<h5>Join Room</h5>
				<img src={joinIcon} alt="" />
			</div>
		</div>
	);
};

export default RoomInfo;
