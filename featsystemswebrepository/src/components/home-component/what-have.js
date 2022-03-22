import React from "react";
import pigeonImg from '../../images/home/pigeon-img.png';
import irisImg from '../../images/home/iris-pr-img.png';
import ivipsImg from '../../images/home/iris-pr-img.png';
import automationSetuImg from '../../images/home/automation-setu.png';
import patImg from '../../images/home/pat-img.png';
import arrowLeft from '../../images/home/left-arrow.png';
import arrowRight from '../../images/home/right-arrow.png';

import InfiniteCarousel from 'react-leaf-carousel';
import { ExternalLink } from "react-external-link";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const WhatweHave = () => {
    return (
        <>
            <section className="what-have">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">What we have</h2>
                                <p className="para">Using our hyper-intelligent automation solutions, our customers gained the highest level of transformation and work efficiencies with all possible tangible and in-tangible benefits.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sc-card">
                                {/* <div className="card-cantroller">
                            <div className="arrow left">
                            <img src={arrowLeft} />
                            </div>
                            <div className="arrow right">
                            <img src={arrowRight} />
                            </div>
                        </div> */}
                                <div className="cr-box">
                                    <InfiniteCarousel
                                        breakpoints={[

                                            {
                                                breakpoint: 500,
                                                settings: {
                                                    slidesToShow: 2,
                                                    slidesToScroll: 2,
                                                },
                                            },
                                            {
                                                breakpoint: 768,
                                                settings: {
                                                    slidesToShow: 2,
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
                                        <Link to="/pigeon" className="pr-card pigeon">
                                            <div className="text-center">
                                                <img className="img-fluid" src={pigeonImg} alt="Pigeon" />
                                            </div>
                                            <div className="pr-text">
                                                <h2 className="h1">PIGEON</h2>
                                                <p className="para">
                                                    Pigeon is an end-to-end digital transformation solution, transforming entire business process journeys from digitization to digitalization to digital transformation.
                                                </p>
                                            </div>
                                        </Link>
                                        <Link to="/pigeoniCQRS" className="pr-card iris">

                                            <div className="text-center">
                                                <img className="img-fluid" src={irisImg} alt="IRIS" />
                                            </div>
                                            <div className="pr-text">
                                                <h2 className="h1">IRIS</h2>
                                                <p className="para">
                                                    A first of its kind real-time omnichannel “Intelligent customer query response system” transforming full customer support desk journeys starting from customer interactions  back-office processing to response.
                                                </p>
                                            </div>
                                        </Link>
                                        <Link to="/pigeoniVIPS" className="pr-card ivips">
                                            <div className="text-center">
                                                <img className="img-fluid" src={ivipsImg} alt="iVIPS" />
                                            </div>

                                            <div className="pr-text">
                                                <h2 className="h1">iVIPS</h2>
                                                <p className="para">
                                                    Vendor Management is a key indicator of your company's performance. The more efficient you are with your Account Payable Process, the better is the position of your services in the market.
                                                </p>
                                            </div>
                                        </Link>
                                        <Link to="/bot-as-a-service" className="pr-card a-setu">

                                            <div className="text-center">
                                                <img className="img-fluid" src={automationSetuImg} alt="Automation Setu" />
                                            </div>
                                            <div className="pr-text">
                                                <h2 className="h1">Automation Setu</h2>
                                                <p className="para">
                                                    Through Automation Setu, we provide any size of businesses to experience RPA Automation components without having to pay a high license cost.
                                                </p>
                                            </div>
                                        </Link>
                                        <ExternalLink href="https://www.featsystems.com/automation-process-discovery" className="pr-card pat">
                                            <div className="text-center">
                                                <img className="img-fluid" src={patImg} alt="Process Assessment Tool" />
                                            </div>

                                            <div className="pr-text">
                                                <h2 className="h1">Process Assessment Tool</h2>
                                                <p className="para">
                                                    Do you want to boost operational efficiences in your business processes? Find a consulting company to observe and interview your employees, consuming their time, work and interfering with their tasks.
                                                </p>
                                            </div>
                                        </ExternalLink>
                                    </InfiniteCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatweHave;