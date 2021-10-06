import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
	return (
		<div className="user-info-section">
			<div className="user-info-top">
				<button>Participants</button>
				<button>Messages</button>
				<button>Profile</button>
			</div>
			<div className="connected-user">
				<span>You're currently connected to:</span>
			</div>
		</div>
	);
};

export default UserInfo;
