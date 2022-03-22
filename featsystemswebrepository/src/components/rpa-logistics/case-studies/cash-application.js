import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg2 from '../../../images/case-img/logistics/img2.jpg'

import { Helmet } from "react-helmet";

const CashApplicationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Cash Application Automation case study | Featsystems</title>
                    <meta name="description" content="The case study shows every step of how the RPA bot performs and automates the cash applications without any error." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Cash Application Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/cash-application-og.jpg" />
                    <meta property="og:description" content="The case study shows every step of how the RPA bot performs and automates the cash applications without any error." />
                    <meta property="og:url" content="https://www.featsystems.com/cash-application" />

                    <link rel="canonical" href="https://www.featsystems.com/cash-application" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg2 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Cash Application Automation</h2>
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
                                <li><Link to="/rpa-logistics">RPA in Logistics</Link></li>
                                <li>Cash Application Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Global Logistics company</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>

                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4 className="keych-ttl">Some of the key challenges were:</h4>
                                <ul>
                                    <li>Tasks had to be completed manually, which was taking a lot of time.</li>
                                    <li>Tasks steps involve- </li>
                                    <ol className="panel-body">
                                        <li>Data retrieval from the user's inbox</li>
                                        <li>Data extraction from different file types</li>
                                        <li>Collating the same in a predefined format in excel</li>
                                        <li>Finally using oracle cash application to submit data</li>
                                    </ol>
                                    <li>Taking a long time to download the input files.</li>
                                    <li>Unacceptably high possibility of human mistake</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">We designed and developed a solution to automate the cash application process using RPA software bots based on customer payments.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot download the files received in the mailbox</li>
                                    <li>Bot identifies files types and retrieves data appropriately, saving it on excel in a standard predefined format.</li>
                                    <li>Bot conducts the appropriate formatting for the data and verifies it.</li>
                                    <li>After data is uploaded to the Oracle Cash application by the Bot</li>
                                    <li>Bot produces a report and sends it to the appropriate stakeholders</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Here are some benefits of the process after using the RPA solution that helped the customer develop substantial confidence.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Robotization level: 100% of the task was automated</li>
                                    <li>Reduction of errors to 0% was seen</li>
                                    <li>Significant reduction in manual labor</li>
                                    <li>Processing time was faster</li>
                                    <li>Workers were reassigned to perform higher-value tasks</li>
                                    <li>Operational quality was improved</li>
                                    <li>Maintains a high degree of consumer satisfaction</li>
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

export default CashApplicationAutomation;