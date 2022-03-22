import React from "react";

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import GetStarted from './home-component/get-started';


import trainingImg1 from '../images/inner-page/training/rpa-awareness-img.jpg'
import trainingImg2 from '../images/inner-page/training/rpa-business-analyst.jpg'
import trainingImg3 from '../images/inner-page/training/rpa-developers-img.jpg'
import { Helmet } from "react-helmet";

const TrainingServices = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Robotic process automation (RPA) Training services | Featsystems</title>
                    <meta name="description" content="Featsystems offer you tailor-made training modules for every RPA maturity level of your company within our partnered RPA tools." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Robotic process automation (RPA) Training services | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/training-services-og.jpg" />
                    <meta property="og:description" content="Featsystems offer you tailor-made training modules for every RPA maturity level of your company within our partnered RPA tools." />
                    <meta property="og:url" content="https://www.featsystems.com/training-services" />


                    <link rel="canonical" href="https://www.featsystems.com/training-services" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Robotic Process Automation (RPA) Training</h2>
                                <p>
                                    Our training Formula aims to enable the key roles within an RPA Center of Excellence through a combination of self-led and instructor-led pieces of training.
                                </p>
                                <div className="gt-button mt-40">
                                    <Link to="/contact" className="btn btn-dark">Get Started</Link>
                                </div>

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
                                <li>Training Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">Our RPA Training Module</h2>
                                <p>
                                    Our RPA training concept is split into 2 parts and each part plays a significant role in the understanding of the topic.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-50">
                        <div className="col-lg-12 mb-50">
                            <h2 className="h1">Non-technical Training</h2>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box-full">
                                <img src={trainingImg1} />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="pl-20">
                                <h3 className="h3 mb-20">RPA Awareness</h3>
                                <div className="cl-text mb-20">
                                    <ul>
                                        <li><strong>Target group - </strong>Non-technical roles, process owners, business representatives</li>
                                    </ul>
                                </div>
                                <p>
                                    It gives a fundamental understanding of RPA technology and illustrates how process automation can be created that can add value to an organization. Enables to understand how the enterprise works during the piloting phase organize a boost to the typical phases in which this takes place
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-50">
                        <div className="col-lg-3">
                            <div className="card-box-full">
                                <img src={trainingImg2} />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="pl-20">
                                <h3 className="h3 mb-20">Business Analyst</h3>
                                <div className="cl-text mb-20">
                                    <ul>
                                        <li><strong>Target group - </strong>Business analysts, process SMEs</li>
                                    </ul>
                                </div>
                                <p>
                                    Gives essential knowledge of systematic recording of processes in a suitable way for the assessment of implementation on RPA platforms, recognition of technical hurdles, rough estimates of the implementation time in the two phases of conception and development, calculation of an ROI, life cycle of the documentation up to the release.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-50">
                            <h2 className="h1">Technical Training</h2>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box-full">
                                <img src={trainingImg3} />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="pl-20">
                                <h3 className="h3 mb-20">RPA Developer</h3>
                                <div className="cl-text mb-20">
                                    <ul>
                                        <li><strong>Target group - </strong>RPA developers, solution architects</li>
                                    </ul>
                                </div>
                                <p>
                                    This allows to receive the knowledge and how to operate the RPA programming environment, knowledge in planning the architecture as well as the special features of the automation and to set up RPA automation for simple and medium-sized processes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>






            <GetStarted />



        </>
    );
};

export default TrainingServices;