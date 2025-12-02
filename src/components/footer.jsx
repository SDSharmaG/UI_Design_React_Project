import React from 'react'
import '../assets/css/footer.css'
import usa from '../assets/images/usa.png'
import insta from '../assets/images/insta.png'
import linkedin from '../assets/images/linkedin.png'
import gpay from '../assets/images/Gpay.png'
import mastercard from '../assets/images/mastercard.png'
import paytm from '../assets/images/paytm.png'
import amex from '../assets/images/Amex.png'
import applepay from '../assets/images/applepay.png'
import qpay from '../assets/images/Qpay.png'

const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
             {/* Top Section  */}
            <div className="footer-top">
                <div className="newsletter-section">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p className="newsletter-description">Sign up for updates from mettā muse.</p>
                    <form className="newsletter-form">
                        <input type="email" className="newsletter-input" placeholder="Enter your e-mail..."/>
                        <button type="submit" className="subscribe-btn">Subscribe</button>
                    </form>
                </div>

                <div className="contact-currency">
                    <div className="contact-section">
                        <h3>CONTACT US</h3>
                        <div className="contact-info">
                            <div>+44 221 133 5360</div>
                            <div>customercare@mettamuse.com</div>
                        </div>
                    </div>

                    <div className="currency-section">
                        <h3>CURRENCY</h3>
                        <div className="currency-selector">
                            <img src={usa} />
                            <span className="currency-text">• USD</span>
                        </div>
                        <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>

             {/* Main Links Section  */}
            <div className="footer-main">
                <div className="footer-column">
                    <h4>mettā muse</h4>
                    <ul className="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#stories">Stories</a></li>
                        <li><a href="#artisans">Artisans</a></li>
                        <li><a href="#boutiques">Boutiques</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#compliance">EU Compliances Docs</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>QUICK LINKS</h4>
                    <ul className="footer-links">
                        <li><a href="#orders">Orders & Shipping</a></li>
                        <li><a href="#join">Join/Login as a Seller</a></li>
                        <li><a href="#payment">Payment & Pricing</a></li>
                        <li><a href="#returns">Return & Refunds</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <div className="social-section">
                        <h4>FOLLOW US</h4>
                        <div className="social-icons">
                            <div className="social-icon">
                                <img src={insta} width="32" height="32" />
                            </div>
                            <div className="social-icon-linkedin">
                                <img src={linkedin} width="32" height="32" />
                            </div>
                        </div>
                    </div>

                    <div className="payment-section">
                        <h4>mettā muse <span> ACCEPTS</span></h4>
                        <div className="payment-methods">
                            <nav>
                            <a href="#" className="payment-link">
                                <img src={gpay} alt="GPay"/>
                            </a>

                           <a href="#" className="payment-link-2">
                                <img src={mastercard} alt="GPay"/>
                            </a>
                             <a href="#" className="payment-link-3">
                                <img src={paytm} alt="GPay"/>
                            </a>
                             <a href="#" className="payment-link-4">
                                <img src={amex} alt="GPay"/>
                            </a>
                             <a href="#" className="payment-link">
                                <img src={applepay} alt="GPay"/>
                            </a>
                             <a href="#" className="payment-link-1">
                                <img src={qpay} alt="GPay"/>
                            </a>
                         </nav>
                        </div>
                    </div>
                </div>
            </div>

             {/* Bottom Section  */}
            <div className="footer-bottom">
                <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default footer
