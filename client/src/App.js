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
	state = {users: []};

	componentDidMount() {
		fetch('/users')
			.then(res => res.json())
			.then(users => this.setState({users}));
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Sidebar/>
					<Switch>
						<Route path='/features' />
					</Switch>
					</Router>
				<Router>
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
			</div>
		);
	}
}

export default App;