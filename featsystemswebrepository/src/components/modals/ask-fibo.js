import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const AskFiboVideo = () => {

    return (
        <>
            <section className="modal-section video-modal">
                <div className="modal-box">
                    <div className="modal-body">
                        <div className="mt-20 overflow-hidden">
                            <iframe width="100%" height="397" src="https://www.youtube.com/embed/56a4jew2108?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <Link to="/fibo-chatbot" className="close-md"><img src={closeImg} /></Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AskFiboVideo;