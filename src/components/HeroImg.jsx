import React from 'react'
import "./HeroImg.css"
import IntroImg from "../assets/use.avif"
import { Link } from 'react-router-dom'

export default function HeroImg() {
  return (
    <div className='hero'>

      <div className="mask">
        <img src={IntroImg} className="into-img" alt="Error" />
      </div>
      
      <div className="content">
        
        <p>Hi I'm Kushal Khandhara</p>
        <h1>React Developer.</h1>
        
        <div className='hero-link'>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      
      </div>
    
    </div>
  )
}
