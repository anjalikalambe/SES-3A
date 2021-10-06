import React from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../Sidebar";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../components/Rooms/MeetingRooms/MeetingRooms.css";

const Room = () => {
	const history = useHistory();
	return (
		<>
			<div>
				<Sidebar />
				<h1>Hwello</h1>
			</div>
		</>
	);
};

export default Room;
