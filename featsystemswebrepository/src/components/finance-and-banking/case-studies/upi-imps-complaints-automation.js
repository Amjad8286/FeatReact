import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg5 from '../../../images/case-img/img5.jpg'
import { Helmet } from "react-helmet";


const UPIandIMPSAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>UPI and IMPS complaints automation Case study | Featsystems</title>
                    <meta name="description" content="In the UPI and IMPS Complaints, process automation case you will see how our clients manual and time-consuming efforts was significantly reduced by implementing RPA in their organization." />

                    <meta name="keywords" />
                    <meta property="og:title" content="UPI and IMPS complaints automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/UPI-IMPS-og.jpg" />
                    <meta property="og:description" content="In the UPI and IMPS Complaints, process automation case you will see how our clients manual and time-consuming efforts was significantly reduced by implementing RPA in their organization." />
                    <meta property="og:url" content="https://www.featsystems.com/upi-imps-complaints-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/upi-imps-complaints-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg5 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">UPI and IMPS Complaints Automation</h2>
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
                                <li>UPI and IMPS Complaints Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Banking &amp; Financial Services</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 6 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">In this scenario, the employee is expected to work manually which is time-consuming, and update the information to various systems.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Multiple Applications were involved in the process viz. Siebel, Finacle, SSRS, Outlook, Excel, and a web portal.</li>
                                    <li>Directed and manually processed by multiple support teams.</li>
                                    <li>High manual processing time for analyzing, validating, finalizing, and updating the data into multiple systems.</li>
                                    <li>High transaction volume with TAT of 2 days having multiple employees working on it.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Our RPA bots a solution has eliminated employee manual effort related task which was involved during the UPI and Complaints process and enabled process efficiency.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Design a robust solution that integrates with multiple systems, verifies &amp; analyzes the data.</li>
                                    <li>Post verification Bot takes the appropriate actions, mail the report to the concerned stakeholder, and also updates the request in Siebel.</li>
                                    <li>Configure the Backend Database and used store procedures to optimize the processing time wherever possible.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our RPA&nbsp;bots helps to&nbsp;automate&nbsp;such processes by providing the business with important, observable benefits.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Degree of robotization: 90% of effort automated.</li>
                                    <li>Reduction in operational costs.</li>
                                    <li>0% Error rate</li>
                                    <li>Reduced Manual effort by 15%</li>
                                    <li>Processing time decreased up to 75%</li>
                                    <li>Employees were redeployed to higher-value activities</li>
                                    <li>Ensure business continuity during transactions influx</li>
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

export default UPIandIMPSAutomation;