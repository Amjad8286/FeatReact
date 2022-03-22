import React, { useState } from "react";
import "../css/formStyle.css";
import captchaImg from "../images/inner-page/captcha.png";
import Reference_PDD from "../images/downloads/Reference_PDD.docx";
import Reference_PDD_Excel from "../images/downloads/PIGEON-Process-Definitions.xlsx"
import ReCAPTCHA from "react-google-recaptcha";
import useForm from "../Hooks/useForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import FileBase64 from 'react-file-base64';
import axios from "axios";
import ApiPath from '../API/ApiPath'
import AESEncryption from "../CryptoJs/AESEncryption";
import PopUpModal from './Molecules/Popup';

const siteKey = process.env.REACT_APP_GOOGLE_SITEKEY;
const BaseURL = process.env.REACT_APP_API_BASE_URL;



 const PigeonProcessDefinitions = () => {
    const [Modal, setModal] = useState({});
    const PigeonPDD = () => {
      
        var formrequest = {
            Name: values.name,
            Email: values.email,
            Phone: values.phone,
            Company: values.company,
            FileData : values.files.base64.split(',')[1],
            Extension : values.files.name.split('.')[1]
          };
          console.log(formrequest);
          const { Flag, Category } = ApiPath.AddPigeonPDD;
          axios
        .post(BaseURL + "/" + Category + "/" + Flag, formrequest)
        .then((res) => {
          var data = AESEncryption.decrypt(res.data);
         // this.handleLoader(false);
          if (data.Status) {
            //this.handlePopUpMessage(data.Message, "success");
            console.log(data.Message, "response");
            ResetForm('PigeonPDD');
           //Cleare State Here 
           ClearState();
           setModal({
             ...Modal,
             IsShow : true,
             Message : data.Message
           });
          } else {
            //this.handlePopUpMessage(data.Message, "error");
            console.log(data, "response");
          }
        })
        .catch((error) => {
          //this.handleLoader(false);
          console.log(error, "error ");
        });
    };

  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    onVerify,
    ClearState,
    ResetForm,
    getFiles
  } = useForm(PigeonPDD);
  return (
      
    <>
      <section className="client-section bg-vector">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="cl-text">
                <h2 className="h1 m-0">Pigeon Process Definition</h2>
                <p className="para">
                  Here is the reference to prepare PDD & upload{" "}
                  <a href={Reference_PDD}>Download</a>{" "}
                </p>
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
                <li>
                  <Link to="/pigeon">Pigeon</Link>
                </li>
                <li>Automation Setu Process Definition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="conatct-box">
        <div className="container">
          <div className="row column-reverse">
            <div className="col-lg-6 m-auto">
              <div className="card-box">
                <form onSubmit={handleSubmit} id={"PigeonPDD"}>
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
                      {errors.name && (
                        <span className="text-danger">{errors.name}</span>
                      )}
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
                      {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
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
                      {errors.company && (
                        <span className="text-danger">{errors.company}</span>
                      )}
                    </div>
                    <div className="form-input">
                      <FileBase64
                        multiple={false}
                        onDone={getFiles.bind(this)}
                      />
                      {/* <input
                        type="file"
                        className="from-control"
                        name="file"
                        id="file"
                        inputProps={{ accept: '.xlsx, .xls, .csv, .pdf' }}
                        onChange={e => handleFileRead(e)}
                      /> */}
                      <label className="form-label" htmlFor="message">
                       
                      </label>
                    </div>
                    <ReCAPTCHA sitekey={siteKey} onChange={onVerify} />
                    <div className="form-input">
                      <button className="btn btn-dark">Submit</button>
                    </div>
                  </div>
                  <PopUpModal IsShow={Modal.IsShow ? Modal.IsShow : false} Message = {Modal.Message ? Modal.Message : ''}></PopUpModal>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PigeonProcessDefinitions;
