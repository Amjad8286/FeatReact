import React from "react";
import '../css/Pigeon.css';
import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";
import GetStarted from './home-component/get-started'
import pigeonImg from '../images/inner-page/pigeon.png';
import doneIcon from '../images/inner-page/done-icon.png';

import irisImg from '../images/home/iris-pr-img.png';
import ivipsImg from '../images/home/ivips-img.png';
import fiboImg from '../images/inner-page/fibo.png';

import InfiniteCarousel from 'react-leaf-carousel';

import PigeonProcessDefinitionsModal from '../components/pricing-modal/pigeon-process-definitions-modal'
import FreeTrialpigeon from '../components/pricing-modal/free-trial-pigeon'


import closeImg from '../images/close-img.svg';
import {useState} from 'react';
import PricingForm from '../components/pricing-modal/pricing-form';


const Pigeon = () =>{

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    const [isProActive, setProActive] = useState(false);
    const processToggle = () => {
        setProActive(!isProActive);
    };

    return(
        <>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-8 gt-button">
                        <div className="cl-text mb-50">
                        <h2 className="h1 mt-0">Pigeon</h2>
                        <ul>
                            <li>When you want to automate anything fast, you need a platform.</li>
                            <li>
                            When you want to integrate with anything, anywhere, fast and secure, you need a platform.
                            </li>
                            <li>
                            When you want to bring your business and IT together, to deliver results fast, at scale, you need a platform.
                            </li>
                            <li>
                            <strong>The platform of platforms has arrived.</strong>
                            </li>
                        </ul>
                        </div>
                        
                        <Link to="/pigeon-pricings" className="btn btn-primary">Pricing</Link>
                        <Router>
                        <button onClick={toggleClass} className="btn btn-dark">Fee Trial</button>                        
                        <button onClick={processToggle} className="btn btn-border">Process Definitions</button>    
                        <Switch>
                                
                                
                                <Route path="/pigeon-process-definitions-modal">
                                        <PigeonProcessDefinitionsModal/>
                                </Route>
                                <Route path="/free-trial-pigeon">
                                        <FreeTrialpigeon/>
                                </Route>
                                

                            </Switch>
                        </Router>
                    </div>
                    <div className="col-lg-4 lg-mb-30 lg-center">
                        <div className="br-img">
                            <img className="img-fluid" src={pigeonImg} alt="FeatSystems Pigeon" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className={`data-modal ${isActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-box">
                        <div className="modal-body">
                        <h2 className="h1 mb-50">Pigeon Free Trial</h2>                                                    
                            <PricingForm />
                            <div onClick={toggleClass} className="close-md"><img src={closeImg} /></div>                                                                    
                        </div>
                    </div>
                </div> 
            </section>
            <section className={`data-modal ${isProActive ? "active" : ""}`}>
                <div className="modal-section">
                    <div className="modal-body">                       
                        <h2 className="h1 mb-50">Process Definition</h2>                    
                        <div onClick={processToggle} className="close-md"><img src={closeImg} /></div> 
                        <div className="callnow-view">
                            <a href="/pigeon-process-definitions" className="btn btn-primary">Upload Document</a>
                            <a href="/pigeon-process-definitions" className="btn btn-dark">Fill and Upload Document</a>
                        </div>
                    </div>
                </div> 
            </section>
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <ul className="breadcrumb">
                            <li><Link to="/home">Home</Link></li>
                            <li>Pigeon</li>
                        </ul>                        
                    </div>
                    </div>
                </div>
            </section>
            <section className="what-done">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <div className="center-div">
                        <h2 className="h1">About Pigeon</h2>
                        <p className="para">
                            Pigeon is a cloud-based end-to-end “Automation AS A Service” platform designed with “automation first mentality” and important attributes of hyper-intelligent automation in mind.
                        </p>
                        <p className="para">
                            The core objective of building this platform is to provide various business automation solutions that offer end-to-end business process management along with intelligent automation capabilities which gradually transform the entire business under one roof.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-box">
                        <h2 className="h1">BPM</h2>
                        <div className="cl-text">
                            <ul>
                            <li>Business Workflow</li>
                            <li>Process Orchestration</li>
                            </ul>  
                        </div>          
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-box">
                        <h2 className="h1">AI</h2>
                        <div className="cl-text">
                            <ul>
                            <li>Decision Making</li>
                            <li>Classification</li>
                            </ul>  
                        </div>          
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-box">
                        <h2 className="h1">OCR</h2>
                        <div className="cl-text">
                            <ul>
                            <li>Document Data Collection</li>
                            </ul>  
                        </div>          
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-box">
                        <h2 className="h1">RPA</h2>
                        <div className="cl-text">
                            <ul>
                            <li>Mundane Tasks</li>
                            <li>Bot Orchestration</li>
                            </ul>  
                        </div>          
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="we-focus">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <div className="center-div">
                        <h2 className="h1">Pigeon Benefits</h2>
                        <p className="para">One-stop Automation shop for entire “Business Transformation</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sc-card">
                        
                        <div className="cr-box fibo">
                        <InfiniteCarousel
                            breakpoints={[
                            
                               
                            {
                                breakpoint: 500,
                                settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                },
                            },
                            ]}
                                dots={true}
                                showSides={true}
                                sidesOpacity={0.5}
                                sideSize={0.1}
                                slidesToScroll={1}
                                slidesToShow={4}
                                scrollOnDevice={true}
                            >
                            <div className="card-box ">
                                <img src={doneIcon} alt="Done" />              
                                <p className="para">
                                No Initial License/Hardware/Implementation/Support Cost
                                </p>
                            </div>
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />                            
                                <p className="para">
                                Pay subscription fees per process when operational
                                </p>
                            </div>
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />                         
                                <p className="para">
                                Rapid Deployment (within weeks)
                                </p>
                            </div>
                            <div className="card-box">
                                <img src={doneIcon} alt="Done" />                            
                                <p className="para">
                                Improved staff retention
                                    <small>By reducing high volume low value work to focus on complex/higher value work activities</small>
                                </p>
                            </div>
                            <div className="card-box">
                            <img src={doneIcon} alt="Done" />
                            
                                <p className="para">
                                Lower the cost, Improved Service Quality, Increase Flexibility and Distinctive insights

                                </p>
                            </div>
                            </InfiniteCarousel>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="how-work no-pd-section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <div className="center-div">
                        <h2 className="h1">How Pigeon works</h2>          
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sc-card">
                        
                        <div className="cr-box fibo">
                        <InfiniteCarousel
                            breakpoints={[
                            
                               
                            {
                                breakpoint: 500,
                                settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                },
                            },
                            ]}
                                dots={true}
                                showSides={true}
                                sidesOpacity={0.5}
                                sideSize={0.1}
                                slidesToScroll={1}
                                slidesToShow={4}
                                scrollOnDevice={true}
                            >
                            <div className="card-box ">
                            <img src={doneIcon} alt="Done" />              
                                <p className="para">
                                PIGEON platforms focus on and target customer Engagement
                                </p>
                            </div>
                            <div className="card-box">
                            <img src={doneIcon} alt="Done" />
                            
                                <p className="para">
                                <small>
                                    It makes use of hyper-intelligent automation to address the Automation problems in a workflow exploiting Data Analytics and Process Discovery technologies.
                                </small>
                                </p>
                            </div>
                            <div className="card-box">
                            <img src={doneIcon} alt="Done" />
                            
                                <p className="para">
                                Rapid Deployment (within weeks)
                                </p>
                            </div>
                            <div className="card-box">
                            <img src={doneIcon} alt="Done" />                            
                                <p className="para">
                                Scale automation to any size.
                                </p>
                            </div>   
                            </InfiniteCarousel>         
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="our-solution">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-50">
                            <div className="center-div">
                            <h2 className="h1">Our ready to use solutions</h2>
                            <p className="para">With the PIGEON Automation platform, a business can integrate all the workflows and work must faster to improve the efficiency of the overall business. Instead of using Bots for individual activities or automating a small functionality, using an integrated automation platform like PIGEON will save a lot of time and effort.</p>
                            <p className="para">
                                Two of the massive functionalities of managing Customer queries and Vendor management can illustrate using IRIS and PIGEON-iVIPS solutions:
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/pigeoniCQRS" className="pr-card iris">              
                            <div className="text-center">
                                <img className="img-fluid" src={irisImg} alt="IRIS" />
                            </div>
                            <div className="pr-text">
                                <h2 className="h1">IRIS</h2>
                                <p className="para">
                                Intelligent Customer Query Response System
                                </p>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/pigeoniVIPS" className="pr-card ivips">
                            <div className="text-center">
                                <img className="img-fluid" src={ivipsImg} alt="iVIPS" />
                            </div>                        
                            <div className="pr-text">
                                <h2 className="h1">Office of CFO Pigeon iVIPS</h2>
                                <p className="para">
                                Intelligent Vendor Invoice Processing System
                                </p>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                        <Link to="/fibo-chatbot" className="pr-card pigeon">
                        <div className="text-center">
                            <img className="img-fluid" src={fiboImg} alt="FIBO" />
                        </div>
                        <div className="pr-text">
                            <h2 className="h1">Office of COO FIBO</h2>
                            <p className="para">
                            Intelligent Text Analytics System
                            </p>
                        </div>
                        </Link>
                    </div>      
                    </div>
                </div>
            </section>

            <GetStarted/>
            
        </>   
    );
};

export default Pigeon;