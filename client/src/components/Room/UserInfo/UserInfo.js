import React, { useState } from "react";
import "./UserInfo.css";
import redHeart from "../../../Assets/UserProfile/redHeart.png";
import whiteHeart from "../../../Assets/UserProfile/whiteHeart.png";

const UserInfo = () => {
	const [likeStatus, setLikeStatus] = useState(false);

	const handleLikeFunction = () => {
		setLikeStatus(!likeStatus);
	};

	return (
		<div className="user-info-section">
			<div className="user-info-section-top">
				<div className="user-info-top">
					<button>Participants</button>
					<button>Messages</button>
					<button>Profile</button>
				</div>
				<div className="connected-user">
					<span>You're currently connected to:</span>
					<div className="connected-user-profile">
						<img
							className="user-profile-img"
							src="https://media-exp1.licdn.com/dms/image/C5603AQEkY3K05CxYbQ/profile-displayphoto-shrink_100_100/0/1561721402295?e=1639008000&v=beta&t=GhaDte1fHt_a4wlsRG586EK5pRuq7rNOeTgd2kHUZ_o"
							alt=""
						/>
						<div className="connected-user-like">
							<div className="connected-user-like-profile">
								<img
									className="like-status"
									src={likeStatus ? redHeart : whiteHeart}
									alt=""
									onClick={handleLikeFunction}
								/>
							</div>
							<h5>James</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="user-info-section-bottom">
				<h1>user info</h1>
			</div>
		</div>
	);
};

export default UserInfo;
