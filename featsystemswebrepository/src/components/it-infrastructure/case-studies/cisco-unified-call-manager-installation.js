import React from "react";

import '../../../css/case-studies.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetStarted from '../../home-component/get-started';

import caseimg1 from '../../../images/case-img/it-infrastructure/img9.jpg'
import v_thumb from '../../../images/case-img/it-infrastructure/cucm_thumb.jpg'

import CucmRpa from '../../modals/cucm-rpa'

import { Helmet } from "react-helmet";
const CUCMAutomation = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Cisco Unified Call Manager (CUCM) installation Automation | Featsystems</title>
                    <meta name="description" content="The case study is one of the leading System integrators that automated its Cisco Unified Call Manager (CUCM) installation using an RPA solution that made the process complete faster and increases the overall efficiency of the company." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Cisco Unified Call Manager (CUCM) installation Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/CUCM_og.jpg" />
                    <meta property="og:description" content="The case study is one of the leading System integrators that automated its Cisco Unified Call Manager (CUCM) installation using an RPA solution that made the process complete faster and increases the overall efficiency of the company." />
                    <meta property="og:url" content="https://www.featsystems.com/cisco-unified-call-manager-installation" />

                    <link rel="canonical" href="https://www.featsystems.com/cisco-unified-call-manager-installation" />
                </Helmet>
            </div>
            <section className="client-section bg-vector case-std" style={{ backgroundImage: 'url("' + caseimg1 + '")' }}>
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Cisco Unified Call Manager (CUCM) installation</h2>
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
                                <li><Link to="/by-process">By Process</Link></li>
                                <li><Link to="/it-infrastructure">Tt Infrastructure</Link></li>
                                <li>Cisco Unified Call Manager (CUCM) installation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="typ-case">
                                <div className="inds"><strong>Industry -</strong> Leading System Integrator</div>
                                <div className="inds"><strong>Implementation Time -</strong> Within 4 WEEKS<strong>*</strong></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Some of the key challenges were:</h2>
                            <ul>
                                <li>The process involves substantial manual handling and high operating costs</li>
                                <li>The process requires constant supervision and co-ordination between many departments</li>
                                <li>Involvement of professional skilled resource for the completion of the process</li>
                                <li>There were very high chances of making an error</li>
                            </ul>
                        </div>
                        <section className="video-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="iris-video">

                                            <Router>
                                                <Link to="/cucm-rpa">
                                                    <img className="thumbStyle img-fluid" src={v_thumb} align="Cisco Router Configuration Video" />
                                                </Link>
                                                <Switch>
                                                    <Route path="/cucm-rpa">
                                                        <CucmRpa />
                                                    </Route>
                                                </Switch>
                                            </Router>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="col-md-12">
                            <h2 className="keych-ttl">Our Solution</h2>
                            <p className="sl-para">The solution was created to make individual work steps more efficient through the use of RPA bots which can significantly improve its process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>The bot reads the excel file with the list of machines to install CUCM</li>
                                    <li>Bot carries out validation and looks for required data, identifies unmatched data and other validations were performed</li>
                                    <li>The CUCM installation on the validated data is then started by Bot</li>
                                    <li>Also, the installation is monitored until it is successfully completed.</li>
                                </ul>
                            </div>

                            <h2 className="keych-ttl">Automation Benefits</h2>
                            <p className="sl-para">Our client obtained some prime benefits from a comprehensive RPA solution that sustainably optimized the process.</p>
                            <div className="cs-lis">
                                <ul>
                                    <li>100% automation effort taken by the bot</li>
                                    <li>No error (0%) in the process</li>
                                    <li>Reduction of manual efforts by 15%</li>
                                    <li>Faster processing time – 50% of reduction</li>
                                    <li>Employee’s resource was used to deal with complex and value-added operations</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <GetStarted />

        </>
    );
};

export default CUCMAutomation;