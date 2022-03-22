import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../../components/home-component/get-started';
import caseimg8 from '../../../images/case-img/img8.jpg'
import { Helmet } from "react-helmet";


const CMSComplaintsDownload = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CMS complaints download | Featsystems</title>
                    <meta name="description" content="In the case study, our client was able to download CMS complaints without the human workforce by using the RPA solution eliminating manual efforts." />

                    <meta name="keywords" />
                    <meta property="og:title" content="CMS complaints download | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/cms-download-og-img.jpg" />
                    <meta property="og:description" content="In the case study, our client was able to download CMS complaints without the human workforce by using the RPA solution eliminating manual efforts." />
                    <meta property="og:url" content="https://www.featsystems.com/cms-complaints-download" />

                    <link rel="canonical" href="https://www.featsystems.com/cms-complaints-download" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg8 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">CMS Complaints Download</h2>
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
                                <li>CMS Complaints Download</li>
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
                                <div className="inds"><i className="fa fa-university"></i><strong>Industry -</strong> Banking &amp; Financial Services</div>
                                <div className="inds"><i className="fa fa-clock-o"></i><strong>Implementation Time -</strong> Within 3 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">The client process of CMS complaints download was labour-intensive and time-consuming.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4>Some of the key challenges were:</h4>
                                <ul>
                                    <li>The process is a very Repetitive, monotonous, and tedious task with no specialized skill required.</li>
                                    <li>High dependency on individuals and the involvement of multiple departments lead to delay in the process.</li>
                                    <li>Chances of human error, due to manual processing.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">We deploy RPA solution in the CMS complaints download to eliminate the manual efforts required by the human workforce while automating the entire process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The Bot was deployed, which perform end to end task smoothly.</li>
                                    <li>The bot reads the complaints, fetch necessary data CMS website, download necessary details and attachments.</li>
                                    <li>Bot formats the mail-in predefined format and sent it to specific stakeholders.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">RPA assisted to make the process faster and more accurate giving more of its benefits.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Guarantees continuity of business during transactions influx</li>
                                    <li>Error rate reduced to 0% due to automation</li>
                                    <li>100% Manual effort reduced.</li>
                                    <li>Faster processing time</li>
                                    <li>Employees were redeployed to work on other higher-value activities</li>
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

export default CMSComplaintsDownload;