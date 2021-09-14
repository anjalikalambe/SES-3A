import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';



function PurpleContainer(props){
	const classes = makeStyles({
		root: {
			width: props.width,
			backgroundColor: '#7573F9',
			minHeight: 400,
			padding: 20,
			margin: '50px auto',
		},
	})();
	return(
		<Card className={`${classes.root} ${props.className}`}>
			{props.children}
		</Card>
	)
}

export default PurpleContainer;