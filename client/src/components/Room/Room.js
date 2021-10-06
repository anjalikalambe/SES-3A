import React from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../Sidebar";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../components/Rooms/MeetingRooms/MeetingRooms.css";
import UserInfo from "./UserInfo/UserInfo";
import "./Room.css";

const Room = () => {
	const history = useHistory();
	return (
		<>
			<div className="room">
				<Sidebar />
				<h1>Room</h1>
				<UserInfo />
			</div>
		</>
	);
};

export default Room;
