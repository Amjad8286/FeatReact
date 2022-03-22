import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../../components/home-component/get-started';

import { Helmet } from "react-helmet";


const AccountPayableProcess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Accounts payable process automation | Featsystems</title>
                    <meta name="description" content="Feat RPA solutions help to manage the invoices from the end of the vender without any human interventions in the account payable process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Accounts payable process automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/Accounts payable-og.jpg" />
                    <meta property="og:description" content="Feat RPA solutions help to manage the invoices from the end of the vender without any human interventions in the account payable process." />
                    <meta property="og:url" content="https://www.featsystems.com/accounts-payable" />

                    <link rel="canonical" href="https://www.featsystems.com/accounts-payable" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Account payable process in finance & banking</h2>


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
                                <li><Link to="/rpa-finance-and-banking">Finance & Banking</Link></li>
                                <li>Accounts Payable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>





            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">Accounts Payable automation with software robot</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>Accounts Payable involves processes like extracting vendor information, validating the data, and processing the payment. As this is a very rule-based repetitive process, it is a perfect use case to be handled by the RPA process.</li>
                                    <li>With the help of Optical Character Recognition (OCR), a bot can scan the vendor information from a digital copy of the physical form and enter these details in a database that a bot can access. A robot (RPA) can then validate information as per the rules assigned to it initially and proceed with the payment process. Any error encountered within the process can be immediately notified to the concerned person for immediate action.</li>
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
                            <Link to="/account-opening-process">Account Opening process</Link>
                            <Link to="/customer-service">Customer Service</Link>
                            <Link to="/ekyc-process">KYC process</Link>
                            <Link to="/report-automation">Report Automation</Link>
                            <Link to="/account-closure-process">Account Closure Process</Link>
                            <Link to="/mf-reconciliation-process">MF Reconciliation Process</Link>
                            <Link to="/compliance">Compliance</Link>
                            <Link to="/general-ledger">General Ledger</Link>
                            <Link to="/credit-card-processing">Credit card processing</Link>
                            <Link to="/mortgage-processing">Mortgage processing</Link>
                            <Link to="/fraud-detection">Fraud Detection</Link>
                        </div>
                    </div>
                </div>
            </section>




            <GetStarted />

        </>
    );
};

export default AccountPayableProcess;