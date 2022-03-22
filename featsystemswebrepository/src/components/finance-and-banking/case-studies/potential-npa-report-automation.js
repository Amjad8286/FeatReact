import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg2 from '../../../images/case-img/img2.jpg'

import { Helmet } from "react-helmet";

const NPAReportAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>NPA Report Automation Case Study | Featsystems</title>
                    <meta name="description" content="In the use case, you will discover how the largest Banking &amp; Financial services with the help of RPA bots was able to automate their NPA Report generation process" />

                    <meta name="keywords" />
                    <meta property="og:title" content="NPA Report Automation Case Study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/report-automation-og.png" />
                    <meta property="og:description" content="In the use case, you will discover how the largest Banking &amp; Financial services with the help of RPA bots was able to automate their NPA Report generation process" />
                    <meta property="og:url" content="https://www.featsystems.com/potential-npa-report-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/potential-npa-report-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg2 + '")' }}>
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
                                <li>Potential NPA Report Automation</li>
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
                                <div className="inds"><i className="fa fa-industry"></i><strong>Industry -</strong> Banking &amp; Financial Services</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 10 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The business is continually rising and struggling with its labour-intensive manual task in generating the NPA reports.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>High transactional volume process</li>
                                    <li>Exceedingly high processing time to reconcile the data manually.</li>
                                    <li>Labour intensive as a manual correlation of large and complex multiple data sources is required.</li>
                                    <li>Complex data files with a high rate of human error</li>
                                    <li>Multiple handshakes with back-end systems </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">After addressing and analyzing the challenges, we recommended Robotic Process Automation (RPA) that can transform the current labour-intensive manual NPA report generation process seamlessly. When the RPA as a solution got implemented the current process was end-end automated</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>RPA bot was developed to intelligently download and read data of CAA, ODA, SBA, Lien, etc from various internal applications and external sources, do required validation, and checks on data as per business rules definitions.</li>
                                    <li>Bot flag NPA records and update potentials NPA records in the system.</li>
                                    <li>Bot generated the Final NPA Report</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The RPA bot deployed successfully and has automated the NPA report generation process with the following benefits:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Reduced processing time drastically.</li>
                                    <li>Degree of robotization: 100% of effort automated.</li>
                                    <li>Reduced Operation Cost</li>
                                    <li>0% error rate achieved</li>
                                    <li>Improved staff retention - By reducing high volume low-value work to focus on complex/higher-value work</li>
                                    <li>Improved scalability </li>
                                    <li>Enhanced output rate (Bot running 24/7)</li>
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

export default NPAReportAutomation;