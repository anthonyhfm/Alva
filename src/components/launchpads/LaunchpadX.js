import './LaunchpadX.css';
import React from "react";

const LaunchpadX = (props) => {
    return(
        <div className="lpBackgroundX">
            {(() => {
                const buttonHolders = [];

                for(var y = 9; y > 0; y--) {
                    for(var x = 1; x < 10; x++) {
                        const pitch = x + (y * 10);
                        buttonHolders.push(
                            <div className="lpBtnHolderX">
                                {(() => {
                                    if(y == 9 && x == 9)
                                        return(null);
                                    else if (y == 9 || x == 9)
                                        return(<div className="lpEdgeBtnX" id={"lpBtn" + pitch}><div className="lpEdgeFillX"/></div>);
                                    else if(y == 4 && x == 4)
                                        return(<button className="lpNormalBtnX lpNormalBtnXDL" id={"lpBtn" + pitch}></button>);
                                    else if(y == 4 && x == 5)
                                        return(<button className="lpNormalBtnX lpNormalBtnXDR" id={"lpBtn" + pitch}></button>);
                                    else if(y == 5 && x == 4)
                                        return(<button className="lpNormalBtnX lpNormalBtnXTL" id={"lpBtn" + pitch}></button>);
                                    else if(y == 5 && x == 5)
                                        return(<button className="lpNormalBtnX lpNormalBtnXTR" id={"lpBtn" + pitch}></button>);

                                    return(<button className="lpNormalBtnX" id={"lpBtn" + pitch}></button>);
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

export default LaunchpadX;