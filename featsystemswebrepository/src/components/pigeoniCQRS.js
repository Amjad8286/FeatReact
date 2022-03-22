import React from "react";
import '../css/Pigeon.css';
import '../css/fibocss.css';


import InfiniteCarousel from 'react-leaf-carousel';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GetStarted from './home-component/get-started';
import doneIcon from '../images/inner-page/done-icon.png';


import irisImg from '../images/home/iris-pr-img.png';
import ivipsImg from '../images/home/ivips-img.png'
import irisBanner from '../images/inner-page/iris-video.jpg'
import loaderImg from '../images/inner-page/loading-img.gif'

import irisimg2 from '../images/inner-page/iris bene-img-2.jpg'
import irisimg3 from '../images/inner-page/iris bene-img-3.jpg'
import irisimg4 from '../images/inner-page/iris bene-img-4.jpg'
import irisimg5 from '../images/inner-page/iris bene-img-5.jpg'
import irisimg6 from '../images/inner-page/iris bene-img-6.jpg'
import irisimg7 from '../images/inner-page/iris bene-img-4.jpg'

import img10 from '../images/inner-page/img-10.jpg'
import img11 from '../images/inner-page/img-11.jpg'
import img12 from '../images/inner-page/img-12.jpg'
import img13 from '../images/inner-page/img-13.jpg'
import img14 from '../images/inner-page/img-14.jpg'

import irisTitle from '../images/inner-page/iris-title-new.png';
import irisbot from '../images/inner-page/iris-robot.png';

import PigeonVideo from '../components/modals/pigeon-video'

import DemoFormpigeoniCQRS from './pricing-modal/demo-form-pigeoniCQRS';
import FreeTrialpigeoniCQRS from './pricing-modal/free-trial-pigeoniCQRS';
import { ExternalLink } from 'react-external-link';

import closeImg from '../images/close-img.svg';
import { useState } from 'react';
import PricingForm from '../components/pricing-modal/pricing-form';
import { Helmet } from "react-helmet";

const Pigeonicqrs = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>IRIS- Intelligent Customer Query Response System | Featsystems</title>
                    <meta name="description" content="IRIS is an end-to-end Intelligent Customer Query Response System designed with a customer-first mindset having essential attributes of intelligence as well as improving customer service in mind." />

                    <meta name="keywords" />
                    <meta property="og:title" content="IRIS- Intelligent Customer Query Response System | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/iris-bot-og-img-new.jpg" />
                    <meta property="og:description" content="IRIS is an end-to-end Intelligent Customer Query Response System designed with a customer-first mindset having essential attributes of intelligence as well as improving customer service in mind." />
                    <meta property="og:url" content="https://www.featsystems.com/pigeoniCQRS" />

                    <link rel="canonical" href="https://www.featsystems.com/pigeoniCQRS" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-8 gt-button">
                            <div className="cl-text mb-50">
                                <img style={{ filter: 'contrast(0.5)', marginBottom: '30px' }} src={irisTitle} className="img-fluid" />
                                <p>
                                    Every business is replete with implicit rules leftover from earlier decades. These rules of work design are based on assumptions about technology, people, and organizational goals that no longer hold.
                                </p>
                                <p>
                                    Businesses that want to stay ahead in competitive markets must start by listening to those who know where the bottlenecks are; their customers.
                                </p>
                                <ul className="mt-20 mb-20">
                                    <li>One recent customer service study found that 62% of companies do not respond to customer emails. For companies that do respond, the average response time is 12 hours, with the slowest response taking longer than 8 days.</li>
                                    <li>
                                        The single most important factor for customer service is response time 75% of customers prefer a short response time.
                                    </li>
                                    <li>
                                        Automation and self-service are the key to faster customer service.
                                    </li>

                                </ul>
                                <h3>
                                    Hear the voice of your customer at the center stage of digital transformation with...
                                </h3>
                            </div>
                            <Link to="/iris-pricings" className="btn btn-dark">Pricing</Link>
                            <ExternalLink href="https://irisebookdownload.featsystems.com/" className="btn btn-primary">Download Ebook</ExternalLink>
                            <ExternalLink href="https://www.featsystems.com/iris-demo-request" className="btn btn-dark">Request Demo</ExternalLink>

                            <button onClick={toggleClass} className="btn btn-dark">Free Trial</button>
                        </div>
                        <div className="col-lg-4 lg-mb-30 lg-center">
                            <div className="br-img">
                                <img className="img-fluid" style={{ width: '166px' }} src={irisbot} alt="FeatSystems IRIS Bot" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1 mb-50">IRIS Free Trial</h2>
                            <PricingForm />
                            <div onClick={toggleClass} className="close-md"><img src={closeImg} /></div>
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
                                <li>IRIS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-focus bg-vector" style={{ padding: "70px 0 90px 0", marginBottom: "70px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iris-video">

                                <Router>
                                    <Link to="/pigeon-video">
                                        <img className="thumbStyle img-fluid" src={irisBanner} align="IRIS Video" />
                                    </Link>
                                    <Switch>
                                        <Route path="/pigeon-video">
                                            <PigeonVideo />
                                        </Route>
                                    </Switch>
                                </Router>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="how-work no-pd-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">About IRIS</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <p>
                                IRIS is the first of its kind nearly real-time omnichannel “Intelligent Customer Query Response System” designed with “customer first mentality” and important attributes of intelligence as well as better customer service in mind.
                            </p>
                            <p>
                                IRIS is agile & resilient in nature, transforming full customer support desk journeys starting from customer interactions to back-office processing to the response.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-solution">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">IRIS Objectives</h2>
                                <p className="para">In sales marketing and support management service perspective, the main objective is
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box ">
                                <img src={doneIcon} alt="Done" />
                                <h2 className="h1">Reduce Queries</h2>
                                <p className="para">
                                    Using improved self-service live support channels
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />
                                <h2 className="h1">Faster Response</h2>
                                <p className="para">
                                    By limiting human intervention
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />
                                <h2 className="h1">Automate Processing</h2>
                                <p className="para">
                                    Using Robot agents
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="key-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">IRIS Key Features</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box ">
                                <img src={doneIcon} alt="Done" />
                                <h2 className="h1">Live Channels</h2>
                                <p className="para">
                                    Intelligent Chatbot backed by knowledge base & live agent (if needed)
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />
                                <h2 className="h1">AI matrix</h2>
                                <p className="para">
                                    AI-powered intelligent classification for all queries
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />
                                <h2 className="h1">Robotics</h2>
                                <p className="para">
                                    Robots take the first turn to answer customer queries & routes to human in case of exceptions


                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="key-feature" style={{ padding: '70px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">IRIS Benefits</h2>
                                <p className="para">“One stop shop solution for entire process transformation”</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sc-card">

                                <div className="cr-box full-box-view">
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
                                        <div className="card-box ">
                                            <img src={irisimg3} alt="Done" />
                                            <p className="para">
                                                Reduce Manual efforts by nearly 80%
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <img src={irisimg4} alt="Done" />
                                            <p className="para">
                                                Improve work efficiency by almost around 200%
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <img src={irisimg5} alt="Done" />
                                            <p className="para">
                                                Improvement of Service levels from Days to Minutes
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <img src={irisimg6} alt="Done" />
                                            <p className="para">
                                                Ensure business process continuity during transaction influx or pandemic season.
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <img src={irisimg2} alt="Done" />

                                            <div className="para">
                                                Faster Deployments within weeks.
                                                <span className="info">i</span>
                                                <div className="info-details cssdtls">
                                                    <div className="cl-text">
                                                        <ul>
                                                            <li><strong>Setup &amp; Data Mapping: 1-2 weeks</strong></li>
                                                            <li><strong>Low complex process/query flow: 0-1 week</strong></li>
                                                            <li><strong>Medium complex process /query flow: 1-3 weeks</strong></li>
                                                            <li><strong>High complex process /query flow: 4-6 weeks</strong></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-box">
                                            <img src={irisimg7} alt="Done" />

                                            <p className="para">
                                                Improved staff retention by reduced high volume low value works to focus on complex/higher value work activities.
                                            </p>
                                        </div>
                                    </InfiniteCarousel>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </section>

            <section className="started-section" style={{ paddingBottom: '70px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">How to get started with IRIS ?</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <img src={img10} />
                                <div className="para">
                                    <h2 className="h2">Engage</h2>
                                    <p>Connect with the IRIS team or UiPath team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <img src={img11} />
                                <div className="para">
                                    <h2 className="h2">Analyse</h2>
                                    <p>IRIS team will analyze existing business function data & prepare ideation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <img src={img12} />
                                <div className="para">
                                    <h2 className="h2">Deploy</h2>
                                    <p>IRIS team will start deployment of CSM or ITSM use cases & provide benefit realization of it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <img src={img13} />
                                <div className="para">
                                    <h2 className="h2">Improve</h2>
                                    <p>IRIS team will provide consulting to improve and optimize the current business process.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <img src={img14} />
                                <div className="para">
                                    <h2 className="h2">Grow</h2>
                                    <p>Scale automation journey and grow business volume substantially.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="our-solution">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">Our ready to use solutions</h2>
                                <p className="para">With the PIGEON Automation platform, a business can integrate all the workflows and work must faster to improve the efficiency of the overall business. Instead of using Bots for individual activities or automating a small functionality, using an integrated automation platform like PIGEON will save a lot of time and effort.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/pigeon" className="pr-card iris">
                                <div className="text-center">
                                    <img className="img-fluid" src={irisImg} alt="IRIS" />
                                </div>
                                <div className="pr-text">
                                    <h2 className="h1">Pigeon</h2>
                                    <p className="para">
                                        Pigeon is an end-to-end digital transformation solution
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/pigeoniVIPS" className="pr-card ivips">
                                <div className="text-center">
                                    <img className="img-fluid" src={ivipsImg} alt="iVIPS" />
                                </div>
                                <div className="pr-text">
                                    <h2 className="h1">Office of CFO Pigeon iVIPS</h2>
                                    <p className="para">
                                        Intelligent Vendor Invoice Processing System
                                    </p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default Pigeonicqrs;