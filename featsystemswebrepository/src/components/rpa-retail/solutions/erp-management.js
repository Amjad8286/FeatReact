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



const ERPManagement = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>ERP Management</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Retail ERP Management, RPA for Retail, Retail Process Automation" />
                    <meta property="og:title" content="ERP Management" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/erp-management-og.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for retail, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/erp-management" />

                    <link rel="canonical" href="https://www.featsystems.com/erp-management" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">ERP Management</h2>


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
                                <li>ERP Management</li>
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
                                RPA based Enterprise Resource Planning (ERP) is probably the next new thing after automated inventory management. From keeping a track of billing, price changes, employee vacancies and even generating reports for accounts payable and receivables, an Enterprise Resource Planning (ERP) managed with RPA automates each and everything and also minimizes human efforts. With an accumulation of inventory at the storage and sales at the Point of Sale (POS), an automated ERP assures that you are never out of goods or resources for your organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default ERPManagement;