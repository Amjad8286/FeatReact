import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const ToManage = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">To Manage</h2>
                    <p className="para">For an Intelligent Automation Center of Excellence to function effectively, it should be able to:</p>
                    <div className="cl-text">
                        <ul>
                            <li>
                            Provide effective governance for the overall effort in the company that includes defining strategy owner and aligning with the sponsorship and financial investment.
                            </li>
                            <li>
                            Determine and track metrics to assess programs on the established automation strategy
                            </li>
                            <li>
                            Present results to internal and external shareholders.
                            </li>
                        </ul>
                    </div>
                    <Link to="/center-of-excellence" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default ToManage;