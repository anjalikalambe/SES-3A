import "./style.css";
import logoImg from "./logo.png";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { DarkButton } from "../Buttons";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Header(props) {
	return (
		<div className="header">
			<img className="logo" src={logoImg} />
			<Container maxWidth="sm">
				<Link href="#" className="navigation">
					HOME
				</Link>
				<Link href="/rooms" className="navigation">
					ROOMS
				</Link>
				<Link href="#" className="navigation">
					FEATURES
				</Link>
				<Link href="#" className="navigation">
					PROFILE
				</Link>
			</Container>
			<DarkButton
				variant="contained"
				color="primary"
				className="login-button"
			>
				Log In
			</DarkButton>
		</div>
	);
}

export default Header;
