import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';
import coecertificate from '../../images/inner-page/coe-img/automation-anywhere-coe-certificate.jpg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Aacertificate = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body pd-0">                       
                    <img src={coecertificate} className="md-full-img" />
                    <Link to="/center-of-excellence" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default Aacertificate;