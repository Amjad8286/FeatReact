import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/hr/img4.jpg'

import { Helmet } from "react-helmet";
const PostingEmployeeAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Posting Employee Training details automation case study | Featsystems</title>
                    <meta name="description" content="The case study is the ready reference of the deployed bot to auto post the employee training details to the various portal and relieving the HR team from performing this process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Posting Employee Training details automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/posting_employee_training_og.jpg" />
                    <meta property="og:description" content="The case study is the ready reference of the deployed bot to auto post the employee training details to the various portal and relieving the HR team from performing this process." />
                    <meta property="og:url" content="https://www.featsystems.com/posting-employee-training-details" />

                    <link rel="canonical" href="https://www.featsystems.com/posting-employee-training-details" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Posting Employee Training Details</h2>
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
                                <li><Link to="/by-process">By Process</Link></li>
                                <li><Link to="/rpa-human-resource">RPA for Human Resources</Link></li>
                                <li>Posting Employee Training Details</li>
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
                                <div className="inds"><i className="fa fa-desktop"></i><strong>Industry -</strong> leading System Integrator</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 2 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">For the HR team, it was very tiresome to visit each channel every time to post employee training details.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4 className="keych-ttl">Some of the key challenges were:</h4>
                                <ul>
                                    <li>Updating training data in Microsoft dynamics manually and Intranet portal for each employee was a monotonous and time-consuming task</li>
                                    <li>They need to keep complete track and was necessary to update frequently</li>
                                    <li>High possibilities of missing updates and error</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The bot was scheduled to post-training details for different channels from one place and auto post to the relevant portal.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot filter and reads the mail regarding the employee training</li>
                                    <li>Bot verifies the training details of the employee</li>
                                    <li>Bot updates every detail of training related input in Microsoft dynamics and various Intranet portal</li>
                                    <li>Bot the generates the completed job log and sends it to HR</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Deployed bot for automation now considerably eases HR staff from performing this repetitive and tedious task.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot automates 95% of the process</li>
                                    <li>Performance without any errors</li>
                                    <li>Manual labor decreased by 10%</li>
                                    <li>Saved monthly 350 hours of labor</li>
                                    <li>Process was working faster</li>
                                    <li>Enhance data protection</li>
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

export default PostingEmployeeAutomation;