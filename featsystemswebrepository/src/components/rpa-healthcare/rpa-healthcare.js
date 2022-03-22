import React from "react";

import '../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import caseimg1 from '../../images/case-img/heathcare/img1.jpg';




import GetStarted from '../../components/home-component/get-started';

import { Helmet } from "react-helmet";


const RpaForHealthcare = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA solutions for Digital Media | Featsystems</title>
                    <meta name="description" content="In the Fierce media market, RPA solutions ensure the media industry is competitive ahead by automating the tedious, manual task so employees can concentrate on thinking innovative by providing high-quality content and better consumer services." />

                    <meta name="keywords" />
                    <meta property="og:title" content="RPA solutions for Digital Media | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/media_img.jpg" />
                    <meta property="og:description" content="In the Fierce media market, RPA solutions ensure the media industry is competitive ahead by automating the tedious, manual task so employees can concentrate on thinking innovative by providing high-quality content and better consumer services." />
                    <meta property="og:url" content="https://www.featsystems.com/rpa-media" />

                    <link rel="canonical" href="https://www.featsystems.com/rpa-media" />
                </Helmet>
            </div>
            <section className="client-section bg-vector" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text fb_text">
                                <h2 className="h1 mt-0">RPA for Healthcare</h2>

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
                                <li>Healthcare</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>





            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-50">
                            <h2 className="h2 mb-50 text-center">Challenges of Healthcare Industry:</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>The Healthcare industry is turning no stones unturned to mark themselves digital to stay at par with other industries. Most of the healthcare industries are adopting RPA and AI to reduce human errors that have cost them a lot in terms of money and time in the past.</li>
                                    <li>Imagine the amount of data that gets transferred to the healthcare industry. From collecting patient’s information to booking appointments with the available doctor to collecting test results from different departments, the entire data management is very time consuming and prone to error when handled manually.</li>
                                    <li>Also, a slight error in collecting on interpreting the patient’s data might trigger a wrong insurance policy affecting the insurance industry as well.</li>
                                    <li>Manually moving the data from patience to the doctor or from one department to another and compiling all the data into one report is the biggest challenge that the healthcare industry can be facing in the current situation.</li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
            </section>



            <section className="case-studies" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-50">RPA can streamline the Healthcare industry</h2>
                        </div>
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul>
                                    <li>The Healthcare industry is progressing towards technological transformations with a lot of Healthcare units using Automation tools to improve their overall efficiency.</li>
                                    <li>RPA in the healthcare Industry results in a higher degree of operational transparency. Robots can ideally be used for monitoring, calibrating, and reporting various healthcare activities like consulting, diagnosis, surgery, pre-op processes, prescription analysis, patient registration, schedule appointment, and others. These bots are result-driven and wellness-centric which improve the customer interaction and visibility of the data with the customers.</li>
                                    <li>Below are some of the RPA Healthcare Solutions that can be easily implemented in your business</li>
                                    <strong>Click on each box to know more!</strong>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="solution-section">
                <div className="container">

                    <div className="sl_section">
                        <div className="sl_head"><h3>Our Solutions</h3></div>

                        <div className="sl_boxes">
                            <Link to="/patient-registration">Patient Registration</Link>
                            <Link to="/schedule-appointment">Schedule Appointment</Link>
                            <Link to="/healthcare-workflow-management">Healthcare Workflow Management</Link>
                            <Link to="/discharge-instructions">Discharge Instructions</Link>
                            <Link to="/better-care-cycle">Better Care Cycle</Link>
                            <Link to="/mediclaim">Mediclaim</Link>
                            <Link to="/audit-procedures">Audit Procedures</Link>
                        </div>

                    </div>
                </div>
            </section>




            <GetStarted />

        </>
    );
};

export default RpaForHealthcare;