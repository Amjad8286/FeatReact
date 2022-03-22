import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg7 from '../../../images/case-img/img7.jpg'

import { Helmet } from "react-helmet";

const EMIForeclosureAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>EMI Foreclosure Automation | Featsystems</title>
                    <meta name="description" content="In the case study, we implement the RPA solution for a client making the EMI foreclosure process successfully quick, and accurate." />

                    <meta name="keywords" />
                    <meta property="og:title" content="EMI Foreclosure Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/emi-foreclosure-og-img.jpg" />
                    <meta property="og:description" content="In the case study, we implement the RPA solution for a client making the EMI foreclosure process successfully quick, and accurate." />
                    <meta property="og:url" content="https://www.featsystems.com/emi-foreclosure" />

                    <link rel="canonical" href="https://www.featsystems.com/emi-foreclosure" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg7 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">EMI Foreclosure automation</h2>
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
                                <li>EMI Foreclosure automation</li>
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
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Our customer found out their EMI foreclosure process is manually intensive lean on the human workforce that comes off in process delay.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Execution of a single request at a time was a monotonous and tedious task.</li>
                                    <li>Manual Verification and Validation of requests was time-consuming and needed multiple touchpoints for obtaining.</li>
                                    <li>Verification and Validation of each SR-Request is a complex and high chance of human error.</li>
                                    <li>Highly depend on a specific skill user resulting a delay in the process.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was to implement the Digital workers to eliminate such repetitive manual processes making the process faster and error-free.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>A bot is designed that fetches the open request of EMI foreclosure from the Siebel application.</li>
                                    <li>It performs necessary validations and checks and performs completes the process of Vision+ application.</li>
                                    <li>It Updates and closes the request in the Siebel application.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our client was able to see a significant improvement in the process with some essential RPA benefits.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The rate of error decreased to 0%</li>
                                    <li>Making processing time faster</li>
                                    <li>Massive improvement of Service Levels from 3-4 days to same day</li>
                                    <li>Optimizing branch staff utilization</li>
                                    <li>User friendly and better user experience</li>
                                    <li>Minimized financial and compliance risk</li>
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

export default EMIForeclosureAutomation;