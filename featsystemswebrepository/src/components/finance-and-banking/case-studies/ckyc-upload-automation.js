import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg16 from '../../../images/case-img/img16.jpg'

import { Helmet } from "react-helmet";

const CKYCUploadAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CKYC upload Automation case study | Featsystems</title>
                    <meta name="description" content="The case study shows how the bot automates and performs the initial steps in the CKYC process to relieve employees of laborious and repetitive tasks." />

                    <meta name="keywords" />
                    <meta property="og:title" content="CKYC upload Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/ckyc_og.jpg" />
                    <meta property="og:description" content="The case study shows how the bot automates and performs the initial steps in the CKYC process to relieve employees of laborious and repetitive tasks." />
                    <meta property="og:url" content="https://www.featsystems.com/ckyc-upload-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/ckyc-upload-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg16 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">CKYC Upload Automation</h2>
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
                                <li>CKYC Upload Automation</li>
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
                            <p className="keych-pa">Due to small operational team availability, our client was facing the challenge of managing the application manually became tedious and error-prone.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Handling the CKYC Windows application and choosing certain tabs is extremely time-consuming</li>
                                    <li>Cropping a file in an application takes extra time, which increases the TAT</li>
                                    <li>Managing several file formats (PNG, TIFF, JPEG) and controlling the resolution and size of scanned picture files is a laborious task needed human intervention</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The RPA solution was designed to perform the initial few steps of the process automatically to relieve the employees from doing manual and repetitive work.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot first connects into the CKYC application</li>
                                    <li>Retrieves the customer id and branch to determine the precise location of the folder</li>
                                    <li>Bot locates all files and manages file resolution and size (PNG, tiff, JPEG)</li>
                                    <li>Bot uploads files and crops them based on the needs of the company</li>
                                    <li>Bot generates reports on successful uploads and sends them to the user through email</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Automation of the process achieved excellent outcomes and changes seen throughout the organization. Here are a few benefits provided by the RPA solution to the process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Doesn't require handling each image file resolution and size</li>
                                    <li>Results significant increase in productivity</li>
                                    <li>Bring down the manual laboring</li>
                                    <li>Minimize the amount of image rework</li>
                                    <li>Time to process was made quicker</li>
                                    <li>Employees moved to perform the task that provides higher value</li>
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

export default CKYCUploadAutomation;