import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {alpha, withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const FormInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.common.white,
		border: '1px solid #ced4da',
		fontSize: 16,
		width: '100%',
		padding: '10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.main,
		},
	},
}))(InputBase);

function WhiteInput(props){
	const {label, ...others} = props;
	return (
		<FormControl fullWidth>
			<InputLabel shrink htmlFor="bootstrap-input" style={{color:'white', fontSize: 22, fontWeight: 'bold'}}>
				{label}
			</InputLabel>
			<FormInput id="bootstrap-input" fullWidth {...others} />
		</FormControl>
	)
}

export default WhiteInput;