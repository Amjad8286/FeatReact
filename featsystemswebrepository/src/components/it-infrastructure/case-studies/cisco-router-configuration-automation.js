import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img3.jpg'
import v_thumb from '../../../images/case-img/it-infrastructure/v-thumb.jpg'

import RouterConfigurationRPA from '../../modals/router-configuration-rpa'
import { Helmet } from "react-helmet";

const RouterConfigurationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Cisco Router Configuration automation case study | Featsystems</title>
                    <meta name="description" content="In the case study, we designed an RPA bot solution for our client that automates the manual Cisco Router Configuration process through multiple touch-points." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Cisco Router Configuration automation case study | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/cisco_router_og.jpg" />
                    <meta property="og:description" content="In the case study, we designed an RPA bot solution for our client that automates the manual Cisco Router Configuration process through multiple touch-points." />
                    <meta property="og:url" content="https://www.featsystems.com/cisco-router-configuration-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/cisco-router-configuration-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Cisco Router Configuration Automation</h2>
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
                                <li>Cisco Router Configuration Automation</li>
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
                                <li>Configuring routers manually was a very boring and tiresome job.</li>
                                <li>It required significant manual processing and involved high operation costs.</li>
                                <li>Frequent human error in the process was causing the loss of time and effort.</li>
                            </ul>
                        </div>
                        <section className="video-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="iris-video">

                                            <Router>
                                                <Link to="/router-configuration-rpa">
                                                    <img className="thumbStyle img-fluid" src={v_thumb} align="Cisco Router Configuration Video" />
                                                </Link>
                                                <Switch>
                                                    <Route path="/router-configuration-rpa">
                                                        <RouterConfigurationRPA />
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
                            <p className="sl-para">The solution was developed to eliminate the configuration of the router manually by automating them through multiple touch-points.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot reads the input data in excel format.</li>
                                    <li>The bot opens the application putty and establishes a connection with the switch.</li>
                                    <li>Bot pass the list command and configure the switch.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Once the bot was deployed its benefits have made abrupt changes in the process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Robotization level: 100% automation</li>
                                    <li>The level of error was reduced to 0%.</li>
                                    <li>Enhanced operational service quality.</li>
                                    <li>100% savings on FTE.</li>
                                    <li>3x more fast transaction processing.</li>
                                    <li>Keep customer satisfaction at a high level.</li>
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

export default RouterConfigurationAutomation;