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

const AuditProcedures = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Audit procedures in Healthcare industry | Featsystems</title>
                    <meta name="description" content="The bot has the ability to collect data and generate them into reports during an audit. With the help of the RPA in healthcare, audit procedures can efficiently be streamlined " />

                    <meta name="keywords" />
                    <meta property="og:title" content="Audit procedures in Healthcare industry | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/Audit procedures-og.jpg" />
                    <meta property="og:description" content="The bot has the ability to collect data and generate them into reports during an audit. With the help of the RPA in healthcare, audit procedures can efficiently be streamlined " />
                    <meta property="og:url" content="https://www.featsystems.com/audit-procedures" />

                    <link rel="canonical" href="https://www.featsystems.com/audit-procedures" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Audit procedures process in healthcare</h2>


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
                                <li><Link to="/rpa-healthcare">Healthcare</Link></li>
                                <li>Audit Procedures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">RPA a solution to audit procedures</h2>
                            <div className="cl-text">
                                <ul className="mda-lst mda-list-items">
                                    <li>Auditing is a very important process for any healthcare industry and it demands a timely check of service efficiency and quality of safety procedures used in the company. </li>
                                    <li>The audit process involves checking if a set of objectives is met by the company or not. Ideally, a report is generated and is then checked for compliance as per the objectives laid down previously. This process is especially followed to avoid any compliance errors which is very crucial for the rating of any healthcare industry.</li>
                                    <li>An Audit process requires human intervention but this can be considered as a classic example where humans and Bots can work hand-in-hand. A bot can automate data recording and report generation process. Based on these reports, an auditor can evaluate the status of the company and suggest appropriate changes that can be implemented by the hospital staff. These reports can evolve and help detect the source of non-compliance activities using the tracking functionality.</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="solution-section">
                <div className="container">
                    <div className="sl_section pd-30">
                        <div className="sl_head"><h2>Our Finance &amp; Banking Solutions</h2></div>
                        <div className="sl_boxes">
                            <Link to="/patient-registration">Patient Registration</Link>
                            <Link to="/schedule-appointment">Schedule Appointment</Link>
                            <Link to="/healthcare-workflow-management">Healthcare Workflow Management</Link>
                            <Link to="/discharge-instructions">Discharge Instructions</Link>
                            <Link to="/better-care-cycle">Better Care Cycle</Link>
                            <Link to="/mediclaim">Mediclaim</Link>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default AuditProcedures;