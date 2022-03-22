import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const ToStrategize = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">To Strategize</h2>
                    <p className="para">One of the researches shows that when a company lacks vision or strategy, they face difficulty to scale their automation programs. In today’s digitized world, it is evident that automation is a pillar of digital transformation across the company, but a company should have a strong vision before starting to implement it.</p>
                    <p className="para">Hence, the critical activities of Automation COE include the presentation of enterprise-wide vision and strategy for Intelligent Automation and Digital Transformation.</p>                                                                          
                    <Link to="/center-of-excellence" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default ToStrategize;