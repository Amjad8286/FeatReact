import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { Helmet } from "react-helmet";
const ChangePasswordVideo = () => {

    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Change Password Process Automation | Featsystems</title>
                    <meta name="description" content="RPA bot automates the process with provided logging details, changes the password every 15 days, and updates it making work easier and less reliant on individuals." />

                    <meta name="keywords" />
                    <meta property="og:title" content="Change Password Process Automation | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/change_password_og.jpg" />
                    <meta property="og:description" content="RPA bot automates the process with provided logging details, changes the password every 15 days, and updates it making work easier and less reliant on individuals." />
                    <meta property="og:url" content="https://www.featsystems.com/change-password" />

                    <link rel="canonical" href="https://www.featsystems.com/change-password" />
                </Helmet>
            </div>
            <section className="modal-section video-modal">
                <div className="modal-box">
                    <div className="modal-body">
                        <div className="mt-20 overflow-hidden">
                            <iframe width="100%" height="397" src="https://tube.featsystems.com/videoEmbed/change-password?autoplay=1" title="Change Password Automationss" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <Link to="/change-password" className="close-md"><img src={closeImg} /></Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ChangePasswordVideo;