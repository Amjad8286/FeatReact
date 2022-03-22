import React from "react";
import bimg1 from '../../images/blog/b-1.jpg';
import bimg2 from '../../images/blog/b-2.jpg';
import bimg3 from '../../images/blog/b-3.jpg';

const BlogSection = () =>{
    return(
        <>            
          <section className="blog-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 text-center mb-50">
                    <div className="center-div">
                    <h2 className="h1">Our Latest Blog</h2>
                    <a href="#" className="para">Read all</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="img-fluid" src={bimg1} />

                    <div className="b-text">
                        <p className="para">
                        5 Reasons to invest in Chatbots and RPA automation in a growing pandemic
                        </p>
                        <a href="#">Read more</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="img-fluid" src={bimg2} />

                    <div className="b-text">
                        <p className="para">
                        Automation with RPA a friend to IoT
                        </p>
                        <a href="#">Read more</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="img-fluid" src={bimg3} />

                    <div className="b-text">
                        <p className="para">
                        Why Support and Maintenance are also vital for Hyper-intelligent automation solutions?
                        </p>
                        <a href="#">Read more</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>            
        </>          
    );
};

export default BlogSection;