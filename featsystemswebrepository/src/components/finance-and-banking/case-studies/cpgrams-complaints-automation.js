import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg12 from '../../../images/case-img/img12.jpg'
import { Helmet } from "react-helmet";


const CPGRAMSComplaintsAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CPGRAMS Complaints Automation case study | Featsystems</title>
                    <meta name="description" content="Bot carries all the steps directly in the process of CPGRAMS and automates to maintain continuous management of complaints." />

                    <meta name="keywords" />
                    <meta property="og:title" content="CPGRAMS Complaints Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/CPGRAMS_og.jpg" />
                    <meta property="og:description" content="Bot carries all the steps directly in the process of CPGRAMS and automates to maintain continuous management of complaints." />
                    <meta property="og:url" content="https://www.featsystems.com/cpgrams-complaints-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/cpgrams-complaints-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg12 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">CMS Complaints Upload Automation</h2>
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
                                <li>CMS Complaints Upload Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Banking Sector</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>It was a monotonous and repetitive job to perform a single request at a time</li>
                                <li>Manual processing of requests takes time</li>
                                <li>Achieving the outcome requires several touchpoints.</li>
                                <li>Manual processing has a high possibility of human error</li>
                                <li>Highly lean on the particular skill user leading to a processing delay</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was, performing complete steps by the bot directly to maintain continuity of complaint management.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot login into the CPGRAMS portal and downloads age-wise pendency reports</li>
                                    <li>Bot then identifies the new complaints from downloaded reports and submit them for the CMS download process</li>
                                    <li>Bot open complaints and retrieve data from the CPGRAMS portal.</li>
                                    <li>After that bot sends an escalating mail to the concerned stakeholder in a certain format using fetch data</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The deployed solution helped streamline, automate, and improved the process quality. Some of the automation benefits are as follows:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Error rate was reduced to 0%</li>
                                    <li>No manual efforts required </li>
                                    <li>Processing time becomes quicker</li>
                                    <li>Significant improvement of service levels from 3-4 days to same day</li>
                                    <li>Optimizing branch staff utilization</li>
                                    <li>Better and more user-friendly experience</li>
                                    <li>Financial compliance and regulatory risk minimized</li>
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

export default CPGRAMSComplaintsAutomation;