import React from "react";


import Head from 'next/head'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image'



import GetStarted from './home-component/get-started';



import indimg9 from '../public/images/inner-page/industries/ind-9.jpg'
import indimg10 from '../public/images/inner-page/industries/ind-10.jpg'


const Byprocess = () => {

    return (
        <>
            <Head>
                <html lang="en" />
                <title>Hyper-intelligent automation by processes | Featsystems</title>
                <meta name="description" content="With the hyper-intelligent automation solution, our future-oriented customers from horizontal businesses can optimize their processes and services gaining decisive competitive advantages." />

                <meta name="keywords" />
                <meta property="og:title" content="Hyper-intelligent automation by processes | Featsystems" />
                <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/Hyper-intelligent-automation-by-process-og.jpg" />
                <meta property="og:description" content="With the hyper-intelligent automation solution, our future-oriented customers from horizontal businesses can optimize their processes and services gaining decisive competitive advantages." />
                <meta property="og:url" content="https://www.featsystems.com/by-process" />


                <link rel="canonical" href="https://www.featsystems.com/by-process" />

            </Head>
            <Header />
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Hyper-intelligent Automation Solutions by Department</h2>
                                <p>
                                    We have ready to use Hyper Intelligent Automation solutions by a process for horizontal business verticals such as Human Resource, Finance & Accounting, IT & Infrastructure, Legal & Supply Chain that will help every enterprise to deploy the services faster and bring operational efficiency in their businesses.
                                </p>

                            </div>
                            <div className="gt-button mt-40">
                                <Link href="/what-is-rpa"><a className="btn btn-dark">Know more</a></Link>
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
                                <li>By Process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ind-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">By Department</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/rpa-human-resource">
                                <a className="card-box-full line-h-0">
                                    <Image src={indimg9} />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/it-infrastructure">
                                <a className="card-box-full line-h-0">
                                    <Image src={indimg10} />
                                </a>
                            </Link>
                        </div>


                    </div>
                </div>
            </section>




            <section className="ind-text-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center-div">
                                <p className="para">
                                    If you are thinking Automation applies to only certain industries especially those related to IT services, that notion has become obsolete a long time back. You don’t need to integrate Automation services for the entire organization but can restrict it to a particular horizontal process.
                                </p>
                                <p className="para">
                                    Most organizations will have an HR department, finance and accounting division, Supply chain horizontal, and IT and infrastructure component. We, at Feat, provide exclusive Hyper-Automation solutions, custom made, to automate these horizontals. If you are wondering how this will benefit your organization, think again! With one entire process being automated, the dependency of manpower for that particular process will reduce considerably and the cost of the organization will reduce as well. Not only this, but you can invest in your manpower who are specialized to handle your company’s product or service than spend money on the workforce who handle such supportive processes. Also, automation solutions are scalable and can be implemented as and when the company expands.
                                </p>
                                <p className="para">
                                    An integrated Hyper-Intelligent Automation solution approach allows the business to run as it is and also promises increased productivity and cost-saving benefits for the company.
                                </p>

                                <p className="para">
                                    <strong>Click on</strong> each of the processes to know how Hyper-Intelligent Automation Solutions can be implemented in each of the processes.
                                </p>

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

export default Byprocess;