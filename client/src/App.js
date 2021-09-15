import React, {Component} from 'react';
import io from "socket.io-client";
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";

// For flask socketio testing
const socket = io("http://localhost:5000");

class App extends Component {
	state = {
		users: [],
		messages: ["Start of chat"],
		message: [""],
		target: ""
	};

	componentDidMount() {
		fetch('/users')
			.then(res => res.json())
			.then(users => this.setState({users}));

		// For flask socketio testing
		socket.on("private_response", (data) => {
			this.setState({messages: [...this.state.messages, data]});
		})

		socket.emit("join", {username: socket.id, room: "test"})
	}

	// componentDidUpdate() {
	// 	socket.once("private_response", (data) => {
	// 		this.setState({messages: [...this.state.messages, data]});
	// 	})
	// }

	targetUpdate(e) {
		this.setState({target: e.target.value});
	}

	messageChange(e) {
		this.setState({message: e.target.value});
	}

	sendMessage() {
		if (this.state.message !== "") {
			socket.emit("private_message", {"message": this.state.message, "target": this.state.target});
			this.setState({message: ""});
		}
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Header/>
					<Switch>
						<Route path="/profile">
							<Profile/>
						</Route>
						<Route path="/">
							<Welcome/>
						</Route>
					</Switch>
				</Router>

				{/* Test for backend sockets */}
				<div>
					<div>
						<p>Your id is {socket.id}</p>
					</div>
					<input name="target" onChange={e => this.targetUpdate(e)}/>
					<input name="message" onChange={e => this.messageChange(e)}/>
					<button onClick={this.sendMessage()}>Send</button>
					<div>
						{this.state.messages}
					</div>
				</div>

			</div>
		);
	}
}

export default App;