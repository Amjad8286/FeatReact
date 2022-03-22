import React from "react";

import '../../../css/case-studies.css';

import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg3 from '../../../images/case-img/airline/img3.jpg'



const AmexCobrandAutomation = () =>{
            
    return(
        <>
            <section className="client-section bg-vector case-std" style={{backgroundImage:  'url("'+caseimg3+'")'}}>
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-12 text-center">
                        <div className="cl-text">
                        <h2 className="h1 mt-0">Amex Cobrand member enrolment Automation</h2>                        
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
                            <li>Amex Cobrand member enrolment Automation</li>                                
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
                            <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Airline Company</div>
                            <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2 className="keych-ttl">Key Challenges</h2>
                    </div>
                    <div className="col-md-6">
                        <p className="keych-pa">Processing the member enrolment requests manually that involves a lot of physical work and needed the human eye's attention to detail.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="cs-lis">
                            <h4 className="keych-ttl">Some of the key challenges were:</h4>
                            <ul>
                                <li>Process involves lengthy steps despite having the moderate volume</li>
                                <li>Taking a long time to accomplish manually</li>
                                <li>Possibility of human making error was likely to be high</li>
                                <li>Delayed in the process affected their service significantly</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2 className="keych-ttl">Our Solution</h2>
                        <p className="sl-para">The solution was provided to automate every process step seamlessly with the help bot that reduces processing errors and incomplete applications also reduces the turnaround time of the enrolment cycle.</p>
                        <div className="cs-lis">
                            <ul>
                                <li>Bot will retrieve the SFTP server input data, reads and validates according to business rules</li>
                                <li>Bot creates files for upload in the general format and uploads the data in the CRIS application</li>
                                <li>Bot then generates the response code</li>
                                <li>Bot prepares, submits, and mails the appropriate report to the concerned stakeholders </li>
                            </ul>
                        </div>

                        <h2 className="keych-ttl">Automation Benefits</h2>
                        <p className="sl-para">The deployed RPA solution was very beneficial to our client and the outcome of automation can be seen through the following points.</p>
                        <div className="cs-lis">
                            <ul>
                                <li>95% of automation efforts were from bot</li>
                                <li>No error was involved in the process</li>
                                <li>Required manual effort was reduced by 10%</li>
                                <li>Maintaining customer satisfaction at high levels</li>
                                <li>Processing time was much faster</li>
                                <li>Moral standards were increased in employees</li>
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

export default AmexCobrandAutomation;