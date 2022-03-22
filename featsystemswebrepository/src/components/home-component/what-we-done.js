import React from "react";
import customerIcon from '../../images/home/customer-icon.png';
import industryIcon from '../../images/home/industry-icon.png';
import processIcon from '../../images/home/process-icon.png';
import efficencyIcon from '../../images/home/efficency-icon.png';

const WhatDone = () =>{
    return(
        <>            
            <section className="what-done">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <div className="center-div">
                        <h2 className="h1">What we have done</h2>
                        <p className="para">We have proven track records in deploying hyper-intelligent automation solutions on a large scale. Our teams have worked across different industries by delivering measurable results</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="cl-bx flex align-center">
                        <div>
                            <img src={customerIcon} alt="customer servered" />
                        </div>
                        <div className="s-txt">
                            <h3 className="h1">> 30+</h3>
                            <p className="para">Customer served</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="cl-bx flex align-center">
                        <div>
                            <img src={industryIcon} alt="customer servered" />
                        </div>
                        <div className="s-txt">
                            <h3 className="h1">> 7+</h3>
                            <p className="para">Industries covered</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="cl-bx flex align-center">
                        <div>
                            <img src={processIcon} alt="customer servered" />
                        </div>
                        <div className="s-txt">
                            <h3 className="h1">500+</h3>
                            <p className="para">Process Automated</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="cl-bx flex align-center">
                        <div>
                            <img src={efficencyIcon} alt="customer servered" />
                        </div>
                        <div className="s-txt">
                            <h3 className="h1">> 90%</h3>
                            <p className="para">Efficiency gained</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>                
        </>          
    );
};

export default WhatDone;