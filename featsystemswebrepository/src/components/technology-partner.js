import React from "react";
import '../css/Pigeon.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import uipathLogo from '../images/inner-page/technology/uipath-logo.png'
import automationLogo from '../images/inner-page/technology/automation-anywhere-logo.png'
import microsoftLogo from '../images/inner-page/technology/microsoft-power-automate.png'
import GetStarted from './home-component/get-started'



import { Helmet } from "react-helmet";


const TechnologyPartner = () => {
    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Our Technology Partner | Featsystems</title>
                    <meta name="description" content="With appreciated, trustworthy technology partners, we can drive our RPA and AI automation journey to serve you locally and all around the globe." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Our Technology Partner | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/technology-partner-og.jpg" />
                    <meta property="og:description" content="With appreciated, trustworthy technology partners, we can drive our RPA and AI automation journey to serve you locally and all around the globe." />
                    <meta property="og:url" content="https://www.featsystems.com/technology-partner" />


                    <link rel="canonical" href="https://www.featsystems.com/technology-partner" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text m-0">
                                <h2 className="h1 mt-0">Our Technology Partners</h2>
                                <p>
                                    We accelerate our RPA and AI journey with appreciative, trusted technology partners that support you everywhere globally and even regionally.
                                </p>
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
                                <li>Technology Partner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tech-bg card-box">
                                <img className="img-fluid" alt="Uipath Logo" src={uipathLogo} />
                                <p className="bassTxt">
                                    UiPath, one of the top 3 Forbes Cloud List, is the market leader in the Automation and RPA Arena. The same is evident in the latest Forrester wave report where UiPath ranked high in Current offering, Strategy, and RPA Market Presence. It is considered the best vendor in the market with respect to execution and vision ratings.
                                </p>


                                <div className="text-right"><Link className="read-more" to="/uipath">Read more..</Link></div>


                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="tech-bg card-box">
                                <img className="img-fluid" alt="Automation Anywhere Logo" src={microsoftLogo} />
                                <p className="bassTxt">
                                    Microsoft introduced its own RPA product in the name of Power Automate in 2019. To make the software comfortable to use, Microsoft released Power Automate as a low code/no-code platform with over 250+ automation base pre-built connectors that cater to all windows, web, and legacy applications. The time is taken to design and deploy the bots is considerably low with a very low license cost for each workflow.
                                </p>


                                <div className="text-right"><Link className="read-more" to="/microsoft-flow">Read more..</Link></div>


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tech-bg card-box">
                                <img className="img-fluid" alt="Microsoft Power Automate Logo" src={automationLogo} />

                                <p className="bassTxt">

                                    Automation Anywhere is a leading RPA software provider with engagement with their customers for over a decade. They offer platform-independent RPA core solutions which can be deployed both on-premise and on the cloud. With the drag and drop functionality and around 500 pre-configured bots, this easy-to-use software is perfect for medium and large businesses.
                                </p>

                                <div className="text-right"><Link className="read-more" to="/automation-anywhere">Read more..</Link></div>

                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default TechnologyPartner;