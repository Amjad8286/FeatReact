import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img8.jpg'
import v_thumb from '../../../images/case-img/it-infrastructure/switch-v-thumb.jpg'

import SwitchConfigurationRPA from '../../modals/switch-configuration-rpa'
import { Helmet } from "react-helmet";

const SwitchConfigurationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Cisco Switch Configuration/Migration Automation | Featsystems</title>
                    <meta name="description" content="The case study is one of the leading System integrators that automated its Cisco Switch Configuration/Migration process with an RPA solution that improves efficiency, accuracy, transparency, and save costs." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Cisco Switch Configuration/Migration Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/cisco_switch_og.jpg" />
                    <meta property="og:description" content="The case study is one of the leading System integrators that automated its Cisco Switch Configuration/Migration process with an RPA solution that improves efficiency, accuracy, transparency, and save costs." />
                    <meta property="og:url" content="https://www.featsystems.com/cisco-switch-configuration-migration-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/cisco-switch-configuration-migration-automation" />
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
                                <li>The Configuration/Migration switch was very tiring and taking a lot of time to complete the process</li>
                                <li>Needed highly skilled resources to execute the services</li>
                                <li>It requires extensive manual processing</li>
                                <li>The cost of operation involved was high</li>
                                <li>Errors by human causing the loss of time and effort in the process</li>
                            </ul>
                        </div>
                        <section className="video-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="iris-video">

                                            <Router>
                                                <Link to="/switch-configuration-rpa">
                                                    <img className="thumbStyle img-fluid" src={v_thumb} align="Cisco Router Configuration Video" />
                                                </Link>
                                                <Switch>
                                                    <Route path="/switch-configuration-rpa">
                                                        <SwitchConfigurationRPA />
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
                            <p className="sl-para">Since the process was structured, and recurring rules with clear instructions made it suitable for automation. We design an RPA solution and apply it to the given process steps.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Post-reading the input excel file containing switches details the bot opens the Putty application and establishes a connection with each switch</li>
                                    <li>After the connection is done BOT enters the specific command in the putty application and fetches details of switches</li>
                                    <li>BOT then updates the details in an output text file and e-mail them to stakeholders involved</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The automation solution offered our client with several benefits for both companies and employees that includes</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>Automation of 100% accomplished</li>
                                    <li>After automation, the processing speed increased 10 times</li>
                                    <li>Accuracy rating was 100%</li>
                                    <li>Scalable 100% in peak times</li>
                                    <li>Efficient automation of manual activities</li>
                                    <li>Employees were redeployed to perform other value-added operations</li>
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

export default SwitchConfigurationAutomation;