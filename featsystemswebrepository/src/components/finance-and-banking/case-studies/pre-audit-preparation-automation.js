import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg9 from '../../../images/case-img/img9.jpg'

import { Helmet } from "react-helmet";

const PreauditPreparationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Pre-audit preparation automation case study | Feat Systems</title>
                    <meta name="description" content="" />

                    <meta name="keywords" />
                    <meta property="og:title" content="Pre-audit preparation automation case study | Feat Systems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/pre-audit-preparation_og.jpg" />
                    <meta property="og:description" content="" />
                    <meta property="og:url" content="https://www.featsystems.com/pre-audit-preparation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/pre-audit-preparation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg9 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Pre-audit Preparation Automation</h2>
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
                                <li>Pre-audit Preparation Automation</li>
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
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">
                                The process relies upon the applications and the auditors which stopped their manual process from accelerating.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>The process was highly time-consuming that involve downloading various reports from the different banking applications, consolidating the report with necessary data massaging, and updating the same in a pre-formatted macro-enabled MIS excel file.</li>
                                    <li>Adding a human dependency gives further delay in the completion of the internal audit process.</li>
                                    <li>The process was having a high chance of human error.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The RPA software bots were programmed to execute the pre-audit preparation process that performed fast and accurately.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot seamlessly interacts with various applications and extract the required data from them.</li>
                                    <li>The bot consolidates this downloaded data and does necessary data massaging in excel as per the set business rules.</li>
                                    <li>The bot copies data into a pre-formatted macro-enabled MIS excel file and runs macros to create the MIS reports and place the same in the specified folder and intimately concerned stakeholder through the mail.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">RPA removes the layoffs and increases the peace of the pre-audit preparation process by giving some automation benefits</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Drastically shortened processing time.</li>
                                    <li>Robotisation level: 100% automatic effort.</li>
                                    <li>Error rate decreased to 0%</li>
                                    <li>98% drop in manual effort</li>
                                    <li>Employees were redeployed to use their skills in higher-value complex activities</li>
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

export default PreauditPreparationAutomation;