import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-1">
                <div className="row ">
                    <div className="col-xl-4 col-md-4 col-sm-4 col-12 mb-4">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>UP, Meerut</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-4 col-12 mb-4">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9999999999</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-4 col-12 mb-4">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-3 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="/"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to="/"><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link to="/"><i className="fab fa-google-plus-g google-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul className='p-0'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">about</Link></li>
                                <li><Link to="/">services</Link></li>
                                <li><Link to="/">portfolio</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Our Services</Link></li>
                                <li><Link to="/">Expert Team</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                                <li><Link to="/">Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="/">
                                    <input type="text" placeholder="Email Address" className='shadow-none' />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6  ">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <Link to="/">MERN</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6  ">
                        <div className="footer-menu d-flex ms-auto justify-content-end">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/term">Terms</Link></li>
                                <li><Link to="/privacy">Privacy</Link></li>
                                <li><Link to="/policy">Policy</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer