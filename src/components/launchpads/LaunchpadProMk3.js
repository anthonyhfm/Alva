import './LaunchpadProMk3.css';
import React from "react";

const LaunchpadProMk3 = (props) => {
    return(
        <div className="lpBackgroundProMk3">
            {(() => {
                const buttonHolders = [];

                for(var y = 9; y > -1; y--) {
                    for(var x = 0; x < 10; x++) {
                        const pitch = x + (y * 10);
                        buttonHolders.push(
                            <div className="lpBtnHolderProMk3">
                                {(() => {

                                    if(y == 9 && x == 9 || y == 0 && x == 9 || y == 0 && x == 0)
                                        return(<button className="lpNormalBtnProMk3" style={{visibility: "hidden"}}></button>);
                                    else if(y == 9 && x == 0)
                                        return(<button className="lpShiftBtnProMk3"> <div className="lpEdgeFillProMk3" style={{visibility: props.phantomStickers == 2? "hidden" : "visible"}}/> </button>);
                                    else if(y == 9 || y == 0 || x == 0 || x == 9)
                                        if(y == 0) {
                                            return(
                                                <div style={{height: "100%"}}>
                                                    <div className="lpBottomEdgeProMk3" id={"lpBtn" + (100 + pitch)}> 
                                                        <div className="lpBottomEdgeFillProMk3" style={{visibility: props.phantomStickers == 2? "hidden" : "visible"}}/> 
                                                    </div>

                                                    <div className="lpBottomEdgeProMk3" id={"lpBtn" + pitch}> 
                                                        <div className="lpBottomEdgeFillProMk3" style={{visibility: props.phantomStickers == 2? "hidden" : "visible"}}/> 
                                                    </div>
                                                </div>
                                            );
                                        }
                                        else return(<div className="lpEdgeBtnProMk3" id={"lpBtn" + pitch}> <div className="lpEdgeFillProMk3" style={{visibility: props.phantomStickers == 2? "hidden" : "visible"}}/> </div>);
                                    else if(y == 4 && x == 4)
                                        return(
                                            <button className="lpNormalBtnProMk3 lpNormalBtnProMk3DL" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk3Phantom" id="DL"/>
                                            </button>
                                        );
                                    else if(y == 4 && x == 5)
                                        return(
                                            <button className="lpNormalBtnProMk3 lpNormalBtnProMk3DR" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk3Phantom" id="DR"/>
                                            </button>
                                        );
                                    else if(y == 5 && x == 4)
                                        return(
                                            <button className="lpNormalBtnProMk3 lpNormalBtnProMk3TL" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk3Phantom" id="TL"/>
                                            </button>
                                        );
                                    else if(y == 5 && x == 5)
                                        return(
                                            <button className="lpNormalBtnProMk3 lpNormalBtnProMk3TR" id={"lpBtn" + pitch}>
                                                <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk3Phantom" id="TR"/>
                                            </button>
                                        );
                                    else return(
                                        <button id={"lpBtn" + pitch} className="lpNormalBtnProMk3">
                                            <div style={{visibility: props.phantomStickers == 1? "visible" : "hidden"}} className="lpNormalBtnProMk3Phantom"/>
                                        </button>
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

export default LaunchpadProMk3;