import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Room from "./components/Room/Room";

import { withRouter } from "react-router-dom";
import MeetingRooms from "./components/Rooms/MeetingRooms/MeetingRooms";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Register/RegistrationPage";
import { useStore } from "./stores/helpers/UseStore";
import { observer } from "mobx-react-lite";
import UserRoute from "./utils/UserRoute";
import UnprotectedRoute from "./utils/UnprotectedRoute";

const App = () => {
	const { userAuth } = useStore(); //MobX persisted store
	const [users, setUsers] = useState([]);
	const [data, setData] = useState([]);



	//Check if the authentication state is valid on page mount
	console.log(JSON.stringify(userAuth));

	useEffect(() => {
		userAuth.validateToken();

		// fetch('/users') //running port3000
		// 	.then(res => res.json())
		// 	.then(users => setUsers(users));

		fetch("/members")
			.then((res) => res.json())
			.then((data) => setData({ data }, console.log(data)));

	}, []);

	return (
		<div className="App">
			<UnprotectedRoute path='/' exact component={Welcome} />
			<UnprotectedRoute path='/profile' exact component={Profile} />
			<UnprotectedRoute path='/login' exact component={LoginPage} />
			<UnprotectedRoute path='/register' exact component={RegistrationPage} />

			{userAuth.loggedIn}
			<UserRoute path='/rooms' exact component={MeetingRooms} />


			{/* example api succesful fetch */}
			<div>
				{typeof data.members === 'undefined' ? (
					<p>...loading</p>
				) : (
					data.members.map((member, i) => <p key={i}>{member}</p>)
				)}
			</div>
		</div>
	);
};

export default withRouter(observer(App));
