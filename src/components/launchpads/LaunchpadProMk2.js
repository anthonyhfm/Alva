import './LaunchpadProMk2.css';
import React from "react";

const LaunchpadProMk2 = (props) => {
    return(
        <div className="lpBackgroundProMk2">
            {(() => {
                const buttonHolders = [];

                for(var y = 9; y > -1; y--) {
                    for(var x = 0; x < 10; x++) {
                        const pitch = x + (y * 10);
                        buttonHolders.push(
                            <div className="lpBtnHolderProMk2">
                                {(() => {

                                    if(y == 9 && x == 0 || y == 0 && x == 9 || y == 0 && x == 0) {
                                        return(
                                            <button className="lpNormalBtnProMk2" style={{visibility: "hidden"}}></button>
                                        );
                                    }
                                    else if(y == 9 && x == 9) {
                                        return(<div className="lpModeLightProMk2" id={"lpBtn" + pitch}></div>);
                                    }
                                    else if(y == 9 || y == 0 || x == 0 || x == 9) {
                                        return(
                                            <div className="lpEdgeBtnProMk2" id={"lpBtn" + pitch}>
                                                <div className="lpEdgeFillProMk2" style={{visibility: props.phantomStickers == 2? "hidden" : "visible"}}/>
                                            </div>
                                        );
                                    }
                                    else if(y == 4 && x == 4) {
                                        return(
                                            <button className="lpNormalBtnProMk2 lpNormalBtnProMk2DL" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk2Phantom" id="DL"/>
                                            </button>
                                        );
                                    }
                                    else if(y == 4 && x == 5) {
                                        return(
                                            <button className="lpNormalBtnProMk2 lpNormalBtnProMk2DR" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk2Phantom" id="DR"/>
                                            </button>
                                        );
                                    }
                                    else if(y == 5 && x == 4) {
                                        return(
                                            <button className="lpNormalBtnProMk2 lpNormalBtnProMk2TL" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk2Phantom" id="TL"/>
                                            </button>
                                        );
                                    }
                                    else if(y == 5 && x == 5) {
                                        return(
                                            <button className="lpNormalBtnProMk2 lpNormalBtnProMk2TR" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk2Phantom" id="TR"/>
                                            </button>
                                        );
                                    }
                                    else {
                                        return(
                                            <button id={"lpBtn" + pitch} className="lpNormalBtnProMk2">
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk2Phantom"/>
                                            </button>
                                        );
                                    }
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

export default LaunchpadProMk2;