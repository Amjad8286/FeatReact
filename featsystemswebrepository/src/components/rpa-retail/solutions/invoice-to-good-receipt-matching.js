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



const GoodReceiptMatching = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA Solutions for Retail Invoice To Good Receipt Matching</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Retail Invoice To Good Receipt Matching, RPA for Retail, Retail Process Automation" />
                    <meta property="og:title" content="RPA Solutions for Retail Invoice To Good Receipt Matching" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/invoice-to-good-receipt-matching-og.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/invoice-to-good-receipt-matching" />

                    <link rel="canonical" href="https://www.featsystems.com/invoice-to-good-receipt-matching" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Invoice To Good Receipt Matching</h2>


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
                                <li>Invoice To Good Receipt Matching</li>
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
                                Though a large amount of statements may be auto-matched to the equipment receipts, there will be several adverse effects in the IT system, which may be due to inaccurate delivery numbers provided on the statement or changes in the quantity of products delivered or price variations, and it need to be investigated. In addition, there would be a lot of statements handled outside the key of IT landscape, which will need to be manually matched to the goods received and must be properly tagged for payment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default GoodReceiptMatching;