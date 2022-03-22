import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/hr/img4.jpg'
import { Helmet } from "react-helmet";

const BackgroundVerificationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Employee Background Verification Automation case study | Featsystems</title>
                    <meta name="description" content="In the case study deployed bot eases hr from tracking and verifying new employees which is monotonous tasks making the process perform faster easily." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Employee Background Verification Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/employee-background-verification_og.jpg" />
                    <meta property="og:description" content="In the case study deployed bot eases hr from tracking and verifying new employees which is monotonous tasks making the process perform faster easily." />
                    <meta property="og:url" content="https://www.featsystems.com/employee-background-verification" />

                    <link rel="canonical" href="https://www.featsystems.com/employee-background-verification" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Employee Background Verification Automation</h2>
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
                                <li><Link to="/rpa-human-resource">RPA for Human Resources</Link></li>
                                <li>Employee Background Verification Automation</li>
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
                                <div className="inds"><strong>Industry -</strong> leading System Integrator</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 2 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Performing verification of new employee details against a large number of datasets was time-consuming it requires a very high level of accuracy.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4 className="keych-ttl">Some of the key challenges were:</h4>
                                <ul>
                                    <li>The work needs to keep track of new employees whose background verification remaining which possibly have been missed out or delayed.</li>
                                    <li>Also sending mail to the employer, HR has to monitor the response, verify, and then sending a follow-up email was an extremely boring task.</li>
                                    <li>High chances of missing updates and error </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution made for the process to automate tracking and cross-verifying the employee details without any human intervention easily.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot keeps a track of all the new candidates and sends a verification main in a pre-defined format and updates the same in the application.</li>
                                    <li>Bot receives the updates at a specific time and cross-verify.</li>
                                    <li>Bot update the response in Microsoft Dynamics and updates HR via mail</li>
                                    <li>Bot finally generates log master reports and sends them to HR.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Bot eases the process and gives the results within a shorter time adding more benefits to the organization.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>100% automation effort by the BOT</li>
                                    <li>Bot performs without any errors</li>
                                    <li>No human intervention</li>
                                    <li>Saved monthly 350 hours of labour</li>
                                    <li>Makes processing faster</li>
                                    <li>Improvement in the data security</li>
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

export default BackgroundVerificationAutomation;