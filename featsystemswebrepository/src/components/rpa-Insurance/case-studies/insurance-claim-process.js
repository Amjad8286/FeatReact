import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg1 from '../../../images/case-img/insurance/img1.jpg'
import processDig from '../../../images/case-img/insurance/InsuranceClaimProcess.png'

import { Helmet } from "react-helmet";

const InsuranceClaimProcess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Insurance claims process automation Case study | Featsystems</title>
                    <meta name="description" content="In the case study, we enhanced and optimize the claiming process for our client using the RPA solution for a better customer experience." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Insurance claims process automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/insurance-claim-automation-og.jpg" />
                    <meta property="og:description" content="In the case study, we enhanced and optimize the claiming process for our client using the RPA solution for a better customer experience." />
                    <meta property="og:url" content="https://www.featsystems.com/insurance-claim-process" />

                    <link rel="canonical" href="https://www.featsystems.com/insurance-claim-process" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Insurance Claim Process</h2>
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
                                <li>Insurance Claim Process</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Insurance Sector</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The process for claims reliant on the application, and availability of auditors so the process becomes inefficient and takes a long time that prevented in quicken their manual process.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Manually registering a claim with multiple touchpoints was making the process very lengthy and was making it difficult to cope up with a continuously growing business.</li>
                                    <li>For registering claims, they were using legacy system which was less popular   software, hence getting the expertise on it is always a challenge.</li>
                                    <li>Since the claim was processed manually the chances of human error were very high.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">To overcome challenges, we suggested automating their manual claiming process using our digital (RPA) software robots that make the process fast and error-free.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>RPA Bot fetch the claim request data from Insurance Claim registering web portal SQL Database and generate an XML file.</li>
                                    <li>A dynamic framework template designed which reads the XML file and push the data in the system reading screen coordinates and register the claims.</li>
                                    <li>Post registering the claims, the bot updates claim into the web portal generates reports, and sends it to the concerned stakeholders.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our RPA solution has helped customers to benefit immensely in several terms of process efficiency, increase productivity, and fast service.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Reduced processing time drastically.</li>
                                    <li>Degree of robotization: 100% of effort automated.</li>
                                    <li>Operational cost reduced</li>
                                    <li>The error rate in processing reduced to 0%</li>
                                    <li>Employees got redeployed to perform higher-value activities</li>
                                    <li>Reduction of over-reliance on skilled FTE</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-20">
                        <div className="col-lg-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-lg-12mt-20">
                            <img src={processDig} className="img-fluid" alt="Process Diagram" />
                        </div>
                    </div>

                </div>
            </section>



            <GetStarted />

        </>
    );
};

export default InsuranceClaimProcess;