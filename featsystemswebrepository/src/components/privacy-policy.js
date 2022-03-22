import React from "react";

import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";

import GetStarted from './home-component/get-started'




const PrivacyPolicy = () =>{
    return(
        <>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-12">
                        <div className="cl-text">
                        <div className="mb-50">
                        <h2 className="h1 mt-0">Privacy Policy</h2>
                        <p>
                        The content of the FEAT web site is protected by copyright law. You are entitled to use this website and the content therein for your own, informational purposes.
                        </p>
                        </div>
                        </div>
                        <div className="gt-button">                           
                            <Link to="/contact" className="btn btn-dark">Get Started</Link>
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
                            <li><Link to="/home">Home</Link></li>                            
                            <li>privacy policy</li>
                        </ul>                           
                    </div>
                    </div>
                </div>
            </section>
            
            <section className="tech-part-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div>    
                            <h2 className="h2">Copyright</h2>                        
                            <p>Feat Systems Pvt. Ltd. All rights reserved.</p>
                            <p>The content of the FEAT web site is protected by copyright law. You are entitled to use this website and the content therein for your own, informational purposes. However, a commercial re-distribution of any content of our web site, full or in part, is not permitted without our prior written consent. Furthermore, it is not permitted to save, use and/or redistribute any images or illustration material from our web site.</p>
                            
                            <h2 className="h2">Disclaimer</h2>
                            <p>
                            This Web site contains hyperlinks to other Web sites operated by parties other than FEAT, and other resources and advertisers. Such hyperlinks are provided for reference only. FEAT is not responsible for the availability of these external sites nor is it responsible for any of the contents, advertising, products, or other materials on such external sites. FEAT inclusion of hyperlinks to such Web sites does not imply any endorsement of the material on such Web sites or any association with their operators.
                            </p>
                            <p>
                            Under no circumstances shall FEAT be held responsible or liable, directly or indirectly, for any loss or damage caused or alleged to have been caused in connection with the use of or reliance on any content, goods, or services available on such external site.
                            </p>
                            <p>
                            Any concerns regarding any external link should be directed to its respective site administrator or webmaster.
                            </p>
                        </div>
                                                     
                            
                            
                        </div>
                        
                    </div>
                    
                    

                </div>
                </section>

            <GetStarted/>
            
        </>   
    );
};

export default PrivacyPolicy;