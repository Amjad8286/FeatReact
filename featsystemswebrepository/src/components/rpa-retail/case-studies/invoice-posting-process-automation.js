import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg2 from '../../../images/case-img/retail/img2.jpg'
import caseimg3 from '../../../images/case-img/retail/img3.jpg'

import RetailInviceModal from '../../modals/retail-invoice-process'

import { Helmet } from "react-helmet";



const InvoicePostingProcessAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Invoice posting process Automation case study | Featsystems</title>
                    <meta name="description" content="In the case study RPA eliminating the failures, operational risk of the invoice posting process and strengthened the service overall." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Invoice posting process Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/invoice-posting-og.jpg" />
                    <meta property="og:description" content="In the case study RPA eliminating the failures, operational risk of the invoice posting process and strengthened the service overall." />
                    <meta property="og:url" content="https://www.featsystems.com/invoice-posting-process-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/invoice-posting-process-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg2 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Invoice Posting Process Automation</h2>
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
                                <li>Invoice Posting Process Automation</li>
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
                                <div className="inds"><strong>Industry -</strong> Leading Retail Group</div>
                                <div className="inds"><strong>Implementation Time - Within 3 WEEKS*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Human intervention was slowing the processing time that can lead to large fines and payment delays.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Manually operated by various support departments.</li>
                                    <li>Taking a long time for data validation and QA process</li>
                                    <li>Manual correlation of complex multiple data sources.</li>
                                    <li>With a significant amount of complex data processed manually scope of errors was high.</li>
                                    <li>Many software, such as CRM, legacy programs, web servers, email, and excel, are included in this process.</li>
                                </ul>
                            </div>

                        </div>

                        <section className="video-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="iris-video">
                                            <Router>
                                                <Link to="/retail-invoice-process"><img className="img-fluid" id="v_thumnail" src={caseimg3} align="Invoice Posting Process Video" /></Link>
                                                <Switch>
                                                    <Route path="/retail-invoice-process">
                                                        <RetailInviceModal />
                                                    </Route>
                                                </Switch>
                                            </Router>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The efficient approach was RPA that helped the company to process a large number of invoices within less time, with no errors making the process faster and sufficient.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot derives information from several sources including portal, e-mail and FTP location.</li>
                                    <li>Bot conducts data validation and checks the results.</li>
                                    <li>Now then bot logs into the necessary applications to finishes the transaction according to the processes request type.</li>
                                    <li>The bot sends the completion report after the process has been finalised successfully.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The outcome of RPA bot was numerous. The benefits of automation can be seen below:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The level of success improved.</li>
                                    <li>Reduced time to process and check QA.</li>
                                    <li>Significant increase in quality of service.</li>
                                    <li>Reduce in operational costs.</li>
                                    <li>Improvement of consistency at 0% error rate.</li>
                                    <li>Increased standardization of process.</li>
                                    <li>Operation now open 24/7 (previously 8am-6pm weekdays)</li>
                                    <li>Reduce the dependency on the FTE.</li>
                                    <li>Customer service enhanced.</li>
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

export default InvoicePostingProcessAutomation;