import React from 'react'
import "./Footer.css"
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <div>
                        <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                    </div>
                    <div>
                        <p>Mohan Morari</p>
                        <p>India</p>
                    </div>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />+91 9664996896</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />kkhandhara@gmail.com</h4>
                </div>
                
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>I am Software Engineer and My age is 20 and I am doing internship in company Sutish Tech Solution</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/>
                    <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}}/>
                    <FaLinkedinIn size={30} style={{color:"white",marginRight:"1rem"}}/>
                    <FaYoutube size={30} style={{color:"white",marginRight:"1rem"}}/>

                </div>

            </div>
        </div>
    </div>
  )
}
