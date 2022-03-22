import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg1 from '../../../images/case-img/media/img1.jpg'
import { Helmet } from "react-helmet";


const VendorContractRenewal = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Vendor contract renewal automation case study | Featsystems</title>
                    <meta name="description" content="In the case study, we helped our client by providing the RPA solution that automatically renews the vendor contract without any efforts also minimizes the risk of financial waste." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Vendor contract renewal automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/VendorContractRevewal_og.png" />
                    <meta property="og:description" content="In the case study, we helped our client by providing the RPA solution that automatically renews the vendor contract without any efforts also minimizes the risk of financial waste." />
                    <meta property="og:url" content="https://www.featsystems.com/vendor-contract-renewal-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/vendor-contract-renewal-automationp" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Vendor Contract Renewal</h2>
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
                                <li><Link to="/rpa-media">RPA in Media</Link></li>
                                <li>Vendor Contract Renewal</li>
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
                                <div className="inds"><strong>Industry -</strong> Media sector</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Having large volumes of contracts and validating the details manually for renewal was costing the business a financial waste.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>The process volume was high with multiple FTEs working on it.</li>
                                    <li>It requires to validate the details of the vendor and accordingly renew the contract.</li>
                                    <li>Manually renewing a contract is a highly time-consuming task.</li>
                                    <li>High turnaround time due to human dependency and their time limitation.</li>
                                    <li>In the process, human errors are highly possible.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">To deal with such issues an RPA solution was designed to automate the process by looking at renewal dates on contracts that will automatically renew.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot reads mails and download vendor detail input sheet and template.</li>
                                    <li>The bot generates the contracts in word and updates the relevant details in the template.</li>
                                    <li>Bot convert contracts into PDF and signed them digitally.</li>
                                    <li>The bot mails the contract to the vendor in predefined mail format.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our customer on automating the process has various benefits with the use of software robots.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Degree of robotization: 100% of effort automated.</li>
                                    <li>The rate of error decreased to 0%.</li>
                                    <li>Manual effort reduced less than 5%.</li>
                                    <li>Faster processing time</li>
                                    <li>Increase in the data security</li>
                                    <li>Increase in employee morale.</li>
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

export default VendorContractRenewal;