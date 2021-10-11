import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";

class App extends Component {
	state = { users: [], data: [] };

	componentDidMount() {
		// fetch('/users') //running port3000
		// 	.then(res => res.json())
		// 	.then(users => this.setState({users}));

		fetch("/members")
			.then((res) => res.json())
			.then((data) => this.setState({ data }, console.log(data)));
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Header />
					<Switch>
						<Route path="/profile">
							<Profile />
						</Route>
						<Route path="/">
							<Welcome />
						</Route>
					</Switch>
				</Router>

				{/* example api succesful fetch */}
				<div>
					{typeof this.state.data.members === "undefined" ? (
						<p>...loading</p>
					) : (
						this.state.data.members.map((member, i) => (
							<ul>
								<li key={i}>{member + ""}</li>
							</ul>
						))
						// this.state.data.members
					)}
				</div>
			</div>
		);
	}
}

export default App;
