import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img4.jpg'

import { Helmet } from "react-helmet";

const EmployeeAccessAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Employee Access Creation Process Automation | Featsystems</title>
                    <meta name="description" content="The case study is the ready reference of Employee Access Creation automation that reduces the manual aspects of work while speeding up the process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Employee Access Creation Process Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/employee-access-creation-og.jpg" />
                    <meta property="og:description" content="The case study is the ready reference of Employee Access Creation automation that reduces the manual aspects of work while speeding up the process." />
                    <meta property="og:url" content="https://www.featsystems.com/employee-access-creation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/employee-access-creation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Employee Access Creation Automation</h2>
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
                                <li>Employee Access Creation Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Private Airline Company</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 2 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>Process delays in offering fundamental access for new employees such as domain login, Email access, invitations for Jira</li>
                                <li>In the process, there was an involvement of several teams</li>
                                <li>Human error is highly probable</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The bot solution was designed to bring down the manual-intensive aspects of the work and accelerate the processing speed.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot collects the new employee's information from the mail system</li>
                                    <li>Bots create the employee's AD ID, also creates mail ID in Office 365, and sends JIRA application invitation on mail</li>
                                    <li>The bot creates a log of activity and mails it to the concerned stakeholder</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our RPA solution benefited the client's process leads to outstanding gains in productivity and accuracy.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Reduced error to almost nil</li>
                                    <li>Improvements in the process competency</li>
                                    <li>Increase the satisfaction of employees</li>
                                    <li>Ensuring continuity of business</li>
                                    <li>Reduction of excess dependence on FTE</li>
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

export default EmployeeAccessAutomation;