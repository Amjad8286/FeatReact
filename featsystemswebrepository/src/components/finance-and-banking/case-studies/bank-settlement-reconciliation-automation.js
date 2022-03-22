import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg4 from '../../../images/case-img/img4.jpg'


import { Helmet } from "react-helmet";
const BankSettlementAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Bank settlement reconciliation automation Case study | Featsystems</title>
                    <meta name="description" content="In the case study, you will find how our client from the banking and financial sector was able to automate, optimize, and streamline the Bank settlement reconciliation process with RPA." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Bank settlement reconciliation automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/Bank-settlement-og.jpg" />
                    <meta property="og:description" content="In the case study, you will find how our client from the banking and financial sector was able to automate, optimize, and streamline the Bank settlement reconciliation process with RPA." />
                    <meta property="og:url" content="https://www.featsystems.com/bank-settlement-reconciliation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/bank-settlement-reconciliation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg4 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Bank Settlement Reconciliation Automation</h2>
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
                                <li>Bank Settlement Reconciliation Automation</li>
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
                            <p className="keych-pa">Several actions were taken manually during the process and making the bank settlement reconciliation more complex, monotonous, and time-consuming tasks to handle.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Managing High volume business processes every day</li>
                                    <li>Time for processing was incredibly high for manually reconciling the data.</li>
                                    <li>Laborious as a manual correlation of large and multiple data sources are needed.</li>
                                    <li>When it comes to complex data files, chance having a high rate of human errors.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Our RPA solution approach was ready to improve the customer's output, by automating and eliminating the time-consuming Bank Settlement reconciliation process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>RPA bot with its intelligence to read data from all the input files does require validation and checks on data as per the set business rule.</li>
                                    <li>Bot performs reconciliation of MNSB data with NPCI data and Finacle data.</li>
                                    <li>Bot generate the Final settlement Report and create a TTUM file and mail it to concerned stakeholders.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Deployed RPA bots get to automate the end-to-end process and brings forth several benefits</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Reduce operational cost by 75%</li>
                                    <li>Improved consistency and quality with a 0% error rate</li>
                                    <li>Improvement of Service levels from - 45min to 7 min</li>
                                    <li>Improved staff retention - By reducing high volume low-value work to shift the focus on complex/value-driven task</li>
                                    <li>Increase in scalability</li>
                                    <li>Bot running 24/7 increase the performance output rate of the process</li>
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

export default BankSettlementAutomation;