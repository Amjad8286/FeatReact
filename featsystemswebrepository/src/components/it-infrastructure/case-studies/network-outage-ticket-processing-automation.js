import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img2.jpg'

import { Helmet } from "react-helmet";

const NetworkProcessingAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Network outage ticket processing automation case study | Featsystems</title>
                    <meta name="description" content="In the case study, the RPA bot was designed to execute and automate various stages of the network outage ticket logging process to minimize the business suffering." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Network outage ticket processing automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/NetworkOutage_og.jpg" />
                    <meta property="og:description" content="In the case study, the RPA bot was designed to execute and automate various stages of the network outage ticket logging process to minimize the business suffering." />
                    <meta property="og:url" content="https://www.featsystems.com/network-outage-ticket-processing-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/network-outage-ticket-processing-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Network outage ticket processing</h2>
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
                                <li><Link to="/by-process">By Process</Link></li>
                                <li><Link to="/it-infrastructure">Tt Infrastructure</Link></li>
                                <li>Network outage ticket processing</li>
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
                                <div className="inds"><strong>Industry -</strong> Leading Automobile Company</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">To bring the service operation back to normal after network outage to get the reason for failure.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Due to human dependency, network outage happening several locations was getting delayed reporting to the service provider as a result, the business was suffering.</li>
                                    <li>High escalation rate due to delay in the process</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The RPA bots were programmed for the execution and automation of each process stage.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot read the location where currently network is down from the network monitoring tool.</li>
                                    <li>Bot logs in to the relevant service providers network, enter necessary details and logs tickets for sites where the network is down.</li>
                                    <li>The bot generates a report and sends mail to all stakeholders regarding the network outage.</li>
                                    <li>Frequently, the bot checks the ticket status on the Service Provider portal and creates a report and update to all stakeholders through the mail.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our RPA automation solution created benefits for customers, employees, and businesses and deliver a tangible profit to the organization.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Ensure business consistency by 24x7 service.</li>
                                    <li>Degree of robotization: 90% of effort automated.</li>
                                    <li>Reduction of over-reliance on skilled FTE.</li>
                                    <li>Maintain a high level of customer satisfaction.</li>
                                    <li>Effort reduction: 80 - 100%.</li>
                                    <li>Employees were able to concentrate on higher-value activities.</li>
                                    <li>Improve efficiency.</li>
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

export default NetworkProcessingAutomation;