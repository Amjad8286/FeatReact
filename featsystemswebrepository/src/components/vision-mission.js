import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from './home-component/get-started';
import { Helmet } from "react-helmet";



const VisionMission = () => {
    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Our Vision and Mission | Featsystems</title>
                    <meta name="description" content="Our vision &amp; mission is about giving you and your end-user enriching experiences that deliver remarkable results with the hyper-intelligent automation solutions in your automation journey." />
                    <meta property="og:title" content="Our Vision &amp; Mission | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/vision-mission-og.jpg" />
                    <meta property="og:description" content="Our vision &amp; mission is about giving you and your end-user enriching experiences that deliver remarkable results with the hyper-intelligent automation solutions in your automation journey." />
                    <meta property="og:url" content="https://www.featsystems.com/vision-mission" />
                    <link rel="canonical" href="https://www.featsystems.com/vision-mission" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Vision and Mission</h2>
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
                                <li>Vision & Mission</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-50">
                            <h2 className="h2">Vision</h2>
                            <p className="para">Our vision is to transform human being's life at work that can create a better society on the earth.</p>

                        </div>
                        <div className="col-lg-12">
                            <h2 className="h2">Mission</h2>
                            <p className="para">
                                We are on a mission to transform and simplify human beings life at work by creating agile and resilient hyper-intelligent automation solutions using the second machine age era of technologies like business process management, robotic process automation, artificial intelligence, optical character recognition, and the internet of things which can empower humans and make them efficient to do intelligent work.
                            </p>

                        </div>

                    </div>



                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default VisionMission;