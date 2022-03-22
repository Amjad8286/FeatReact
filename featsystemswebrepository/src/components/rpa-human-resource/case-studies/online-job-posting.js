import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/hr/img2.jpg'
import { Helmet } from "react-helmet";

const OnlineJobPosting = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Online Job Posting automation case study | Featsystems</title>
                    <meta name="description" content="The case study is one of the HR online job posting processes that was automated by the RPA bot to relieve HR teams from this manual work." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Online Job Posting automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/online_job_posting_og.jpg" />
                    <meta property="og:description" content="The case study is one of the HR online job posting processes that was automated by the RPA bot to relieve HR teams from this manual work." />
                    <meta property="og:url" content="https://www.featsystems.com/online-job-posting" />

                    <link rel="canonical" href="https://www.featsystems.com/online-job-postingp" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Online Job Posting</h2>
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
                                <li><Link to="/rpa-human-resource">RPA for Human Resources</Link></li>
                                <li>Online Job Posting</li>
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
                                <div className="inds"><strong>Industry -</strong> leading System Integrator</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 5 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">It was tiresome for the HR department to visit every channel or portal and post a job or advertise for the opening.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4 className="keych-ttl">Some of the key challenges were:</h4>
                                <ul>
                                    <li>Manually posting for every new opening on multiple advertising channels or portals can be a long-winded and tedious activity.</li>
                                    <li>Possibilities of making an error during processing </li>
                                    <li>The demand on HR increases as the vacancies grow and tasks are restricted with fewer resources.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The bot performs certain steps and auto-post the new opening jobs on various portals seamlessly.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot fetches all essential data from the intranet portal of the firm</li>
                                    <li>Bot connects into the different channels and creates job descriptions for openings</li>
                                    <li>Bot produce and deliver a report on jobs uploaded to HR</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Bot independently eases the HR teams and gives benefits after the automation. </p>
                            <div className="cs-lis">
                                <ul>
                                    <li>95% of the processing effort was from a bot</li>
                                    <li>0% error while performing</li>
                                    <li>Reduce 10% of manual labor</li>
                                    <li>Monthly efforts were saved by 350 hours</li>
                                    <li>Processing speed time was faster </li>
                                    <li>Data Security increases</li>
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

export default OnlineJobPosting;