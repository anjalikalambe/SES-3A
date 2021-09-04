import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";

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
			</div>
		);
	}
}

export default App;