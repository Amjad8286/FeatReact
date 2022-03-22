import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Itengagement = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">IT engagement</h2>
                    <p className="para">We help the organizations to Engage their Traditional IT team and business users with the next generation RPA team to carry out the successful implementation of RPA across the Enterprise.</p>                    
                    <Link to="/consulting-services" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default Itengagement;