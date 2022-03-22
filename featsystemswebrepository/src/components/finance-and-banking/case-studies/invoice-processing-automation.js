import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg3 from '../../../images/case-img/img3.jpg'

import { Helmet } from "react-helmet";

const InvoiceProcessingAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Invoice Processing Automation Case study | Featsystems</title>
                    <meta name="description" content="In this case study, you will see how we implemented the RPA solution in all the largest industries and automated their Invoice processing activities" />

                    <meta name="keywords" />
                    <meta property="og:title" content="Invoice Processing Automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/Invoice-Processing-Automation-og.png" />
                    <meta property="og:description" content="In this case study, you will see how we implemented the RPA solution in all the largest industries and automated their Invoice processing activities" />
                    <meta property="og:url" content="https://www.featsystems.com/invoice-processing-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/invoice-processing-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg3 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">NPA Report Automation</h2>
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
                                <li><Link to="/rpa-finance-and-banking">Finance and Banking</Link></li>
                                <li>Invoice Processing Automation</li>
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
                                <div className="inds"><i className="fa fa-industry"></i><strong>Industry -</strong> All Industries</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 12 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The organization is looking for ways to improve but struggling with massive, error-prone manual tasks and data entry involved in the invoices process.</p>


                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Directed and manually processed by multiple support teams </li>
                                    <li>Massive lead time to complete invoice validation and due diligence </li>
                                    <li>Manual correlation of complex multiple data sources</li>
                                    <li>1000+ types and 100000+ invoices to process manually have a high human error rate</li>
                                    <li>Multiple applications involved in the process, such as legacy systems, web portals, email and excel, etc.</li>
                                </ul>


                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Our automation experts have developed a Robotic Process Automation (RPA) solution to tackle this problem by automating the complete invoices process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot extract data from various sources such as portal, email, and FTP location.</li>
                                    <li>Bot extracts the data from invoices using OCR and performs data validation + checks.</li>
                                    <li>The bot logs into the required applications and completes the transaction as per the processes request type</li>
                                    <li>Once the process has completed successfully by the bot then emails the completion report</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Deployed bots automate the entire invoices process effectively and bring out the following benefits to the organization</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>12000 Man days of effort saved annually.</li>
                                    <li>The degree of successful throughput increased</li>
                                    <li>Reduced processing and QA checking times</li>
                                    <li>Significant improvement of Service Levels </li>
                                    <li>Significant reduction of operational costs</li>
                                    <li>Quality improvement to 0% error relative</li>
                                    <li>Higher standardization of process</li>
                                    <li>24/7 operation </li>
                                    <li>Reduction of over-reliance on skilled FTE</li>
                                    <li>Improved Customer experience</li>
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

export default InvoiceProcessingAutomation;