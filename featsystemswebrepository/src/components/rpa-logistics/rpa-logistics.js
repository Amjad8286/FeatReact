import React from "react";

import '../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import InfiniteCarousel from 'react-leaf-carousel';

import caseimg1 from '../../images/case-img/logistics/img1.jpg';
import caseimg2 from '../../images/case-img/logistics/img2.jpg';

import GetStarted from '../../components/home-component/get-started';
import { Helmet } from "react-helmet";



const RpaForLogistics = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Robotic Process Automation (RPA) for logistic industry | Featsystems</title>
                    <meta name="description" content="Implementing RPA in the logistic industry can also help other areas such as shipping schedules, inventory monitoring, customer visibility, and billing." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Robotic Process Automation (RPA) for logistic industry | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/rpa_airline_og.jpg" />
                    <meta property="og:description" content="Implementing RPA in the logistic industry can also help other areas such as shipping schedules, inventory monitoring, customer visibility, and billing." />
                    <meta property="og:url" content="https://www.featsystems.com/rpa-logistics" />

                    <link rel="canonical" href="https://www.featsystems.com/rpa-logistics" />
                </Helmet>
            </div>
            <section className="client-section bg-vector" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text fb_text">
                                <h2 className="h1 mt-0">RPA for Logistics Industry</h2>

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
                                <li><Link to="/automation-solutions">By Industry</Link></li>
                                <li>RPA for Logistics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>





            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">Challenges of Logistics Industry</h2>
                            <div className="cl-text">
                                <ul>
                                    <li>Logistics is one of the most competitive industries in the world.</li>
                                    <li>Order and inventory processing as well as delivery scheduling and tracking are a few of the time-consuming back-end processes that are involved every day in logistics.</li>
                                    <li>Such operations are typically performed manually, which lowers productivity and can be negatively impacted.</li>
                                    <li>All these processes in the backend that are performed manually are repetitious and very tedious.</li>
                                    <li>Due to the fact that human beings are prone to making mistakes while performing their tasks, they would likely encounter undesirable or unexpected mistakes.</li>
                                    <li>This might can have a major effect on the logistics company's bottom line.</li>
                                    <li>Manual processes as a core problem that have plagued the logistics industry for a long time now can be identified, automated, and solved with the help of Robotic Process Automation (RPA).</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="case-studies" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-50">Case Studies</h2>
                        </div>
                        <div className="col-lg-12">
                            <div className="sc-card">

                                <div className="cr-box full-box-view case-img">
                                    <InfiniteCarousel
                                        breakpoints={[


                                            {
                                                breakpoint: 768,
                                                settings: {
                                                    slidesToShow: 1,
                                                    slidesToScroll: 1,
                                                },
                                            },
                                        ]}
                                        dots={true}
                                        showSides={true}
                                        sidesOpacity={0.5}
                                        sideSize={0.1}
                                        slidesToScroll={1}
                                        slidesToShow={3}
                                        scrollOnDevice={true}
                                    >
                                        <Link to="cash-application" className="card-box" alt="Cash Application Automation">
                                            <img src={caseimg2} />
                                            <p className="para">Cash Application Automation</p>
                                        </Link>

                                    </InfiniteCarousel>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="case-studies" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-50">How logistics industry processes are streamlined with RPA?</h2>
                        </div>
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul className="mda-lst">
                                    <li>Logistics can benefit from bot-supported process automation.</li>
                                    <li>Software robots (RPA) provide firms a competitive edge in certain operations that are streamlined:</li>
                                    <div className="mda-lst">
                                        <p><strong>Tracking and delivery status</strong>- Because of RPA the delivery status can be monitored or alerts may be sent when the order is ready to be picked up so that any potential delays may be identified at an early stage.</p>
                                        <p><strong>Inventory control</strong>- Inventory control can be simplified by robotic process automation.</p>
                                        <p><strong>Management of purchasing</strong>- In the specific criteria such as price, quantity, or frequency of purchase orders can be processed automatically</p>
                                        <p><strong>Planning of supply and demand</strong>- RPA bot evaluates past sales data or market indicators based on established criteria to anticipate future supply and demand.</p>
                                        <p><strong>Intelligent documentation</strong>- RPA bot facilitates the fast and error-free transmission of documents, processing invoices, collecting claims, exchanging data, etc.</p>
                                    </div>
                                    <li>Therefore, companies are increasingly turning to RPA as a cost-effective solution to digitize their logistics process while reducing costs and achieving greater employee also customer satisfaction</li>

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

export default RpaForLogistics;