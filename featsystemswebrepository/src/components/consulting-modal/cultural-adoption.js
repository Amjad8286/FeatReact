import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const CulturalAdoption = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1">Cultural Adoption</h2>
                    <p className="para">We assist the organizations to adopt the RPA Culture that encourages the human workforce to accept, adopt, and work with the digital workforce which will transfer routine processes from personnel to robots resulting in tangible outcomes that can save time, money, reduce human error and increase employee engagement.</p>                    
                    <Link to="/consulting-services" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default CulturalAdoption;