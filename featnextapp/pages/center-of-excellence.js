import { React, useState } from "react";


import GetStarted from './home-component/get-started';

import closeImg from '../public/images/close-img.svg';
import coecertificate from '../public/images/inner-page/coe-img/automation-anywhere-coe-certificate.jpg';

import Head from 'next/head'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image'


import coeBeneImg1 from '../public/images/inner-page/coe-img/cor-bene-1.jpg';
import coeBeneImg2 from '../public/images/inner-page/coe-img/cor-bene-2.jpg';
import coeBeneImg3 from '../public/images/inner-page/coe-img/cor-bene-3.jpg';
import coeBeneImg4 from '../public/images/inner-page/coe-img/cor-bene-4.jpg';
import coeBeneImg5 from '../public/images/inner-page/coe-img/cor-bene-5.jpg';


import coeimg1 from '../public/images/inner-page/coe-img/coe-1.jpg'
import coeimg2 from '../public/images/inner-page/coe-img/coe-2.jpg'
import coeimg3 from '../public/images/inner-page/coe-img/coe-3.jpg'
import coeimg4 from '../public/images/inner-page/coe-img/coe-4.jpg'


import img1 from '../public/images/inner-page/coe-img/coe-img-1.jpg';
import img2 from '../public/images/inner-page/coe-img/coe-img-2.jpg';
import img3 from '../public/images/inner-page/coe-img/coe-img-3.jpg';
import img4 from '../public/images/inner-page/coe-img/coe-img-4.jpg';
import img5 from '../public/images/inner-page/coe-img/coe-img-5.jpg';
import img6 from '../public/images/inner-page/coe-img/coe-img-6.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Router } from "next/router";
// import { useState } from "react";

const Centerofexcellence = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }


    const [isCoe1, setCoe1] = useState(false);

    const coeModal1 = () => {
        setCoe1(!isCoe1);
    }

    const [isCoe2, setCoe2] = useState(false);

    const coeModal2 = () => {
        setCoe2(!isCoe2);
    }

    const [isCoe3, setCoe3] = useState(false);

    const coeModal3 = () => {
        setCoe3(!isCoe3);
    }
    const [isCoe4, setCoe4] = useState(false);

    const coeModal4 = () => {
        setCoe4(!isCoe4);
    }

    return (
        <>
            <Head>
                <html lang="en" />
                <title>Automation Center of Excellence (CoE) | Featsystems</title>
                <meta name="description" content="Our Automation center of excellence (CoE) helps organization in gathering, analyzing the information that are required in implementing end to end RPA, AI, BPM &amp; OCR solutions effectively." />

                <meta name="keywords" />
                <meta property="og:title" content="Automation Center of Excellence (CoE) | Featsystems" />
                <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/coe-og-img.jpg" />
                <meta property="og:description" content="Our Automation center of excellence (CoE) helps organization in gathering, analyzing the information that are required in implementing end to end RPA, AI, BPM &amp; OCR solutions effectively." />
                <meta property="og:url" content="https://www.featsystems.com/center-of-excellence" />


                <link rel="canonical" href="https://www.featsystems.com/center-of-excellence" />


            </Head>
            <Header />
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">What is the Center of Excellence (CoE)?</h2>
                                <p>
                                    <strong>Center of Excellence (CoE)</strong> helps an organization to gather, analyze, and handle information and skills required to implement any Intelligent Automation solution (RPA, AI, OCR, BPM and IoT) efficiently. It not only helps in the implementation phase but also guides the company to tackle any issues that might occur during or after the Automation journey.
                                </p>

                            </div>


                            <div className="gt-button mt-40">
                                <Link href="/"><a className="btn btn-dark">Get Started</a></Link>
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
                                <li>Center of Excellence (CoE)</li>
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
                                <h2 className="h1">Automation CoE</h2>
                                <p className="para">
                                    The role of a center of excellence in Intelligent Automation
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={coeModal1} className="line-h-0 card-box-full"><Image src={coeimg1} /></div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={coeModal2} className="line-h-0 card-box-full"><Image src={coeimg2} /></div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={coeModal3} className="line-h-0 card-box-full"><Image src={coeimg3} /></div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={coeModal4} className="line-h-0 card-box-full"> <Image src={coeimg4} /></div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <Switch>
                    <Route path="/to-strategize">
                        <ToStrategize />
                    </Route>
                    <Route path="/to-manage">
                        <ToManage />
                    </Route>
                    <Route path="/to-operate">
                        <ToOperate />
                    </Route>
                    <Route path="/change-management">
                        <ChangeManagement />
                    </Route>

                </Switch> */}
            <section className="coebenefits">
                <Tabs>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3">

                                <TabList className="tablist">
                                    <Tab>Process Visibility</Tab>
                                    <Tab>Keeping up to date with the latest technologies</Tab>
                                    <Tab>Better collaboration</Tab>
                                    <Tab>Enhance customer satisfaction</Tab>
                                    <Tab>Minimize costs</Tab>
                                </TabList>



                            </div>

                            <div className={"col-lg-9"}>
                                <TabPanel>
                                    <div className="tab-items">
                                        <Image width={825} height={256} className="img100" src={coeBeneImg1} alt="Process Visibility" />
                                        <div className="tab-text">
                                            <h2 className="h1">Process Visibility</h2>
                                            <p className="para">
                                                Process Mapping is a key to run any workflow efficiently. Companies map every process and make it visible to ensure easy identification of the process which needs to be optimized and automated. Hence, companies consider process visibility i.e., identifying inefficiencies in the current business process and mapping them as the first step to move towards digital transformation.
                                            </p>
                                            <p className="para">
                                                But how can COE help in such a process? COE team works with proximity to senior management that helps them get a wider picture of how processes are currently working and the condition of such a process. Having this information in hand, the COE team can easily identify problems in the process and help in eliminating unnecessary and repetitive steps. Not only does this ensure process efficiency also helps employees free up their time to concentrate on more value-added jobs.
                                            </p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="tab-items">
                                        <Image width={825} height={256} className="img100" src={coeBeneImg2} alt="Keeping up to date with the latest technologies" />
                                        <div className="tab-text">
                                            <h2 className="h1">Keeping up to date with the latest technologies</h2>
                                            <p className="para">
                                                COE team ensures that your business is up-to-date with the latest technology. Why is this important? A recent study highlighted the importance of adapting to the rate of change when many businesses were asked to answer the most important needs that drive their automation. Not only this, but it is believed that technology has been evolved with innovation and workplace efficiency only when the employees had adapted to the changes at a faster pace.
                                            </p>
                                            <p className="para">
                                                Hence, COE can ensure your business environment to be fluid, flexible, and ready for integration with other business solutions by adapting to the latest technological trends. To illustrate the same, let us take the example of Process Mapping. It helps us identify inefficient and ineffective processes thereby minimizing problems that can pop up when new technology is introduced.
                                            </p>

                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="tab-items">
                                        <Image width={825} height={256} className="img100" src={coeBeneImg3} alt="Keeping up to date with the latest technologies" />
                                        <div className="tab-text">
                                            <h2 className="h1">Better collaboration</h2>
                                            <p className="para">With Globalisation, all industry segments are focusing thoroughly on expanding their ever-growing business. But such expansion usually causes some of the processes to become inadequate or obsolete. Also, the only cure to this problem is to modify or replace the existing process with a new adaptive process. One of the main ways to achieve this shift is to work on collaboration across the entire business such that every team is in sync with each other even after business expands rapidly. But, how does COE come in handy in this scenario? A process COE can facilitate such collaborations by linking business units. A recent study shows that 99.1% of employees prefer workplaces that allow people to identify and discuss issues transparently. Hence, visibility and communication seem to affect productivity and employee satisfaction. And to do this, COE centralizes all information so that data can be accessed from anywhere and create tailor-made solutions to all the client requirements.</p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="tab-items">
                                        <Image width={825} height={256} className="img100" src={coeBeneImg4} alt="Keeping up to date with the latest technologies" />
                                        <div className="tab-text">
                                            <h2 className="h1">Enhance customer satisfaction</h2>
                                            <p className="para">The success of a business depends on how satisfied are its customers. Hence, customers can also be called the backbone of any business. This brings a lot of load to a business to not only focus on providing good quality products but also provide great service to the customers. In today’s world, even though the product may be of superior quality, but customers choose only those brands which provide them positive and personalized experiences.</p>
                                            <p className="para">COE can be very useful to enhance the customer experience. Customers might take several steps to reach from point A to point B rather than just one step. Understanding customer journey is very crucial to improve customer satisfaction and their value in the business. COE can help develop process maps that exactly point out how customers continue their product journey in their business. This also helps the business engage and retain its customers.</p>

                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="tab-items">
                                        <Image width={825} height={256} className="img100" src={coeBeneImg5} alt="Keeping up to date with the latest technologies" />
                                        <div className="tab-text">
                                            <h2 className="h1">Minimize costs</h2>
                                            <p className="para">COE implementation is a one-time investment for any medium or large-scale organization. Imagine having to deal with hundreds and thousands of processes across the business every day. COE team can identify and analyze such processes allowing you to streamline and minimize the time it takes to achieve the objectives. With processes improving their speed and efficiency of their design through COE, it is bound to improve the overall quality of the service as well.</p>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </section>

            <section className="ind-text-section coe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1 mb-50">What Featsystems Center of Excellence (CoE) does?</h2>
                                <p className="para">
                                    Feat systems are an intelligent automation solutions provider with a dedicated Center of Excellence. Our COE is well experienced and certified that is capable of handling various automation projects. We can help to implement end-to-end Hyper-intelligent automation solutions in all organizations. We use a unique methodology that will define your automation roadmap, establish a structured approach, and select the appropriate process and a tool to match your exact requirements. Also, we are priority partners with the world’s leading RPA provider’s UiPath & Automation anywhere.
                                </p>
                                <p className="para">
                                    We start by examining the key areas which need automation that triggers our automation journey. We then move to investigate the feasibility of the process using our “Digitalize Process Assessment Tool”. Finally, we collaborate with your team to design the customized Intelligent Automation solutions (includes RPA, AI, OCR, and BPM solutions) and conclude our journey by helping you implement the whole process. After the solution gets implemented, there is a high possibility that the process or workflow can be changed or updated. In such scenarios, CoE provides Support to continue the automation in the updated workflow without causing much delay. We have a <Link href="/managing-bot-eco-system-services"><a>Managed Bot Ecosystem</a></Link> dedicated to such Support Activities.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img1} />

                                <p className="para">We are a boutique firm, solely focused on process automation, with more than 3 years of experience in the space and operationally having a presence in India & the United States of America.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img2} />

                                <p className="para">We have expert level core competencies in various automation components such as RPA, OCR, AI, BPM.

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img3} />
                                <p className="para">We have 100+ certified, a highly-skilled, and experienced teams capable of automating any complex process automation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img4} />
                                <p className="para">We have a proven in-house skill development program for continuous team building.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img5} />
                                <p className="para">We are a certified diamond partner with the top 2 RPA vendors.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div href="#" className="card-box-full">
                                <Image src={img6} />
                                <p className="para">We have rich experienced professionally ready project teams to work on the remote agile model for offshore projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="coe-certi-section">
                <div className="container">
                    <div className="col-lg-12 text-center mb-50">
                        <div className="center-div">
                            <h2 className="h1 mb-20">Endorsed by the Global Leaders of RPA</h2>

                            <div className="gt-button">
                                <button onClick={toggleClass} className="btn btn-border">View Certificate</button>
                            </div>
                            {/* <Switch>
                                    <Route path="/automation-anywhere-coe-certificate">
                                        <Aacertificate />
                                    </Route>
                                </Switch> */}

                        </div>

                        <iframe className="ytd-full-view mt-40" src='https://www.youtube.com/embed/uS2FlN2FKk0'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section" >
                    <div className="modal-box">
                        <div className="modal-body line-h-0 pd-0">
                            <Image width={500} height={708} src={coecertificate} className="md-full-img" />
                            <div className="close-md" onClick={toggleClass}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isCoe1 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">To Strategize</h2>
                            <p className="para">One of the researches shows that when a company lacks vision or strategy, they face difficulty to scale their automation programs. In today’s digitized world, it is evident that automation is a pillar of digital transformation across the company, but a company should have a strong vision before starting to implement it.</p>
                            <p className="para">Hence, the critical activities of Automation COE include the presentation of enterprise-wide vision and strategy for Intelligent Automation and Digital Transformation.</p>
                            <div className="close-md" onClick={coeModal1}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`data-modal ${isCoe2 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">To Manage</h2>
                            <p className="para">For an Intelligent Automation Center of Excellence to function effectively, it should be able to:</p>
                            <div className="cl-text">
                                <ul>
                                    <li>
                                        Provide effective governance for the overall effort in the company that includes defining strategy owner and aligning with the sponsorship and financial investment.
                                    </li>
                                    <li>
                                        Determine and track metrics to assess programs on the established automation strategy
                                    </li>
                                    <li>
                                        Present results to internal and external shareholders.
                                    </li>
                                </ul>
                            </div>
                            <div className="close-md" onClick={coeModal2}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isCoe3 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">To operate</h2>
                            <p className="para">Assembling a team and assigning roles and responsibilities marks a crucial part of any organization. Hence, the Center of Excellence provides efficient automation delivery that includes acquainting the team with the necessary skills and managing external and in-house talent.</p>
                            <div className="close-md" onClick={coeModal3}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isCoe4 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">Change Management</h2>
                            <p className="para">Another vital role of COE is change management that involves proactive management of organizations to maximize value from digital transformation.</p>
                            <p className="para">An integral part of successful automation is to identify different use cases within the company. Hence, CoE plays a crucial role in this process. Once the company reaches a mature point in digital transformation, it no longer faces the shortage of identifying new opportunities but instead shifts its focus in prioritizing ideas than generating them.</p>
                            <div className="close-md" onClick={coeModal4}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>



            <GetStarted />

            <Footer />



        </>
    );
};

export default Centerofexcellence;