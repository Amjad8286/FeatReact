import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';
import PricingForm from './pricing-form';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const FreeTrialpigeoniCQRS = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1 mb-50">Free Trial</h2>                    
                    <Link to="/pigeoniCQRS" className="close-md"><img src={closeImg} /></Link> 
                    
                   <PricingForm />

                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default FreeTrialpigeoniCQRS;