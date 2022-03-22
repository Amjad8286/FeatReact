import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg13 from '../../../images/case-img/img13.jpg'

import { Helmet } from "react-helmet";

const CMSComplaintsUploadAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CMS Complaints Upload Automation case study | Featsystems</title>
                    <meta name="description" content="The case study is the ready reference of the deployed bot to auto-upload the received complaints that ease the employees from performing this repetitive activity." />

                    <meta name="keywords" />
                    <meta property="og:title" content="CMS Complaints Upload Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/cms-complaint-upload-og.jpg" />
                    <meta property="og:description" content="The case study is the ready reference of the deployed bot to auto-upload the received complaints that ease the employees from performing this repetitive activity." />
                    <meta property="og:url" content="https://www.featsystems.com/cms-complaints-upload-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/cms-complaints-upload-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg13 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">CPGRAMS Complaints Automation</h2>
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
                                <li>CPGRAMS Complaints Automation</li>
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
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Employees had to validate and manually add the received complaints was a time-consuming task that needed accuracy.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Highly reliable on individuals and participation by several departments lead to delays in the process</li>
                                    <li>Repetitive and laborious job not requiring specialist expertise</li>
                                    <li>Human interventions can lead to a processing error</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solutions made to automate the process steps of received data information of complaints to be uploaded.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot scans the email and collects the information &amp; necessary attachments </li>
                                    <li>The bot then logs in, search and open a complaint using the CMS online site</li>
                                    <li>Bot modify or edit the complaint and complete the relevant fields with the data</li>
                                    <li>Finally, the bot saves the complaint by uploading the attachment</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Bot enhances the process and provides the results after automation.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Guarantees continuation of business throughout transactions influx</li>
                                    <li>Bot performs without any errors</li>
                                    <li>The manual handling process decreased to 5%</li>
                                    <li>Employees were assigned to perform the other higher valued tasks for the business</li>
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

export default CMSComplaintsUploadAutomation;