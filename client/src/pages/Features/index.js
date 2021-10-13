import "./style.css"
import React from "react";
import { Card, Link } from "@material-ui/core";
import {RedButton} from "../../components/Buttons";
import BlueContainer from "../../components/BlueContainer";
import {Link as RouterLink} from "react-router-dom";


function Features() {
	return (
            <BlueContainer width={1300}>
                <Card className='card'>
                    Test
					</Card>
					<Card className='card'>
					<p>Header</p>
					<p>Image</p>
					<p>Description</p>
					<RedButton className='button' component={RouterLink} to="/reports">
						Report
					</RedButton>
					</Card>
						<Card className='card'>
						Test
						</Card>	
            </BlueContainer>

	)
}
export default Features
;