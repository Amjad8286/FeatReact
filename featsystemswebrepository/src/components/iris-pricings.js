import React from "react";
import '../css/Pigeon.css';
import '../css/modal-css.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from './home-component/get-started'
import irisImg from '../images/inner-page/iris-img.png';

// import BasicPlan from '../components/pricing-modal/basic-plan';
// import StandardPlan from '../components/pricing-modal/standard-plan';
// import ProfessionalPlan from '../components/pricing-modal/professional-plan';
// import EnterprisePlan from '../components/pricing-modal/enterprise-plan';

import { useState } from "react";
import PricingForm from '../components/pricing-modal/pricing-form';
import closeImg from '../images/close-img.svg';


import '../css/pigeon-pricings.css'
import { Helmet } from "react-helmet";



const IrisPricings = () => {
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
                    p<title>IRIS Pricing &amp; Features | Featsystems</title>
                    <meta name="description" content="Featsytems IRIS gives you a flexible plan that has amazing features to make your customer service better, smarter, and allows taking faster decisions." />

                    <meta name="keywords" />
                    <meta property="og:title" content="IRIS Pricing &amp; Features | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/iris-pricing-og-img.png" />
                    <meta property="og:description" content="Featsytems IRIS gives you a flexible plan that has amazing features to make your customer service better, smarter, and allows taking faster decisions." />
                    <meta property="og:url" content="https://www.featsystems.com/iris-pricings" />
                    <link rel="canonical" href="https://www.featsystems.com/iris-pricings" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-8">
                            <div className="cl-text m-0">
                                <h2 className="h1 mt-0">IRIS Pricing and Features</h2>
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
                                <img className="img-fluid" src={irisImg} alt="FeatSystems IRIS" />
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
                                <li><Link to="/pigeoniCQRS">IRIS</Link></li>
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
                            <th>Free</th>
                            <th>Standard</th>
                            <th>Professional</th>
                            <th>Enterprise</th>
                        </tr>
                            <tr>
                                <td>Price</td>
                                <td>Free</td>
                                <td id="stnd_price">₹560/Query</td>
                                <td id="prof_price">₹400/Query</td>
                                <td id="entrprs_price">₹160/Query</td>
                            </tr>
                            <tr>
                                <td>Queries</td>
                                <td>Single Query(for 1 month)</td>
                                <td>100 to 1000/Day</td>
                                <td>1000 to 9999/Day</td>
                                <td>10000+/Day</td>
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
                                <td>Enterprise support</td>
                            </tr>
                            <tr>
                                <td>Professional Services</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><p className="price-txt" id="stnd_PS">Setup-fee –₹2,00,000</p></td>
                                <td><p className="price-txt" id="prof_PS">Setup-fee –₹5,00,000</p></td>
                                <td><p className="price-txt" id="entrprs_PS">Setup-fee –₹15,00,000</p></td>
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
                                <td>Program governance</td>
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
                                <td>Process optimization</td>
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
                                <td>Support Channels</td>
                                <td>Email</td>
                                <td>Email, Intelligent Chatbot, Whatsapp, Webforms</td>
                                <td>Email, Intelligent Chatbot, Whatsapp, Webforms</td>
                                <td>Email, Intelligent Chatbot, Whatsapp, Webforms</td>
                            </tr>
                            <tr>
                                <td>AI Matrix</td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Robotics (RPA Agents etc.)</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                            </tr>
                            <tr>
                                <td>Email Templates</td>
                                <td><i className="table-icon close-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
                                <td><i className="table-icon check-mark"></i></td>
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
                                <td>Configured to customer taxonomy</td>
                                <td>Configured to customer taxonomy</td>
                                <td>Configured to customer taxonomy</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button onClick={handleBasicPrice} className="btn-dark btn">Subscribe</button></td>
                                <td><button onClick={handleStdPrice} className="btn-dark btn">Subscribe</button></td>
                                <td><button onClick={handleProPrice} className="btn-primary btn">Subscribe</button></td>
                                <td><button onClick={handleEntPrice} className="btn-dark btn">Subscribe</button></td>
                            </tr>
                        </tbody></table>
                    {/* <Switch>
                    <Route path="/basic-plan">
                        <BasicPlan />
                    </Route>
                    <Route path="/standard-plan">
                        <StandardPlan />
                    </Route>
                    <Route path="/professional-plan">
                        <ProfessionalPlan />
                    </Route>
                    <Route path="/enterprise-plan">
                        <EnterprisePlan />
                    </Route>
                    
                    

                    
                                         
                    
                </Switch>    */}
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

export default IrisPricings;