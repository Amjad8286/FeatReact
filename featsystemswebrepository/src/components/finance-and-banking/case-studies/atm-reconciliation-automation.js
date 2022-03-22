import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg10 from '../../../images/case-img/img10.jpg'
import { Helmet } from "react-helmet";


const ATMReconciliationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>ATM reconciliation process automation case study | Featsystems</title>
                    <meta name="description" content="In the case study, our designed RPA solution automatically reconciles the ATM process seamlessly and makes the process stable, error-free, and secure data." />

                    <meta name="keywords" />
                    <meta property="og:title" content="ATM reconciliation process automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/ATM_Reconciliation_og.jpg" />
                    <meta property="og:description" content="In the case study, our designed RPA solution automatically reconciles the ATM process seamlessly and makes the process stable, error-free, and secure data." />
                    <meta property="og:url" content="https://www.featsystems.com/atm-reconciliation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/atm-reconciliation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg10 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">ATM Reconciliation Automation</h2>
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
                                <li>ATM Reconciliation Automation</li>
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
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Manually reconciliation of various data information from multiple system applications was contributing to errors, instability, and problems of data integrity.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>The business processes were high in volume.</li>
                                    <li>Large and complex data files</li>
                                    <li>Reading, formatting, and reconciling data of several files from various systems were involved in the process.</li>
                                    <li>In the process, Multi-teams operate in a very tedious and slow method to achieve the turnaround period.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Provided bot automatically reads the data information which was coming from different systems and turns data into reports format seamlessly that enable ATM reconciliation.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>A high-end architecture was designed for interacting with various applications while keeping the application dynamic.</li>
                                    <li>Bot reconciles the ATM EJ log data with Switch &amp; Cash GL, generates reports, and mail them to concerned stakeholders.</li>
                                    <li>SQL Server was used for storing the fetch data from various files, which improved the automation stability and performance.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Once the solution was implemented the impact was maximum and the benefits of automation can be seen below for the company:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The degree of successful throughput increased from 70% to &gt;100%</li>
                                    <li>The manual effort was lowered by 90%</li>
                                    <li>Significant reduced AHT by 75%</li>
                                    <li>Higher standardization of process</li>
                                    <li>Makes processing time faster</li>
                                    <li>Employees were moved to perform higher-value activities.</li>
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

export default ATMReconciliationAutomation;