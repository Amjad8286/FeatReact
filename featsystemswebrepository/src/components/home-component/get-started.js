import React from "react";
import whiteArrow from '../../images/home/white-arrow.png';
import callNow from '../../images/home/call-now-icon.png';

import CallNowModal from '../../components/modals/callnow';
import { useState } from 'react';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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

                                <Link to="/contact" className="btn btn-primary">Start now<img className="ml-20" src={whiteArrow} /></Link>
                                <button onClick={toggleClass} className="btn btn-border"><img className="mr-20" src={callNow} />Call now</button>

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
                                <a className="callto" className="btn btn-primary" href="tel:+16268421792">USA + 1 626 842 1792</a>
                                <a className="callto" className="btn btn-dark" href="tel:+919321252212">India +91 9321252212</a>
                            </div>
                            <div onClick={toggleClass} className="close-md"><img src={closeImg} /></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default GetStarted;