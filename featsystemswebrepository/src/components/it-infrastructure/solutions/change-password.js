import React from "react";

import '../../../css/industry-css.css';

import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';
import img1 from '../../../images/case-img/it-infrastructure/automation2.jpg'

import ChangePasswordVideo from '../../modals/change-password-video'



const ChangePasswordAutomation = () =>{
            
    return(
        <>
            <section className="client-section bg-vector bg-cover" style={{backgroundImage:  'url("'+img1+'")'}}>
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-12 text-center">
                        <div className="cl-text">
                        <h2 className="h1 mt-0 white-text">Change Password</h2>
                        
                       
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
                            <li><Link to="/by-process">By Department</Link></li>                                                                                   
                            <li><Link to="/it-infrastructure">IT and Infrastructure</Link></li>                                                                                        
                            <li>Change Password</li>                                                                                        
                        </ul>
                    </div>
                    </div>
                </div>
            </section>           
            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">                           
                            <div className="cl-text">
                                <ul className="mda-lst mda-list-items">
                                    <li>One of the most repetitive tasks in any IT company is to keep updating the passwords once every 15 days. For security reasons, this seems to be a good practice to be followed by all employees. But, for systems that are dedicated to some workflows, assigning this task to a person may cause a lot of issues. A person may forget to change the password every 15 days, or when the job is transferred to someone else, he might not remember the previously used password, etc.</li>
                                    <li>To overcome such challenges, using RPA to change passwords seems to be a reasonable solution. By giving a document with details of login, it will input the current login details, change the password every 15 days, update the login details in the document and trigger a mail to the person in charge that the work is done.</li>
                                    <li>This will help the company protect its security policies and make the work simpler and less human-dependent.</li>
                                </ul>
                            </div>
                        </div>                       
                    </div>
                </div>
            </section>

            <section className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="iris-video">
                                
                                <Router>
                                    <Link to="/change-password-video">
                                        <img className="thumbStyle img-fluid" src={img1} align="Printing Configuration" />
                                    </Link>
                                    <Switch>
                                        <Route path="/change-password-video">
                                            <ChangePasswordVideo/>
                                        </Route>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <GetStarted/>
            
        </>   
    );
};

export default ChangePasswordAutomation;