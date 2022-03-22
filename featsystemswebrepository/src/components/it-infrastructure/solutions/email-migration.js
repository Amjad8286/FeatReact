import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';
import img1 from '../../../images/case-img/it-infrastructure/automation3.jpg'

import EmailMigrationVideo from '../../modals/email-migration-video'

import { Helmet } from "react-helmet";

const EmailMigrationAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Email Migration with RPA Automation | Featsystems</title>
                    <meta name="description" content="The Email Migration process can be automated through RPA bots that can complete it within a few minutes or seconds and ensure that the task is completed 100% accurately." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Email Migration with RPA Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/email_migration_og.jpg" />
                    <meta property="og:description" content="The Email Migration process can be automated through RPA bots that can complete it within a few minutes or seconds and ensure that the task is completed 100% accurately." />
                    <meta property="og:url" content="https://www.featsystems.com/email-migration" />

                    <link rel="canonical" href="https://www.featsystems.com/email-migration" />
                </Helmet>
            </div>
            <section className="client-section bg-vector bg-cover" style={{ backgroundImage: 'url("' + img1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0 white-text">Email Migration</h2>


                            </div>
                            <div className="gt-button mt-40">
                                <Link to="/contact" className="btn btn-primary">Get Started</Link>
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
                                <li><Link to="/by-process">By Department</Link></li>
                                <li><Link to="/it-infrastructure">IT and Infrastructure</Link></li>
                                <li>Email Migration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul className="mda-lst mda-list-items">
                                    <li>Any large IT company receives thousands of Emails daily. All of these Emails need to be segregated initially to identify which Unit will be in-charge to take action for the E-mail. Imagine a single person doing this task manually on an everyday basis. First of all, he won’t be able to complete the task on time requiring multiple people to replace him. Also, this can lead to human-errors as a person has to sort a large number of Emails in a day.</li>
                                    <li>Instead of struggling with man-force to take up this task, we can make use of Robots who go through all mail and segregate each mail based on the keywords described in an Input file. Robots can finish this task within a couple of minutes or even seconds and will guarantee a 100% accurate completion of the task.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="iris-video">

                                <Router>
                                    <Link to="/email-migration-video">
                                        <img className="thumbStyle img-fluid" src={img1} align="Printing Configuration" />
                                    </Link>
                                    <Switch>
                                        <Route path="/email-migration-video">
                                            <EmailMigrationVideo />
                                        </Route>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetStarted />

        </>
    );
};

export default EmailMigrationAutomation;