import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Contactus from '../components/Contactus';

export default function Contact() {
  return (
    <div>      
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let's have a chat" />
      <Contactus/>
      <Footer/>
    </div>
  )
}
