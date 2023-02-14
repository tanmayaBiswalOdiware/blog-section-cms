import Image from 'next/image';
import React from 'react';

const FooterComp = () => {
    return (
        <footer className="footer_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="about_company" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="logo">
                                <Image src="/images/group_copy_2.png" alt="" />
                                <span>PracticeKea</span>
                            </div>

                            <p>Practice anywhere, anytime!
                                <br />
                                <br />
                                PracticeKea is a digital learning platform for various competitive exams. We provide various
                                tools to help students practice for these exams in a fun way.
                            </p>

                            <div className="playstore_logo" data-aos="fade-up"
                                data-aos-duration="3000">
                                <Image src="/images/bitmap.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="footer_menu" data-aos="fade-up"
                            data-aos-duration="3000">
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>FAQ&apos;s</li>
                                <li>Contact Us</li>
                                <li>Legal</li>
                                <li>Term & Conditions</li>
                                <li><a href="./privacy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="contact_add" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3>Get in touch with us</h3>

                            <div className="address ">
                                <div className="add_heading">

                                    <span><i className="fa fa-map-marker" aria-hidden="true"></i> Address</span>
                                </div>
                                <p>F1, 5th Floor, MSM Plaza, Banaswadi Ring Road, Near Horamavu Signal, Bangalore-560043,
                                    India 560053</p>
                            </div>


                            <div className="address">
                                <div className="add_heading">
                                    <span><i className="fa fa-envelope" aria-hidden="true"></i>Email</span>
                                </div>
                                <a href="">hr@odiware.com</a>
                            </div>

                            <div className="address">
                                <div className="add_heading">
                                    <span><i className="fa fa-phone" aria-hidden="true"></i> Phone</span>
                                </div>
                                <p>+91 - 9000000000 / 9876543210</p>
                                <small>(Mon - Sat, 10AM to 6PM)</small>
                            </div>

                        </div>
                    </div>
                </div>

                <hr className="text-light bg-light" />

                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <div className="copy_right">
                            <span>© 2022 PracticeKea. All rights reserved</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="social_media">
                            <ul>
                                <li><a href="#">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a></li>
                                <li><a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a></li>
                                <li><a href="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a></li>
                                <li><a href="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComp;
