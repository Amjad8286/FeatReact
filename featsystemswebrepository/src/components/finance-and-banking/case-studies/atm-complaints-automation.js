import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg6 from '../../../images/case-img/img6.jpg'
import { Helmet } from "react-helmet";


const ATMComplaintsAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>ATM complaints automation Case study | Featsystems</title>
                    <meta name="description" content="In the case study, we automated the entire process of managing ATM compliant for our client using the RPA bot and improved the efficiency and accuracy of the process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="ATM complaints automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/ATM-complaints-og.jpg" />
                    <meta property="og:description" content="In the case study, we automated the entire process of managing ATM compliant for our client using the RPA bot and improved the efficiency and accuracy of the process." />
                    <meta property="og:url" content="https://www.featsystems.com/atm-complaints-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/atm-complaints-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg6 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">ATM Complaints Automation</h2>
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
                                <li>ATM Complaints Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Banking &amp; Financial Sectors</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 7 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The major challenge was managing and processing the ATM complaints manually making the process boring that resulted in multiple errors.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>The process was a highly complex and high-volume transaction with multiple checks and validation from various applications.</li>
                                    <li>The process needed to interact with multiple applications viz. Siebel, Finacle, SSRS, EJ Text Files, DMS web portal Outlook, and Excel.</li>
                                    <li>The process was tedious and time-consuming with having multiple teams working on it to meet the turnaround time</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">We implemented an RPA solution to automate the entire process of managing the ATM complaints made the process faster and error-free.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Design a robust solution to meet the customer need wherein the bot fetches the data form ATM complaints data from Sibel and do the necessary verification in various application and takes necessary action according to the business rule.</li>
                                    <li>SQL Database is configured and used store procedures to make the process faster and stable.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Here is a comprehensive list of benefits for the enterprise when deployed RPA in their process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Degree of robotization: 90% of effort automated.</li>
                                    <li>Error rate decreased to 0%</li>
                                    <li>Operational cost cut by 60%</li>
                                    <li>Manual effort reduced by 70%</li>
                                    <li>Significant reduced AHT by 60%</li>
                                    <li>Reduced processing time up to 75 %</li>
                                    <li>Employees redeployed to carry out higher-value activities</li>
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

export default ATMComplaintsAutomation;