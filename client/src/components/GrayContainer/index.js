import { FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';



function GrayContainer(props){
	const classes = makeStyles({
		root: {
			width: props.width,
			backgroundColor: '#808080',
			minHeight: 50,
			padding: 20,
		},
	})();
	return(
		<Card className={classes.root}>
			{props.children}
		</Card>
	)
}

export default GrayContainer;