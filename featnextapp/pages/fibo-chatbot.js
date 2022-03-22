import { React, useState } from "react";

import Head from 'next/head'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import GetStarted from './home-component/get-started';
import fiboImg from '../public/images/inner-page/fibo.png';
import doneIcon from '../public/images/inner-page/done-icon.png';

import fiboBanner from '../public/images/inner-page/fibo-v-banner.jpg'

import img10 from '../public/images/inner-page/img-10.jpg'
import img11 from '../public/images/inner-page/img-11.jpg'
import img12 from '../public/images/inner-page/img-12.jpg'
import img14 from '../public/images/inner-page/img-14.jpg'
import img15 from '../public/images/inner-page/img-15.jpg';

// import AskFiboVideo from '../pages/modals/ask-fibo'


// import DemoFormFibo from '../components/pricing-modal/demo-form-fibo';

import closeImg from '../public/images/close-img.svg';
import PricingForm from '../pages/pricing-modal/pricing-form';

import Carousel from 'react-elastic-carousel'

const FiboChatbot = () => {


    const [isVideo, setVideo] = useState(false);
    const VideoToggle = () => {
        setVideo(!isVideo);
    };


    const [isActive, setActive] = useState(false);
    const bookBot = () => {
        setActive(!isActive);
    };


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
    return (
        <>
            <Head>
                <html lang="en" />
                <title>Fibo - a hyper-intelligent chatbot | Featsystems</title>
                <meta name="description" content="Fibo chatbot is also said to be an “Intelligent Text Analytics System” designed to understand the intent and sentiment of your existing or prospective customer&#39;s communications and provide necessary information to them in real-time." />

                <meta name="keywords" />
                <meta property="og:title" content="Fibo - a hyper-intelligent chatbot | Featsystems" />
                <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/fibo-og-img.jpg" />
                <meta property="og:description" content="Fibo chatbot is also said to be an “Intelligent Text Analytics System” designed to understand the intent and sentiment of your existing or prospective customer&#39;s communications and provide necessary information to them in real-time." />
                <meta property="og:url" content="https://www.featsystems.com/fibo-chatbot" />

                <link rel="canonical" href="https://www.featsystems.com/fibo-chatbot" />
            </Head>
            <Header />
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-8">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">FIBO</h2>
                                <p>
                                    Automate Sales, Marketing, and Support Management systems by responding to your customers instantly.
                                </p>
                            </div>
                            <div className="gt-button mt-40">
                                <button onClick={bookBot} className="btn btn-dark">Request Demo</button>

                            </div>
                        </div>
                        <div className="col-lg-4 lg-mb-30 lg-center">
                            <div className="br-img">
                                <Image className="img-fluid" src={fiboImg} alt="FeatSystems fibo chatbot" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1 mb-50">Request Demo</h2>
                            <PricingForm />
                            <div onClick={bookBot} className="close-md"><Image width={22} height={22} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>



            <section className={`data-modal video-modal ${isVideo ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="p-relative">
                            <div className="overflow-hidden">
                                <iframe width="100%" height="500" src={` ${isVideo ? "https://www.youtube.com/embed/56a4jew2108?autoplay=1" : ""}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div onClick={VideoToggle} className="close-md"><Image width={22} height={22} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb">
                                <li><Link href="/home"><a>Home</a></Link></li>
                                <li>Fibo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="what-done fibo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <p className="para">
                                    Change in Customer Service standards is very evident in today’s digital world. Since businesses are struggling to sustain themselves with this quick change, a huge demand for the second machine age era of technology solutions can be witnessed in the market.
                                </p>
                                <p className="para">
                                    In the last few years, sales and support channels have changed considerably. Now with the pandemic hitting the global market, the number of messages, queries, and customer requests has shot up considerably.
                                </p>
                                <p className="para">
                                    Have you asked your customers today about what they expect or what is on their priority wish list? If not, let us tell you what their top responses would be: they are looking for customer services that have 24-hour availability, quick response time, and are Omni-channel.
                                </p>
                                <p>
                                    If you want to change the scope of customer service at your business, we recommend you to start using and seeing the value of chatbots for your customer service:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card-box ">
                                    <Image src={doneIcon} alt="Done" />
                                    <p className="para">
                                        It is anticipated that the chatbot market will increase from $2.6 billion in 2019 to $9.4 billion in 2024 at 29.7% (CAGR).
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card-box">
                                    <Image src={doneIcon} alt="Done" />
                                    <p className="para">
                                        By 2020, 80% of companies will have some kind of chatbot automation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card-box">
                                    <Image src={doneIcon} alt="Done" />
                                    <p className="para">
                                        Customer service costs can be saved by chatbots up to 30%.

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card-box">
                                    <Image src={doneIcon} alt="Done" />
                                    <p className="para">
                                        More than 50 % of customers expect a company to be available 24/7.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-20">
                                <h2 className="h3">
                                    <strong>Introducing FIBO a support advisor to you in enhancing your customer support experience.</strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-focus bg-vector">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iris-video">
                                <div onClick={VideoToggle}>
                                    <Image className="thumbStyle img-fluid" src={fiboBanner} align="FIBO Video" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-work fibo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">About Fibo Chatbot</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <p>
                                Fibo is an “Intelligent Text Analytics System” chatbot which was particularly developed for customer support satisfaction in mind. It analyzes and understands the sentiment of the user’s request to extract the necessary entities and replies to such requests in real-time.
                            </p>
                            <p>
                                FIBO chatbot provides personalized customer care at your fingertip. They provide end-to-end Sales, Marketing, and Support Management to the customer as and when required.
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
                                <h2 className="h1">Fibo Objective</h2>
                                <p className="para">In sales marketing and support management service perspective, the main objective is
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box ">
                                <Image src={doneIcon} alt="Done" />
                                <p className="para">
                                    To have a better conversation
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box">
                                <Image src={doneIcon} alt="Done" />
                                <p className="para">
                                    To convert leads to opportunities
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box">
                                <Image src={doneIcon} alt="Done" />
                                <p className="para">
                                    To improve productivity and the performance of your team.

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box">
                                <Image src={doneIcon} alt="Done" />
                                <p className="para">
                                    To improve customer advocacy
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
                                <h2 className="h1">Key Features</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sc-card">

                                <div className="cr-box fibo">
                                    <Carousel breakPoints={breakPoints}>
                                        <div className="card-box ">
                                            <Image src={doneIcon} alt="Done" />
                                            <p className="para">
                                                Fibo is powered by AI, ML, RPA & iBPMs
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <Image src={doneIcon} alt="Done" />
                                            <p className="para">
                                                With the intelligent feature, fibo is quick to transfer and allows human agents to spend their time addressing more complex inquiries.
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <Image src={doneIcon} alt="Done" />
                                            <p className="para">
                                                It logs support tickets and inquiries with user assignments to respective ticketing and CRM applications.
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <Image src={doneIcon} alt="Done" />
                                            <p className="para">
                                                Fibo answers based on customer requirements and then suggest the best product, services, or a solution accordingly.
                                            </p>
                                        </div>
                                        <div className="card-box">
                                            <Image src={doneIcon} alt="Done" />

                                            <p className="para">
                                                FIBO, when embedded in your existing customer processes, understands your business communication, and prioritizes them accordingly.
                                            </p>
                                        </div>
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefit-section fibo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">Fibo Benefits</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img10} />

                                <p className="para">FIBO is independent and can also be a self-support channel for IRIS</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img11} />

                                <p className="para">FIBO is quick in replying to an instant response within seconds.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img12} />
                                <p className="para">FIBO can work in any business environment. It is scalable and can deliver a better customer experience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img12} />
                                <p className="para">Increased customer engagement, Fibo helps the customer to find what he is looking for and also classify based on various recommendations.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img14} />
                                <p className="para">Adequate in understanding whether the customer is new or existing.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img15} />
                                <p className="para">FIBO is 24/7 available to engage with the customers, to deal with information-based questions, and to reduce support service tickets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetStarted />
            <Footer />

        </>
    );
};

export default FiboChatbot;