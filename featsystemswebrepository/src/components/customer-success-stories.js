import React from "react";
import '../css/quote-css.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InfiniteCarousel from 'react-leaf-carousel';
import GetStarted from './home-component/get-started';

import niketPhuria from '../images/testimonials/niket-phuria.jpg';
import deepakSharma from '../images/testimonials/deepak-sharm.jpg';
import niketPhuriaID from '../images/testimonials/niket-phuria-id.jpg';



// import '../css/quote-css.css'

import quotationImg from '../images/quotation-mark.svg';
import motilal from '../images/home/motilal.png';

import closeImg from '../images/close-img.svg';
import { useState } from 'react';

import { Helmet } from "react-helmet";

const CustomerSuccessStories = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Customer Success Stories automation | Featsystems</title>
                    <meta name="description" content="Satisfied customers are our best reference! See some chosen projects to demonstrate how our customers&#39; operations or processes have improved by automation." />

                    <meta name="keywords" content="" />
                    <meta property="og:title" content="Customer Success Stories automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/customer-success-stories-og.jpg" />
                    <meta property="og:description" content="" />
                    <meta property="og:url" content="https://www.featsystems.com/customer-success-stories" />


                    <link rel="canonical" href="https://www.featsystems.com/customer-success-stories" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Client testimonials</h2>
                                <p>
                                    Our Customer's Automation Success Stories from various businesses sectors and around the globe have improved the process experience with automation tool powered by UiPath, Microsoft Power Automate and Automation Anywhere.
                                </p>
                            </div>
                            <div className="gt-button">
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
                                <li>Customer Success Stories</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="gt-button ">
                                <a href="#WatchNow" className="btn btn-primary">Watch now</a>
                                <a href="#Read" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="WatchNow" className="we-focus bg-vector" style={{ padding: "70px 0 90px 0", marginBottom: "70px" }}>
                <InfiniteCarousel
                    breakpoints={[

                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 2,
                            },
                        }, {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 2,
                            },
                        },
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
                    slidesToShow={1}
                    scrollOnDevice={true}
                >

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="iris-video">
                                    <div onClick={toggleClass} dataurl="https://tube.featsystems.com/video/viacom18-sucess-story" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                        <img className="thumbStyle img-fluid" src={niketPhuria} align="Nikhet Phuria" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="iris-video">
                                    <div onClick={toggleClass} dataurl="https://tube.featsystems.com/video/kotak-mahindra-bank-limited-success-story" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                        <img className="thumbStyle img-fluid" src={deepakSharma} align="FIBO Video" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </InfiniteCarousel>
            </section>
            <section id="Read" className="tech-part-sections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-20">
                            <InfiniteCarousel
                                breakpoints={[

                                    {
                                        breakpoint: 500,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 2,
                                        },
                                    }, {
                                        breakpoint: 500,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 2,
                                        },
                                    },
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
                                slidesToShow={1}
                                scrollOnDevice={true}
                            >
                                <div className="crousel">
                                    <div className="main_grid">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <img className="qt_mark" alt="Quotation Mark" src={quotationImg} />
                                                <p>“ This UiPath Automation Excellence Award has proved that we are on the right track in our automation journey, and now we need to scale to new heights and being automation for other core functions.</p>
                                                <p>
                                                    We look forward to pursuing our goal along with Feat Systems - implementation and resource partners, to set and scale new heights with a combination of UiPath products and our expertise in creating business-focused automation-driven solutions.
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h3 className="h2 mt-10">Niket Phuria,</h3>
                                                <span>Viacom18 Media | Senior Technology Product Manager</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="crousel">
                                    <div className="main_grid">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <img className="qt_mark" alt="Quotation Mark" src={quotationImg} />
                                                <p>It has been a good working relationship with Hiren and his team. His team has helped us in implementing various mobile applications i.e. account opening, trading &amp; business tracking app for our clients and business partners. The team is accommodative in terms of incorporating functionality requests within the current budget and in a reasonable time frame. The culture of the team is flexible, responsive and dependable and one can trust them with critical responsibilities. I enjoyed our partnership &amp; look forward to many more years working with him.
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h3 className="h2 mt-10">Arun Chaudhry,</h3>
                                                <span>Vice President | Head-Online Business and Product Development</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="crousel">
                                    <div className="main_grid">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <img className="qt_mark" alt="Quotation Mark" src={quotationImg} />
                                                <p>Initial project was delayed but team eventually delivered. Feat handled additional scope thereafter and proved quite responsive. Feat did a good job overall on a subject area that was new to them and did proper analysis then fix the issue - all very quickly and with confidence."
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h3 className="h2 mt-10">Adam Buer,</h3>
                                                <span>Air Meals</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="crousel">
                                    <div className="main_grid">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <img className="qt_mark" alt="Quotation Mark" src={quotationImg} />
                                                <p>Feat Systems performs to expectations and beyond. Problem solving and development of the end product is met on time. Definitely a programmer you would employ to develop your product!. Very competent and high attention to the support over the test phase. I can definitely recommend the company."
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h3 className="h2 mt-10">Dan Allen,</h3>
                                                <span>Jenny Dose</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="crousel">
                                    <div className="main_grid">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <img className="qt_mark" alt="Quotation Mark" src={quotationImg} />
                                                <p>Feat earned great respect and we are more than pleased with them. The starred this project! Went beyond expectations with time, communication, schedule, deadline, even outside of scope work. Tremendous team! Just pay them the right price and give a clear project brief, Feat will take you ahead of your vision! Enjoying my 3rd project with them!"
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h3 className="h2 mt-10">Brad Pitt,</h3>

                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </InfiniteCarousel>
                        </div>

                    </div>



                </div>
            </section>
            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section video-modal">
                    <div className="modal-box">
                        <div className="modal-body">
                            <div className="mt-20 overflow-hidden">
                                <iframe width="100%" height="500" src={isActive} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div onClick={toggleClass} className="close-md"><img src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>



            <GetStarted />

        </>
    );
};

export default CustomerSuccessStories;