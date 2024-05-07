import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import { AboutContent } from '../components/AboutContent';


export default function About() {
  return (
    <div>   
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="I'm a Frontend Intern at Sutish Tech Solution" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}
