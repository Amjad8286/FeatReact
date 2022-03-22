import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';
import img1 from '../../../images/case-img/it-infrastructure/automation6.jpg'

import CpuOptimizationVideo from '../../modals/cpu-optimization-video'

import { Helmet } from "react-helmet";

const CpuOptimizationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CPU Optimization RPA Automation | Featsystems</title>
                    <meta name="description" content="Automation allows the RPA bot to maintain and handle numerous desktops, and optimize CPU by performing disc clean-up, deletion of temp files, deletion of prefetch files, power configuration, and Window Defender Scan." />

                    <meta name="keywords" />
                    <meta property="og:title" content="CPU Optimization RPA Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/cpu_optimization_og.jpg" />
                    <meta property="og:description" content="Automation allows the RPA bot to maintain and handle numerous desktops, and optimize CPU by performing disc clean-up, deletion of temp files, deletion of prefetch files, power configuration, and Window Defender Scan." />
                    <meta property="og:url" content="https://www.featsystems.com/cpu-optimization" />

                    <link rel="canonical" href="https://www.featsystems.com/cpu-optimization" />
                </Helmet>
            </div>
            <section className="client-section bg-vector bg-cover" style={{ backgroundImage: 'url("' + img1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0 white-text">Shrink File in SQL Server</h2>


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
                                <li><Link to="/by-process">By Department</Link></li>
                                <li><Link to="/it-infrastructure">IT and Infrastructure</Link></li>
                                <li>Shrink File in SQL Server</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul>
                                    <li>How many times has your system been stuck, not allowing you to click or close or do any task on the desktop? Imagine a big IT company handling numerous desktops facing this issue every now and then.</li>
                                    <li> Instead of hiring a person to clean and maintain the desktop, we can create a bot process to handle CPU optimization. A bot can receive input files with the details of the Remote desktop, it can then connect with the desktop and perform disc clean-up, deletion of temp files, deletion of prefetch files, power configuration, and Window Defender Scan. Finally, it can close the connection with the desktop and send out an email notifying that the work is done. </li>
                                    <li>Why waste an efficient Human on such routine tasks when we have Bots to help us with such repetitive tasks! </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="iris-video">

                                <Router>
                                    <Link to="/cpu-optimization-video">
                                        <img className="thumbStyle img-fluid" src={img1} align="Printing Configuration" />
                                    </Link>
                                    <Switch>
                                        <Route path="/cpu-optimization-video">
                                            <CpuOptimizationVideo />
                                        </Route>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default CpuOptimizationAutomation;