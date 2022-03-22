import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import chequeProcessingThumbnail from '../../../images/case-img/cheque-processing-thumbnail.jpg'
import caseimg15 from '../../../images/case-img/img15.jpg'

import { Helmet } from "react-helmet";

const ChequeProcessing = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Cheque Processing Automation case study | Featsystems</title>
                    <meta name="description" content="The case study gives detailed information on RPA, OCR, and AI engine software that automates cheque processing with ease and improving process quality and the customer experience." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Cheque Processing Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/Cheque-processing-automation-og.jpg" />
                    <meta property="og:description" content="The case study gives detailed information on RPA, OCR, and AI engine software that automates cheque processing with ease and improving process quality and the customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/cheque-processing-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/cheque-processing-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg15 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Cheque Processing Automation</h2>
                            </div>
                            <div className="gt-button mt-40">
                                <Link to="/" className="btn btn-primary">Get Started</Link>
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
                                <li>Cheque Processing Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Leading Banking Services</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 12 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Processing cheques manually for validation to complete the transaction was time-consuming also susceptible to human errors.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Making and checking decisions are made by numerous branches and back-office teams to process it manually</li>
                                    <li>For 50000+ daily transactions of 6-7 types across 1700 branches taking an average of 10 minutes to complete the transaction</li>
                                    <li>Complex multiple data sources were manually correlated</li>
                                    <li>Involvement of several applications in the process, including legacy systems and online portals</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <section className="video-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="iris-video">
                                    <img className="img-fluid" src={chequeProcessingThumbnail} align="Cheque Processing Automation" />
                                    {/* <iframe className="responsive-v" id="ytVideo" src="" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe> */}
                                    <div className="ldcss">
                                        <img src="/Content/images/new-img/loading-img.gif" className="loader-icon" alt="loader" /><span className="waittxt">Please wait..</span>
                                    </div>
                                    <div className="close-md cls-icon">✖</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was build using RPA, OCR, and AI to automate the complete cheque processing that works with the existing banking system with ease.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Customer/Branch user uploads the cheque and data into the Mobile application</li>
                                    <li>Now the OCR comes into action to extract data from the uploaded documents</li>
                                    <li>Allowing RPA to perform numerous handshakes with the CBS system and provides data to AI Engine based on the data validated</li>
                                    <li>Customer/Branch user then gets a confidence scorecard from the AI-Engine</li>
                                    <li>He Approves/Reject case after checking the same on the Screen</li>
                                    <li>Resulting, completion of the transaction was a successful</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The company was able to reap significant benefits from the solution.</p>
                            <p className="sl-para">Following are the key results of implementing an RPA and AI-based solution for cheque processing automation.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Annually, manual labour is reduced by 75%</li>
                                    <li>Reduced processing and quality assurance checking times</li>
                                    <li>Service Levels have improved significantly.</li>
                                    <li>Reduced operational costs by a considerable amount</li>
                                    <li>Process standardization increased</li>
                                    <li>Customer experience improved.</li>
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

export default ChequeProcessing;