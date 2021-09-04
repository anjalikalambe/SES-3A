import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';



function PurpleContainer(props){
	const classes = makeStyles({
		root: {
			width: props.width,
			backgroundColor: '#4C49F8',
			minHeight: 400,
			padding: 20,
			margin: '50px auto',
		},
	})();
	return(
		<Card className={classes.root}>
			{props.children}
		</Card>
	)
}

export default PurpleContainer;