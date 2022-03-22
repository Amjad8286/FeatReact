import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/hr/img3.jpg'
import { Helmet } from "react-helmet";

const CandidateSourcingAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Candidate Sourcing and Screening automation case study | Featsystems</title>
                    <meta name="description" content="In the case study bot performs steps seamlessly automating the candidate Sourcing and Screening process and allows companies to relieve their HR departments significantly from daily repetitive tasks." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Candidate Sourcing and Screening automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/candidate_sourcing_og.jpg" />
                    <meta property="og:description" content="In the case study bot performs steps seamlessly automating the candidate Sourcing and Screening process and allows companies to relieve their HR departments significantly from daily repetitive tasks." />
                    <meta property="og:url" content="https://www.featsystems.com/candidate-sourcing-and-screening" />

                    <link rel="canonical" href="https://www.featsystems.com/candidate-sourcing-and-screening" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Candidate Sourcing and Screening automation</h2>
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
                                <li>Candidate Sourcing and Screening automation</li>
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
                                <div className="inds"><strong>Implementation Time -</strong> Within 6 WEEKS <strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Key Challenges</h2>
                        </div>
                        <div className="col-md-6">
                            <p className="keych-pa">To look for an appropriate employee was a time-intensive and therefore costly undertaking for companies.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="cs-lis">
                                <h4 className="keych-ttl">Some of the key challenges were:</h4>
                                <ul>
                                    <li>The management team searches for applicants on the common portals based on the job description for the openings were done manually</li>
                                    <li>Then copy the details and putting them in excel was again labouring also multiple FTE are involved in it</li>
                                    <li>In situations when vacancies are increasing in the firm, the HR team was seen under pressure to choose the right individuals</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was made such that the bot performs the necessary steps to simply collect all the data and compare it with the job requirements list.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot retrieves all the existing opening from the company's intranet portal</li>
                                    <li>Bot perform searches for candidates by job description on several job portals</li>
                                    <li>Bot collects the data of the applied candidate's application from the portal as well as from the company website </li>
                                    <li>Bot then filters out the main excel data for every opening and mails it to the manager keeping HR in CC</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Automation can now relieve their HR departments significantly in their days of work of repetitive tasks.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>100% complete automation effort from the bot</li>
                                    <li>A sudden increase in the process was visible</li>
                                    <li>Improved quality of operations</li>
                                    <li>FTE saving was at 100%</li>
                                    <li>Maintains great satisfaction of customers</li>
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

export default CandidateSourcingAutomation;