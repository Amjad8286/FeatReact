import React from "react";
import '../css/industry-css.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GetStarted from './home-component/get-started';

import CulturalAdoption from './consulting-modal/cultural-adoption';
import Itengagement from './consulting-modal/it-engagement';
import Infrastructuretailoring from './consulting-modal/infrastructure-tailoring';
import SoftwareSelection from './consulting-modal/software-selection';
import InhouseCapabilitybuilding from './consulting-modal/in-house-capability-building';



import consultingImg1 from '../images/inner-page/consulting/cl-img-1.jpg'
import consultingImg2 from '../images/inner-page/consulting/cl-img-2.jpg'
import consultingImg3 from '../images/inner-page/consulting/cl-img-3.jpg'
import consultingImg4 from '../images/inner-page/consulting/cl-img-4.jpg'
import consultingImg5 from '../images/inner-page/consulting/cl-img-5.jpg'
import { Helmet } from "react-helmet";

const ConsultingServices = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Robotic Process Automation (RPA) Consulting | Featsystems</title>
                    <meta name="description" content="Our various RPA consulting services with the help of experts advises you on best practices and approaches to adopt a Digital Process Automation culture in your organization." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Robotic Process Automation (RPA) Consulting | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/rpa-consulting-og.jpg" />
                    <meta property="og:description" content="Our various RPA consulting services with the help of experts advises you on best practices and approaches to adopt a Digital Process Automation culture in your organization." />
                    <meta property="og:url" content="https://www.featsystems.com/consulting-services" />

                    <link rel="canonical" href="https://www.featsystems.com/consulting-services" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Robotic Process Automation (RPA) Consulting</h2>
                                <p>
                                    We are well-known for all aspects of consulting and sourcing company with a laser effort on Robotic Process Automation (RPA). We help to create a new vision for your business to take a giant step forward in the digital space by looking forward to discovering the best RPA solutions that can address your current challenges and remodel your organization.
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
                                <li>Consulting Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Router>
                <section className="ind-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-50">
                                <div className="center-div">
                                    <h2 className="h1">Feat Systems RPA consulting services</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/cultural-adoption" className="card-box-full">
                                    <img src={consultingImg1} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/it-engagement" className="card-box-full">
                                    <img src={consultingImg2} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/infrastructure-tailoring" className="card-box-full">
                                    <img src={consultingImg3} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/software-selection" className="card-box-full">
                                    <img src={consultingImg4} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/in-house-capability-building" className="card-box-full">
                                    <img src={consultingImg5} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
                <Switch>
                    <Route path="/cultural-adoption">
                        <CulturalAdoption />
                    </Route>
                    <Route path="/it-engagement">
                        <Itengagement />
                    </Route>
                    <Route path="/infrastructure-tailoring">
                        <Infrastructuretailoring />
                    </Route>
                    <Route path="/software-selection">
                        <SoftwareSelection />
                    </Route>
                    <Route path="/in-house-capability-building">
                        <InhouseCapabilitybuilding />
                    </Route>

                </Switch>
            </Router>





            <GetStarted />



        </>
    );
};

export default ConsultingServices;