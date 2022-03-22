import { React, useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.svg';
import rightArrow from '../public/images/right-arrow.svg';
import externalmg from '../public/images/external-link.svg'
import Head from 'next/head'





const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" type="image/png" href="https://www.featsystems.com/Content/images/FeatFavicon.PNG" sizes="32x32" />
            </Head>
            <header>
                <div className="container">
                    <div className="flex align-center">
                        <div className="flex-3">
                            <div className="brand">
                                <Link href="/">
                                    <a>
                                        <Image width={240} height={50} src={logo} alt="Featsystems Private LTD." />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-10 ml-auto">
                            <div className={`toggleMenu ${isActive ? "active" : ""}`} onClick={toggleClass}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={`nav-bar ${isActive ? "active" : ""}`}>
                                <ul className="nav">
                                    <li>
                                        <div className="dropMenuItem">
                                            <Link href="/">
                                                <a onClick={(event) => event.preventDefault()} className="caret">
                                                    Our Solutions

                                                </a>
                                            </Link>

                                            <ul className="drop-down drop-list">
                                                <li>
                                                    <Link href="/fibo-chatbot">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>FIBO</label>
                                                                <span>Automate sales</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pigeoniCQRS">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>IRIS</label>
                                                                <span>Automate customer service</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/bot-as-a-service">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Automation Setu</label>
                                                                <span>Bot as a service</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.featsystems.com/automation-process-discovery" >
                                                        <a target="_blank" rel="noopener" onClick={toggleClass}>
                                                            <div>
                                                                <label>Process Assessment Tool</label>
                                                                <span>Key to your successful automation journey</span>
                                                            </div>
                                                            <div className="ml-auto">
                                                                <Image src={externalmg} width={13} height={13} />
                                                            </div>

                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/automation-solutions">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>By Industry</label>
                                                                <span>Automation by Industry</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/by-process">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>By Department</label>
                                                                <span>Automation by Department</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropMenuItem">
                                            <Link href="/">
                                                <a onClick={(event) => event.preventDefault()} className="caret">
                                                    Our Services
                                                </a>
                                            </Link>
                                            <ul className="drop-down drop-list">
                                                <li>
                                                    <Link href="/managing-bot-eco-system-services">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Managed Bot Ecosystem</label>
                                                                <span>Digital workforce</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="drop-list-level-2">
                                                    <Link href="/">
                                                        <a onClick={(event) => event.preventDefault()}>
                                                            <div>
                                                                <label>Professional Services</label>
                                                                <span>Know more..</span>
                                                            </div>
                                                            <div className="ml-auto" >
                                                                <Image src={rightArrow} />
                                                            </div>
                                                        </a>
                                                    </Link>
                                                    <ul className="drop-down leve-2">
                                                        <li className="drop-list-level-3">
                                                            <Link href="/">
                                                                <a onClick={(event) => event.preventDefault()}>
                                                                    <div>
                                                                        <label>Technology</label>
                                                                        <span>Know more..</span>
                                                                    </div>

                                                                    <div className="ml-auto">
                                                                        <Image src={rightArrow} />
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                            <ul className="drop-down leve-3">
                                                                <li>
                                                                    <Link href="/what-is-rpa">
                                                                        <a onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Robotic Process Automation (RPA)</label>
                                                                                <span>Accelerate productivity</span>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/what-is-ai">
                                                                        <a onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Artificial Intelligence (AI)</label>
                                                                                <span>AI can discover responses on its own and fix issues</span>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/what-is-ocr">
                                                                        <a onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Optical Character Recognition (OCR)</label>
                                                                                <span>Converting physical data to digital</span>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/what-is-bpm">
                                                                        <a onClick={toggleClass}>
                                                                            <div>
                                                                                <label>Business Process Management (BPM)</label>
                                                                                <span>Optimization business operations</span>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/what-is-iot">
                                                                        <a onClick={toggleClass}>
                                                                            <div>
                                                                                <label>IOT</label>
                                                                                <span>Solve a spectrum of challenging business problems</span>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link href="/center-of-excellence">
                                                                <a onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Center Of Excellence</label>
                                                                        <span>The role of a center of excellence in Intelligent Automation</span>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/consulting-services">
                                                                <a onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Consulting</label>
                                                                        <span>We help to create a new vision for your business</span>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/training-services">
                                                                <a onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Training</label>
                                                                        <span>Read our training modules</span>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/licensing-services">
                                                                <a onClick={toggleClass}>
                                                                    <div>
                                                                        <label>Licensing</label>
                                                                        <span>Optimized licenses to scale their RPA operations</span>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropMenuItem">
                                            <Link href="/">
                                                <a onClick={(event) => event.preventDefault()} className="caret">
                                                    Pricing
                                                </a>
                                            </Link>
                                            <ul className="drop-down drop-list">
                                                <li>
                                                    <Link href="/pigeon-pricings">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>PIGEON</label>
                                                                <span>Explore Pigeon pricing and features</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/iris-pricings">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>IRIS</label>
                                                                <span>Explore IRIS pricing and features</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropMenuItem">
                                            <Link href="/">
                                                <a onClick={(event) => event.preventDefault()} className="caret">
                                                    Partners
                                                </a>
                                            </Link>
                                            <ul className="drop-down drop-list">
                                                <li>
                                                    <Link href="/technology-partner">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Technology Partner</label>
                                                                <span>Trusted technology partners that support you everywhere</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropMenuItem">
                                            <Link href="/">
                                                <a onClick={(event) => event.preventDefault()} className="caret">
                                                    Company
                                                </a>
                                            </Link>
                                            <ul className="drop-down drop-list">
                                                <li>
                                                    <Link href="/about">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>About Us</label>
                                                                <span>Providing end-to-end automation solutions</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/vision-mission">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Vision Mission</label>
                                                                <span>Create a better society on the earth</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/quality-policy">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Quality Policy</label>
                                                                <span>Quality is at our core for each solution and service we deliver</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://careers.featsystems.com/" >
                                                        <a target="_blank" rel="noreferrer" onClick={toggleClass}>
                                                            <div>
                                                                <label>Carriers</label>
                                                                <span>Take your career next level</span>
                                                            </div>
                                                            <div className="ml-auto">
                                                                <Image src={externalmg} width={13} height={13} />
                                                            </div>
                                                        </a>
                                                    </Link>

                                                </li>
                                                <li>
                                                    <Link href="https://www.amazingrpa.com/index.html">
                                                        <a target="_blank" rel="noreferrer" onClick={toggleClass}>
                                                            <div>
                                                                <label>Group Company</label>
                                                                <span>Second Machine Age Consultancy Services Pvt Ltd.</span>
                                                            </div>
                                                            <div className="ml-auto">
                                                                <Image src={externalmg} width={13} height={13} />
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/Contact">
                                            <a onClick={toggleClass}>
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="dropMenuItem">
                                            <Link href="/">
                                                <a onClick={(event) => event.preventDefault()} className="caret">
                                                    Resources
                                                </a>
                                            </Link>
                                            <ul className="drop-down drop-list">
                                                <li>
                                                    <Link href="/">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Blogs</label>
                                                                <span>Read our lates news</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/use-case-library">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Bot Library</label>
                                                                <span>Watch our Bot Library</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/customer-success-stories">
                                                        <a onClick={toggleClass}>
                                                            <div>
                                                                <label>Customer Success Stories</label>
                                                                <span>Read what our customers have to say about us!</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/pigeon">
                                    <a className="btn btn-primary ripple" onClick={toggleClass}>
                                        PIGEON
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <div className={`overlay ${isActive ? "active" : ""}`} onClick={toggleClass}></div>

        </>
    );
};

export default Header;

