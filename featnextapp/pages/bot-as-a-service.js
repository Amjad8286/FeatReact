import { React, useState } from "react";


import Head from 'next/head'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image'


import GetStarted from './home-component/get-started';
import doneIcon from '../public/images/inner-page/done-icon.png';
import leftArrow from '../public/images/home/left-arrow.png';
import rightArrow from '../public/images/home/right-arrow.png';


import beneimg1 from '../public/images/inner-page/bene-1.jpg'
import beneimg2 from '../public/images/inner-page/bene-2.jpg'
import beneimg3 from '../public/images/inner-page/bene-3.jpg'
import beneimg4 from '../public/images/inner-page/bene-4.jpg'
import beneimg5 from '../public/images/inner-page/bene-5.jpg'
import beneimg6 from '../public/images/inner-page/bene-6.jpg'
import beneimg7 from '../public/images/inner-page/bene-7.jpg'

import engImg from '../public/images/inner-page/engage-img.jpg'
import offerimg1 from '../public/images/inner-page/offer-1.jpg'
import offerimg2 from '../public/images/inner-page/offer-2.jpg'
import offerimg3 from '../public/images/inner-page/offer-3.jpg'
import offerimg4 from '../public/images/inner-page/offer-4.jpg'
import offerimg5 from '../public/images/inner-page/offer-5.jpg'
import offerimg6 from '../public/images/inner-page/offer-6.jpg'


import img10 from '../public/images/inner-page/img-10.jpg';
import img11 from '../public/images/inner-page/img-11.jpg';



import closeImg from '../public/images/close-img.svg';
import PricingForm from '../pages/pricing-modal/pricing-form';

const Botasaservice = () => {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };


    const bookBot = () => {
        setActive(!isActive);
    };

    const [isSubsActive, setSubsActive] = useState(false);
    const subscriptionCal = () => {
        setSubsActive(!isSubsActive);
    };

    const [isProActive, setProActive] = useState(false);
    const processToggle = () => {
        setProActive(!isProActive);
    };



    function Accordian(props) {

        const content = props.posts.map((post) =>
            <div className="col-lg-12" key={post.id} >
                <div className={isActive ? "active" : "inactive"} onClick={handleToggle}>
                    <div className="card-box-full">
                        <h3 className="h3">{post.title}</h3>
                        <p className="para">{post.content}</p>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="row">
                {content}
            </div>
        );
    }

    const posts = [
        { id: 1, title: 'How much will it cost?', content: 'Automation Setu is a truly subscription-based automation cloud platform, where it would only cost based on Bot usage.' },
        { id: 2, title: 'What is the subscription-based automation model?', content: 'Automation Setu would charge fixed subscription fees (hourly/daily/weekly/monthly/yearly) per business process automation.' },
        { id: 3, title: 'Does subscription fees are fixed for every process?', content: 'No, subscription fees vary based on complexity, transaction volume, SLA/TAT, and schedule of any given business process.' }
    ];


    return (
        <>
            <Head>
                <html lang="en" />
                <title>Automation Setu (Bot as a Service) | Featsystems</title>
                <meta name="description" content="Automation Setu (Bot as a Service) cloud-based platform helps businesses to choose on-demand, scalable, and ready to use software robots for their business process automation" />

                <meta name="keywords" />
                <meta property="og:title" content="Automation Setu (Bot as a Service) | Featsystems" />
                <meta property="og:image" content="https://www.featsystems.com/Content/images/og_img/AutomationSetu.jpg" />
                <meta property="og:description" content="Automation Setu (Bot as a Service) cloud-based platform helps businesses to choose on-demand, scalable, and ready to use software robots for their business process automation" />
                <meta property="og:url" content="https://www.featsystems.com/bot-as-a-service" />


                <link rel="canonical" href="https://www.featsystems.com/bot-as-a-service" />

            </Head>
            <Header />
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12 gt-button">
                            <div className="cl-text mb-50">
                                <h2 className="h1 mt-0">Automation Setu</h2>
                                <p>
                                    Robots are great at routine, mundane tasks, and humans are great at critical thinking and assessing context. It would be a robust coupling if solutions are developed around this end.
                                </p>
                                <p>
                                    Through Automation Setu (Bot as a service), we provide any size of businesses to experience RPA Automation components without having to pay a high license cost.
                                </p>

                                <p>
                                    Feat Systems develop & deploy cloud-based software robots to automate your business processes. Our software robots are highly integrated, secure, and scalable that would digitally transform your business by providing real-time interactions and valuable insights.
                                </p>
                            </div>



                            <button onClick={bookBot} className="btn btn-primary">Book your bot</button>
                            <button onClick={subscriptionCal} className="btn btn-dark">Subscription Calculator</button>
                            <button onClick={processToggle} className="btn btn-dark">Process Definition</button>


                        </div>

                    </div>
                </div>
            </section>
            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1 mb-50">Book your BOT</h2>
                            <PricingForm />
                            <div onClick={bookBot} className="close-md"><Image src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`data-modal ${isSubsActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">
                        <h2 className="h1 mb-50">Subscription Calculator</h2>
                        <div onClick={subscriptionCal} className="close-md"><Image src={closeImg} /></div>

                        <h2 className="h2">Comming Soon..</h2>

                    </div>
                </div>
            </section>

            <section className={`data-modal ${isProActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">
                        <h2 className="h1 mb-50">Process Definition</h2>
                        <div onClick={processToggle} className="close-md"><Image src={closeImg} /></div>
                        <div className="callnow-view">
                            <Link href="/automation-setu-process-definition">
                                <a className="btn btn-primary">Upload Document</a>
                            </Link>

                            <Link href="/automation-setu-process-definition">
                                <a className="btn btn-dark">Fill and Upload Document</a>
                            </Link>
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
                                <li>Automation Setu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offer-section" style={{ padding: '70px 0 40px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">What do we offer through Automation Setu?</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={offerimg1} />
                                <div className="para">
                                    <h2 className="h2">Process Discovery</h2>
                                    <p>We identify processes for automation and provide an integrated workflow for your business to manage the end-to-end process orchestration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={offerimg2} />
                                <div className="para">
                                    <h2 className="h2">Build & Deploy</h2>
                                    <p>We design, build, train, test, schedule, and deploy bots as per your specifications or process definitions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={offerimg3} />
                                <div className="para">
                                    <h2 className="h2">Hyper-care</h2>
                                    <p>We do complete maintenance & hyper-care related activities for the deployed bots.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={offerimg4} />
                                <div className="para">
                                    <h2 className="h2">Scale</h2>
                                    <p>We can scale to whatever size you need to expand the future automation you want in your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={offerimg5} />
                                <div className="para">
                                    <h2 className="h2">Collaboration</h2>
                                    <p>Our bots will do real-time interaction with the nominated business unit/user on decision making, process interruptions, process completion, etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={offerimg6} />
                                <div className="para">
                                    <h2 className="h2">Insights</h2>
                                    <p>Our bots will provide operational transparency & process insights by actively engaging process teams, sharing progress, and asking for help.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <section className="how-secure-section" style={{ paddingBottom: '70px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">How secure are we?</h2>
                                <p className="para">Integration of Automation Setu requires companies to share their inside data, so that, the service can be delivered effortlessly. Hence, we make sure your data is safe and secure with us.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box ">
                                <Image src={doneIcon} alt="Done" />
                                <h2 className="h1">Security Training</h2>
                                <p className="para">
                                    Our team members undergo intensive training on data security protocols. We make sure that only limited and qualified team members have access to bots. All the bots data exchanged with the support staff would be maintained under high confidentiality and would not get disclosed under any circumstances.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box">
                                <Image src={doneIcon} alt="Done" />
                                <h2 className="h1">Data Privacy</h2>
                                <p className="para">
                                    We can assure you that we don’t indulge in reselling or re-using your data. Until and unless we need data for operational reporting or troubleshooting, we permanently delete all the data from our systems.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box">
                                <Image src={doneIcon} alt="Done" />
                                <h2 className="h1">Infrastructure</h2>
                                <p className="para">
                                    All our public or private cloud servers are regularly updated, such that we work on the latest software and security patches. Our databases have backup mechanisms. We use encryption before utilizing your data, thereby adding protective layers to your company information.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card-box">
                                <Image src={doneIcon} alt="Done" />
                                <h2 className="h1">Security Audits</h2>
                                <p className="para">
                                    We make sure our company is tested for any security issues regularly by inviting security researchers to conduct Audits.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="key-feature started-section" style={{ padding: '70px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">Benefits of using Automation Setu</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sc-card">
                                {/* <div className="card-cantroller">
                            <div className="arrow left">
                            <Image src={leftArrow} />
                            </div>
                            <div className="arrow right">
                            <Image src={rightArrow} />
                            </div>
                        </div> */}
                                <div className="cr-box full-box-view">
                                    {/* <InfiniteCarousel
                                        breakpoints={[


                                            {
                                                breakpoint: 500,
                                                settings: {
                                                    slidesToShow: 1,
                                                    slidesToScroll: 1,
                                                },
                                            },
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
                                    > */}
                                    <div className="card-box ">
                                        <Image src={beneimg1} alt="Done" />
                                        <div className="para">
                                            <h2 className="h2">No Setup Cost</h2>
                                            <p>Includes Hardware and Software licenses</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <Image src={beneimg2} alt="Done" />
                                        <div className="para">
                                            <h2 className="h2">No License Cost</h2>
                                            <p>Includes Bot licenses, Orchestration licenses, Bot Development licenses, OCR licenses, BPM licenses, Machine Learning licenses/subscriptions</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <Image src={beneimg3} alt="Done" />
                                        <div className="para">
                                            <h2 className="h2">No Implementation Cost</h2>
                                            <p>Provides design, development, deployment and support cost</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <Image src={beneimg4} alt="Done" />
                                        <div className="para">
                                            <h2 className="h2">Quickly Operational</h2>
                                            <p>Our bots will be up and running to start your business operations within 2-4 weeks.</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <Image src={beneimg5} alt="Done" />

                                        <div className="para">
                                            <h2 className="h2">Quick ROI</h2>
                                            <p>Our bots ensure higher ROI from day 1, whether you want to automate a single process or 50 processes simultaneously/parallelly.</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <Image src={beneimg6} alt="Done" />
                                        <div className="para">
                                            <h2 className="h2">Pay only when operational</h2>
                                            <p>Payment happens only when the bot is operational.</p>
                                        </div>
                                    </div>
                                    <div className="card-box">
                                        <Image src={beneimg7} alt="Done" />
                                        <div className="para">
                                            <h2 className="h2">Pay as you grow</h2>
                                            <p>A real subscription model on automation based on the size of bots</p>
                                        </div>
                                    </div>
                                    {/* </InfiniteCarousel> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="offer-section" style={{ padding: '70px 0 40px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">How it works?</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={engImg} />
                                <div className="para">
                                    <h2 className="h2">Engage</h2>
                                    <p>Connect with us and share the details of your business processes along with its infrastructure, applications, environments, and network connectivity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={img11} />
                                <div className="para">
                                    <h2 className="h2">Publish</h2>
                                    <p>Design the workflow and publish your bots on our platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-box-full">
                                <Image src={img10} />
                                <div className="para">
                                    <h2 className="h2">Grow</h2>
                                    <p>Scale your automation to any sizes.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="faq-section" style={{ marginBottom: '70px' }}>
                <div className="container">
                    <Accordian posts={posts} />
                </div>
            </section>

            <GetStarted />
            <Footer />

        </>
    );
};

export default Botasaservice;