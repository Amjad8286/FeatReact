import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg14 from '../../../images/case-img/img14.jpg'
import { Helmet } from "react-helmet";


const AccountOpeningProcess = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Account Opening/Customer On-boarding Automation case study | Featsystems</title>
                    <meta name="description" content="The case study gives a detailed review of RPA bots performing the account opening/on-boarding process that allows the client to retain their customers and also helps in gaining the new ones." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Account Opening/Customer On-boarding Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/account-opening-on-boarding-og.jpg" />
                    <meta property="og:description" content="The case study gives a detailed review of RPA bots performing the account opening/on-boarding process that allows the client to retain their customers and also helps in gaining the new ones." />
                    <meta property="og:url" content="https://www.featsystems.com/account-opening-process" />

                    <link rel="canonical" href="https://www.featsystems.com/account-opening-process" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg14 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Account Opening/Customer On-boarding Automation</h2>
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
                                <li>Account Opening/Customer On-boarding Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Leading Banking Services</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 16 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">Our client was seeing a rapid increase in the customer requests through various support channels for opening new bank accounts which are processed by the employee manually.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Multiple teams are involved in the human and performing manual processing of data</li>
                                    <li>Leading to time delays in completing the opening/on-boarding process</li>
                                    <li>Chances of losing the new customers were high</li>
                                    <li>Complex multiple data sources are manually correlated</li>
                                    <li>In the process, employees had to interact with various back-office software</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">We deployed an RPA bot to automate the whole account opening/onboarding process of new customer's request details which was received through a chatbot support channel.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Chatbot self-service support channel is activated </li>
                                    <li>Now chatbot starts interacting with the customers and gets the necessary details that are required for the opening/onboarding process</li>
                                    <li>Then it passes all received data to the RPA bot </li>
                                    <li>Bot reads and extracts necessary data</li>
                                    <li>Bot also interacts with several multiple-banking systems and validates the data.</li>
                                    <li>Bot creates the new account automatically and sends its details to the client</li>
                                    <li>Also, performs existing accounts checks</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">After automating the process, the impact was significant. Our client was able to retain its existing customers and also started gaining new ones.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Processing time was reduced</li>
                                    <li>Improvement in the quality of services</li>
                                    <li>Operational expenses were significantly reduced</li>
                                    <li>Customer experience was enhanced</li>
                                    <li>Process quality was also improved without any errors</li>
                                    <li>100% customer satisfaction</li>
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

export default AccountOpeningProcess;