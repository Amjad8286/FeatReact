import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';


import {
    BrowserRouter as Router,
    Switch,  
    Route,
    Link
  } from "react-router-dom";

const PigeonProcessDefinitionsModal = () =>{

    return(
        <>  
        <section className="modal-section">
            <div className="modal-box">
                <div className="modal-body">                       
                    <h2 className="h1 mb-50">Pigeon Process Definition</h2>      
                    <Link to="/bot-as-a-service" className="close-md"><img src={closeImg} /></Link>   
                       
                    <a href="/pigeon-process-definitions" className="btn btn-primary" >Upload Document</a>
                    <a href="/pigeon-process-definitions" className="btn btn-dark" >Fill and Upload Document</a>
                                        
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default PigeonProcessDefinitionsModal;