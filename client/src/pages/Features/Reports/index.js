import "././report.css"
import React from "react";
import { useState } from 'react';
import PurpleContainer from "../../../components/PurpleContainer";
import WhiteInput from "../../../components/WhiteInput";
import WhiteSelect from "../../../components/WhiteSelect";
import Grid from "@material-ui/core/Grid";
import {DarkPurpleButton} from "../../../components/Buttons";
import Tables from "../../../components/Table";

function Reports() {

	return (
		<>
		<PurpleContainer width={600} >
		<Grid item xs={12}>
					<WhiteSelect options={["Report Users", "Show Reported Users"]} 	/>			
				</Grid>
		</PurpleContainer>
		<PurpleContainer width={600} className='test'>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h2 className="title">
						Report User
					</h2>
				</Grid>
				<Grid item xs={12}>
					<WhiteInput label="User's Full Name"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="User's ID"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteSelect label="Gender" options={["Male", "Female", "Unidentified"]}/>
				</Grid>
				<Grid item xs={12}>
					<WhiteSelect label="Reason" options={["Inappropriate Messages", "Inappropriate Photos", "Scam/Phishing/Bot", "Others"]}/>
				</Grid>
				<Grid item xs={12}>
					<WhiteInput label="Description of Report" multiline rows={4}/>
				</Grid>
				<Grid item xs={12}>
					<DarkPurpleButton variant="contained" color="primary" className="report-button">
						Submit
					</DarkPurpleButton>
				</Grid>
			</Grid>
		</PurpleContainer>
		<PurpleContainer width={1000}>
		<Tables></Tables>
		</PurpleContainer >
		</>
	)
}
export default Reports;
