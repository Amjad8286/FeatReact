import React from "react";
import Image from 'next/image'
import financeIcon from '../../public/images/home/finance-icon.png';
import insuranceIcon from '../../public/images/home/insurance-icon.png';
import retailIcon from '../../public/images/home/retail-icon.png';
import manufacturingIcon from '../../public/images/home/manufacturing-icon.png';
import healthIcon from '../../public/images/home/health-icon.png';
import mediaIcon from '../../public/images/home/media-icon.png';

import Link from 'next/link'
export { Link };

const Wefocus = () => {
    return (
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
                            <Link href="/rpa-finance-and-banking">
                                <a className="card-box">
                                    <Image src={financeIcon} />
                                    <h3 className="h1">Finance & Banking</h3>
                                    <p className="para">RPA provides accurate and time-consuming solutions to complex financial workflows.</p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/rpa-insurance">
                                <a className="card-box">
                                    <Image src={insuranceIcon} />
                                    <h3 className="h1">Insurance</h3>
                                    <p className="para">RPA helps insurance companies to efficiently process their work</p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/rpa-retail">
                                <a className="card-box">
                                    <Image src={retailIcon} />
                                    <h3 className="h1">Retail</h3>
                                    <p className="para">RPA is helpful in maintaining inventory levels to ensure retailers</p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/rpa-manufacturing">
                                <a className="card-box">
                                    <Image src={manufacturingIcon} />
                                    <h3 className="h1">Manufacturing</h3>
                                    <p className="para">RPA is the next silver bullet in the Manufacturing industry</p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/rpa-healthcare">
                                <a className="card-box">
                                    <Image src={healthIcon} />
                                    <h3 className="h1">Healthcare</h3>
                                    <p className="para">RPA can help healthcare organizations increase operational efficiency</p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/rpa-media">
                                <a className="card-box">
                                    <Image src={mediaIcon} />
                                    <h3 className="h1">Media</h3>
                                    <p className="para">RPA gives you access to enthusiastic digital workforce</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wefocus;