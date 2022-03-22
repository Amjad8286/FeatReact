import React from "react";
import '../css/Pigeon.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import microsoftLogo from '../images/inner-page/technology/microsoft-power-automate.png'
import GetStarted from './home-component/get-started'


import { Helmet } from "react-helmet";

const MicrosoftFlow = () => {
    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>About Microsoft Power Automate platform | Featsystems</title>
                    <meta name="description" content="Power Automate is from Microsoft that has the capabilities of AI, DPA, and RPA that ensure processes are better streamlined, productivity improved and time saved." />

                    <meta name="keywords" />
                    <meta property="og:title" content="About Microsoft Power Automate platform | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/microsoft-flow-og-img.jpg" />
                    <meta property="og:description" content="Power Automate is from Microsoft that has the capabilities of AI, DPA, and RPA that ensure processes are better streamlined, productivity improved and time saved." />
                    <meta property="og:url" content="https://www.featsystems.com/microsoft-flow" />


                    <link rel="canonical" href="https://www.featsystems.com/microsoft-flow" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <div className="mb-50">
                                    <img className="img-fluid" alt="Uipath Logo" src={microsoftLogo} />
                                    <p className="mt-40">
                                        Microsoft introduced its own RPA product in the name of Power Automate in 2019. To make the software comfortable to use, Microsoft released Power Automate as a low code/no-code platform with over 250+ automation base pre-built connectors that cater to all windows, web, and legacy applications. The time is taken to design and deploy the bots is considerably low with a very low license cost for each workflow.


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
                                <li>Microsoft Flow</li>
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
                                Apart from Automation, Power Automate has in-built AI capability with cognitive services and can be easily integrated with Power BI to create powerful visualizations, Power App to design canvas apps, and Power Virtual Agent to create chatbots as per your company’s requirement. It can be integrated with MS teams where customers and employees can converse with the bot through Teams Channel. With MS Office 365 license and Windows 10, Microsoft is planning to provide some of the free automation services to its customers.
                            </p>



                        </div>

                    </div>



                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default MicrosoftFlow;