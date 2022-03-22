import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img5.jpg'

import { Helmet } from "react-helmet";

const MemoryUtilizationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Memory Utilization check Automation case study | Featsystems</title>
                    <meta name="description" content="The case study is an example of Memory Utilization check automation that has been significantly improved the process by the RPA after implementation." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Memory Utilization check Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/memory_utilization.jpg" />
                    <meta property="og:description" content="The case study is an example of Memory Utilization check automation that has been significantly improved the process by the RPA after implementation." />
                    <meta property="og:url" content="https://www.featsystems.com/memory-utilization-check-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/memory-utilization-check-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Memory Utilization Check Automation</h2>
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
                                <li>Memory Utilization Check Automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Automobile Company</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 3 WEEKS<strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>The amount of logged tickets for the memory utilization of machines was very high in the number</li>
                                <li>More time was consumed by the specialized required resources to resolve the tickets</li>
                                <li>Immense escalation rate</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was given to perform work steps that can be simplified with the RPA bot.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot logs into the portal of the ticketing and filters memory utilization</li>
                                    <li>Bot fetches information of the user and machine and checks the existing use of the memory</li>
                                    <li>If the utilization is high, the ticket would be allocated to the IT engineer</li>
                                    <li>If it is low, the ticket closes with the status update</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The following aspects are the benefits of switching to RPA that have significantly improved the process after implementation.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Robotization automated effort by 80% </li>
                                    <li>Reduced the dependence on FTE expertise</li>
                                    <li>Keeping customers satisfied at high levels</li>
                                    <li>Reduction of efforts: 70% - 80%</li>
                                    <li>Usage of Skilled resources made better </li>
                                    <li>Enhance the productivity of the organization</li>
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

export default MemoryUtilizationAutomation;