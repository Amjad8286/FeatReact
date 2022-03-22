import { React, useState } from "react";

import GetStarted from './home-component/get-started';
import closeImg from '../public/images/close-img.svg';

// import CulturalAdoption from './consulting-modal/cultural-adoption';
// import Itengagement from './consulting-modal/it-engagement';
// import Infrastructuretailoring from './consulting-modal/infrastructure-tailoring';
// import SoftwareSelection from './consulting-modal/software-selection';
// import InhouseCapabilitybuilding from './consulting-modal/in-house-capability-building';

import Head from 'next/head'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image'

import consultingImg1 from '../public/images/inner-page/consulting/cl-img-1.jpg'
import consultingImg2 from '../public/images/inner-page/consulting/cl-img-2.jpg'
import consultingImg3 from '../public/images/inner-page/consulting/cl-img-3.jpg'
import consultingImg4 from '../public/images/inner-page/consulting/cl-img-4.jpg'
import consultingImg5 from '../public/images/inner-page/consulting/cl-img-5.jpg'


const ConsultingServices = () => {

    const [isConsult1, setConsult1] = useState(false);
    const ConsultModal1 = () => {
        setConsult1(!isConsult1);
    }

    const [isConsult2, setConsult2] = useState(false);
    const ConsultModal2 = () => {
        setConsult2(!isConsult2);
    }

    const [isConsult3, setConsult3] = useState(false);
    const ConsultModal3 = () => {
        setConsult3(!isConsult3);
    }

    const [isConsult4, setConsult4] = useState(false);
    const ConsultModal4 = () => {
        setConsult4(!isConsult4);
    }

    const [isConsult5, setConsult5] = useState(false);
    const ConsultModal5 = () => {
        setConsult5(!isConsult5);
    }

    return (
        <>
            <Head>
                <html lang="en" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Robotic Process Automation (RPA) Consulting | Featsystems</title>
                <meta name="description" content="Our various RPA consulting services with the help of experts advises you on best practices and approaches to adopt a Digital Process Automation culture in your organization." />

                <meta name="keywords" />
                <meta property="og:title" content="Robotic Process Automation (RPA) Consulting | Featsystems" />
                <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/rpa-consulting-og.jpg" />
                <meta property="og:description" content="Our various RPA consulting services with the help of experts advises you on best practices and approaches to adopt a Digital Process Automation culture in your organization." />
                <meta property="og:url" content="https://www.featsystems.com/consulting-services" />

                <link rel="canonical" href="https://www.featsystems.com/consulting-services" />

            </Head>
            <Header />
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1 mt-0">Robotic Process Automation (RPA) Consulting</h2>
                                <p>
                                    We are well-known for all aspects of consulting and sourcing company with a laser effort on Robotic Process Automation (RPA). We help to create a new vision for your business to take a giant step forward in the digital space by looking forward to discovering the best RPA solutions that can address your current challenges and remodel your organization.
                                </p>

                            </div>

                            <div className="gt-button mt-40">
                                <Link href="/contact"><a className="btn btn-dark">Get Started</a></Link>
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
                                <li><Link href="/home"><a>Home</a></Link></li>
                                <li>Consulting Service</li>
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
                                <h2 className="h1">Feat Systems RPA consulting services</h2>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={ConsultModal1} className="card-box-full line-h-0">
                                <Image src={consultingImg1} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={ConsultModal2} className="card-box-full line-h-0">
                                <Image src={consultingImg2} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={ConsultModal3} className="card-box-full line-h-0">
                                <Image src={consultingImg3} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={ConsultModal4} className="card-box-full line-h-0">
                                <Image src={consultingImg4} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div onClick={ConsultModal5} className="card-box-full line-h-0">
                                <Image src={consultingImg5} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <Switch>
                    <Route path="/cultural-adoption">
                        <CulturalAdoption />
                    </Route>
                    <Route path="/it-engagement">
                        <Itengagement />
                    </Route>
                    <Route path="/infrastructure-tailoring">
                        <Infrastructuretailoring />
                    </Route>
                    <Route path="/software-selection">
                        <SoftwareSelection />
                    </Route>
                    <Route path="/in-house-capability-building">
                        <InhouseCapabilitybuilding />
                    </Route>

                </Switch> */}






            <GetStarted />

            <section className={`data-modal ${isConsult1 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">Cultural Adoption</h2>
                            <p className="para">We assist the organizations to adopt the RPA Culture that encourages the human workforce to accept, adopt, and work with the digital workforce which will transfer routine processes from personnel to robots resulting in tangible outcomes that can save time, money, reduce human error and increase employee engagement.</p>
                            <div className="close-md" onClick={ConsultModal1}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isConsult2 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">IT engagement</h2>
                            <p className="para">We help the organizations to Engage their Traditional IT team and business users with the next generation RPA team to carry out the successful implementation of RPA across the Enterprise.</p>
                            <div className="close-md" onClick={ConsultModal2}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isConsult3 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">Infrastructure tailoring</h2>
                            <p className="para">Any RPA solution must be individually personalized to the infrastructure of the organization that can make a significant contribution to the digitization plan of the firm. That's why our professional experts have developed concept requirements in the infrastructure model, based on which a scalable RPA solution can be successfully developed, implemented, and operated.</p>
                            <div className="close-md" onClick={ConsultModal3}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isConsult4 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">Software selection</h2>
                            <p className="para">There is a wide range of RPA tools or systems are available in the market. Therefore, it is difficult to decide on choosing the right automation software. As a solution provider, we verify the requirements of your special processes place on the RPA solution and checks the features or functions that automation systems have to offer accordingly we choose the best RPA software for your purpose.</p>
                            <div className="close-md" onClick={ConsultModal4}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`data-modal ${isConsult5 ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                            <h2 className="h1">In House Capability Building</h2>
                            <p className="para">We assist the organizations in creating an in-house Robotic Operating Team that consists of a set of certain positions and duties to implement and manage automation as rapidly and effectively as possible across the company.</p>
                            <div className="close-md" onClick={ConsultModal5}><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
};

export default ConsultingServices;