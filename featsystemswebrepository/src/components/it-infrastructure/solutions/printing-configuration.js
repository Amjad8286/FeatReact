import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';
import img1 from '../../../images/case-img/it-infrastructure/automation1.jpg'

import PrintingConfigurationVideo from '../../modals/printing-configuration-video'
import { Helmet } from "react-helmet";


const PrintingConfiguration = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Printing Configuration Process Automation | Featsystems</title>
                    <meta name="description" content="A bot can eliminate the required manual dependency by handling the printing configuration on its own and making the process work efficiently and accurately." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Printing Configuration Process Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/Printing_configuration_og.jpg" />
                    <meta property="og:description" content="A bot can eliminate the required manual dependency by handling the printing configuration on its own and making the process work efficiently and accurately." />
                    <meta property="og:url" content="https://www.featsystems.com/printing-configuration" />

                    <link rel="canonical" href="https://www.featsystems.com/printing-configuration" />
                </Helmet>
            </div>
            <section className="client-section bg-vector bg-cover" style={{ backgroundImage: 'url("' + img1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0 white-text">Printing Configuration  </h2>


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
                                <li>Printing Configuration</li>
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
                                <ul className="mda-lst mda-list-items">
                                    <li>In large companies, each department or each floor will have a printer allocated to a particular team. Since, there are huge volumes of papers sent for printing or for photocopying, having a large number of printers is not a big surprise. </li>
                                    <li>But, with so many printers in use, managing them is no less a task. Instead of involving a manual workforce to handle this, we can make use of Robots.</li>
                                    <li>A user can log in to a UI where robots are present, input the device name and location of the printer. The remaining job of finding and printing the document will be taken care of by the robot. This will lessen the manual dependency and make the process work efficiently and accurately.</li>
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
                                    <Link to="/printing-configuration-video">
                                        <img className="thumbStyle img-fluid" src={img1} align="Printing Configuration" />
                                    </Link>
                                    <Switch>
                                        <Route path="/printing-configuration-video">
                                            <PrintingConfigurationVideo />
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

export default PrintingConfiguration;