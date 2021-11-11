import './MidiFighter64.css';
import React from "react";

const MidiFighter64 = (props) => {
    return(
        <div className="mf64Background">
            {(() => {
                const buttonHolders = [];

                for(var y = 8; y > 0; y--) {
                    for(var x = 1; x < 9; x++) {
                        const pitch = x + (y * 10);
                        buttonHolders.push(
                            <div className="mf64BtnHolder">
                                {(() => {
                                    return(
                                        <div className="mf64NormalBtn" id={"lpBtn" + pitch}>
                                            <div className="mf64BtnFill"/>
                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    }
                }

                return(buttonHolders);
            })()}
        </div>
    );
}

export default MidiFighter64;