import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg11 from '../../../images/case-img/img11.jpg'

import { Helmet } from "react-helmet";

const NonMaintenanceChargeReversalProcess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Non-Maintenance Charge Reversal Process case study | Featsystems</title>
                    <meta name="description" content="In the case study, we designed an RPA solution for our client that automates by reversing the non-maintenance charges process through several touchpoints." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Non-Maintenance Charge Reversal Process case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/non-maintance charges_og.jpg" />
                    <meta property="og:description" content="In the case study, we designed an RPA solution for our client that automates by reversing the non-maintenance charges process through several touchpoints." />
                    <meta property="og:url" content="https://www.featsystems.com/non-maintenance-charge-reversal-process" />

                    <link rel="canonical" href="https://www.featsystems.com/non-maintenance-charge-reversal-process" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg11 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Non-Maintenance Charge Reversal Process</h2>
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
                                <li>Non-Maintenance Charge Reversal Process</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Leading Private Bank</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 4 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">A major concern was to reverse the non-maintenance charges process manually since it was repetitive, monotonous, and error-prone</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Validating and taking appropriate action on the request for non-maintenance charge reversal using multiple banking applications, was a highly time-consuming job that requires skilled employees, hence becoming individual dependent as well.</li>
                                    <li>Also, the involvement of multiple departments causes a delay in the process.</li>
                                    <li>Manual processing also makes the process prone to human error.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was provided to reversing the non-maintenance charges through several touchpoints.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot reads all customer requests from the Siebel application and fetches the requests related to non-maintenance charge reversal.</li>
                                    <li>Bot efficiently do necessary validation and check on these requests in Finacle system.</li>
                                    <li>The bot takes the appropriate action as per the business rule in the Xelerate system and finally close the request</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our client automated the process and got immense benefits from the RPA solution which is seen below:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Process controlled with great efficiency</li>
                                    <li>Significant gains in productivity</li>
                                    <li>Manual labor reduced</li>
                                    <li>Decreased volume of reworking</li>
                                    <li>Employees were moved to perform better activities.</li>
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

export default NonMaintenanceChargeReversalProcess;