import React, { Component } from "react";
import Header from "../Header";
import MaterialTable from 'material-table'


let clusterSet = [1, 2, 3]
let userId = 0
class MachineLearningDashboard extends Component {
	state = { users: [], data: [] };



	componentDidMount() {
		fetch("/members")
			.then((res) => res.json())
			.then((data) => this.setState({ data }, console.log(data)));
	}

	render() {
		return (
			<div>
				<Header />
				<div className="text1">
					Clusters
				</div>
				<div>
				</div>
				<div>
					{typeof this.state.data.members === "undefined" ? (
						<p>...loading</p>
					) : (
						this.state.data.members.map((member, i) => (
							<div key={i}>
								{member.map((item, j) => (
									<div key={j}>
										<table class="table table-striped table-dark">
											<thead>
											</thead>
											<tbody>
												<tr>
													<th scope="row">
														<td>{"UserID: " + userId++}</td>
														<td>{"Cluster Group: " + item}</td>
													</th>
												</tr>
											</tbody>
										</table>
									</div>
								))}
							</div>
						))
					)}
				</div>
			</div>
		);
	}
}

export default MachineLearningDashboard;