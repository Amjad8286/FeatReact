import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';
import PricingForm from '../pricing-modal/pricing-form';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const StandardPlan = ({PrcingType}) =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1 mb-50">Standard Plan</h2>                    
                    <Link to="/pigeon-pricings" className="close-md"><img src={closeImg} /></Link> 
                    
                   <PricingForm formType={'StandardPlan'} PrcingType = {PrcingType}/>

                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default StandardPlan;