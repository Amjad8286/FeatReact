import React,{useState} from "react";
import axios from "axios";
import ApiPath from '../../API/ApiPath'
import AESEncryption from "../../CryptoJs/AESEncryption";
import PopUpModal from '../Molecules/Popup';
import ReCAPTCHA from "react-google-recaptcha";
import useForm from "../../Hooks/useForm";

const siteKey = process.env.REACT_APP_GOOGLE_SITEKEY;
const BaseURL = process.env.REACT_APP_API_BASE_URL;
const LeadForm = () =>{

    const [Modal, setModal] = useState({});

    const SaveLeadForm = () => {
      
        const queryString = window.location.href;
        console.log(queryString);

        var formrequest = {
            Name: values.name,
            Email: values.email,
            Phone: values.phone,
            RequestUrl : queryString
          };
          console.log(formrequest);
          const { Flag, Category } = ApiPath.SaveLeadForm;
          axios
        .post(BaseURL + "/" + Category + "/" + Flag, formrequest)
        .then((res) => {
          var data = AESEncryption.decrypt(res.data);
         // this.handleLoader(false);
          if (data.Status) {
            //this.handlePopUpMessage(data.Message, "success");
            console.log(data.Message, "response");
            ResetForm('LeadForm');
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
        ResetForm
      } = useForm(SaveLeadForm);
    return (
      <>
        <form onSubmit={handleSubmit} id="LeadForm">
          <div className="row">
            <div className="col-lg-12">
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
                
              </div>
              <div className="errortxt">
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>
            </div>
            <div className="col-lg-12">
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
              </div>
              <div className="errortxt"></div>
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="col-lg-12">
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
              <div className="errortxt Er_Phone" id="Er_Phone"></div>
            </div>
            <div className="col-lg-12">
            <div className="form-input">
              <ReCAPTCHA sitekey={siteKey} onChange={onVerify} />
            </div>
            <div className="errortxt"></div>
            </div>
            <div className="col-lg-12">
              <button className="btn btn-dark" type="submit" id="LeadForm">
                Request Demo
              </button>
            </div>
          </div>
          <PopUpModal
            IsShow={Modal.IsShow ? Modal.IsShow : false}
            Message={Modal.Message ? Modal.Message : ""}
          ></PopUpModal>
        </form>
      </>
    );
}



export default LeadForm;
