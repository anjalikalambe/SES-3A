import './style.css';
import logoImg from './logo.png';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { DarkButton } from '../Buttons';
import { Link as RouterLink } from 'react-router-dom';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Header(users) {
	return (
		<div className='header'>
			<img className='logo' src={logoImg} />
			<Container maxWidth='sm'>
				<Link component={RouterLink} to='/' className='navigation'>
					HOME
				</Link>
				<Link className='navigation' component={RouterLink} to='/roomZone'>
					ROOMS
				</Link>
				<Link
					className="navigation"
					component={RouterLink}
					to="/features"
				>

					FEATURES
				</Link>
				<Link className='navigation' component={RouterLink} to='/profile'>
					PROFILE
				</Link>
				<Link href="/room" className="navigation">
					ROOM
				</Link>
			</Container>
			<DarkButton
				variant="contained"
				color="primary"
				className="login-button"
				href="/login"
			>
				Log In
			</DarkButton>
		</div>
	);
}

export default Header;
