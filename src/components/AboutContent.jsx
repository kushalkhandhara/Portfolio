import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import react from "../assets/react.avif"
import react1 from "../assets/react1.jpg"

export const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p>
                I'm a React Developer Who make Responsive Websites and Right Now I am doing an internship in Sutish Tech Solution ,I am Living in India and I am also doing Part Time Freelancing
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi.
            </p>
            <Link to="/contact" className="btn">Contact</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={react} alt="Error" className="img" />
                </div>
                <div className='img-stack bottom'>
                    <img src={react1} alt="Error" className="img" />
                </div>
            </div>

        </div>
    </div>
  )
}
