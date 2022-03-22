import React from "react";

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import GetStarted from './home-component/get-started';

import '../css/licencing-css.css'


import licencingImg1 from '../images/inner-page/licencing/licencing-1.jpg'
import licencingImg2 from '../images/inner-page/licencing/licencing-2.jpg'
import licencingImg3 from '../images/inner-page/licencing/licencing-3.jpg'

import licencingImg4 from '../images/inner-page/licencing/licencing-4.svg'
import licencingImg5 from '../images/inner-page/licencing/licencing-5.svg'
import licencingImg6 from '../images/inner-page/licencing/licencing-6.svg'
import licencingImg7 from '../images/inner-page/licencing/licencing-7.svg'

import { Helmet } from "react-helmet";

const LicensingServices = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Robotic Process Automation (RPA) Licensing | Featsystems</title>
                    <meta name="description" content="Our tailored RPA licensing services (concept) allows you to determine the appropriate licenses for automation that can scale your RPA operations significantly." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Robotic Process Automation (RPA) Licensing | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/rpa-licensing.jpg" />
                    <meta property="og:description" content="Our tailored RPA licensing services (concept) allows you to determine the appropriate licenses for automation that can scale your RPA operations significantly." />

                    <meta property="og:url" content="https://www.featsystems.com/licensing-services" />

                    <link rel="canonical" href="https://www.featsystems.com/licensing-services" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Robotic Process Automation (RPA) Licensing</h2>
                                <p>
                                    RPA licensing is an approach that brings forth a consistent and robust end-to-end Automation platform. It allows companies to select optimized licenses to scale their RPA operations while attaining significant growth and rapid ROI.
                                </p>

                            </div>

                            <div className="gt-button mt-40">
                                <Link to="/contact" className="btn btn-dark">Get Started</Link>
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
                                <li>Licensing Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">RPA licensing model</h2>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <p>
                                The RPA licensing concept is complicated and hard to understand, particularly for beginners as there are many different licenses for the orchestrator, the studio, and especially for the RPA bots. It requires proper advice from a vendor to select the required components and licenses when purchasing a license. In this way, you can only acquire the required software and robot licenses.
                            </p>
                            <p>
                                <strong>Orchestrator-</strong> Enterprise architecture server platform supporting: release management, centralized logging, reporting, auditing, and monitoring tools, remote control, centralized scheduling, queue/robot workload management, and asset management. The number of Orchestrator licenses is dependent on the number of environments that you plan, we recommend a minimum of 1 to be deployed.
                            </p>
                            <p>
                                <strong>Development Studio-</strong> Enables users to automate with highly intuitive tools (not code) like process recorders, drag & drop widgets & best practices templates. The number of Studio licenses is dependent on the number of developers that are intended.
                            </p>

                            <h3 className="RPA-Bots mb-50"></h3>
                            <div className="cl-text">
                                <ul>
                                    <li><strong>Attended Robots - </strong>Delivers higher performance assisted by a front office agent to deliver automation at a lower cost of service.</li>
                                    <li><strong>Unattended Robots - </strong>These robots utilize unattended automation to run high Unattended transaction volumes in batch mode.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section className="managed-functionality lc-serv">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">Feat Systems RPA licensing services</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <img src={licencingImg1} />
                                <div className="para">
                                    <h2 className="h3">Licensing Recommendations</h2>
                                    <p className="m-0">Based on specific requirements in the company we will recommend you pick the components and required licenses as per your needs to prevent you from obtaining false or unwanted licenses.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <img src={licencingImg2} />
                                <div className="para">
                                    <h2 className="h3">License Procurement</h2>
                                    <p className="m-0">Feat Systems offers the procurement of inexpensive licenses for the Orchestrator, the Studio, and the RPA-Bots. We can also handle the extension of the current licenses for you in addition to the re-licensing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <img src={licencingImg3} />
                                <div className="para">
                                    <h2 className="h3">Support & Installation</h2>
                                    <p className="m-0">Installing, activating, and managing the ongoing licenses can be time-consuming and complex. Our experts can take care of this for you by working on-site or remotely so that no difficulties emerge during operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="managed-functionality adv-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">Your Advantage or Benefits</h2>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box-full ">

                                <div className="para">
                                    <img src={licencingImg4} />
                                    <p className="m-0">No unnecessary costs due to unnecessary licenses</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card-box-full">

                                <div className="para">
                                    <img src={licencingImg5} />
                                    <p className="m-0">Attractive conditions through reseller and partner status</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card-box-full">

                                <div className="para">
                                    <img src={licencingImg6} />
                                    <p className="m-0">No time-consuming training in the licensing concept</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card-box-full">

                                <div className="para">
                                    <img src={licencingImg7} />
                                    <p className="m-0">Fast and uncomplicated acquisition of the licenses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <GetStarted />



        </>
    );
};

export default LicensingServices;