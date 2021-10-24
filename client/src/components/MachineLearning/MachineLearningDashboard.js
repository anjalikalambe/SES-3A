import React, { Component } from "react";
import Header from "../Header";
import MaterialTable from 'material-table'
import 'bootstrap/dist/css/bootstrap.min.css';

let userId = 0
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
				<Header />
				<div className="text1">
					Clusters
				</div>
				{test()}
				<div>
				</div>
				<div>
					{typeof this.state.data.members === "undefined" ? (
						<p>...loading</p>
					) : (
						<table class="table table-striped table-dark">
							<thead>
							</thead>
							<tbody>
								{this.state.data.members.map((member, i) => (
									<div key={i}>
										{member.map((item, j) => (
											<tr key={j}>
												<th scope="row">
													<td>{"UserID: " + userId++ + ", "}</td>
													<td>{"Cluster Group: " + item}</td>
												</th>
											</tr>

										))}
									</div>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		);
	}
}

//test function for now 
function test () {
	let orgArr = [1,2,2,3,4,6,4]
	for(let i = 0; i <= orgArr.length-1; i++){
		console.log(orgArr[i])
		for(let j = i + 1; j <= orgArr.length; j++){
			if(orgArr[i] === orgArr[j])
			{
				console.log("Repeating Number: " + orgArr[i])
			}
		}

	}
}

export default MachineLearningDashboard;