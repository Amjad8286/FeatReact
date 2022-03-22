import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const ToOperate = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">To operate</h2>
                    <p className="para">Assembling a team and assigning roles and responsibilities marks a crucial part of any organization. Hence, the Center of Excellence provides efficient automation delivery that includes acquainting the team with the necessary skills and managing external and in-house talent.</p>                   
                    <Link to="/center-of-excellence" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default ToOperate;