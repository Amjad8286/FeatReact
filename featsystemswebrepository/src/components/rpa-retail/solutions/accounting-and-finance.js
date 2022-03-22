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


const AccountingAndFinance = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA Solutions for Accounting Finance</title>
                    <meta name="description" content="Feat Systems Provide RPA solutions for Accounting Finance, reducing costs and risk while improving customer experience." />

                    <meta name="keywords" content="Intelligent Automation, RPA, Robotic Process Automation, RPA for Accounting Finance, RPA for Accounting Finance, Retail Process Automation" />
                    <meta property="og:title" content="RPA Solutions for Accounting Finance" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/accounting-and-finance-og.jpg" />
                    <meta property="og:description" content="Feat Systems Provide RPA solutions for Accounting Finance, reducing costs and risk while improving customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/accounting-and-finance" />

                    <link rel="canonical" href="https://www.featsystems.com/accounting-and-finance" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Accounting and Finance</h2>


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
                                <li>Accounting and Finance</li>
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
                                Through the years, the accounting and finance functions have been managed by skillful professionals but over time technological advancements have brought rapid actions; error is 0% and seamless workflow. In an age characterized by digital transformation, procure to pay, accounts payable and accounts receivable management, order and invoice processing, record to report cycles, account reconciliation, order to cash, consolidating account information between the numerous other assignment process can be managed using RPA.
                            </p>
                            <p>
                                For example, the financial closing involves a numerable of tasks varying from closing out ledgers to forming financial filings and then sending them to various administrative bodies. This includes working with specific individuals, systems across different departments. The process is burdensome and can be easily lighten by RPA.
                            </p>
                            <p>
                                For example, the financial closing involves a numerable of tasks varying from closing out ledgers to forming financial filings and then sending them to various administrative bodies. This includes working with specific individuals, systems across different departments. The process is burdensome and can be easily lighten by RPA.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <GetStarted />

        </>
    );
};

export default AccountingAndFinance;