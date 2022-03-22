import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg20 from '../../../images/case-img/img12.jpg'
import { Helmet } from "react-helmet";


const NeftRtgsReportsAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>NEFT/RTGS Reports Automation Case Study | Featsystems</title>
                    <meta name="description" content="In the case study we&#39;ll see how the RPA bots provide the missing reports in NEFT/RTGS process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="NEFT/RTGS Reports Automation Case Study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/NEFT_RTGS_og.jpg" />
                    <meta property="og:description" content="In the case study we&#39;ll see how the RPA bots provide the missing reports in NEFT/RTGS process." />
                    <meta property="og:url" content="https://www.featsystems.com/neft-rtgs-reports-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/neft-rtgs-reports-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg20 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">NEFT/RTGS Reports Automation</h2>
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
                                <li>NEFT/RTGS Reports Automation</li>
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
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 2 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Reading text files and extracting particular values from S-Reports and U- reports require human dependency</li>
                                    <li>Human intervention was slowing down the process</li>
                                    <li>Employee error was possible</li>
                                    <li>Manual processing the file is more time consuming</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Our solution was the RPA bot to execute the process fast without any human intervention and provides the missing reports in an automated fashion.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot scans all text files in a folder and retrieves amounts from S- and U-reports</li>
                                    <li>Bot equates the number of S-reports on the current day to the amount on the previous date</li>
                                    <li>In the U-reports bot discovers the missing amount</li>
                                    <li>Bot then produces the missing reports for the specified business user</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Following are the benefits that were impacted by using the RPA solutions in the process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot was efficient in handling the process</li>
                                    <li>Executed and completed without error</li>
                                    <li>Significant improvements in productivity</li>
                                    <li>Reduce dependency on human</li>
                                    <li>Reworking volume was reduced </li>
                                    <li>Employees can now perform more valuable, high-impact activities</li>
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

export default NeftRtgsReportsAutomation;