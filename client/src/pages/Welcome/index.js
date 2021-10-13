import Container from "@material-ui/core/Container";
import {CreamButton, PurpleButton} from "../../components/Buttons";
import React from "react";
import "./style.css";
import BgImage from "../../icon.png";

function Welcome(){
	return (
		<div className="box">
			<div className="text1">
				Welcome to the world of virtual love
			</div>
			<div className="text2">
				Diverge into the the rooms of love and find the right match for you
			</div>
			<Container maxWidth="sm" className="box2">
				<PurpleButton variant="contained" color="primary" href="/login">
					Join a room
				</PurpleButton>
				<CreamButton variant="contained" color="primary" href="/register">
					Sign up
				</CreamButton>
			</Container>
			<img src={BgImage} className="bgImage"/>
		</div>
	);
}

export default Welcome;