import React from "react";
import Image from 'next/image'
import pigeonImg from '../../public/images/home/pigeon-img.png';
import irisImg from '../../public/images/home/iris-pr-img.png';
import ivipsImg from '../../public/images/home/iris-pr-img.png';
import automationSetuImg from '../../public/images/home/automation-setu.png';
import patImg from '../../public/images/home/pat-img.png';

import Carousel from 'react-elastic-carousel'
import Link from 'next/link'




const WhatweHave = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
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
                        <div className="col-lg-12 lg-p-0">
                            <div className="sc-card">
                                {/* <div className="card-cantroller">
                                    <div className="arrow left">
                                        <Image src={arrowLeft} />
                                    </div>
                                    <div className="arrow right">
                                        <Image src={arrowRight} />
                                    </div>
                                </div> */}
                                <div>
                                    <Carousel breakPoints={breakPoints}>
                                        <div>
                                            <Link href="/pigeon">
                                                <a className="pr-card pigeon">
                                                    <div className="text-center">
                                                        <Image width={310} height={203} className="img-fluid" src={pigeonImg} alt="Pigeon" />
                                                    </div>
                                                    <div className="pr-text">
                                                        <h2 className="h1">PIGEON</h2>
                                                        <p className="para">
                                                            Pigeon is an end-to-end digital transformation solution, transforming entire business process journeys from digitization to digitalization to digital transformation.
                                                        </p>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>

                                        <div>
                                            <Link href="/pigeoniCQRS">

                                                <a className="pr-card iris">
                                                    <div className="text-center">
                                                        <Image width={310} height={203} className="img-fluid" src={irisImg} alt="IRIS" />
                                                    </div>
                                                    <div className="pr-text">
                                                        <h2 className="h1">IRIS</h2>
                                                        <p className="para">
                                                            A first of its kind real-time omnichannel “Intelligent customer query response system” transforming full customer support desk journeys starting from customer interactions  back-office processing to response.
                                                        </p>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/pigeoniVIPS">
                                                <a className="pr-card ivips">
                                                    <div className="text-center">
                                                        <Image width={310} height={203} className="img-fluid" src={ivipsImg} alt="iVIPS" />
                                                    </div>

                                                    <div className="pr-text">
                                                        <h2 className="h1">iVIPS</h2>
                                                        <p className="para">
                                                            Vendor Management is a key indicator of your company's performance. The more efficient you are with your Account Payable Process, the better is the position of your services in the market.
                                                        </p>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/bot-as-a-service">
                                                <a className="pr-card a-setu">
                                                    <div className="text-center">
                                                        <Image width={310} height={203} className="img-fluid" src={automationSetuImg} alt="Automation Setu" />
                                                    </div>
                                                    <div className="pr-text">
                                                        <h2 className="h1">Automation Setu</h2>
                                                        <p className="para">
                                                            Through Automation Setu, we provide any size of businesses to experience RPA Automation components without having to pay a high license cost.
                                                        </p>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="https://www.featsystems.com/automation-process-discovery">
                                                <a className="pr-card pat">
                                                    <div className="text-center">
                                                        <Image width={310} height={203} className="img-fluid" src={patImg} alt="Process Assessment Tool" />
                                                    </div>

                                                    <div className="pr-text">
                                                        <h2 className="h1">Process Assessment Tool</h2>
                                                        <p className="para">
                                                            Do you want to boost operational efficiences in your business processes? Find a consulting company to observe and interview your employees, consuming their time, work and interfering with their tasks.
                                                        </p>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </Carousel>
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