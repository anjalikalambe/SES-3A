import "./style.css"
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import WhiteSelect from "../../components/WhiteSelect";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {DarkPurpleButton} from "../../components/Buttons";


function Profile() {
	return (
		<PurpleContainer width={600}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h2 className="title">
						Edit Profile
					</h2>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="First Name"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="Last Name"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="Age"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteSelect label="Gender" options={["Male", "Female", "Unknown"]}/>
				</Grid>
				<Grid item xs={12}>
					<WhiteInput label="Country of residence"/>
				</Grid>
				<Grid item xs={12}>
					<WhiteInput label="About me" multiline rows={4}/>
				</Grid>
				<Grid item xs={12}>
					<WhiteSelect label="Interests" options={["Music", "Sport", "Social", "Movie", "Game", "Travel"]}/>
				</Grid>
				<Grid item xs={12}>
					<DarkPurpleButton variant="contained" color="primary" className="save-button">
						Save
					</DarkPurpleButton>
				</Grid>
			</Grid>
		</PurpleContainer>
	)
}

export default Profile
;