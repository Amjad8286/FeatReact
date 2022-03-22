import React from "react";
import "../css/Pigeon.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetStarted from "./home-component/get-started";
import pigeonImg from "../images/inner-page/pigeon.png";
import doneIcon from "../images/inner-page/done-icon.png";

import irisImg from "../images/home/iris-pr-img.png";
import ivipsImg from "../images/home/ivips-img.png";
import fiboImg from "../images/inner-page/fibo.png";

import InfiniteCarousel from "react-leaf-carousel";

import PigeonProcessDefinitionsModal from "../components/pricing-modal/pigeon-process-definitions-modal";
import FreeTrialpigeon from "../components/pricing-modal/free-trial-pigeon";

const PigeoniVIPS = () => {
  return (
    <>
      <section className="client-section bg-vector">
        <div className="container">
          <div className="row align-center column-reverse">
            <div className="col-lg-8 gt-button">
              <div className="cl-text mb-50">
                <h2 className="h1 mt-0">PIGEON iVIPS</h2>
                <p className="para">
                  Vendor Management is a key indicator of your company's
                  performance. The more efficient you are with your Account
                  Payable Process, the better is the position of your services
                  in the market.
                </p>
                <ul>
                  <li>
                    50% of companies globally are using the "Invoice Workflow
                    Automation Tool".
                  </li>
                  <li>
                    48% of the manual handling of Invoice Processing leads to
                    inefficiency in the process with 34% of the time, the data
                    facing errors or missing values.
                  </li>
                  <li>
                    A recent Survey has clearly stated that a non-automation
                    company spends more than $10 per invoice.
                  </li>
                </ul>
                <p className="para">
                  Pigeon iVIPS will make your company stand out in the market
                  with its integrated Vendor Management approach and will
                  promise you to deliver a very cost-saving efficient Account
                  Payable Process.
                </p>
              </div>

              <Router>
                <Link to="/free-trial-pigeon" className="btn btn-dark">
                  Fee Trial
                </Link>

                <Switch>
                  <Route path="/pigeon-process-definitions-modal">
                    <PigeonProcessDefinitionsModal />
                  </Route>
                  <Route path="/free-trial-pigeon">
                    <FreeTrialpigeon />
                  </Route>
                </Switch>
              </Router>
            </div>
            <div className="col-lg-4 lg-mb-30 lg-center">
              <div className="br-img">
                <img
                  className="img-fluid"
                  src={pigeonImg}
                  alt="FeatSystems Pigeon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>PIGEON iVIPS</li>
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
                <h2 className="h1">About PIGEON iVIPS</h2>
                <p className="para">
                  PIGEON-iVIPS is an omnichannel “Intelligent Vendor Invoice
                  Processing System” designed with important attributes of
                  current & post COVID-19 scenarios in mind.
                </p>
                <p className="para">
                  Manually handling Account payable activities like generating
                  invoice receipts, validating data, processing, and payment
                  makes the overall workflow very time-consuming and prone to
                  human-errors. This activity directly affects the bottom line
                  of a company and requires a very efficient and error-free
                  solution.
                </p>
                <p className="para">
                  With PIGEON-iVIPS, the business can decrease the invoice cycle
                  time, reduce the cost per invoice, perform thorough market
                  research, and negotiate with the vendors, and maintain a good
                  relationship with the suppliers. Overall, it provides an
                  integrated approach for vendor management exploiting
                  cutting-edge technologies of AI and RPA.
                </p>
              </div>
            </div>
            <div className="col-lg-12 text-center mb-50">
              <div className="center-div">
                <h2 className="h1">PIGEON iVIPS Key Features</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-box">
                <label className="baas-bg">
                  <i className="key-iocon teamwork-icon"></i>
                </label>
                <h2 className="h1">TEAMWORK</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-box">
                <label className="baas-bg">
                  <i className="key-iocon decision-icon"></i>
                </label>
                <h2 className="h1">DECISION MAKER</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-box">
                <label className="baas-bg">
                  <i className="key-iocon robotic-icon"></i>
                </label>
                <h2 className="h1">ROBOTICS</h2>
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
                <h2 className="h1">PIGEON iVIPS Benefits</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="sc-card">
                <div className="cr-box fibo">
                  <InfiniteCarousel
                    breakpoints={[
                      {
                        breakpoint: 500,
                        settings: { slidesToShow: 1, slidesToScroll: 1 },
                      },
                      {
                        breakpoint: 768,
                        settings: { slidesToShow: 1, slidesToScroll: 1 },
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
                      <p className="para">Reduce Manual Efforts by 80%</p>
                    </div>
                    <div className="card-box">
                      <img src={doneIcon} alt="Done" />
                      <p className="para">
                        Faster Approvals from weeks to days to hours to minutes
                      </p>
                    </div>
                    <div className="card-box">
                      <img src={doneIcon} alt="Done" />
                      <p className="para">
                        Faster Payment Processing from months to weeks
                      </p>
                    </div>
                    <div className="card-box">
                      <img src={doneIcon} alt="Done" />
                      <p className="para">
                        Improve Business Efficiency
                        <small>
                          by re-deploying the workforce to higher-value
                          activities
                        </small>
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
                <h2 className="h1">How PIGEON iVIPS works?</h2>
                <p className="para">
                  PIGEON iVIPS stores the vendor data in the cloud network.
                  Using OCR and AI technology, it reads the receipts digitally
                  and collects the information required. It then analyses the
                  data and proceeds for publishing and payment for the vendors
                  as per the intelligence gained over a while.
                </p>
                <p className="para">
                  A business can get the best possible deal with the suppliers
                  and the Vendor Management system can be digitally transformed.
                  Using an integrated approach, a virtual bot can assist the
                  system and direct complex transactions to the manual workforce
                  reducing the overall burden on humans.
                </p>
                <p className="para">
                  This integrated approach not only saves time but is a very
                  cost-effective process for the business.
                </p>
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
                <p className="para">
                  With the PIGEON Automation platform, a business can integrate
                  all the workflows and work must faster to improve the
                  efficiency of the overall business. Instead of using Bots for
                  individual activities or automating a small functionality,
                  using an integrated automation platform like PIGEON will save
                  a lot of time and effort.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Link to="/pigeoniCQRS" className="pr-card iris">
                <div className="text-center">
                  <img className="img-fluid" src={pigeonImg} alt="Pigeon" />
                </div>
                <div className="pr-text">
                  <h2 className="h1">Pigeon</h2>
                  <p className="para">
                    end-to-end digital transformation solution
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="/pigeoniCQRS" className="pr-card ivips">
                <div className="text-center">
                  <img className="img-fluid" src={irisImg} alt="iVIPS" />
                </div>
                <div className="pr-text">
                  <h2 className="h1">IRIS</h2>
                  <p className="para">
                    Intelligent Customer Query Response System
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GetStarted />
    </>
  );
};

export default PigeoniVIPS;
