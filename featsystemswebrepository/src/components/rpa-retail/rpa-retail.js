import React from "react";

import '../../css/industry-css.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import InfiniteCarousel from 'react-leaf-carousel';

import caseimg1 from '../../images/case-img/retail/img1.png';
import caseimg2 from '../../images/case-img/retail/img2.jpg';



import GetStarted from '../../components/home-component/get-started';
import { Helmet } from "react-helmet";



const RpaForRetail = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>RPA automation solutions for Retail industry | Featsystems</title>
                    <meta name="description" content="Our RPA solutions (automation) for Retail industry manages to boost its sales by improving customer experience, reduce operational cost, and makes process reliably error-free." />

                    <meta name="keywords" />
                    <meta property="og:title" content="RPA automation solutions for Retail industry | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/retail_img.jpg" />
                    <meta property="og:description" content="Our RPA solutions (automation) for Retail industry manages to boost its sales by improving customer experience, reduce operational cost, and makes process reliably error-free." />
                    <meta property="og:url" content="https://www.featsystems.com/rpa-retail" />

                    <link rel="canonical" href="https://www.featsystems.com/rpa-retail" />
                </Helmet>
            </div>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 text-center">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">RPA for Retail</h2>

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
                                <li>Retail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2 mb-50 text-center">Challenges of Insurance Industry:</h2>
                            <div className="cl-text">
                                <ul>
                                    <li> Retail Industry is growing exponentially in the last decade. With E-commerce becoming very popular, customers are experiencing a different retail experience with a lot of variety to choose from. </li>
                                    <li> E-commerce has made many companies enter the retail business increasing the competition in the market. Hence, retaining customers to one retail store has kept all retail industries on their toes.</li>
                                    <li> Before, Retail industries followed a push strategy wherein they would stock the inventory and then push those products to the customers. But, in today’s world, retailers use a pull strategy where a customer places an order and then the supply chain is triggered to make the order reach the customer on time.</li>
                                    <li> Hence, retailers have to make use of a lot of customer analytics, work on ERP systems, workflow management, and be up-to-date on customer reviews and feedback. Without the help of automation, these tasks seem to be very tedious and impossible at times for the retailers to cope up with and stand against the competitors.</li>
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
                                        <Link to="invoice-eway-bill-reconciliation-automation" className="card-box ">
                                            <img src={caseimg1} alt="Invoice and E-waybill reconciliation Automation" />
                                            <p className="para">Invoice and E-waybill reconciliation Automation</p>
                                        </Link>
                                        <Link to="invoice-posting-process-automation" className="card-box" alt="Invoice Posting Process Automation">
                                            <img src={caseimg2} />
                                            <p className="para">Invoice Posting Process Automation</p>
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
                            <h2 className="h2 mb-50">How is RPA automation helping in the Retail industry?</h2>
                        </div>
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <ul>
                                    <li> The final concluding step of a complex supply chain process is Retail. Retail becomes successful with details and there is the additional cost incurred at every step of this complex process. RPA in Retail helps to automate the details of the retail and perform tasks much faster and accurately reducing overall time and cost of the process along with increasing the efficiency of the process.</li>
                                    <li> RPA in Retail can be implemented in various inventory, supply chain, returns, invoice to good receipt matching, and store planning management activities.  An integrated RPA solution can be used to perform various office tasks related to HR and Finance along with Retail increasing the overall efficiency of the process. </li>
                                    <li> Below are some of the RPA Retail solutions that can be easily implemented in your business process.</li>
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
                            <Link to="/master-data-management">Master Data Management</Link>
                            <Link to="/invoice-to-good-receipt-matching">Invoice To Good Receipt Matching</Link>
                            <Link to="/return-processing">Return Processing</Link>
                            <Link to="/workflow-management">Workflow Management</Link>
                            <Link to="/customer-support-management">Customer Support Management</Link>
                            <Link to="/erp-management">ERP Management</Link>
                            <Link to="/accounting-and-finance">Accounting &amp; Finance</Link>
                            <Link to="/demand-and-supply-planning">Demand &amp; Supply Planning</Link>
                            <Link to="/marketing-and-consumer-behavior-analysis">Marketing and Consumer Behavior Analysis</Link>
                            <Link to="/logistics-and-supply-chain-management">Logistics and Supply Chain Management</Link>
                        </div>

                    </div>
                </div>
            </section>




            <GetStarted />

        </>
    );
};

export default RpaForRetail;