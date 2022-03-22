import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img6.jpg'

import v_thumb from '../../../images/case-img/it-infrastructure/vm_thumb.png'
import VertualMachineCreation from '../../modals/vertual-machine-creation'
import { Helmet } from "react-helmet";

const VirtualMachineAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Virtual Machine (VM) Creation Automation | Featsystems</title>
                    <meta name="description" content="The case study is of our client that automated its Virtual Machine (VM) Creation the process improved considerably by tedious routine work also saved operation costs." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Virtual Machine (VM) Creation Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/virtual_machine_creation_og.jpg" />
                    <meta property="og:description" content="The case study is of our client that automated its Virtual Machine (VM) Creation the process improved considerably by tedious routine work also saved operation costs." />
                    <meta property="og:url" content="https://www.featsystems.com/virtual-machine-creation-automation" />

                    <link rel="canonical" href="https://www.featsystems.com/virtual-machine-creation-automation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Virtual Machine (VM) Creation Automation</h2>
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
                                <li>Virtual Machine (VM) Creation Automation</li>
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
                                <div className="inds"><strong>Implementation Time -</strong> Within 4 WEEKS<strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>The creation of virtual machines was a very boring and time-consuming process that demanded skilled resources for the execution</li>
                                <li>The volume of the process was high</li>
                                <li>Required significant manual processing and involved high operation cost</li>
                                <li>Frequent human error caused the waste of time and effort</li>
                            </ul>
                        </div>
                        <section className="video-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="iris-video">

                                            <Router>
                                                <Link to="/vertual-machine-creation">
                                                    <img className="img-fluid" id="v_thumnail" src={v_thumb} align="Virtual Machine (VM) Creation Automation Video" />
                                                </Link>
                                                <Switch>
                                                    <Route path="/vertual-machine-creation">
                                                        <VertualMachineCreation />
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
                            <p className="sl-para">An efficient RPA solution was designed to perform certain steps that made the process work seamlessly.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>We developed a robust framework that prioritizes and guides the VM creation process seamlessly</li>
                                    <li>Created workflows to integrate VM creation process and OS hardening process</li>
                                    <li>Without human intervention, the bot creates VM smoothly</li>
                                    <li>Updates the details with an output text file and mails them to stakeholders</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">The following are the benefits after switching to RPA that has significantly improved the process and relieve employees from tedious routine work also saved operation costs.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>90% effort was automated by the BOT</li>
                                    <li>No error in the processing </li>
                                    <li>Scalable at the rate of 100% in peak times</li>
                                    <li>Keeping the customer satisfied at a high level.</li>
                                    <li>Increased productive capacity</li>
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

export default VirtualMachineAutomation;