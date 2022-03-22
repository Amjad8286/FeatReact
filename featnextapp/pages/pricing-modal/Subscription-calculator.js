import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';
import PricingForm from './pricing-form';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const SubscriptionCalculator = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1 mb-50">Subscription Calculator</h2>                    
                    <Link to="/bot-as-a-service" className="close-md"><img src={closeImg} /></Link> 
                    
                   <h2 className="h2">Comming Soon..</h2>

                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default SubscriptionCalculator;