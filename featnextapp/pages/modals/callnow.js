import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const CallNowModal = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body pd-30">   
                <h2 className="h1 mb-50">Call Now</h2>       

                <div className="callnow-view">
                    <a className="callto" className="btn btn-primary" href="tel:+16268421792">USA + 1 626 842 1792</a>
                    <a className="callto" className="btn btn-dark" href="tel:+919321252212">India +91 9321252212</a>
                </div>                              
                
                    <Link to="/" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>

            </div>
        </section> 
           
        </>      
    );
};

export default CallNowModal;