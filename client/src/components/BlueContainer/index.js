import { FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

function BlueContainer(props){
	const classes = makeStyles({
		root: {
            width: props.width,
			backgroundColor: '#7573F9',
			minHeight: 400,
			padding: 20,
			margin: '50px auto',
            position: 'relative',
		},
	})();
	return(
		<Card className={classes.root}>
			{props.children}
		</Card>
	)
}

export default BlueContainer;