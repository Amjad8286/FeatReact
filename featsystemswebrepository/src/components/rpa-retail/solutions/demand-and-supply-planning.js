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


const DemandSupplyPlanning = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA Solutions for Retail Demand and Supply Planning</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Retail Demand and Supply Planning, RPA for Retail, Retail Process Automation" />
                    <meta property="og:title" content="RPA Solutions for Retail Demand and Supply Planning" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/demand-and-supply-planning-og.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/demand-and-supply-planning" />

                    <link rel="canonical" href="https://www.featsystems.com/demand-and-supply-planning" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Demand and Supply Planning</h2>


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
                                <li>Demand and Supply Planning</li>
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
                                Previously, demand and supply planning was a burdensome task that required seeking and gathering bunch of data, optimizing and formatting them, finding out exceptions, running simulations, and later confirming and implementing the plan. These tasks can be automated and smoothly using RPA technologies.
                            </p>
                            <p>
                                RPA technologies would help retailers in increasing quantity and credit management and improving supplier, customer and employee satisfaction. RPA makes the business of retailers much easier!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default DemandSupplyPlanning;