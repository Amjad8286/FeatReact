import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import AESEncryption from "../../CryptoJs/AESEncryption";
import PopUpModal from "../Molecules/Popup";
import ApiPath from "../../API/ApiPath";

const siteKey = process.env.REACT_APP_GOOGLE_SITEKEY;
const BaseURL = process.env.REACT_APP_API_BASE_URL;

const PricingForm = ({ formType, PrcingType }) => {
  console.log(formType);
  console.log(PrcingType);
  const [Modal, setModal] = useState({});

  const LeadForm = () => {
    console.log("Call Back function call");
    console.log(values);
    const subscriptionEnum = {
      BasicPlan: "1",
      StandardPlan: "2",
      ProfessionalPlan: "3",
      EnterprisePlan: "4",
    };

    if (formType in subscriptionEnum) {
      var pricingReqData = {
        Name: values.name,
        Email: values.email,
        Company: values.company,
        Phone: values.phone,
        PlanName: PrcingType + "^" + subscriptionEnum[formType],
        PricingType: PrcingType,
      };
      const { Flag, Category } = ApiPath.Pricing;
      axios
        .post(BaseURL + "/" + Category + "/" + Flag, pricingReqData)
        .then((res) => {
          var data = AESEncryption.decrypt(res.data);
          // this.handleLoader(false);
          if (data.Status) {
            ResetForm(formType);
            ClearState();
            setModal({
              ...Modal,
              IsShow: true,
              Message: data.Message,
            });
          } else {
            setModal({
              ...Modal,
              IsShow: true,
              Message: data.Message,
            });
            console.log(data, "response");
          }
        })
        .catch((error) => {
          //this.handleLoader(false);
          console.log(error, "error ");
        });
    } else {
      var requestData = {
        Name: values.name,
        Email: values.email,
        Phone: values.phone,
      };
      console.log(requestData, "requestData");
      const { Flag, Category } = ApiPath.SendEmailPigeon;

      axios
        .post(BaseURL + "/" + Category + "/" + Flag, requestData)
        .then((res) => {
          var data = AESEncryption.decrypt(res.data);
          // this.handleLoader(false);
          if (data.Status) {
            ResetForm(formType);
            ClearState();
            setModal({
              ...Modal,
              IsShow: true,
              Message: data.Message,
            });
          } else {
            setModal({
              ...Modal,
              IsShow: true,
              Message: data.Message,
            });
            console.log(data, "response");
          }
        })
        .catch((error) => {
          //this.handleLoader(false);
          console.log(error, "error ");
        });
    }
  };

  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    onVerify,
    ClearState,
    ResetForm,
  } = useForm(LeadForm);

  return (
    <>
      <form id={formType ? formType : "LeadForm"} onSubmit={handleSubmit}>
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
          {errors.name && <span className="text-danger">{errors.name}</span>}
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
          {errors.email && <span className="text-danger">{errors.email}</span>}
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
        {/* <ReCAPTCHA sitekey={siteKey} onChange={onVerify} /> */}
        {errors.ValidationMessage && (
          <span className="text-danger">{errors.ValidationMessage}</span>
        )}

        <div>
          <button className="btn btn-dark" type="submit" id="LeadForm">
            Submit
          </button>
        </div>
        <PopUpModal
          IsShow={Modal.IsShow ? Modal.IsShow : false}
          Message={Modal.Message ? Modal.Message : ""}
        ></PopUpModal>
      </form>
    </>
  );
};

export default PricingForm;
