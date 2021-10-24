import React, { Component } from "react";
import Header from "../Header";
import 'bootstrap/dist/css/bootstrap.min.css';
class MachineLearningDashboard extends Component {
	state = { users: [], data: [] };

	componentDidMount() {
		fetch("/members")
			.then((res) => res.json())
			.then((data) => this.setState({ data }));
	}

	render() {
		return (
			<div>
				<div className="text1">
					Clusters
				</div>
				<div>
					{typeof this.state.data.members === "undefined" ? (
						<p>...loading</p>
					) : (
						<table className="table table-striped table-dark">
							<thead>
							</thead>
							<tbody>
								{this.state.data.members.map((member, i) => (
									<ClusterSort arr={member} userId={i} />
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		);
	}
}

function ClusterSort({ arr, userId }) {
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		let val = map.get(arr[i]) || []
		val.push(++userId)
		map.set(arr[i], val)
	}
	return <>
		{[...map].sort(function (a, b) {
			return (a[0] || 0) - (b[0] || 0);
		}).map((item, i) => (
			<>
				<tr><td>Cluster Id: {item[0]}</td></tr>
				<tr key={i}>
					{item[1] &&
						<th scope="row">
							{item[1].map((value) => (
								<tr>
									<td>User Id: {value}</td>
								</tr>
							))}
						</th>
					}
				</tr>
			</>
		))}
	</>
}

export default MachineLearningDashboard;
