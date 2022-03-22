import React from "react";
import Image from 'next/image'
import arrowIcon from '../../public/images/home/arrow-icon.png';

const TransformSection = () => {
    return (
        <>
            <section className="transform-section bg-vector">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                                <h2 className="h1">How we transform businesses</h2>
                                <p className="para">We use digital transformation and customer-centric approaches in our automation solutions to transform our customer's business processes.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="tr-text">
                                <h2 className="h1 brand-color">Digitization</h2>
                                <p className="para">Conversion of analog or physical information to digital format</p>
                                <Image src={arrowIcon} />
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="tr-text">
                                <h2 className="h1 brand-color">Digitalization</h2>
                                <p className="para">Use of digital technologies to enable or improve business models and processes</p>
                                <Image src={arrowIcon} />
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="tr-text">
                                <h2 className="h1 brand-color">Digital Transformation</h2>
                                <p className="para">Coordinated changes effort at scale, diffused through all aspects of the business</p>
                                <Image src={arrowIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TransformSection;