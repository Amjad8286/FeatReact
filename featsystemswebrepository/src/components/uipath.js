import React from "react";
import '../css/Pigeon.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import uipathLogo from '../images/inner-page/technology/uipath-logo.png'
import uipathDiamondLogo from '../images/inner-page/technology/uipath-diamond-partner-logo.jpg'
import uipathUsmlogo from '../images/inner-page/technology/usn-memeber-logo.jpg'
import GetStarted from './home-component/get-started'


import { Helmet } from "react-helmet";

const UiPath = () => {
    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Technology Partner Uipath | Featsystems</title>
                    <meta name="description" content="Uipath is the leading automation tool in the market that allows achieving the next level of process automation in any size of business." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Technology Partner Uipath | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/uipath-og-img.jpg" />
                    <meta property="og:description" content="Uipath is the leading automation tool in the market that allows achieving the next level of process automation in any size of business." />
                    <meta property="og:url" content="https://www.featsystems.com/uipath" />


                    <link rel="canonical" href="https://www.featsystems.com/uipath" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <div className="mb-50">
                                    <img className="img-fluid" alt="Uipath Logo" src={uipathLogo} />
                                    <p className="mt-40">
                                        UiPath, one of the top 3 Forbes Cloud List, is the market leader in the Automation and RPA Arena. The same is evident in the latest Forrester wave report where UiPath ranked high in Current offering, Strategy, and RPA Market Presence. It is considered the best vendor in the market with respect to execution and vision ratings.
                                    </p>
                                </div>
                            </div>
                            <div className="gt-button">
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
                                <li><Link to="/technology-partner">Technology Partner</Link></li>
                                <li>UiPath</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="para">
                                It has offered Automation solutions to many BFSI, Retail, Healthcare, Automobile, Aviation, and other industries with its lightweight software solutions. It masters in automating repetitive, mundane tasks through RPA solutions with distinctive UiPath features like UiPath Orchestrator to monitor and run multiple bots, record and play Automation option to enable screen recording and Citrix Automation, and many pre-built components to directly automate many business verticals and small workflows within the organization.
                            </p>
                            <p className="para mb-50">
                                UiPath bots are very easy to develop and have the capability of including cognitive solutions. When it comes to creating a workflow, it can be done through drag and drop operations with options understandable to any non-technical person. UiPath offers Shared Service Offering where 3rd party vendors can create independent components and then make them available as add-ons for others to use. Also, it provides components for Visualization, Natural Language Processing, Intelligent Optical Character, Chatbots, AI/ML, and credential management to create powerful Intelligent Hyper-Intelligent bots for your process workflows.
                            </p>

                            <h2 className="h1">Our achievements (our journey with UiPath)</h2>
                            <div className="mt-20">
                                <div className="tech-bg cl-text">
                                    <ul>
                                        <li>

                                            <h2 className="h2">Diamond Partner in India &amp; Silver Partner in the USA region.</h2>
                                            <img src={uipathDiamondLogo} alt="UiPath Diamond Partner" className="mtb-20" />
                                            <p>
                                                Feat Systems, adopted UiPath in early 2016 and started its journey with UiPath as a small boutique company and gradually become one of the key competent and capable partner of UiPath.
                                            </p>
                                            <p>
                                                Feat Systems is one of the 386 diamond partner across the globe of a total 670 business partner community of UiPath.
                                            </p>
                                            <p>
                                                Feat Systems, currently have 100+ UiPath engineers and deployed 400+ business processes for their customers on the UiPath platform.
                                            </p>
                                            <p>
                                                Feat Systems, building Global Deployment center with 1000+ engineers in upcoming years by considering UiPath ecosystem as a base.
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tech-bg cl-text">
                                    <ul>

                                        <li>
                                            <h2 className="h2">A Technology Alliance Partner</h2>
                                            <p>
                                                Feat Systems, becoming an advanced level technology alliance partner of UiPath globally in the business process management (BPM) and dynamic case management (DCM) category is a benchmark of hyper-intelligent automation solutions we have developed like <a href="https://www.youtube.com/watch?v=AEKVwQXaVEQ" target="_blank">IRIS</a> and <a href="https://www.youtube.com/watch?v=56a4jew2108" target="_blank">FIBO</a> in association with the <a href="https://marketplace.uipath.com/listings/iris" target="_blank">UiPath platform</a>
                                            </p>
                                            <p>
                                                Feat Systems is one of the 78 technology alliance partner across the globe of a total 670 partner community of UiPath.
                                            </p>

                                        </li>

                                    </ul>
                                </div>
                                <div className="tech-bg cl-text">
                                    <ul>

                                        <li>

                                            <h2 className="h2">USN member</h2>
                                            <img src={uipathUsmlogo} alt="UiPath USN Member" className="mtb-20" />
                                            <p>
                                                This perhaps a great achievement of Feat Systems to become a UiPath Service Network (USN) member to support UiPath professional services arm globally.
                                            </p>
                                            <p>
                                                Feat Systems is one of <strong>16 diamond business partner</strong> across the globe of 386 diamond partner and 670 business partners globally to achieve this and enter into the elite group of membership with UiPath.
                                            </p>
                                            <p>
                                                Hence, we can proudly say that we are one of the best 16 partner of UiPath across the globe of a total 670 business partner community.
                                            </p>
                                            <p>
                                                This membership recognizes our advanced Service Delivery skills to be at par with UiPath Professional Services Team. We offer strong RPA skills with each employee getting directly trained and certified from UiPath Academy. We have prepared ourselves to create cutting-edge Hype-Automation solutions to provide competitive workflows for our customers.
                                            </p>
                                            <p>
                                                Since Feat Systems proved to have a well-established RPA practice acquiring many business deals to provide the customers with UiPath Hyper-Automation solutions, UiPath awarded this partnership status to our company.
                                            </p>

                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </div>



                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default UiPath;