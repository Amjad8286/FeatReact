import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img7.jpg'

import { Helmet } from "react-helmet";

const IOSServerRestartAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>IOS Server Restart Automation case study | Featsystems</title>
                    <meta name="description" content="The case study is one of the leading banks that automated its IOS Server Restart with an RPA bot making the process flexible, cost-effective, and reliable." />

                    <meta name="keywords" />
                    <meta property="og:title" content="IOS Server Restart Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/ios_server_restart_og.jpg" />
                    <meta property="og:description" content="The case study is one of the leading banks that automated its IOS Server Restart with an RPA bot making the process flexible, cost-effective, and reliable." />
                    <meta property="og:url" content="https://www.featsystems.com/ios-server-restart-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/ios-server-restart-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">IOS Server Restart Automation</h2>
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
                                <li>IOS Server Restart Automation</li>
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
                                <div className="inds"><strong>Industry -</strong> Banking Sector</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>The task needed skills to perform </li>
                                <li>Relied heavily on specific individuals</li>
                                <li>If tasks been performed by the non-specialized individual chances of error was very high</li>
                                <li>Day-to-day activities was been hindered if the task is not carried out or delayed</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">Since the process was standardized it was easy and simple to design an RPA solution and apply it to the selected work steps.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot uses an application called putty the open-source terminal emulator</li>
                                    <li>It allows sending of the Linux commands to the server from terminating the necessary services and restart the server</li>
                                    <li>After restarting, the bot again reboots and starts the terminated services from the server</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">After the process was automated with a conventional RPA tool.The benefits that resulted were flexible, cost-effective, and reliable.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>100% automated by the bot</li>
                                    <li>Human dependency was taken away</li>
                                    <li>0% error in the process</li>
                                    <li>Employees were redeployed to perform other tasks which give business values</li>
                                    <li>Provide stability to a company </li>
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

export default IOSServerRestartAutomation;