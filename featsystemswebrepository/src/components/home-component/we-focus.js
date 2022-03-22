import React from "react";
import financeIcon from '../../images/home/finance-icon.png';
import insuranceIcon from '../../images/home/insurance-icon.png';
import retailIcon from '../../images/home/retail-icon.png';
import manufacturingIcon from '../../images/home/manufacturing-icon.png';
import healthIcon from '../../images/home/health-icon.png';
import mediaIcon from '../../images/home/media-icon.png';

import {
    BrowserRouter as Router,
    Switch,  
    Route,
    Link
  } from "react-router-dom";

const Wefocus = () =>{
    return(
        <>            
            <section className="we-focus">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <div className="center-div">
                        <h2 className="h1">Where we focus</h2>
                        <p className="para">Our hyper-intelligent automation solutions for various business segments with second machine age generation technologies have the potential to transform your business and make it smarter.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/rpa-finance-and-banking" className="card-box">
                        <img src={financeIcon} />
                        <h3 className="h1">Finance & Banking</h3>
                        <p className="para">RPA provides accurate and time-consuming solutions to complex financial workflows.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/rpa-insurance" className="card-box">
                        <img src={insuranceIcon} />
                        <h3 className="h1">Insurance</h3>
                        <p className="para">RPA helps insurance companies to efficiently process their work</p>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/rpa-retail" className="card-box">
                        <img src={retailIcon} />
                        <h3 className="h1">Retail</h3>
                        <p className="para">RPA is helpful in maintaining inventory levels to ensure retailers</p>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/rpa-manufacturing" className="card-box">
                        <img src={manufacturingIcon} />
                        <h3 className="h1">Manufacturing</h3>
                        <p className="para">RPA is the next silver bullet in the Manufacturing industry</p>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/rpa-healthcare" className="card-box">
                        <img src={healthIcon} />
                        <h3 className="h1">Healthcare</h3>
                        <p className="para">RPA can help healthcare organizations increase operational efficiency</p>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/rpa-media" className="card-box">
                        <img src={mediaIcon} />
                        <h3 className="h1">Media</h3>
                        <p className="para">RPA gives you access to enthusiastic digital workforce</p>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>              
        </>          
    );
};

export default Wefocus;