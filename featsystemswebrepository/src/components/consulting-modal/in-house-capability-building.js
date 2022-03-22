import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const InhouseCapabilitybuilding = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">In House Capability Building</h2>
                    <p className="para">We assist the organizations in creating an in-house Robotic Operating Team that consists of a set of certain positions and duties to implement and manage automation as rapidly and effectively as possible across the company.</p>                    
                    <Link to="/consulting-services" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default InhouseCapabilitybuilding;