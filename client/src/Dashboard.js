import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from "./components/Sidebar"


class Dashboard extends Component {
    state = {users: []};
  
    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
render() {
return (
    <div class="Dashboard">
    <Sidebar />
    <div className="dashboard-container">
       </div>
      </div>
);
}
}
export default Dashboard;