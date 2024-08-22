import React from 'react'

import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'


const Footer = () => {
  return (
    <>
    <div className="footer">
          <div className="footer_main">
            <div className="footer_left">
              <div className="div1">
                <a href="#logo" className="logo">

                  
                  {/* image */}

                  <span className="logo_text"> STUDY Sync </span>
                </a>
              </div>
              <div className="div2">
                <p>seamless learning for brighter future</p>
              </div>
              <div className="div3">
                <img src={instagram} alt="insta" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
                <img src={github} alt="github" />
              </div>
      
            </div>
            <div className="footer_right">
              <div className="product">
                <div className="heading"> product</div>
                <ul className="footer_linklist">
                  <li>
                    <a href="#overview"className="footer_link"> overview</a>
                  </li>
                  <li><a href="#overview"className="footer_link"> solution</a></li>
                  <li><a href="#overview"className="footer_link"> pricing</a></li>
                  <li><a href="#overview"className="footer_link"> customer</a></li>
                </ul>
              </div>
              <div className="company">
                <div className="heading">legal</div>
                <ul className="footer_linklist">
                  <li><a href="#overview"className="footer_link"> about</a></li>
                  <li><a href="#overview"className="footer_link"> investor reletion</a></li>
                  <li><a href="#overview"className="footer_link"> jobs</a></li>
                  <li><a href="#overview"className="footer_link"> press</a></li>
                  <li><a href="#overview"className="footer_link"> blogs</a></li>
                </ul>
              </div>
              <div className="support">
                <div className="heading"> support</div>
                <ul className="footer_linklist">
                  <li><a href="#overview"className="footer_link"> Contact</a></li>
                  <li><a href="#overview"className="footer_link"> documentation</a></li>
                  <li><a href="#overview"className="footer_link"> chat</a></li>
                  <li><a href="#overview"className="footer_link"> FaQs</a></li>
                </ul>
              </div>
              <div className="legal">
                <div className="heading"> legal</div>
                <ul className="footer_linklist">
                  <li><a href="#overview"className="footer_link"> terms of service</a></li>
                  <li><a href="#overview"className="footer_link"> privacy policy</a></li>
                  <li><a href="#overview"className="footer_link"> cookie setting</a></li>
                </ul>
              </div>
            </div>
      
          </div>
          
        </div>
        
        <div className="footer_des">
          © 2021 - Present StudySync. All rights reserved.
        </div>
    </>
  )
}

export default Footer