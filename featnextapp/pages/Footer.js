import { React } from "react";
import linkedin from '../public/images/linkdin.png';
import YouTube from '../public/images/youtube.png';
import Feattube from '../public/images/feat-tube-ico.png';
import twitter from '../public/images/twitter.png';
import facebook from '../public/images/facebook.png';
import Image from 'next/image'

const Footer = () => {
    return (

        <footer className="footer">
            <div>
                <div className="footer-inr container">
                    <div className="row">
                        <div className="col-md-3">
                            <ul>
                                <li>Automation</li>
                                <li className="devider"></li>
                                <li><a href="/what-is-rpa">What is Rpa?</a></li>
                                <li><a href="/center-of-excellence">Center of Excellence</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li>Solutions</li>
                                <li className="devider"></li>
                                <li><a href="/fibo-chatbot">FIBO</a></li>
                                <li><a href="/pigeon">PIGEON</a></li>
                                <li><a href="/bot-as-a-service">Automation Setu</a></li>
                                <li><a href="/use-case-library">Bot Library</a></li>
                                <li><a href="https://www.featsystems.com/automation-process-discovery">Process Assessment Tool</a></li>
                                <li><a href="/automation-solutions">By Industry</a></li>
                                <li><a href="/by-process">By Process</a></li>
                                <li><a href="/customer-success-stories">Customer Success Stories</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 md-mt-30">
                            <ul>
                                <li>Services</li>
                                <li className="devider"></li>
                                <li><a href="/managing-bot-eco-system-services">Managed Bot Ecosystem</a></li>
                                <li><a href="/consulting-services">Consulting</a></li>
                                {/* <li><a href="#">Technology</a></li> */}

                                <li><a href="/training-services">Training</a></li>
                                <li><a href="/licensing-services">Licensing</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 lg-mt-30">
                            <ul>
                                <li>Company</li>
                                <li className="devider"></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/vision-mission">Vision and Mission</a></li>
                                <li><a href="/quality-policy">Quality Policy</a></li>


                                <li><a href="/technology-partner">Technology Partner</a></li>
                                <li><a href="https://careers.featsystems.com/" target="_blank">Careers</a></li>
                                <li><a href="https://www.amazingrpa.com/index.html" target="_blank">Group Company</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 lg-mt-30">
                            <ul>
                                <li>Pricing</li>
                                <li className="devider"></li>
                                <li><a href="/pigeon">Pigeon</a></li>
                                <li><a href="/pigeoniCQRS">IRIS</a></li>
                            </ul>
                            <ul className="mt-30">
                                <li>Get in Touch</li>
                                <li className="devider"></li>
                                <li><a href="mailto:info@featsystems.com">info@featsystems.com</a></li>
                                <li>USA <a href="callto:+16268421792">+ 1 626 842 1792</a></li>
                                <li>India <a href="callto:+919321252212">+91 9321252212</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className="nopadding mt-30">
                    <div className="social-pry">
                        <div className="operations-txt">

                            <div className="social-icon">
                                <ul>
                                    <li><a href="https://www.linkedin.com/company/featsystems" title="LinkedIn" target="_blank"><Image alt="LinkedIn profile icon" src={linkedin} /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCWe9bAbK9k1KQYYStfdFctQ" title="Youtube" target="_blank"><Image alt="Featsystems YouTube profile icon" src={YouTube} /></a></li>
                                    <li><a href="https://tube.featsystems.com/" title="Feat Tube" target="_blank"><Image alt="Featsystems Feat tube video icon" src={Feattube} /></a></li>
                                    <li><a href="https://twitter.com/FeatSystems" title="Twitter" target="_blank"><Image alt="Featsystems twitter page" src={twitter} /></a></li>
                                    <li><a href="https://www.facebook.com/featsystems" title="Facebook" target="_blank"><Image alt="Facebook page of featsystems" src={facebook} /></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom-pt text-center mt-30">
                <div className="container">
                    <ul>
                        <li><a href="/terms-of-use">Terms of Use</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li>© 2011-<span id="year">2021</span> Feat Systems. All rights reserved.</li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;