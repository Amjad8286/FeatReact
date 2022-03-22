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



const ScheduleAppointment = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA schedule appointment process in healthcare | Featsystems</title>
                    <meta name="description" content="When RPA is implemented in healthcare collected patient data and its processing can be automated by the virtual bots (RPA). This bot is ideal in scheduling appointments based on treatment, location, availability of doctors, and other parameters 24/7." />

                    <meta name="keywords" />
                    <meta property="og:title" content="RPA schedule appointment process in healthcare | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/schedule-appointment-og.jpg" />
                    <meta property="og:description" content="When RPA is implemented in healthcare collected patient data and its processing can be automated by the virtual bots (RPA). This bot is ideal in scheduling appointments based on treatment, location, availability of doctors, and other parameters 24/7." />
                    <meta property="og:url" content="https://www.featsystems.com/schedule-appointment" />

                    <link rel="canonical" href="https://www.featsystems.com/schedule-appointment" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Patient registration process in healthcare</h2>
                                <p className="para">
                                    Feat facilitates the appointment process for health professionals. Offer your patients the capability to make online appointments with you from any computer or mobile devices which is connected to the internet 24/7. Managing your appointments and calendars with Feat makes your health center a smooth organization which works on an efficient and active schedule that makes full use of your resources and improves the comfort of your patients.
                                </p>


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
                                <li>Schedule Appointment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">RPA a solution to schedule appointment process</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>
                                        <div><strong>MEDICAL APPOINTMENT SCHEDULING</strong></div>
                                        <p className="mt-10">
                                            You will accept appointments before they are joined into your online medical calendar, an automated affirmation will be sent to the patient. If patients need any appointment they can add appointments manually, by selecting the time which will disappear directly from the online scheduling widget on your website. You can modify, accept, move or cancel these appointments. Set Feat to your wishes and needs and Feat will take care of the rest.
                                        </p>
                                    </li>

                                    <li>
                                        <div>
                                            <strong>MEDICAL APPOINTMENT REMINDERS</strong>
                                        </div>
                                        <p className="mt-10">
                                            Now you can create, set and schedule automated medical appointment reminder via message or email. Inform doctor, assistants or other professionals in your organization about new arrived appointments, changes in their appointment details or cancellation of appointments, everything in minutes. Set appointment reminders for patients to avoid the waste of time of doctors by no-show ups of patients. Discover all the benefits of using online scheduling with Feat.
                                        </p>
                                    </li>

                                    <li>
                                        <div>
                                            <strong>MANAGE YOUR MEDICAL DATABASE</strong>
                                        </div>
                                        <p className="mt-10">
                                            By using Feat as your appointment manager you automatically keep track of your patients in your database. You can add their personal details, medical record, send notifications and contact information. When patients make their first appointment manually or online, their data is automatically saved in your database system. Import your existing database into Feat and you will have all information in one management tool.
                                        </p>
                                    </li>

                                    <li>
                                        <div>
                                            <strong>INTEGRATE YOUR SCHEDULING WIDGET</strong>
                                        </div>
                                        <p className="mt-10">
                                            With easy integrative web-app of our online scheduling application, your patients can be able to make appointments on any web environment. Just make an easy accessible appointment on the website of your clinic or health center in few seconds. No more struggles with patients to find the right time for the appointment that fits both, invest the time in more valuable and important tasks and let us do the scheduling.
                                        </p>
                                    </li>

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
                            <Link to="/healthcare-workflow-management">Healthcare Workflow Management</Link>
                            <Link to="/discharge-instructions">Discharge Instructions</Link>
                            <Link to="/audit-procedures">Audit Procedures</Link>
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

export default ScheduleAppointment;