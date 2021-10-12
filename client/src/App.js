import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import RegistrationPage from "./RegistrationPage";
import Reports from "./pages/Features/Reports";
import Features from "./pages/Features";

class App extends Component {

	state = { users: [], data: [] };

	componentDidMount() {
		// fetch('/users') //running port3000
		// 	.then(res => res.json())
		// 	.then(users => this.setState({users}));

		fetch('/members')
			.then(res => res.json())
			.then(data => this.setState({ data }, console.log(data)));
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
						<Route path="/" exact={true}>
							<Welcome />
						</Route>

						<Route path="/register" exact={true}>
							<RegistrationPage />
						</Route>

						<Route path="/features" exact={true}>
							<Features />
						</Route>

						<Route path="/reports" exact={true}>
							<Reports />
						</Route>
					</Switch>
				</Router>

				{/* example api succesful fetch */}
				<div>
					{(typeof this.state.data.members === 'undefined') ? (
						<p>...loading</p>
					) : (
						this.state.data.members.map((member, i) => (
							<p key={i}>{member}</p>
						))
					)}
				</div>
			</div>
		);
	}
}

export default App;