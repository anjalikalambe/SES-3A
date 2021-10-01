import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Features from "./pages/Features";
import Reports from "./pages/Features/Reports";

class App extends Component {

	state = {users: [], data: []};

	componentDidMount() {
		// fetch('/users') //running port3000
		// 	.then(res => res.json())
		// 	.then(users => this.setState({users}));

		fetch('/members')
			.then(res => res.json())
			.then(data => this.setState({data}, console.log(data)));
	}

	render() {
		return (
			<div className="App">					
				<Router>
				<Sidebar/>
					<Header/>
					<Switch>
						<Route path="/profile">
							<Profile/>
						</Route>
						<Route path="/features">
							<Features/>
						</Route>
						<Route path="/reports">
							<Reports/>
						</Route>
						<Route path="/">
							<Welcome/>
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