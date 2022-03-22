import React from "react";

import '../../../css/case-studies.css';

import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg2 from '../../../images/case-img/airline/img2.jpg'



const JPRefundForUBR = () =>{
            
    return(
        <>
            <section className="client-section bg-vector case-std" style={{backgroundImage:  'url("'+caseimg2+'")'}}>
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-12 text-center">
                        <div className="cl-text">
                        <h2 className="h1 mt-0">JP refund for UBR (Uniform Business Rate)</h2>                        
                        </div>
                        <div className="gt-button mt-40">
                            <Link to="/contact" className="btn btn-primary">Get Started</Link>                                                                                                           
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
                            <li><Link to="/automation-solutions">By Industry</Link></li>                               
                            <li><Link to="/rpa-airline">RPA in Airline</Link></li>                               
                            <li>JP refund for UBR (Uniform Business Rate)</li>                                
                        </ul>                            
                    </div>
                    </div>
                </div>
            </section>
            

            <section className="ind-section">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="typ-case">
                            <div className="inds"><strong>Industry -</strong> Airline Company</div>
                            <div className="inds"><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2 className="keych-ttl">Key Challenges</h2>
                    </div>
                    <div className="col-md-6">
                        <p className="keych-pa">The refund team was not able to handle and process the refund for different countries due to a large number of cancellations every day.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="cs-lis">
                            <h4 className="keych-ttl">Some of the key challenges were:</h4>
                            <ul>
                                <li>Several teams were involved in validating the data and processing the refund.</li>
                                <li>Misinterpretation of data due to human involvement</li>
                                <li>The time taken in performing manually was high</li>
                                <li>Delay in the process adversely impacted customer service and brand image</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2 className="keych-ttl">Our Solution</h2>
                        <p className="sl-para">Our experts analyzed the manual nature of the JP refund process for UBR and implement the RPA BOT for automation that performs to its full potential.</p>
                        <div className="cs-lis">
                            <ul>
                                <li>Bot retrieves the input data from the mail for validation processing</li>
                                <li>Bot carries out required validation and data checks</li>
                                <li>Bot generates a file for processing refunds in a predefined format</li>
                                <li>Bot uploads the file to the payment portal to process refunds</li>
                                <li>Bot downloads refund process status from the payment gateway and mail it to the concerned stakeholder</li>
                            </ul>
                        </div>

                        <h2 className="keych-ttl">Automation Benefits</h2>
                        <p className="sl-para">The deployed RPA solution streamlines and improves the refund process. Here are some benefits that were identified after automation.</p>
                        <div className="cs-lis">
                            <ul>
                                <li>Bot takes 95% of efforts for automation</li>
                                <li>0% Error during automation</li>
                                <li>Reduced manual work by 10%</li>
                                <li>150 hours of efforts saved monthly</li>
                                <li>Accelerates processing time</li>
                                <li>Employee morality increase</li>
                            </ul>
                        </div>
                    </div>

                </div>
                </div>
            </section>

        
           
            <GetStarted/>
            
        </>   
    );
};

export default JPRefundForUBR;