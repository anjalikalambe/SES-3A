import { FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

function PinkContainer(props){
	const classes = makeStyles({
		root: {
            width: props.width,
			backgroundColor: '#FFC0CB',
			minHeight: "80%",
            right: "25%",
			padding: 30,
			position: 'absolute'
		},
	})();
	return(
		<Card className={classes.root}>
			{props.children}
		</Card>
	)
}

export default PinkContainer;