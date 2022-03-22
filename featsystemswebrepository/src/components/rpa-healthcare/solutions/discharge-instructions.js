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


const DischargeInstructionProcess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Discharge instructions process in Healthcare | Featsystems</title>
                    <meta name="description" content="Virtual Bots (RPA) are capable of delivering precise discharge instructions and send notification about prescription pick-ups to patients resulting in healthcare providers to improve the quality of patient services." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Discharge instructions process in Healthcare | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/discharge instructions-og.jpg" />
                    <meta property="og:description" content="Virtual Bots (RPA) are capable of delivering precise discharge instructions and send notification about prescription pick-ups to patients resulting in healthcare providers to improve the quality of patient services." />
                    <meta property="og:url" content="https://www.featsystems.com/discharge-instructions" />

                    <link rel="canonical" href="https://www.featsystems.com/discharge-instructions" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Discharge instruction process in healthcare</h2>


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
                                <li>Discharge Instructions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">Robotic process automation (RPA) a solution to discharge instructions process</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>Your Hospital may have the best surgeons in town and the best medical facility provided to the patient. But, what if the surgery is successful but the patient develops an allergy post the surgery? Will he blame himself or the hospital for his condition?  </li>
                                    <li>After the surgery is performed, a patient has to be clearly instructed about the discharge process and the clinic has to make sure the patient is following the instructions and visiting the doctor regularly. Only when the patient recovers completely and gets back to normal, he will review the hospital services to be good. Hence, the patient is given prescriptions, medications, and is asked to follow post-discharge guidelines when he sees certain symptoms. </li>
                                    <li>How can a hospital handle the Discharge process easily and check whether the patient follows discharge instructions? It seems a very tedious job if done manually right?  </li>
                                    <li>Problems like these call for RPA solution. RPA bots can make sure discharge guidelines are followed accurately. They can send prescription pick-up reminders to the patients, notify upcoming doctor’s appointment and medical tests, and also alert the healthcare provider if a patient requests for further assistance. Say, for example, a patient has undergone Chemotherapy. After some time, he suffers from Stomach ache. As it is a side-effect of therapy, the patient can take the help of Bot assistant which can prescribe medications and fix an appointment with the required doctor immediately. Also, it can notify the doctor about the current status of the patient in the discharge process.</li>
                                    <li>With the integration of RPA, a healthcare company can improve HCAHPS (Hospital Consumer Assessment of Healthcare Providers and Systems) score and enhance customer experience by providing better healthcare facilities and reducing readmissions. </li>
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

export default DischargeInstructionProcess;