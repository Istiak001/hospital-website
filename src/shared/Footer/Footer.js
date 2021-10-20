import React from 'react';


const Footer = () => {
    return (
         <div className="container wrapper">
            <div className="row py-5 wrapper">
            <div class="col-12 col-md-6 col-lg-6 py-4">
                    <h5 class="footer-title">CONTACT DETAILS</h5>
                    <p class="pb-4">
                        Feel free to contact us by phone, email or by our contact form
                    </p>
                    <div>
                        <div>
                            <div class="pb-3">
                                <i class="fas fa-map-marker-alt pe-2 contact-icon d-inline"></i>
                                <p class="d-inline">
                                    9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United States 
                                </p>
                            </div>
                            <div class="pb-3">
                                <i class="fas fa-phone pe-2 contact-icon d-inline"></i>
                                <div class="d-inline">
                                    <p class="d-inline" >
                                        Tel (business hours) : 269 1500 Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00 pm) Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm
                                    </p>
                                </div>
                            </div>
                            <div class="pb-3">
                                <i class="fas fa-envelope pe-2 contact-icon d-inline"></i>
                                <p class="d-inline">
                                    cherly.lawson@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 py-4">
                    <h5 className="footer-title">ADDITIONAL INFORMATION</h5>
                    <div>
                        <a href="#" className="d-block footer-link">About Us</a>
                        <a href="#" className="d-block footer-link">Contact Us</a>
                        <a href="#" className="d-block footer-link">How does it work?</a>
                        <a href="#" className="d-block footer-link">Frequently Asked Questions</a>
                        <a href="#" className="d-block footer-link">Deals.mu loyalty program</a>
                        <a href="#" className="d-block footer-link"> Promote your Business on BTP</a>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                        <p>SOCIAL NETWORK</p>
                        <div>
                            <a href="https://web.facebook.com/AlNoorIstiakMahmud" title="facebook" target="_blank" className=" footer-link">
                                <i className="fab fa-facebook s-icon"></i>
                            </a>
                            <a href="#" title="linkedin" className=" footer-link">
                                <i className="fab fa-linkedin s-icon"></i>
                            </a>
                            <a href="#" title="youtube" className=" footer-link">
                                <i className="fab fa-youtube-square s-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 py-4">
                    <h5 className="footer-title">LEGAL INFORMATION</h5>
                    <div>
                        <a href="#" className="d-block footer-link">Terms  Conditions</a>
                        <a href="#" className="d-block footer-link">Disclaimer Privac</a>
                        <a href="#" className="d-block footer-link">Cancellation</a>
                        <a href="#" className="d-block footer-link">policy</a>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Footer;