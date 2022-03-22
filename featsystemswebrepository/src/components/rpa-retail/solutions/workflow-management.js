import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';

import { Helmet } from "react-helmet";


const WorkflowManagement = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA Solutions for Retail Workflow Management</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Retail Workflow Management, RPA for Retail, Retail Process Automation" />
                    <meta property="og:title" content="RPA Solutions for Retail Workflow Management" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/workflow-management-og.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/workflow-management" />

                    <link rel="canonical" href="https://www.featsystems.com/workflow-management" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Workflow Management</h2>


                            </div>
                            <div className="gt-button mt-40">
                                <Link to="/contact" className="btn btn-dark">Get Started</Link>
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
                                <li><Link to="/rpa-retail">RPA in Retail</Link></li>
                                <li>Workflow Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Retail industry is originally a human driven industry and communication with the customer is only one thing that needs to be done manually. But with the use of RPA, operating the workflow and other HR processes can be done more productively. Whether it’s measuring time and attendance, auditing sales, assigning shifts, payroll and leave management, or estimating any employee performance, everything becomes accessible with Robotic Process Automation (RPA).
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default WorkflowManagement;