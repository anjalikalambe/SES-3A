import React from "react";
import calendar from "../../../../Assets/MeetingRoomAssets/calendar.png";
import location from "../../../../Assets/MeetingRoomAssets/location.png";
import love from "../../../../Assets/MeetingRoomAssets/love.png";
const RoomFoundMatch = () => {
	return (
		<div className="roomFound__matches">
			<div className="match">
				<div className="match__profile">
					<img
						src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg"
						alt=""
					/>
				</div>
				<div className="match__age">
					<img src={calendar} alt="" />
					<p>27</p>
				</div>

				<div className="match__location">
					<img src={location} alt="" />
					<p>Sydney, Australia</p>
				</div>
				<div className="match__interest">
					<img src={love} alt="" />

					<p>Hiking</p>
				</div>
			</div>
		</div>
	);
};

export default RoomFoundMatch;
