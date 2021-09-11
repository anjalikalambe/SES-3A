import "./style.css"
import React from "react";
import { Card } from "@material-ui/core";
import {RedButton} from "../../components/Buttons";
import GrayContainer from "../../components/GrayContainer";
import BlueContainer from "../../components/BlueContainer";
import PinkContainer from "../../components/PinkContainer";

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
					<RedButton className='button'>
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