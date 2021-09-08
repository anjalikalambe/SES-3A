import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import React from "react";


function WhiteSelect(props) {
	return (
		<div>
			<InputLabel style={{
				color: 'white',
				fontSize: 18,
				fontWeight: 'bold',
				textAlign: 'left',
				marginBottom: 5
			}}>{props.label}</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				onChange={props.onChange}
				style={{
					backgroundColor: 'white',
					height: 41
				}}
				variant="outlined"
				fullWidth
			>
				{props.options && props.options.map(item => <MenuItem value={item}>{item}</MenuItem>)}
			</Select>
		</div>
	)
}

export default WhiteSelect;