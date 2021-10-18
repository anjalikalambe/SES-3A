import React, { useEffect, useState } from "react";
import "./RoomInfo.css";
import joinIcon from "../../../../../assets/MeetingRoomAssets/joinIcon.png";
import maleImg from "../../../../../assets/MeetingRoomAssets/maleImg.png";
import femaleIcon from "../../../../../assets/MeetingRoomAssets/femaleIcon.png";
import matchesImg from "../../../../../assets/MeetingRoomAssets/matchesImg.png";
import roomLocked from "../../../../../assets/MeetingRoomAssets/roomLocked.png";

const RoomInfo = ({ roomInfo }) => {
	const [status, setStatus] = useState(false);
	useEffect(() => {
		setStatus(roomInfo.joinStatus);
	}, [roomInfo]);
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
			<div
				className={
					status
						? "roomInfoJoin__button"
						: "roomInfoJoin__buttonClosed"
				}
			>
				<h5>{status ? <h4>Join Room</h4> : <h4>Room Locked</h4>}</h5>
				<img src={status ? joinIcon : roomLocked} alt="" />
			</div>
		</div>
	);
};

export default RoomInfo;
