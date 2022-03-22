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


const KYCprocess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>KYC process automation in finance &amp; banking | Featsystems</title>
                    <meta name="description" content="RPA automates the KYC process helps in saving the time and avoids the losses of incorrect data or information that has been obtained." />

                    <meta name="keywords" />
                    <meta property="og:title" content="KYC process automation in finance &amp; banking | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/ekyc-process-og.jpg" />
                    <meta property="og:description" content="RPA automates the KYC process helps in saving the time and avoids the losses of incorrect data or information that has been obtained." />
                    <meta property="og:url" content="https://www.featsystems.com/ekyc-process" />

                    <link rel="canonical" href="https://www.featsystems.com/ekyc-process" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">KYC process in finance & banking</h2>


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
                                <li>KYC Process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>





            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">KYC process automation using RPA Bot</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>
                                        The critical Compliance process is handled manually in most of the banks. But, hiring professionals for this process or handling the process error-free are some of the challenges that the Banks face. Process Automation can help Banks by:
                                        <ul className="mt-10">
                                            <li>Collecting information from customers through banking portals.</li>
                                            <li>Using digital signature support.</li>
                                            <li>Data screening and validating the data using plugins</li>
                                        </ul>
                                    </li>
                                    <li> Using bots (RPA) will automatically save time and also prevent any losses incurred due to inaccurate data or information collected.</li>

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
                            <Link to="/report-automation">Report Automation</Link>
                            <Link to="/account-closure-process">Account Closure Process</Link>
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

export default KYCprocess;