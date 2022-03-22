import React from "react";

import '../../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import GetStarted from '../../home-component/get-started';
import img1 from '../../../images/case-img/it-infrastructure/automation5.jpg'

import ShrinkFileinSQLServerVideo from '../../modals/network-file-sharing-video'

import { Helmet } from "react-helmet";

const ShrinkFileinSQLServer = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Shrink File in SQL Server Process Automation | Featsystems</title>
                    <meta name="description" content="RPA bot logs into the SQL server, open a new query, execute the Shrink File query, and optimize the database quickly." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Shrink File in SQL Server Process Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/shrink_file_sql_server_og.jpg" />
                    <meta property="og:description" content="RPA bot logs into the SQL server, open a new query, execute the Shrink File query, and optimize the database quickly." />
                    <meta property="og:url" content="https://www.featsystems.com/shrink-file-sql-server" />

                    <link rel="canonical" href="https://www.featsystems.com/shrink-file-sql-server" />
                </Helmet>
            </div>
            <section className="client-section bg-vector bg-cover" style={{ backgroundImage: 'url("' + img1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0 white-text">Shrink File in SQL Server</h2>


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
                                <li>Shrink File in SQL Server</li>
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
                                <ul>
                                    <li>Most of the company data is stored and maintained in databases like SQL Server. Time and again, we need to run the Database Shrink File Query to the current process to optimize the database.</li>
                                    <li>It is a highly repetitive task and can be easily handled by a robot rather than a human workforce. A bot has to login to the SQL server, open New query, and run the Shrink File query and the job is done.</li>
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
                                    <Link to="/shrink-file-sql-server-video">
                                        <img className="thumbStyle img-fluid" src={img1} align="Printing Configuration" />
                                    </Link>
                                    <Switch>
                                        <Route path="/shrink-file-sql-server-video">
                                            <ShrinkFileinSQLServerVideo />
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

export default ShrinkFileinSQLServer;