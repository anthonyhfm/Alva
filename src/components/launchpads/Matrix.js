import './Matrix.css';
import React from "react";

const Matrix = (props) => {
    return(
        <div className="maBackground">
            {(() => {
                const buttonHolders = [];

                for(var y = 8; y > 0; y--) {
                    for(var x = 1; x < 9; x++) {
                        const pitch = x + (y * 10);
                        buttonHolders.push(
                            <div className="maBtnHolder">
                                {(() => {
                                    if(y == 9 && x == 9)
                                        return(null);
                                    else if (y == 9 || x == 9)
                                        return(<div className="maEdgeBtn" id={"lpBtn" + pitch}><div className="maEdgeFill"/></div>);
                                    else if(y == 4 && x == 4)
                                        return(<button className="maNormalBtn maNormalBtnDL" id={"lpBtn" + pitch}></button>);
                                    else if(y == 4 && x == 5)
                                        return(<button className="maNormalBtn maNormalBtnDR" id={"lpBtn" + pitch}></button>);
                                    else if(y == 5 && x == 4)
                                        return(<button className="maNormalBtn maNormalBtnTL" id={"lpBtn" + pitch}></button>);
                                    else if(y == 5 && x == 5)
                                        return(<button className="maNormalBtn maNormalBtnTR" id={"lpBtn" + pitch}></button>);

                                    return(<button className="maNormalBtn" id={"lpBtn" + pitch}></button>);
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

export default Matrix;