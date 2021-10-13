
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Rooms from './pages/Rooms';


class App extends Component {
	state = { users: [], data: [] };

	componentDidMount() {
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<Header />
					<Switch>
						<Route path='/room'>
							<Rooms />
						</Route>
						<Route path='/profile'>
							<Profile />
						</Route>
						<Route path='/'>
							<Welcome />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
