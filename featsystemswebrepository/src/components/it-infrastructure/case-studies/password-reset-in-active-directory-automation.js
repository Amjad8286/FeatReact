import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img1.jpg'

import { Helmet } from "react-helmet";

const PasswordResetAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Password Reset automation Case study | Featsystems</title>
                    <meta name="description" content="Our bot was able to handle the process of Password Reset in an active directory that saved hours of manpower and efforts of a full-time employee." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Password Reset automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/Password-Reset-In-Active-Directory-og.jpg" />
                    <meta property="og:description" content="Our bot was able to handle the process of Password Reset in an active directory that saved hours of manpower and efforts of a full-time employee." />
                    <meta property="og:url" content="https://www.featsystems.com/password-reset-in-active-directory-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/password-reset-in-active-directory-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Password Reset in Active Directory Automation</h2>
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
                                <li><Link to="/by-process">By Process</Link></li>
                                <li><Link to="/it-infrastructure">Tt Infrastructure</Link></li>
                                <li>Password Reset in Active Directory Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Automobile Sector</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 6 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The managing password reset process was highly transactional and repeatable in nature a waste of time, money, and frustrate end-users facing customer dissatisfaction.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>The processes with High volume.</li>
                                    <li>High processing time due to reliance on individuals and time limits.</li>
                                    <li>High escalation rate due to delay in the process.</li>
                                    <li>Strong likelihood of a human mistake.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">To handle password reset our team implemented the RPA bot and automated the complete process competence and maintaining the customer satisfaction of the company.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The robotic solution designed to work efficiently 24 x 7</li>
                                    <li>The bot automatically read and identify password reset emails.</li>
                                    <li>The bot does necessary validation, performs password reset, and replies to the mails.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">By deploying bots our client was able to observe a comprehensive list of RPA Benefits in their company.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Ensure business continuity by working 24x7</li>
                                    <li>Degree of robotization: 95% of effort automated.</li>
                                    <li>Maintain a high level of customer satisfaction</li>
                                    <li>Effort reduction: 80 - 100%</li>
                                    <li>Employees redeployed to carry out higher-value activities</li>
                                    <li>Improved efficiency</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <GetStarted />

        </>
    );
};

export default PasswordResetAutomation;