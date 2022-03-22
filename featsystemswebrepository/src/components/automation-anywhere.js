import React from "react";
import '../css/Pigeon.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import automationLogo from '../images/inner-page/technology/automation-anywhere-logo.png'
import GetStarted from './home-component/get-started'

import { Helmet } from "react-helmet";


const AutomationAnywhere = () => {
    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Technology Partner About Automation Anywhere | Featsystems</title>
                    <meta name="description" content="Automation Everywhere is one of the leading technology automation tool-enabled tenets that galvanize and sustain the Autonomous Digital Enterprise." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Technology Partner About Automation Anywhere | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/automationanywhere-og-img.jpg" />
                    <meta property="og:description" content="Automation Everywhere is one of the leading technology automation tool-enabled tenets that galvanize and sustain the Autonomous Digital Enterprise." />
                    <meta property="og:url" content="https://www.featsystems.com/automation-anywhere" />


                    <link rel="canonical" href="https://www.featsystems.com/automation-anywhere" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <div className="mb-50">
                                    <img className="img-fluid" alt="Uipath Logo" src={automationLogo} />
                                    <p className="mt-40">
                                        Automation Anywhere is a leading RPA software provider with engagement with their customers for over a decade. They offer platform-independent RPA core solutions which can be deployed both on-premise and on the cloud. With the drag and drop functionality and around 500 pre-configured bots, this easy-to-use software is perfect for medium and large businesses.
                                    </p>
                                </div>
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
                                <li><Link to="/technology-partner">Technology Partner</Link></li>
                                <li>Automation Anywhere</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="para">
                                Having customer experience over varied domains like healthcare, pharmaceutical, and BFSI sectors, they are pioneers in offering scalable and extensive Support based solutions. It doesn’t just cater to implementation and Support but is very keen on providing the best security software architecture with central control.
                            </p>
                            <p className="para mb-50">
                                With their marketing and positioning in the RPA market, they have created an enormous amount of user base and expertise. Having evaluated with an A+, Automation Anywhere is a complete ecosystem that helps customers develop Cutting-edge Automation solutions that are cost-effective and increase the productivity of the business.
                            </p>

                            <h2 className="h1">Our achievements (our journey with AA)</h2>
                            <div className="mt-20">
                                <div className="tech-bg cl-text">
                                    <ul>
                                        <li>

                                            <h2 className="h2">Emerging partner of the year award 2020</h2>

                                            <p>
                                                We were awarded the Emerging Partner of the year award, 2020 by Automation Anywhere. AA recognized our consistent efforts to deliver automation solutions to many of our customers and help them adapt to the RPA culture. We have created multiple Hyper-intelligent Automation solutions for our customers branching out into different domains of BFSI, Healthcare, and Retail domains. From our solutions, customers were able to generate recurring revenue and reduce the overall cost of the business with an increase in productivity.
                                            </p>

                                        </li>

                                    </ul>
                                </div>

                            </div>


                        </div>

                    </div>



                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default AutomationAnywhere;