import React from "react";

import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";

import GetStarted from './home-component/get-started'




const TermsOfUse = () =>{
    return(
        <>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-12">
                        <div className="cl-text">
                        <div className="mb-50">
                        <h2 className="h1 mt-0">Terms of Use</h2>
                        <p>
                        The content of the FEAT web site is protected by copyright law. You are entitled to use this website and the content therein for your own, informational purposes.
                        </p>
                        </div>
                        </div>
                        <div className="gt-button">                           
                            <Link to="/contact" className="btn btn-dark">Get Started</Link>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">                       
                        <ul className="breadcrumb">
                            <li><Link to="/home">Home</Link></li>                            
                            <li>Terms of Use</li>
                        </ul>                           
                    </div>
                    </div>
                </div>
            </section>
            
            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div>    
                            <h2 className="h2">Terms of Use</h2>                        
                            <p>Feat Systems Pvt. Ltd. All rights reserved.</p>
                            
                        </div>
                                                     
                            
                            
                        </div>
                        
                    </div>
                    
                    

                </div>
                </section>

            <GetStarted/>
            
        </>   
    );
};

export default TermsOfUse;