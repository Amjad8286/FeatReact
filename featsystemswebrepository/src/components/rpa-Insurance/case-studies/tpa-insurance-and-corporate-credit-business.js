import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg2 from '../../../images/case-img/insurance/img2.jpg'

import { Helmet } from "react-helmet";

const TPAInsuranceCorporateCredit = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>TPA Insurance and Corporate Credit Business case study | Featsystems</title>
                    <meta name="description" content="In the case study RPA performs all the important end-to-end steps that were required to make the TPA Insurance and Corporate Credit Business to be efficient." />

                    <meta name="keywords" />
                    <meta property="og:title" content="TPA Insurance and Corporate Credit Business case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/TPA_Insurance_og.jpg" />
                    <meta property="og:description" content="In the case study RPA performs all the important end-to-end steps that were required to make the TPA Insurance and Corporate Credit Business to be efficient." />
                    <meta property="og:url" content="https://www.featsystems.com/tpa-insurance-and-corporate-credit-business" />

                    <link rel="canonical" href="https://www.featsystems.com/tpa-insurance-and-corporate-credit-business" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg2 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">TPA Insurance and Corporate Credit Business</h2>
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
                                <li><Link to="/rpa-insurance">Insurance</Link></li>
                                <li>TPA Insurance and Corporate Credit Business</li>
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
                                <div className="inds"><strong>Industry -</strong> Leading Insurance Company</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The process was ineffective due to many manual steps and sub-activities that require human judgment.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4 className="keych-ttl">Some of the key challenges were:</h4>
                                <ul>
                                    <li>The process was moderately complex required checks and validation from multiple departments</li>
                                    <li>Time intensive job with expertise needs for execution depending on scenarios</li>
                                    <li>High individual dependence and various departments in presence contribute to delays in the process</li>
                                    <li>The possibility of human error was high in processing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Our team took an RPA approach and design the solution that needs end-to-end process automation.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot extracts patients that have been insured who receive cashless care</li>
                                    <li>Bot generates receivable ledger entries in SAP which triggers auto-mail to respective TPA</li>
                                    <li>Bot checks mail &amp; website for receivable payment, if payment is received then bot adjust the ledger entry in SAP as per business norms</li>
                                    <li>Bot sends the customer e-mail and creates the payment file for the bank</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The deployed solution streamlines the operation and enhances the end-to-end TPA Insurance and Corporate Credit Business process. Here are some benefits after automation were visible.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Ensure continuity of operation during influx transaction </li>
                                    <li>Keep a high customer satisfaction ratio</li>
                                    <li>Reduction of effort: 70 to 100%</li>
                                    <li>Staff were redeployed to perform valuable operations </li>
                                    <li>Financial and compliance risk minimized</li>
                                    <li>Reduce hospital backlogs</li>
                                    <li>Efficiency improved</li>
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

export default TPAInsuranceCorporateCredit;