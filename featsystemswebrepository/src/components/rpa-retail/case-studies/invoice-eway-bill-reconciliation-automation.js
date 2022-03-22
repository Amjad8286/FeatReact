import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg1 from '../../../images/case-img/retail/img1.png'
import { Helmet } from "react-helmet";


const WaybillReconciliationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Invoice and E-waybill reconciliation Automation case study | Featsystems</title>
                    <meta name="description" content="In the case study, our designed bot in the same sequence automated the invoice and E-way bill reconciliation process with fewer-errors and remove the human dependency." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Invoice and E-waybill reconciliation Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/invoice-e-waybill-og.jpg" />
                    <meta property="og:description" content="In the case study, our designed bot in the same sequence automated the invoice and E-way bill reconciliation process with fewer-errors and remove the human dependency." />
                    <meta property="og:url" content="https://www.featsystems.com/invoice-eway-bill-reconciliation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/invoice-eway-bill-reconciliation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Invoice and E-waybill reconciliation Automation</h2>
                            </div>
                            <div className="gt-button mt-40">
                                <Link to="/contact" className="btn btn-primary">Get Started</Link>
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
                                <li>Invoice and E-waybill reconciliation Automation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="typ-case">
                                <div className="inds"><strong>Industry -</strong> Leading E-commerce Company</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 6 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The main issue was the high FTE contribution in the reconciliation of invoices and E way Bill process. Regular human involvement in the process eventually led to failures, inefficiencies, unnecessary delays, and high cost.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Reading the invoices and E-Way Bill of various sellers in PDF formats and manually copying and pasting the data in excel was a laborious and time-consuming task.</li>
                                    <li>Also, it was finding it difficult to keep track of missing E-Way bills and duplicate invoices.</li>
                                    <li>Manually doing the invoice and E-Way Bill data for reconciliation was very time-wasting.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The RPA bot was designed to perform the task in the same order without human intervention that made no errors.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The Bot reads the relevant emails and download invoices and E-Way bill as an attachment.</li>
                                    <li>The Bot identifies the invoice format alone and fetches the data from it, and updates the data in an excel sheet in the required format.</li>
                                    <li>Post fetching the data and carries out the reconciliation process creates a report and sends mail.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The impact can be seen below that gave some tangible benefits to the company by automating with RPA.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Degree of robotization: Automated initiative by 95%</li>
                                    <li>Failure rate decreased to 0%</li>
                                    <li>Manual workload reduced by 10%</li>
                                    <li>150 hours of efforts saved monthly</li>
                                    <li>Made process faster</li>
                                    <li>Increased business morality</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section>



            <GetStarted />

        </>
    );
};

export default WaybillReconciliationAutomation;