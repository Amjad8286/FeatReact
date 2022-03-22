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

const OrderProcessing = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA Solutions for Media Order Processing</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for Media, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Media Order Processing, RPA for Retail, Retail Process Automation, technology" />
                    <meta property="og:title" content="RPA Solutions for Media Order Processing" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/automation/rpa_media.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for Media, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/order-processing" />

                    <link rel="canonical" href="https://www.featsystems.com/order-processing" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Order Processing</h2>


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
                                <li><Link to="/rpa-media">RPA in Media</Link></li>
                                <li>Order Processing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul>
                                    <li>With no interference of human tampering or supervision in real-time order fulfillment (order processing), RPA technology immediately extracts the data from incoming purchase order and convert it into a sales order for ERP system to process for delivery. According to research by the Hackett Group, this reduces handling time up to 40 percent, increasing productivity, quantity and customer satisfaction.</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="solution-section">
                <div className="container">
                    <div className="sl_section pd-30">
                        <div className="sl_head"><h2>Our RPA in Media Solutions</h2></div>
                        <div className="sl_boxes">
                            <Link to="/daily-report-process">Daily Report Process</Link>
                        </div>
                    </div>
                </div>
            </section>
            <GetStarted />

        </>
    );
};

export default OrderProcessing;