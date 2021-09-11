import React from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { pink, purple, blue, red } from '@material-ui/core/colors';

export const DarkButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText('#3D3AFD'),
		backgroundColor: '#3D3AFD',
		'&:hover': {
			backgroundColor: blue[2000],
		},
		borderRadius: '25px',
		padding: '5px 40px'
	},
}))(Button);

export const PurpleButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText('#863A88'),
		backgroundColor: '#863A88',
		'&:hover': {
			backgroundColor: purple[600],
		},
		borderRadius: '15px',
		padding: '10px 33px',
		margin: '0px 60px 0px 0px'
	},
}))(Button);

export const CreamButton = withStyles((theme) => ({
	root: {
		backgroundColor: '#FDF6E3',
		'&:hover': {
			backgroundColor: pink[400],
		},
		borderRadius: '15px',
		padding: '10px 50px',
		border:'#863A88',
		color:'#863a88'
	},
}))(Button);

export const DarkPurpleButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText('#43428C'),
		backgroundColor: '#43428C',
		'&:hover': {
			backgroundColor: blue[2000],
		},
		borderRadius: '25px',
		padding: '5px 40px'
	},
}))(Button);

export const RedButton = withStyles((theme) => ({
	root: {
		backgroundColor: '#FF0000',
		'&:hover': {
			backgroundColor: red[500],
		},
		borderRadius: '25px',
		padding: '5px 40px'
	},
}))(Button);

