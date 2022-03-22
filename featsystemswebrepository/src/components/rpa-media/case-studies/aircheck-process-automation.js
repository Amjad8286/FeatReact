import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg2 from '../../../images/case-img/media/img2.jpg'

import { Helmet } from "react-helmet";

const AircheckProcessAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Aircheck Process Automation case study | Featsystems</title>
                    <meta name="description" content="In the case study, we designed a robust RPA solution for our client for the automation of the Aircheck Process that leads to complete elimination of human dependency in the process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Aircheck Process Automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/aircheck-process-og.jpg" />
                    <meta property="og:description" content="In the case study, we designed a robust RPA solution for our client for the automation of the Aircheck Process that leads to complete elimination of human dependency in the process." />
                    <meta property="og:url" content="https://www.featsystems.com/aircheck-process-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/aircheck-process-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg2 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Aircheck Process Automation</h2>
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
                                <li><Link to="/rpa-media">RPA in Media</Link></li>
                                <li>Aircheck Process Automation</li>
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
                                <div className="inds"><strong>Industry -</strong> Leading FM station</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 4 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>Manually downloading radio spots of Radio City from the Aircheck India portal for various cities and then copying data from the downloaded files and updating the same in Excel report was a challenge, as it was very time-consuming and tedious.</li>
                                <li>The dependence of humans on this task adds process delay.</li>
                                <li>Human error is very likely.</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was to deploy cohesive bots for automation to remove the manual dependency of humans in the process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>A robust bot was designed that automatically logs in to the Aircheck India portal and download radio spot pdf files for various cities.</li>
                                    <li>The bot would then retrieve the data from these pdf files and forward it to the SQL database.</li>
                                    <li>The Bot generates and sends the required reports to the concerned individuals.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our robust RPA solution leads to improve the process with some key benefits are mentioned below:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>95% effort automated by a bot</li>
                                    <li>Error rate fell to 0%</li>
                                    <li>Reduction rate for Manual effort to 10%</li>
                                    <li>Processing time is been faster</li>
                                    <li>Increase in the protection of data</li>
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

export default AircheckProcessAutomation;