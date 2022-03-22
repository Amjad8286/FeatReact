import React, { useState, useEffect } from "react";
import '../css/Pigeon.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from './home-component/get-started'
import pigeonImg from '../images/inner-page/pigeon.png';

import '../css/pigeon-pricings.css'

import PricingForm from '../components/pricing-modal/pricing-form';
import closeImg from '../images/close-img.svg';
import { Helmet } from "react-helmet";

const PigeonPricing = () => {

    const [PricingType, setPricingType] = useState();
    useEffect(() => {
        var urlPath = window.location.pathname;
    });

    const [isBasicActive, setBasicActive] = useState(false);

    const handleBasicPrice = () => {
        setBasicActive(!isBasicActive);
    };

    const [isStdActive, setStdActive] = useState(false);

    const handleStdPrice = () => {
        setStdActive(!isStdActive);
    };

    const [isProActive, setProActive] = useState(false);

    const handleProPrice = () => {
        setProActive(!isProActive);
    };

    const [isEntActive, setEntActive] = useState(false);
    const handleEntPrice = () => {
        setEntActive(!isEntActive);
    };


    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>PIGEON Pricing &amp; Features | Featsystems </title>
                    <meta name="description" content="Featsystems PIGEON (Automation as a service) platform gives you a flexible pricing plan with staggering features having hyper-intelligent attributes to start your automation journey seamlessly." />

                    <meta name="keywords" />
                    <meta property="og:title" content="PIGEON Pricing &amp; Features | Featsystems " />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/pigeon-pricing-og-img.png" />
                    <meta property="og:description" content="Featsystems PIGEON (Automation as a service) platform gives you a flexible pricing plan with staggering features having hyper-intelligent attributes to start your automation journey seamlessly." />
                    <meta property="og:url" content="https://www.featsystems.com/pigeon-pricings" />
                    <link rel="canonical" href="https://www.featsystems.com/pigeon-pricings" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-8">
                            <div className="cl-text m-0">
                                <h2 className="h1 mt-0">Pigeon Pricing and Features</h2>
                                <ul>
                                    <li>
                                        <strong>Begin your journey to better, faster decisions</strong>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="gt-button mt-40">
                            <Link to="/" className="btn btn-dark">Fee Trial</Link>
                            <Link to="/" className="btn btn-primary">Pricing</Link>
                            <Link to="/" className="btn btn-border">Process Definitions</Link>
                        </div> */}
                        </div>
                        <div className="col-lg-4 lg-mb-30 lg-center">
                            <div className="br-img">
                                <img className="img-fluid" src={pigeonImg} alt="FeatSystems Pigeon" />
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
                                <li><Link to="/pigeon">Pigeon</Link></li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-section">
                <div className="container">
                    <table className="table pricing-table">
                        <tbody><tr>
                            <th>Features</th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Professional</th>
                            <th>Enterprise</th>
                        </tr>
                            <tr>
                                <td>Price</td>
                                <td>Free</td>
                                <td id="stnd_price">₹5,00,000/Month</td>
                                <td id="prof_price">₹10,00,000/Month</td>
                                <td>Call Feat</td>
                            </tr>
                            <tr>
                                <td>Processes</td>
                                <td>Single Process(for 1 month)</td>
                                <td>1 to 10</td>
                                <td>10 to 25</td>
                                <td>25+</td>
                            </tr>
                            <tr>
                                <td>Hosting</td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Upgrades &amp; Patches</td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Ongoing Support</td>
                                <td>Basic Support</td>
                                <td>Standard support</td>
                                <td>Standard support</td>
                                <td>Scope driven</td>
                            </tr>
                            <tr>
                                <td>Professional Services</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><p className="price-txt" id="stnd_PS">Setup-fee –₹3,00,000</p></td>
                                <td><p className="price-txt" id="prof_PS">Setup-fee –₹5,00,000</p></td>
                                <td>Scope driven</td>
                            </tr>
                            <tr>
                                <td><h4><strong>Key Capabilities</strong></h4></td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Ideation</td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Business Case Analysis</td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Program / Project governance</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Benefit realization</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Portfolio Planning &amp; Prioritization</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td><h4><strong>Key Functionality</strong></h4></td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Taxonomy</td>
                                <td>Standard Template</td>
                                <td>Standard Template</td>
                                <td>Configurable Template</td>
                                <td>Extensible Template</td>
                            </tr>
                            <tr>
                                <td>Workflow &amp; Notification</td>
                                <td>Predefined</td>
                                <td>Predefined</td>
                                <td>Configurable Template</td>
                                <td>Extensible Template</td>
                            </tr>
                            <tr>
                                <td>Dashboard</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Access Control</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Audit Trail</td>
                                <td>Configured to standard taxonomy</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td>Configured to customer taxonomy</td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button onClick={handleBasicPrice} className="btn-dark btn">Subscribe</button></td>
                                <td><button onClick={handleStdPrice} className="btn-dark btn">Subscribe</button></td>
                                <td><button onClick={handleProPrice} className="btn-primary btn">Subscribe</button></td>
                                <td><button onClick={handleEntPrice} className="btn-dark btn">Subscribe</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="note">
                        <strong>Note</strong>
                        <ol>
                            <li>All Pigeon pricing plans given above for <strong>cloud model</strong> only which includes <strong>licenses</strong> cost of <strong>RPA</strong> and <strong>BPM</strong> only, hardware/<strong>infrastructure</strong> cost, <strong>Implementation</strong> cost and <strong>support</strong> cost.</li>
                            <li>Hardware cost for on-premise model, will be an additional investment from customer end.</li>
                            <li><strong>AI</strong> components and <strong>OCR</strong> tools licenses used for any process automation, will be an additional investment from customer end on actual basis.</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isBasicActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">
                        <h2 className="h1 mb-50">Basic Plan</h2>
                        <div onClick={handleBasicPrice} className="close-md"><img src={closeImg} /></div>
                        <PricingForm formType={'BasicPlan'} />
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isStdActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">
                        <h2 className="h1 mb-50">Standard Plan</h2>
                        <div onClick={handleStdPrice} className="close-md"><img src={closeImg} /></div>
                        <PricingForm formType={'StandardPlan'} />
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isProActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">
                        <h2 className="h1 mb-50">Professional Plan</h2>
                        <div onClick={handleProPrice} className="close-md"><img src={closeImg} /></div>
                        <PricingForm formType={'ProfessionalPlan'} />
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isEntActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">
                        <h2 className="h1 mb-50">Enterprise Plan</h2>
                        <div onClick={handleEntPrice} className="close-md"><img src={closeImg} /></div>
                        <PricingForm formType={'EnterprisePlan'} />
                    </div>
                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default PigeonPricing;