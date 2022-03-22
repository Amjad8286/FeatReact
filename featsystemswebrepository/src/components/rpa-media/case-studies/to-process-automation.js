import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';
import caseimg3 from '../../../images/case-img/media/img3.jpg'

import { Helmet } from "react-helmet";

const ToProcessAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>TO Process Automation Case study | Featsystems</title>
                    <meta name="description" content="In the automation case study, our RPA solution was integrated into their workflow making the TO processing fast and improved the process quality." />

                    <meta name="keywords" />
                    <meta property="og:title" content="TO Process Automation Case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/To_Process_og.jpg" />
                    <meta property="og:description" content="In the automation case study, our RPA solution was integrated into their workflow making the TO processing fast and improved the process quality." />
                    <meta property="og:url" content="https://www.featsystems.com/to-process-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/to-process-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg3 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">TO Process Automation</h2>
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
                                <li>TO Process Automation</li>
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
                                <div className="inds"><strong>Implementation Time -</strong> Within 6 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>Data from several pdf files in another format was extracted manually </li>
                                <li>And that was added same in excel as a radio station into slot-wise was consuming time and was making the process tedious</li>
                                <li>Human errors likely to be high</li>
                                <li>Maintaining a track report is another repetitive activity</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The RPA solution was made which meets the criteria and completely takes over the task by being a part of the overarching workflow and improves the process quality.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>RPA solution uses a regular expression to properly identify the specific PDF format and calls for a particular workflow to fetch the data from it.</li>
                                    <li>Fetch data is stored in an SQL database for reliability and faster processing.</li>
                                    <li>The required report is collected from SQL DB and forwarded to the individual concerned</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our client discovers various benefits when the RPA solution was integrated into their process workflow.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>95% of work automated by the Bot</li>
                                    <li>No errors were seen </li>
                                    <li>Processing time was faster</li>
                                    <li>Reduction of manual effort: 90% to 100%</li>
                                    <li>200 hours of efforts saved monthly</li>
                                    <li>Processing time was now faster</li>
                                    <li>Improvement in the data protection</li>
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

export default ToProcessAutomation;