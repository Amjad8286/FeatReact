import React, { useState } from "react";
import '../css/formStyle.css';
import atSgin from '../images/inner-page/at-sign.png';
import captchaImg from '../images/inner-page/captcha.png';
import callIcon from '../images/inner-page/call-icon.png';
import locationIcon from '../images/inner-page/location-icon.png';
import mailIcon from '../images/inner-page/mail-icon.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useForm from "../Hooks/useForm";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import ApiPath from '../API/ApiPath'
import AESEncryption from "../CryptoJs/AESEncryption";
import PopUpModal from './Molecules/Popup';
import FeatLoader from "./loader";
import { Helmet } from "react-helmet";
const siteKey = process.env.REACT_APP_GOOGLE_SITEKEY;
const BaseURL = process.env.REACT_APP_API_BASE_URL
const Contact = () => {

  // var initialModalState = {
  //   IsShow : false,
  //   Message : ''
  // }
  const [Modal, setModal] = useState({});
  const [Loader, setLoader] = useState({});

  const contactForm = () => {
    console.log('Call Back function call');
    console.log(values);
    setLoader({
      ...Loader,
      IsShow: true,
    });
    var ContactReq = {
      Name: values.name,
      Email: values.email,
      Phone: values.phone,
      Company: values.company,
      JobTitle: values.jobtitle,
      Country: values.country,
      Freeconsultation: values.isFreeConsultation && values.isFreeConsultation === 'on' ? true : false,
      furtherinformation: values.isSendInfo && values.isSendInfo === 'on' ? true : false,
      CallMe: values.isCall && values.isCall === 'on' ? true : false,
      Message: values.message ? values.message : '',
    };
    console.log(ContactReq, 'ContactReq')
    const { Flag, Category } = ApiPath.SendMail;

    axios
      .post(BaseURL + "/" + Category + "/" + Flag, ContactReq)
      .then((res) => {
        setLoader({
          ...Loader,
          IsShow: false,
        });
        var data = AESEncryption.decrypt(res.data);
        if (data.Status) {
          console.log(data.Message, "response");
          ResetForm('contactus-form');
          //Cleare State Here 
          ClearState();
          setModal({
            ...Modal,
            IsShow: true,
            Message: data.Message
          });
        } else {

          console.log(data, "response");
          setModal({
            ...Modal,
            IsShow: true,
            Message: data.Message
          });
          setLoader({
            ...Loader,
            IsShow: false,
          });
        }
      })
      .catch((error) => {
        setLoader({
          ...Loader,
          IsShow: false,
        });
        console.log(error, "error ");
      });

  }


  const { handleChange, values, errors, handleSubmit, onVerify, ClearState, ResetForm } = useForm(contactForm);


  return (
    <>
      <div className="application">
        <Helmet>
          <html lang="en" />
          <title>Contact US</title>
          <meta name="description" content="If you want to know more about RPA (Robotic Process Automation): contact us at Feat systems" />

          <meta name="keywords" content="Contact Us - Feat Systems Office" />
          <meta property="og:title" content="Contact US" />
          <meta property="og:image" content="https://www.featsystems.com/content/images/og_img/contact_us.jpg" />
          <meta property="og:description" content="Feat Systems Pvt. Ltd - 1st Floor, Building-A, Suashish IT Park, Dattapada Road, Behind Metro Mall, Borivali East, Mumbai - 400066, INDIA." />
          <meta property="og:url" content="https://www.featsystems.com/contact" />
          <link rel="canonical" href="https://www.featsystems.com/contact" />
        </Helmet>
      </div>
      <section className="client-section bg-vector">
        <div className="container">
          <div className="row align-center column-reverse">
            <div className="col-lg-8">
              <div className="cl-text">
                <h2 className="h1 m-0">Contact Us</h2>
              </div>
            </div>
            <div className="col-lg-4 lg-mb-30 lg-center">
              <div className="br-img">
                <img className="img-fluid" src={atSgin} alt="Contact Us" />
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
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="conatct-box">
        <div className="container">
          <div className="row column-reverse">
            <div className="col-lg-6">
              <div className="card-box">
                <form onSubmit={handleSubmit} id={"contactus-form"}>
                  <h1 className="h1">Send Mail</h1>
                  <div className="from-box">
                    <div className="form-input">
                      <input
                        type="text"
                        pattern="[a-Z]{<3}"
                        className="from-control"
                        name="name"
                        id="name"
                        required=""
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className="form-input">
                      <input
                        type="text"
                        className="from-control"
                        name="jobtitle"
                        id="jobtitle"
                        required=""
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="jobtitle">
                        Job title
                      </label>
                      {errors.jobtitle && <span className='text-danger'>{errors.jobtitle}</span>}
                    </div>
                    <div className="form-input">
                      <input
                        type="email"
                        className="from-control"
                        name="email"
                        id="email"
                        required=""
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="form-input">
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        className="from-control"
                        name="phone"
                        id="phone"
                        required=""
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="phone">
                        Phone
                      </label>
                    </div>
                    <div className="form-input">
                      <input
                        type="text"
                        className="from-control"
                        name="company"
                        id="company"
                        required=""
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="company">
                        Company
                      </label>
                      {errors.company && <span className='text-danger'>{errors.company}</span>}
                    </div>
                    <div className="form-input">
                      <select
                        className="from-control"
                        name="country"
                        id="country"
                        required=""
                        value={'india'}
                        onChange={handleChange}
                      >
                        /<option value={'india'}>India</option>
                        <option value={'pakistan'}>Pakistan</option>
                        <option value={'pakistan'}>Bangladesh</option>
                      </select>
                      <label className="form-label" htmlFor="country">
                        Country
                      </label>
                    </div>
                    <div className="form-input">
                      <h3 className="h3">What's next? Please tick</h3>
                      <label className="check-form">
                        <input type="checkbox" name="isFreeConsultation" onChange={handleChange} /> I'd like a free
                        consultation
                      </label>
                      <label className="check-form">
                        <input type="checkbox" name="isSendInfo" onChange={handleChange} /> Send me further
                        information
                      </label>
                      <label className="check-form">
                        <input type="checkbox" name="isCall" onChange={handleChange} /> Call me please
                      </label>
                    </div>
                    <div className="form-input">
                      <textarea
                        className="from-control"
                        name="message"
                        id="message"
                        onChange={handleChange}
                      ></textarea>
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                    </div>
                    <ReCAPTCHA sitekey={siteKey} onChange={onVerify} />
                    {errors.ValidationMessage && <span className='text-danger'>{errors.ValidationMessage}</span>}
                    {/* <div className="form-input">
                        <div className="captcha">
                          <img src={captchaImg} alt="captcha" />
                        </div>
                      </div> */}
                    {/* <div className="form-input">
                        <input
                          type="text"
                          className="from-control"
                          name="enterCaptcha"
                          id="enterCaptcha"
                        />
                        <label className="form-label" htmlFor="enterCaptcha">
                          Enter captcha
                        </label>
                      </div> */}
                    <div className="form-input">
                      <button type="submit" className="btn btn-dark">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <PopUpModal IsShow={Modal.IsShow ? Modal.IsShow : false} Message={Modal.Message ? Modal.Message : ''}></PopUpModal>
              <FeatLoader isShow={Loader.IsShow} />
            </div>
            <div className="col-lg-6 lg-mb-30">
              <div className="flex mb-50">
                <div className="flex-2">
                  <img src={callIcon} />
                </div>
                <div className="flex-11">
                  <h2 className="h1">Phone</h2>
                  <p className="para">
                    USA <a href="callto:+1 626 842 1792">+1 626 842 1792</a>
                  </p>
                  <p className="para">
                    INDIA <a href="callto:+91 9321252212">+91 9321252212</a>
                  </p>
                </div>
              </div>

              <div className="flex mb-50">
                <div className="flex-2">
                  <img src={locationIcon} />
                </div>
                <div className="flex-11">
                  <div>
                    <h2 className="h1">Location</h2>
                    <h3 className="h3">Feat Systems LLC</h3>
                    <p className="para">
                      1044 Shorthill Lane, Fort Mill, South Carolina, USA
                      29715
                    </p>
                  </div>
                  <div className="mt-40">
                    <h3 className="h3">Feat Systems Pvt. Ltd.</h3>
                    <p className="para">
                      1st Floor, Building-A, Suashish IT Park, Dattapada Road,
                      Behind Metro Mall, Borivali East, Mumbai - 400066,
                      INDIA.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mb-50">
                <div className="flex-2">
                  <img src={mailIcon} />
                </div>
                <div className="flex-11">
                  <div>
                    <h2 className="h1">E-mail</h2>
                    <p className="para">
                      <p className="m-0">For Sales</p>
                      <a href="mailto:info@featsystems.com">
                        info@featsystems.com
                      </a>
                    </p>

                    <p className="para mt-20">
                      <p className="m-0">For Hr</p>
                      <a href="mailto:hr@featsystems.com">
                        info@featsystems.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;