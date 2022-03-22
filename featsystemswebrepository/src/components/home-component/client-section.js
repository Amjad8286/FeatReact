import React from "react";
import kotakMahindra from '../../images/home/kotak-mahindra.png';
import bankofindia from '../../images/home/bank-of-india.png';
import motilal from '../../images/home/motilal.png';
import axis from '../../images/home/axis.png';
import raheja from '../../images/home/raheja.png';
import edliwisse from '../../images/home/edliwisse.png';
import axissecurities from '../../images/home/axis-securities.png';
import bscs from '../../images/home/bscs.png';
import intermiles from '../../images/home/intermiles.png';
import viacom from '../../images/home/viacom.png';

const ClientSection = () =>{
    return(
        <>        
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cl-list">
                                <ul>
                                    <li><img src={kotakMahindra} /></li>
                                    <li><img src={bankofindia} /></li>
                                    <li><img src={motilal} /></li>
                                    <li><img src={axis} /></li>
                                    <li><img src={raheja} /></li>
                                </ul>
                                <ul>
                                    <li><img src={edliwisse} /></li>
                                    <li><img src={axissecurities} /></li>
                                    <li><img src={bscs} /></li>
                                    <li><img src={intermiles} /></li>
                                    <li><img src={viacom} /></li>
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