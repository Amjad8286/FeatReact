import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg1 from '../../../images/case-img/img1.jpg'
import { Helmet } from "react-helmet";


const CustomerSupportAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Customer support automation case study | Featsystems</title>
                    <meta name="description" content="This case study provides a reference to the IRIS solution that automates the whole process of customer support by intelligently fulfilling the request." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Customer support automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/customer-support-automation-og.jpg" />
                    <meta property="og:description" content="This case study provides a reference to the IRIS solution that automates the whole process of customer support by intelligently fulfilling the request." />
                    <meta property="og:url" content="https://www.featsystems.com/customer-support-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/customer-support-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Customer Support Automation</h2>
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
                                <li><Link to="/rpa-finance-and-banking">Finance and Banking</Link></li>
                                <li>Customer Support Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Leading Banking &amp; Financial services</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 4 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Daily responding to the customer support requests manually leads to delays, consuming time, lengthy, and increasing workload on employees.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Managed and handled by several teams</li>
                                    <li>More than 5,000 requests and complaints were at a day, with 4-hour TAT/SLA</li>
                                    <li>Manual correlation of complex several data sources</li>
                                    <li>For processing, multiple systems associated with interactions</li>
                                    <li>Required several handshakes with internal and external teams as well as applications</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para"><a href="/pigeoniCQRS">IRIS solution</a> was able to automate and streamline the entire process by responding to customer support requests seamlessly.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>IRIS uses self-service support channels that include chatbot, e-mail, and webpage to facilitate customer interactions within the system</li>
                                    <li>IRIS activates its AI engine and evaluates interactions in the purpose of intent, sentiment, and analyze the topic</li>
                                    <li>AI Engine then sets the suitable interaction for priority and assigns it to the bot agent available (RPA). In exceptional situations, it transfers to the human agent</li>
                                    <li>Finally, the bot agent processes the interactions and automatically answers the customer request</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">For the client, Deployed IRIS proved to be the only valuable one-stop-shop solution that was able to transform the entire process under one roof. </p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Manually handling saved by 80% every year</li>
                                    <li>200% + improvement in efficiency</li>
                                    <li>Improved service levels significantly from days to the minute</li>
                                    <li>Enhance the customer service experience</li>
                                    <li>Reduce the workload of employees</li>
                                    <li>Employees used in performing another complex higher value-added activity</li>
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

export default CustomerSupportAutomation;