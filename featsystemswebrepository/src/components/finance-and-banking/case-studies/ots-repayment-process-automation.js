import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg17 from '../../../images/case-img/img17.jpg'

import { Helmet } from "react-helmet";

const OTSRepaymentProcessAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>OTS Repayment Process Automation case study | Featsystems</title>
                    <meta name="description" content="The case study has ready to use bot solution that is scheduled and triggered on Saturdays to execute the steps like a human and automate the OTS repayment process of the bank." />

                    <meta name="keywords" />
                    <meta property="og:title" content="OTS Repayment Process Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/ots_repayment_og.jpg" />
                    <meta property="og:description" content="The case study has ready to use bot solution that is scheduled and triggered on Saturdays to execute the steps like a human and automate the OTS repayment process of the bank." />
                    <meta property="og:url" content="https://www.featsystems.com/ots-repayment-process-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/ots-repayment-process-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg17 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">OTS Repayment Process Automation</h2>
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
                                <li>OTS Repayment Process Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Leading Bank</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 4 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Reading numerous files and filtering out multiple files to process further was taking a significant amount of time</li>
                                    <li>Possible human error while comparing several files and delivering SMS to consumers via API</li>
                                    <li>Sending SMTP emails to numerous stakeholders requires additional human intervention</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was developed for the bot to execute the steps like a human that automates the OTS process saves time and removes the human dependency.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot was programmed to activate on Saturdays</li>
                                    <li>Bot reads warehouse data Report and previous week fetched repayment data</li>
                                    <li>Bot filters out several files based on business rules</li>
                                    <li>Then bot creates numerous output files that are subsequently emailed over SMTP</li>
                                    <li>Bot uses API to deliver numerous SMS messages to consumers</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The benefits and the results after the automation were great, with improvements evident all over the process. Some benefits that the RPA solution brings to the process are as follows:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>No need for manual trigger SMS to customers</li>
                                    <li>Performed without any error</li>
                                    <li>Bot was efficient in managing the process</li>
                                    <li>Notable improvements in productivity</li>
                                    <li>Manual laboring decreased</li>
                                    <li>Operators were reassigned to execute higher-value tasks</li>
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

export default OTSRepaymentProcessAutomation;