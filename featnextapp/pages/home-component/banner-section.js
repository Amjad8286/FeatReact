import React from "react";
import Image from 'next/image'
import irisImg from '../../public/images/home/iris-img.png';
import Link from 'next/link'

const BannerSection = () => {
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="row align-center lg-center column-reverse">
                        <div className="col-lg-6">
                            <div className="br-text">
                                <h1 className="h1">When it’s all about your business transformation</h1>
                                <h2 className="h1 brand-color">Introducing IRIS</h2>
                                <h3 className="h2">A first of its kind nearly real-time intelligent customer query response system</h3>
                                <p className="para">"Automate, Govern and Monitor With IRIS"</p>

                                <Link href="/pigeoniCQRS" >
                                    <a className="btn btn-dark">Know more</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-mb-30">
                            <div className="br-img">
                                <Image className="img-fluid" src={irisImg} alt="FeatSystems IRIS" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default BannerSection;