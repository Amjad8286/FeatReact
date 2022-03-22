import React from "react";
import '../css/formStyle.css';
import captchaImg from '../images/inner-page/captcha.png';

import Reference_PDD from '../images/downloads/Reference_PDD.docx';

import {
    BrowserRouter as Router,
    Switch,  
    Route,
    Link
  } from "react-router-dom";


const AutomationSetuProcessDefinition = () =>{
    return(
        <>
            <section className="client-section bg-vector">
                <div className="container">
                <div className="row">      
                    <div className="col-lg-12 text-center">
                    <div className="cl-text">
                        <h2 className="h1 m-0">Automation Setu Process Definition</h2>   
                        <p className="para">Here is the reference to prepare PDD & upload <a href={Reference_PDD}>Download</a> </p>       
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
                                <li><Link to="/bot-as-a-service">Automation Setu</Link></li>
                                <li>Automation Setu Process Definition</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="conatct-box">
                <div className="container">
                    <div className="row column-reverse">
                    <div className="col-lg-6 m-auto">
                        <div className="card-box">
                        <form>                            
                            <div className="from-box">
                            <div className="form-input">
                                <input type="text" pattern="[a-Z]{<3}" className="from-control" name="name" id="name" required=""/>
                                <label className="form-label" htmlFor="name">Name</label>
                            </div>
                            
                            <div className="form-input">
                                <input type="email" className="from-control" name="email" id="email" required=""/>
                                <label className="form-label" htmlFor="email">Email</label>
                            </div>
                            <div className="form-input">
                                <input type="tel" pattern="[0-9]{10}" className="from-control" name="phone" id="phone" required=""/>
                                <label className="form-label" htmlFor="phone">Phone</label>
                            </div>
                            <div className="form-input">
                                <input type="text" className="from-control" name="company" id="company" required=""/>
                                <label className="form-label" htmlFor="company">Company</label>
                            </div>
                           
                            
                            <div className="form-input">               
                                <textarea className="from-control" name="message" id="message"></textarea>
                                <label className="form-label" htmlFor="message">Message</label>
                            </div>
                            <div className="form-input">               
                                <div className="captcha">
                                <img src={captchaImg} alt="captcha"/>
                                </div>
                            </div>
                            <div className="form-input">
                                <input type="text" className="from-control" name="enterCaptcha" id="enterCaptcha"/>
                                <label className="form-label" htmlFor="enterCaptcha">Enter captcha</label>
                            </div>
                            <div className="form-input">
                                <button className="btn btn-dark">Submit</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </section>
        </>
          
    );
};

export default AutomationSetuProcessDefinition;