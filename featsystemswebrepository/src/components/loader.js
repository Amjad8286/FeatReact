import React from "react";
import '../css/App.css'


const FeatLoader = ({isShow}) =>{

    if(isShow){
    return(
        <div className="d-none sm-loader">
            <div className="ft-loader">
                <div className="m-auto">
                <div className="l-logo">
                    <div className="amc-loader big"></div>
                </div> 
                </div>
            </div>
        </div>
    );
    }
    return(
        <></>
    )
};

export default FeatLoader;

