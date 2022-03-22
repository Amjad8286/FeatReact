import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg18 from '../../../images/case-img/img18.jpg'
import { Helmet } from "react-helmet";


const CRMprocessAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CRM process automation case study | Featsystems</title>
                    <meta name="description" content="The case study gives the solution to a banking CRM process that can automate time-consuming and repetitive activity so that the employees are relieved." />

                    <meta name="keywords" />
                    <meta property="og:title" content="CRM process automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/crm_process_automation_og.jpg" />
                    <meta property="og:description" content="The case study gives the solution to a banking CRM process that can automate time-consuming and repetitive activity so that the employees are relieved." />
                    <meta property="og:url" content="https://www.featsystems.com/crm-process-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/crm-process-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg18 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">CRM process automation</h2>
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
                                <li>CRM process automation</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Leading Bank</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 4 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>Getting all of the information from the EJ into an excel file is time-consuming and laborious.</li>
                                    <li>Human error is possible when comparing EJ to Switch and CBS files</li>
                                    <li>Multiple departments involving in the process leads to delays</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The designed bot was efficient to execute the steps by bringing the output files of the CRM process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot reads and retrieves all EJ files from the EJ to excel sheet</li>
                                    <li>Bot pulls out switch and CBS text file info to excel</li>
                                    <li>Then bot compares the EJ log to the Switch and CBS files</li>
                                    <li>Finally, the bot sends output files to a specified business user</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The outcomes of the automation solution were tremendous, with improvements and the benefits in the process are as follows:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Easy to identify faulty transactions that reduced the human effort and rework</li>
                                    <li>Process was completed with excellent efficiency.</li>
                                    <li>Major increases in productivity</li>
                                    <li>Performed error-free</li>
                                    <li>Employees have been redeployed to execute the task which is high value-added</li>
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

export default CRMprocessAutomation;