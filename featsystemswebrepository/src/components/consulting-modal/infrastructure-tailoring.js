import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Infrastructuretailoring = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">Infrastructure tailoring</h2>
                    <p className="para">Any RPA solution must be individually personalized to the infrastructure of the organization that can make a significant contribution to the digitization plan of the firm. That's why our professional experts have developed concept requirements in the infrastructure model, based on which a scalable RPA solution can be successfully developed, implemented, and operated.</p>                    
                    <Link to="/consulting-services" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default Infrastructuretailoring;