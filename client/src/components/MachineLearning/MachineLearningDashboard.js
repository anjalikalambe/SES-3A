import React, { Component } from "react";
import Header from "../Header";
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
				<div className="box">
					<div className="text1">
						Clusters
					</div>
				</div>
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

export default MachineLearningDashboard;