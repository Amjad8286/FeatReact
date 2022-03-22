import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from './home-component/get-started';
import '../css/carousel-css.css'


import InfiniteCarousel from 'react-leaf-carousel';

import caseimg1 from '../images/slide_video/banking_img.jpg';
import caseimg2 from '../images/slide_video/RPA-IT-INFRA.png';
import caseimg3 from '../images/slide_video/human_resource_img.jpg';
import caseimg4 from '../images/slide_video/RPA-Generic.png';




import { useState } from 'react';
import closeImg from '../images/close-img.svg';

import { Helmet } from "react-helmet";

const UseCaseLibrary = () => {


    const [isActive, setActive] = useState(false);


    const toggleClass = () => {
        setActive(!isActive);
        // console.log(event.target.parentElement.getAttribute('dataurl'));        
        // console.log(this.getNamedItem("dataurl").value);       
    }





    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>RPA Bot library (Use cases) | Featsystems</title>
                    <meta name="description" content="Featsystems have provided uses cases (bot library) as a reference to find out where robots are used and how they contribute to the automation of tasks in various business processes." />

                    <meta name="keywords" />
                    <meta property="og:title" content="RPA Bot library (Use cases) | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/use-case-library-og.jpg" />
                    <meta property="og:description" content="Featsystems have provided uses cases (bot library) as a reference to find out where robots are used and how they contribute to the automation of tasks in various business processes." />
                    <meta property="og:url" content="https://www.featsystems.com/use-case-library" />


                    <link rel="canonical" href="https://www.featsystems.com/use-case-library" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Bot Library</h2>
                                <p>
                                    Are you facing difficulty in implementing RPA at your organization? Though RPA Implementation seems to be challenging, we provide you access to our RPA Use Case Library (Bot library) to make the process simpler and easier for you. These cases can act as a ready reference for processes that were automated by many organizations across different industries worldwide. Check out our Bot Library and automate your business effortlessly!

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
                                <li>Bot Library</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-studies libray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-30">Finance and Banking Solutions</h2>
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
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://www.youtube.com/embed/OYVpwvRWNhk?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))} >

                                                <img src={caseimg1} alt="Finance & banking use cases" />
                                                <div className="lib-txt">
                                                    <h2>Order Processing</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://www.youtube.com/embed/XzPL_fau8a0?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg1} alt="Finance & banking use cases" />
                                                <div className="lib-txt">
                                                    <h2>Invoice Posting</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://www.youtube.com/embed/MuDlmEeclFk?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg1} alt="Finance & banking use cases" />
                                                <div className="lib-txt">
                                                    <h2>Digital Account Opening</h2>
                                                </div>

                                            </div>

                                        </div>


                                    </InfiniteCarousel>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="case-studies libray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-30">IT and Infrastructure Solutions</h2>
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
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/cpu-optimazation-window?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))} >

                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>CPU Optimization for windows</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/find-and-delete-duplicate-files-using-power-shell?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Find and Delete Duplicate Files Using Power Shell</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/share-folder-creation?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Share Folder Creation</h2>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/aws-password-reset?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>AWS Password Reset</h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/auto-software-installation?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Auto Software Installation</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/microsoft-outlook-configuration?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Microsoft Outlook Configuration</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/printing-configration?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Printing Configuration</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/change-password?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Change Password</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/antivirus-scan?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Antivirus Scan</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/email-migration?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Email Migration</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/network-file-sharing?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Network File Sharing</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/network-device-block-tp-link?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Network Device Block TP Link</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/shrink-file-in-sql-server?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg2} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>SHRINK FILE IN SQL SERVER</h2>
                                                </div>
                                            </div>
                                        </div>


                                    </InfiniteCarousel>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="case-studies libray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-30">Human Resource Solutions</h2>
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
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/linkedin-profile-download?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))} >

                                                <img src={caseimg3} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>LinkedIn profile download</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/salary-slip-generation?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg3} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Salary Slip Generation</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/employee-details-extraction?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg3} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Employee Details Extraction</h2>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/importing-employee-details-in-bamboo-hr?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg3} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Importing Employee Details in Bamboo HR</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/hr-employee-background-verification?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg3} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>HR-Employee Background Verification</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/hr-interview-process?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg3} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>HR Interview Process</h2>
                                                </div>
                                            </div>
                                        </div>




                                    </InfiniteCarousel>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="case-studies libray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h2 mb-30">Generic Solutions</h2>
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
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/material-master-record-creation?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))} >

                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Material Master Record Creation</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/vendor-master-record-creation?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Vendor Master Record Creation</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/converting-json-to-xml?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>

                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Converting JSON-To-XML</h2>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/create-an-event-in-google-calendar?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Create an Event in Google Calendar</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/creating-lead-in-crm?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Creating Lead in CRM</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/search-company-news-filtered-by-source-and-keywords?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Search company news filtered by source and keywords</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/find-and-delete-duplicate-files-using-power-shell?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Find and Delete Duplicate Files Using Power Shell</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/special-charater-replacement?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Special Character Replacement</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card-box" onClick={toggleClass} dataurl="https://tube.featsystems.com/videoEmbed/date-comparison?autoplay=1" onClick={(event) => setActive(event.target.parentElement.getAttribute('dataurl'))}>
                                                <img src={caseimg4} alt="IT and Infrastructure Solutions" />
                                                <div className="lib-txt">
                                                    <h2>Date Comparison</h2>
                                                </div>
                                            </div>
                                        </div>




                                    </InfiniteCarousel>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section video-modal">
                    <div className="modal-box">
                        <div className="modal-body">
                            <div className="mt-20 overflow-hidden">
                                <iframe width="100%" height="397" src={isActive} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export default UseCaseLibrary;