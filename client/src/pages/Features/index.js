import "./style.css"
import React from "react";
import {RedButton} from "../../components/Buttons";
import GrayContainer from "../../components/GrayContainer";
import BlueContainer from "../../components/BlueContainer";
import PinkContainer from "../../components/PinkContainer";

function Features() {
	return (
            <BlueContainer>
            <GrayContainer>
                <RedButton>
                    Show Report
                </RedButton>
            </GrayContainer>
            <PinkContainer>
                <RedButton>
                    Show Report
                </RedButton>
            </PinkContainer>
            </BlueContainer>

	)
}
export default Features
;