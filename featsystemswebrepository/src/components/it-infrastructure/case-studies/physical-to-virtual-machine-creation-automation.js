import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img10.jpg'
import v_thumb from '../../../images/case-img/it-infrastructure/p2v_thumb.jpg'

import PhysicaltoVertual from '../../modals/physical-to-vertual'
import { Helmet } from "react-helmet";

const PhysicaltoVirtualAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Physical to Virtual (P2V) Machine creation Automation | Featsystems</title>
                    <meta name="description" content="Our client automates the Physical to Virtual (P2V) Machine creation process which was carried by the RPA bots that boost the process substantially." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Physical to Virtual (P2V) Machine creation Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/P2V_og.jpg" />
                    <meta property="og:description" content="Our client automates the Physical to Virtual (P2V) Machine creation process which was carried by the RPA bots that boost the process substantially." />
                    <meta property="og:url" content="https://www.featsystems.com/physical-to-virtual-machine-creation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/physical-to-virtual-machine-creation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Physical to Virtual (P2V) Machine creation Automation</h2>
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
                                <li>Physical to Virtual (P2V) Machine creation Automation</li>
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
                                <div className="inds"><strong>Industry -</strong> Leading System Integrator</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 3 WEEKS<strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>It was a highly time-consuming task</li>
                                <li>Requires multiple FTE to perform</li>
                                <li>It requires extensive manual processing and constant supervision</li>
                                <li>Due to dependence on professional resources, the process was mostly delayed</li>
                            </ul>
                        </div>
                        <section className="video-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="iris-video">

                                            <Router>
                                                <Link to="/physical-to-vertual">
                                                    <img className="thumbStyle img-fluid" src={v_thumb} align="Cisco Router Configuration Video" />
                                                </Link>
                                                <Switch>
                                                    <Route path="/physical-to-vertual">
                                                        <PhysicaltoVertual />
                                                    </Route>
                                                </Switch>
                                            </Router>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was made for the process steps to be carried out in full or in part directly by the RPA bot to boost the process substantially.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot reads the data in excel format, takes access, and installs VMware on the physical machine</li>
                                    <li>Bot opens the installed application and begins the conversion process entering the inputs when necessary</li>
                                    <li>Bot tracks the process until the completion and when the work gets ended it produces the report and sends it to relevant stakeholders</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">After automating the process, the bot produces results quickly with the following benefits:</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Bot takes 100% effort in automation </li>
                                    <li>Processing time was faster</li>
                                    <li>No error (0%) in the process</li>
                                    <li>Improved level of operational service</li>
                                    <li>FTE savings of 100%</li>
                                    <li>Continue in maintaining customer satisfaction at a high level</li>
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

export default PhysicaltoVirtualAutomation;