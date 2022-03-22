import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg19 from '../../../images/case-img/img19.jpg'

import { Helmet } from "react-helmet";

const DuplicateStatementAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Duplicate Credit Card Statement case study | Featsystems</title>
                    <meta name="description" content="In this case study, we&#39;ll see how the RPA bot helps our client which is one of the leading banks in the automation of duplicate credit card statements." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Duplicate Credit Card Statement case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/duplicate-credit-card-statement.jpg" />
                    <meta property="og:description" content="In this case study, we&#39;ll see how the RPA bot helps our client which is one of the leading banks in the automation of duplicate credit card statements." />
                    <meta property="og:url" content="https://www.featsystems.com/duplicate-credit-card-statement-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/duplicate-credit-card-statement-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg19 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Duplicate Credit Card Statement Automation</h2>
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
                                <li>Duplicate Credit Card Statement Automation</li>
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
                                    <li>Reading all emails with Subject too (“Duplicate Credit card for the statement”) and then extracting fields from the mail which contains Name, Month, Email id, Active Credit Card Number (masked) was too time-consuming </li>
                                    <li>More dependency on internal department </li>
                                    <li>Due to multiple departments involved that leading to slowing down the process</li>
                                    <li>Possibility of human error was high</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The RPA bot solution was made for our client that acts like a human and automated the tedious, repetitive process with high accuracy.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot starts by reviewing the emails containing the subject “Duplicate Credit card for the statement”</li>
                                    <li>Bot pulls out info from an email a table that includes Name, Month, Email id, Active Credit Card Number (masked)</li>
                                    <li>Then bot retrieves an email list from a file provided as input</li>
                                    <li>Finally, the bot reads the statement file and responds with an attachment through outlook mail</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">In a nutshell, some important benefits of RPA solution after the automation of the process are as follows:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>100% complete automation by the bot</li>
                                    <li>On-time delivery of statements to all branches</li>
                                    <li>Task performed without error</li>
                                    <li>Required processing time was reduce</li>
                                    <li>Reassigned employees for higher-value tasks</li>
                                    <li>Available and operated 24 hours a day, seven days a week (previously 8 am-6 pm weekdays)</li>
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

export default DuplicateStatementAutomation;