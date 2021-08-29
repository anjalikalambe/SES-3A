import React from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { pink, purple, blue } from '@material-ui/core/colors';

export const DarkButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText('#43428C'),
		backgroundColor: '#43428C',
		'&:hover': {
			backgroundColor: blue[800],
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

