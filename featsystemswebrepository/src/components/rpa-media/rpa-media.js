import React from "react";

import '../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import InfiniteCarousel from 'react-leaf-carousel';

import caseimg1 from '../../images/case-img/media/img1.jpg';
import caseimg2 from '../../images/case-img/media/img2.jpg';
import caseimg3 from '../../images/case-img/media/img3.jpg';


import GetStarted from '../../components/home-component/get-started';

import { Helmet } from "react-helmet";


const RPAforMedia = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA solutions for Digital Media | Featsystems</title>
                    <meta name="description" content="In the Fierce media market, RPA solutions ensure the media industry is competitive ahead by automating the tedious, manual task so employees can concentrate on thinking innovative by providing high-quality content and better consumer services." />

                    <meta name="keywords" />
                    <meta property="og:title" content="RPA solutions for Digital Media | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/media_img.jpg" />
                    <meta property="og:description" content="In the Fierce media market, RPA solutions ensure the media industry is competitive ahead by automating the tedious, manual task so employees can concentrate on thinking innovative by providing high-quality content and better consumer services." />
                    <meta property="og:url" content="https://www.featsystems.com/rpa-media" />

                    <link rel="canonical" href="https://www.featsystems.com/rpa-media" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">RPA for Media</h2>
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
                                <li><Link to="/automation-solutions">By Industry</Link></li>
                                <li>Media</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>





            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">Challenges of Media Industry:</h2>
                            <div className="cl-text">
                                <ul className="mda-lst">
                                    <li>With so many media channels present globally, continuously entertaining and informing the audience has become a competitive advantage for such channels.</li>
                                    <li>Before the content was limited and fewer of the audience were targetted. Hence, managing the back end process, coming up with new content, and answering customer’s queries could be easily handled manually.</li>
                                    <li>But, in today’s world, manual processing has posed a great challenge for the media industry as well. Customers are seeking live news coverage and the latest information. They want new, creative content on a daily basis. Also, customer feedback and reviews have to be controlled minute to minute else there is a fear of always negative publicity.</li>
                                    <li>Hence, such things have invited Media channels to use technology to handle their content creating and data management process that solely relies on the manual process.</li>
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
                                        <Link to="vendor-contract-renewal-automation" className="card-box ">
                                            <img src={caseimg1} alt="Vendor Contract Renewal" />
                                            <p className="para">Vendor Contract Renewal Automation</p>
                                        </Link>
                                        <Link to="aircheck-process-automation" className="card-box" alt="Aircheck Process Automation">
                                            <img src={caseimg2} />
                                            <p className="para">Aircheck Process Automation</p>
                                        </Link>
                                        <Link to="/to-process-automation" className="card-box" alt="TO Process Automation">
                                            <img src={caseimg3} />
                                            <p className="para">TO Process Automation</p>
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
                            <h2 className="h2 mb-50">RPA a virtual assistant to Media industry</h2>
                        </div>
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul>
                                    <li> Media and Entertainment industry is slowing replacing their current manual processes into Automation Bot Processes. Any rule-based, repetitive process can be easily replicated by a robot and an integrated RPA implementation will yield better business efficiency and reduce the cost of the overall workflow.&nbsp;</li>
                                    <li> RPA in Media Industry can be specifically used in Order Processing and Daily Report Processes. They can be used to analyze and interpret media insights and customer interests over time to provide unique and different news information to their audience.</li>
                                    <li> Below are some of the RPA Media Solutions that can be easily implemented in your business.</li>
                                    <strong>Click on each box to know more!</strong>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="solution-section">
                <div className="container">

                    <div className="sl_section">
                        <div className="sl_head"><h3>Our Solutions</h3></div>

                        <div className="sl_boxes">
                            <Link to="/order-processing">Order Processing</Link>
                            <Link to="/daily-report-process">Daily Report Process</Link>
                        </div>

                    </div>
                </div>
            </section>




            <GetStarted />

        </>
    );
};

export default RPAforMedia;