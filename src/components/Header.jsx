import React from 'react'
import logo from '../assets/images/logo.png'
import searchnormal from '../assets/images/search-normal.png'
import heart from '../assets/images/heart.png'
import shoppingbag from '../assets/images/shopping-bag.png'
import profile from '../assets/images/profile.png'
import language from '../assets/images/Language.png'
import '../assets/css/header.css'

const Header = () => {
  return (
    <div>
        <div className="header">
            {/* <!-- First Row --> */}
            <div className="header-row-1">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="company-name">
                        <h2>LOGO</h2>
                    </div>
                    <div className="social-icons">
                        <nav>
                            <a href="#"><img src={searchnormal} alt="search-normal"/></a> 
                            <a href="#"><img src={heart} alt="search-normal"/></a> 
                             <a href="#"><img src={shoppingbag} alt="shopping-bag"/></a> 
                              <a href="#"><img src={profile} alt="profile"/></a> 
                               <a href="#"><img src={language} alt="Language"/></a> 
                        </nav>
                    </div>
                </div>
            </div>
            <div className="header-row-2">
                <div className="nav-section">
                      <nav>
                            <a href="#">SHOP</a> 
                            <a href="#">SKILLS</a> 
                            <a href="#">STORIES</a> 
                            <a href="#">ABOUT</a>
                            <a href="#">CONTACT</a>
                      </nav>
                    </div>
                </div>
            </div>
    
            
             {/* Second Row  */}
        <div className="center-container">
                    <p className="title">DISCOVER OUR PRODUCTS</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                    </p>
        </div>
        </div> 
  )
}

export default  Header 

