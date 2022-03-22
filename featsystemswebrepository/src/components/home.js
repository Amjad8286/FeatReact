import React from "react";
import '../css/home.css';
import BannerSection from './home-component/banner-section';
import ClientSection from './home-component/client-section';
import WhatDone from './home-component/what-we-done';
import Wefocus from './home-component/we-focus';
import TransformSection from './home-component/transform-section';
import WhatweHave from './home-component/what-have';
import BlogSection from './home-component/blog-section';
import NewsLetter from './home-component/news-letter';

import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <div className="application">
                <Helmet>
                    <html lang="en" />
                    <title>Hyper Intelligent- Automation Services &amp; Solution provider | Featsystems</title>
                    <meta name="description" content="We provide Hyper-intelligent services &amp; solutions for business processes using different automation components to improve the performance of an enterprise." />
                    <meta property="og:title" content="Hyper Intelligent- Automation Services &amp; Solution provider | Featsystems" />
                    <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/Hyper-Intelligent-Automation.jpg" />
                    <meta property="og:description" content="We provide Hyper-intelligent services &amp; solutions for business processes using different automation components to improve the performance of an enterprise." />
                    <meta property="og:url" content="https://www.featsystems.com" />


                    <link rel="canonical" href="https://www.featsystems.com" />
                </Helmet>
            </div>
            <BannerSection />
            <ClientSection />
            <WhatDone />
            <Wefocus />
            <TransformSection />
            <WhatweHave />
            <BlogSection />
            <NewsLetter />


        </>
    );
};

export default Home;