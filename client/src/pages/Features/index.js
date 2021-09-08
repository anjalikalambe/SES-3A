import "./style.css"
import React from "react";
import {RedButton} from "../../components/Buttons";
import GrayContainer from "../../components/GrayContainer";


function Features() {
	return (
		<div className="box">
            <GrayContainer>
                <RedButton>
                    Show Report
                </RedButton>
            </GrayContainer>
        </div>

	)
}

export default Features
;