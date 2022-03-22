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


const AccountClosureProcess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Account closure process automation | Featsystems</title>
                    <meta name="description" content="Every month bank receives lots of account closure requests. To deal with such thing feat offers RPA solution that quickly monitors all such accounts notifying them automatically and a reminder to upload the appropriate documents." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Account closure process automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/account-closure-process-og.jpg" />
                    <meta property="og:description" content="Every month bank receives lots of account closure requests. To deal with such thing feat offers RPA solution that quickly monitors all such accounts notifying them automatically and a reminder to upload the appropriate documents." />
                    <meta property="og:url" content="https://www.featsystems.com/account-closure-process" />

                    <link rel="canonical" href="https://www.featsystems.com/account-closure-process" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Account closure process in finance & banking</h2>


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
                                <li>Account Closure process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">Account closure automation with RPA bot</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>With so many customers opening and managing their accounts daily, Banks can expect Account closing requests every month. An account can be closed for various reasons but one of the reasons for the account to be closed, from the bank’s perspective, is when a customer fails to submit mandatory documents.</li>
                                    <li>An RPA bot can help banks identify and track such accounts, send a notification to the concerned team as well as the customer and schedule calls to inform the customers about the submission of the required documents. Exceptional scenarios like customers failing to submit KYC Documents can also be tracked and notified to the bank authorities.</li>
                                    <li>Even though the process seems to be simple, using an integrated RPA Approach for such activities can lessen the burden on manual processes and help the organization perform efficiently</li>
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
                            <Link to="/mf-reconciliation-process">MF Reconciliation Process</Link>
                            <Link to="/compliance">Compliance</Link>
                            <Link to="/accounts-payable">Accounts Payable</Link>
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

export default AccountClosureProcess;