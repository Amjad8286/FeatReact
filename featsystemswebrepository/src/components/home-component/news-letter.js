import React from "react";

const NewsLetter = () =>{
    return(
        <>
            <section className="news-letter bg-vector">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="center-div text-center">
                        <h2 className="h1 mb-50">Subscribe for Newsletter</h2>
                        
                            <form>
                                <div className="flex">
                                    <div className="flex-11 mr-20 p-relative">
                                    <input className="newsletter" type="email" name="newsletter" id="newsletter" required />
                                    <label className="input-label" for="newsletter">Your Work Email</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary flex-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default NewsLetter;