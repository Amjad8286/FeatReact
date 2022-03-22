import { React, useState } from "react";
import Image from 'next/image'
import whiteArrow from '../../public/images/home/white-arrow.png';
import callNow from '../../public/images/home/call-now-icon.png';
// import useState from 'react';
// import CallNowModal from '../../public/components/modals/callnow';

import closeImg from '../../public/images/close-img.svg';
import Link from 'next/link';

const GetStarted = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <>

            <section className="get-started bg-vector">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="h1">Get started on your Automation journey</h2>
                            <p className="para">Talk to our expert and see how you can get started.</p>
                            <div className="gt-button">

                                <Link href="/contact">
                                    <a className="btn btn-primary">
                                        <span className="mr-20">Start now</span>
                                        <Image width={30} height={18} src={whiteArrow} />
                                    </a>
                                </Link>
                                <button onClick={toggleClass} className="btn btn-border">

                                    <Image width={18} height={18} src={callNow} />
                                    <span className="ml-20">Call now</span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body pd-30">
                            <h2 className="h1 mb-50">Call Now</h2>
                            <div className="callnow-view">
                                <Link href="tel:+16268421792">
                                    <a className="btn btn-primary callto">USA + 1 626 842 1792</a>
                                </Link>

                                <Link href="tel:+919321252212">
                                    <a className="btn btn-dark callto">India +91 9321252212</a>
                                </Link>
                            </div>
                            <div onClick={toggleClass} className="close-md"><Image width={26} height={26} src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default GetStarted;