import React, { useEffect, useState } from "react";
import "./RoomInfo.css";
import joinIcon from "../../../../../Assets/MeetingRoomAssets/joinIcon.png";
import maleImg from "../../../../../Assets/MeetingRoomAssets/maleImg.png";
import femaleIcon from "../../../../../Assets/MeetingRoomAssets/femaleIcon.png";
import matchesImg from "../../../../../Assets/MeetingRoomAssets/matchesImg.png";
import roomLocked from "../../../../../Assets/MeetingRoomAssets/roomLocked.png";
import { Button } from "@material-ui/core";

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
				<h5>{status ? <Button style={{fontSize: "smaller"}}href="/roomZone">Join Room</Button> : <h4>Room Locked</h4>}</h5>
				<img src={status ? joinIcon : roomLocked} alt="" />
			</div>
		</div>
	);
};

export default RoomInfo;
