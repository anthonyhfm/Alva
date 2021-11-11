import './LaunchpadMk2.css';
import React from "react";

const LaunchpadMk2 = (props) => {
    return(
        <div className="lpBackgroundMk2">
            {(() => {
                const buttonHolders = [];

                for(var y = 9; y > 0; y--) {
                    for(var x = 1; x < 10; x++) {
                        const pitch = x + (y * 10);
                        buttonHolders.push(
                            <div className="lpBtnHolderMk2">
                                {(() => {
                                    if(y == 9 && x == 9)
                                        return(null);
                                    else if (y == 9 || x == 9)
                                        return(<div className="lpEdgeBtnMk2" id={"lpBtn" + pitch}><div className="lpEdgeFillMk2"/></div>);
                                    else if(y == 4 && x == 4)
                                        return(<button className="lpNormalBtnMk2 lpNormalBtnMk2DL" id={"lpBtn" + pitch}></button>);
                                    else if(y == 4 && x == 5)
                                        return(<button className="lpNormalBtnMk2 lpNormalBtnMk2DR" id={"lpBtn" + pitch}></button>);
                                    else if(y == 5 && x == 4)
                                        return(<button className="lpNormalBtnMk2 lpNormalBtnMk2TL" id={"lpBtn" + pitch}></button>);
                                    else if(y == 5 && x == 5)
                                        return(<button className="lpNormalBtnMk2 lpNormalBtnMk2TR" id={"lpBtn" + pitch}></button>);

                                    return(<button className="lpNormalBtnMk2" id={"lpBtn" + pitch}></button>);
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

export default LaunchpadMk2;