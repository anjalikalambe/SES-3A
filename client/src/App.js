import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withRouter } from "react-router-dom";
			
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import MeetingRooms from "./components/Rooms/MeetingRooms/MeetingRooms";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Register/RegistrationPage";
import RoomZone from './pages/Rooms';
			
import { useStore } from "./stores/helpers/UseStore";
import { observer } from "mobx-react-lite";
import UserRoute from "./utils/UserRoute";
import UnprotectedRoute from "./utils/UnprotectedRoute";
import Reports from "./pages/Reports";
import Chat from "./pages/Chat/index";


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
			{/* show navbar only when not signed in */}
			{!userAuth.loggedIn ? <Header /> : <div></div>}

			<UnprotectedRoute path='/' exact component={Welcome} />
			<UnprotectedRoute path='/profile' exact component={Profile} />
			<UnprotectedRoute path='/login' exact component={LoginPage} />
			<UnprotectedRoute path='/register' exact component={RegistrationPage} />

			{userAuth.loggedIn}
			<UserRoute path='/rooms' exact component={MeetingRooms} />
			<UserRoute path='/report' exact component={Reports} />
			<UserRoute path='/roomZone' exact component={RoomZone} />
			<UserRoute path='/chat' exact component={Chat} />

					
			{/* example api succesful fetch */}
			<div>
				{typeof data.members === 'undefined' ? (
					<p> </p> //removed loading comment as it was showing on every screen
				) : (
					data.members.map((member, i) => <p key={i}>{member}</p>)
				)}
			</div>
		</div>
	);
};

export default withRouter(observer(App));
