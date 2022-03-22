import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const ChangeManagement = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">Change Management</h2>
                    <p className="para">Another vital role of COE is change management that involves proactive management of organizations to maximize value from digital transformation.</p>
                    <p className="para">An integral part of successful automation is to identify different use cases within the company. Hence, CoE plays a crucial role in this process. Once the company reaches a mature point in digital transformation, it no longer faces the shortage of identifying new opportunities but instead shifts its focus in prioritizing ideas than generating them.</p>                                                                          
                    <Link to="/center-of-excellence" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default ChangeManagement;