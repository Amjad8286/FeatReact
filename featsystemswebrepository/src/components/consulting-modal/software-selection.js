import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const SoftwareSelection = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">Software selection</h2>
                    <p className="para">There is a wide range of RPA tools or systems are available in the market. Therefore, it is difficult to decide on choosing the right automation software. As a solution provider, we verify the requirements of your special processes place on the RPA solution and checks the features or functions that automation systems have to offer accordingly we choose the best RPA software for your purpose.</p>                    
                    <Link to="/consulting-services" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default SoftwareSelection;