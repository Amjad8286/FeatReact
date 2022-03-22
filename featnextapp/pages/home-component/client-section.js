import Image from 'next/image'
import React from "react";
import kotakMahindra from '../../public/images/home/kotak-mahindra.png';
import bankofindia from '../../public/images/home/bank-of-india.png';
import motilal from '../../public/images/home/motilal.png';
import axis from '../../public/images/home/axis.png';
import raheja from '../../public/images/home/raheja.png';
import edliwisse from '../../public/images/home/edliwisse.png';
import axissecurities from '../../public/images/home/axis-securities.png';
import bscs from '../../public/images/home/bscs.png';
import intermiles from '../../public/images/home/intermiles.png';
import viacom from '../../public/images/home/viacom.png';

const ClientSection = () => {
    return (
        <>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cl-list">
                                <ul>
                                    <li><Image src={kotakMahindra} /></li>
                                    <li><Image src={bankofindia} /></li>
                                    <li><Image src={motilal} /></li>
                                    <li><Image src={axis} /></li>
                                    <li><Image src={raheja} /></li>
                                </ul>
                                <ul>
                                    <li><Image src={edliwisse} /></li>
                                    <li><Image src={axissecurities} /></li>
                                    <li><Image src={bscs} /></li>
                                    <li><Image src={intermiles} /></li>
                                    <li><Image src={viacom} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h2 className="h1">Hyper-intelligent Services & Solution for effective process automation</h2>
                                <ul>
                                    <li>Feat Systems hyper-intelligent automation solutions allow businesses in speeding up the performance, provide real value to stay ahead in the competitive market, and boost ROI.ahead in the competitive market, and boost ROI.</li>
                                    <li>
                                        Our end-to-end automation services starting from process discovery to design to deployment to support hyper-care to scale automation through automation components such as <strong>RPA, AI, OCR, BPM, and IoT.</strong>
                                    </li>
                                    <li>
                                        We contribute by implementing the best automation solutions that will add significant business value to the business and eventually making it possible for that business to scale into a <strong>fully automated enterprise.</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ClientSection;