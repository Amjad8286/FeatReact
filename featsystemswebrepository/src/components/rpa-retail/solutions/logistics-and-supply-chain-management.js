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


const LogisticsSupplyChainManagement = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA Solutions for Retail Logistics and Supply Chain Management</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Retail Logistics and Supply Chain Management, RPA for Retail, Retail Process Automation" />
                    <meta property="og:title" content="RPA Solutions for Retail Logistics and Supply Chain Management" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/logistics-and-supply-chain-management-og.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/logistics-and-supply-chain-management" />

                    <link rel="canonical" href="https://www.featsystems.com/logistics-and-supply-chain-management" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Logistics and Supply Chain Management</h2>


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
                                <li>Logistics and Supply Chain Management</li>
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
                                Active management of the logistics and supply chain empower global organizations to move their goods from suppliers to consumers, monitor storage level and track the cargo shipment so that materials or goods are delivered on time. Supply chain is an attractive target for RPA since the all processes are highly dependent on the back office. As communication is essential for supply chain success, automation of emails would express better communication between customers, distributors and suppliers. RPA automates an email or text when an order is shipped, booked, delivered or delayed.
                            </p>
                            <p>
                                Active management of the logistics and supply chain empower global organizations to move their goods from suppliers to consumers, monitor storage level and track the cargo shipment so that materials or goods are delivered on time. Supply chain is an attractive target for RPA since the all processes are highly dependent on the back office. As communication is essential for supply chain success, automation of emails would express better communication between customers, distributors and suppliers. RPA automates an email or text when an order is shipped, booked, delivered or delayed.
                            </p>
                            <p>
                                As retailers rush to implement RPA in the fear of being left behind sailing competitors, they are moving towards technologies that would bring more and more benefits and allow them to compete assuredly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default LogisticsSupplyChainManagement;