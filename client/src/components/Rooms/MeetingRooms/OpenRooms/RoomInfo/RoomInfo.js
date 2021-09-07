import React from "react";
import "./RoomInfo.css";
import joinIcon from "../../../../../Assets/MeetingRoomAssets/joinIcon.png";
import maleImg from "../../../../../Assets/MeetingRoomAssets/maleImg.png";
import femaleIcon from "../../../../../Assets/MeetingRoomAssets/femaleIcon.png";
import matchesImg from "../../../../../Assets/MeetingRoomAssets/matchesImg.png";

const RoomInfo = ({ roomInfo }) => {
	return (
		<div className="roomInfo__section">
			<div className="roomInfo__section-top">
				<div className="roomInfo__name">
					<h4>{roomInfo.roomName}</h4>
				</div>
				<div className="roomInfo__information">
					<div className="roomInfo__roomGenders">
						<p>
							<img src={maleImg} />
							{roomInfo.males}
						</p>
						<p>
							<img src={femaleIcon} />
							{roomInfo.females}
						</p>
					</div>
					<div className="roomInfo__matches">
						<img className="matches__img" src={matchesImg} alt="" />
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
