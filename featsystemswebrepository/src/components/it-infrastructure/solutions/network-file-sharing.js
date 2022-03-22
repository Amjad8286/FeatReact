import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';
import img1 from '../../../images/case-img/it-infrastructure/automation4.jpg'

import NetworkFileSharingVideo from '../../modals/network-file-sharing-video'
import { Helmet } from "react-helmet";


const NetworkFileSharingAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Network File Sharing Process Automation | Featsystems</title>
                    <meta name="description" content="With the help of the RPA bot Network File Sharing can be done easily it can reduce the burden of the human workforce and improve the productivity of the process." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Network File Sharing Process Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/network_file_sharing_og.jpg" />
                    <meta property="og:description" content="With the help of the RPA bot Network File Sharing can be done easily it can reduce the burden of the human workforce and improve the productivity of the process." />
                    <meta property="og:url" content="https://www.featsystems.com/network-file-sharing" />

                    <link rel="canonical" href="https://www.featsystems.com/network-file-sharing" />
                </Helmet>
            </div>
            <section className="client-section bg-vector bg-cover" style={{ backgroundImage: 'url("' + img1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0 white-text">Network File Sharing</h2>


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
                                <li>Network File Sharing</li>
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
                                    <li>In an IT company, different horizontal domains have to interact with each other to complete any client project or use case. Hence, they make use of Network File Sharing to maintain documents and other information required to work on the project. </li>
                                    <li>Creating Network File sharing for each project or for each newly formed team is just another time-consuming task to be done manually. We can make use of Robotic Process Automation for such things to minimize the burden on the Human workforce and make such processes more efficient.</li>
                                    <li>Also, employees can concentrate on more analytical and problem-solving situations on their projects rather than invest time in doing such mundane tasks.</li>
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
                                    <Link to="/network-file-sharing-video">
                                        <img className="thumbStyle img-fluid" src={img1} align="Printing Configuration" />
                                    </Link>
                                    <Switch>
                                        <Route path="/network-file-sharing-video">
                                            <NetworkFileSharingVideo />
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

export default NetworkFileSharingAutomation;