import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';



import GetStarted from './home-component/get-started'



const AboutFeat = () => {

    return (

        <>
            <Head>

                <html lang="en" />
                <title>Know About Us | Featsystems</title>
                <meta name="description" content="We continue to push technology innovation to its potential. A digital world without borders through intelligent automation technologies (RPA, AI, BPM OCR) in which every business unlocks its innovative ability." />
                <meta property="og:url" content="https://www.featsystems.com/about" />

                <meta property="og:title" content="Know About Us | Featsystems" />
                <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/about_feat.jpg" />
                <meta property="og:description" content="We continue to push technology innovation to its potential. A digital world without borders through intelligent automation technologies (RPA, AI, BPM OCR) in which every business unlocks its innovative ability." />
                <meta property="og:url" content="https://www.featsystems.com/about" />

            </Head>
            <Header />
            <section className="banner-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <div className="mb-50">
                                    <h2 className="h1 mt-0">About Us</h2>
                                    <p>
                                        The world is changing faster than ever before, we have updated the way we live, so isn’t it time we update the way we work.
                                    </p>
                                </div>
                            </div>
                            <div className="gt-button">
                                <Link href="/contact">
                                    <a className="btn btn-dark">
                                        Get Started
                                    </a>
                                </Link>
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
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <p>The technology landscape has become sophisticated, business threats and competitions are ever-evolving and disruption is never to build.</p>
                                <p>These changes, in turn, are creating huge demands for better, agile, and resilient technology solutions using the second machine age era of technologies such as Robotic Process Automation, Business Process Management, Artificial Intelligence, Optical Character Recognition, and the Internet of Things.</p>
                                <p>Feat Systems, a Solely focused company on business process automation space and offers world-class end-to-end hyper-intelligent automation solutions and services to give the business a significant boost and help forge ahead in a highly competitive world.</p>
                                <p>Our experts use the second machine age era of technologies to create agile, resilient, feature-rich, and interactive hyper-intelligent automation solutions, helping businesses boost efficiencies and increase productivity along with enhancing an image.</p>
                                <p>Feat Systems Establish in 2011 and becoming a rapidly growing company in the business process automation space. The Company has been promoted by some highly experienced professionals dedicated to providing end-to-end automation solutions under one roof. It possesses not only the latest technology gadgets but also the most knowledgeable and experienced hands to offer the most user-friendly customized automation solutions.</p>
                                <p>Feat Systems creativity, flexibility, prompt response, and State of the Art helps to stand out easily from the rest of computer software and IT services companies.</p>
                                <p>We are on a mission to transform and simplify human being's life at work by creating agile and resilient hyper-intelligent automation solutions.</p>
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

export default AboutFeat;